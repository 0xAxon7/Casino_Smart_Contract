import { useFormik } from "formik";
import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";

// assets
import { ReactComponent as USER } from "../../../../assets/images/Frame (58).svg";
import SocialMediaButton from "../../../Common/Buttons/SocialMediaButton/SocialMediaButton";
import { StyleProfile } from "./styles";

import { ReactComponent as STEAM } from "../../../../assets/images/Frame (22).svg";
import { ReactComponent as TWITCH } from "../../../../assets/images/Frame (23).svg";
import { ReactComponent as METAMASK } from "../../../../assets/images/Frame (24).svg";
import { ReactComponent as CHECKMARK } from "../../../../assets/images/checkmark.svg";
import DefaultAvatar from "@/assets/images/default_avatar.png";
import SwitchToggle from "../../../Common/SwitchToggle/SwitchToggle";
import AccountPageTitle from "../Common/AccountPageTitle";
import UserContainer from "./UserContainer";
import { useAuth } from "@/context/AuthContext";
import { showToast } from "@/utils/toastUtils";
import { gameApi } from "@/lib/api";
import supabase from "@/lib/supabase";
import { pinata } from "@/lib/pinata";

const Profile = () => {
  const { user, refreshProfile, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(
    user?.profile?.avatar || DefaultAvatar
  );
  const inputRef = useRef(null);

  const [useRollbotAsAvatar, setUseRollbotAsAvatar] = useState(false);
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);

  // Validation schema
  const profileValidationSchema = Yup.object().shape({
    displayName: Yup.string()
      .min(3, "Display name must be at least 3 characters")
      .required("Display name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bio: Yup.string()
      .max(500, "Bio must be less than 500 characters"),
  });

  // Initialize form data from user profile
  useEffect(() => {
    if (user?.profile) {
      formik.setValues({
        displayName: user.profile.displayName || user.profile.username || user.profile.name || "",
        email: user.profile.email || "",
        bio: user.profile.bio || "",
      });
      if (user.profile.avatar) {
        setPreview(user.profile.avatar);
      }
    }
  }, [user?.profile]);

  // Cleanup preview URL
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  // Formik hook for handling form state and validation
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      bio: "",
    },
    validationSchema: profileValidationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      await handleSaveChanges(values);
    },
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.startsWith("image/")) {
        showToast("Please select an image file", "error");
        return;
      }

      // Validate file size (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        showToast("File size must be less than 5MB", "error");
        return;
      }

      // Clean up previous preview URL if it exists
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const uploadAvatar = async () => {
    try {
      if (!file) {
        showToast("No file selected", "error");
        return;
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      try {

        const { cid } = await pinata.upload.public.file(file)
        const url = await pinata.gateways.public.convert(cid);

        if (!url) {
          showToast("Failed to get IPFS URL", "error")
          return;
        }
        updateUser({ avatar: url });
        setPreview(url);
        setFile(null);
        showToast("Avatar updated successfully!", "success");

      } catch (error) {
        console.error('Error uploading avatar:', error);
        showToast("Failed to upload avatar", "error");
        return;
      }
    } catch (error) {
      console.error("Upload error:", error);
      showToast(error.message || "Failed to upload avatar", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveChanges = async (values) => {
    // Check if data has actually changed
    const hasChanges =
      values.displayName.trim() !==
      (user?.profile?.displayName ||
        user?.profile?.username ||
        user?.profile?.name ||
        "") ||
      values.email.trim() !== (user?.profile?.email || "") ||
      values.bio.trim() !== (user?.profile?.bio || "");

    if (!hasChanges) {
      showToast("No changes were made to save.", "warning");
      return;
    }

    try {
      setLoading(true);

      // Check if user is authenticated via Supabase
      const { data: supabaseUser, error: supabaseError } = await supabase.auth.getUser();

      if (!supabaseError && supabaseUser?.user) {
        // Update Supabase user metadata
        const { error: updateError } = await supabase.auth.updateUser({
          email: values.email,
          data: {
            full_name: values.displayName,
            display_name: values.displayName,
            username: values.displayName,
            bio: values.bio,
          },
        });

        if (updateError) {
          throw new Error(`Failed to update Supabase user: ${updateError.message}`);
        }
      }

      // Update backend profile
      const updateResponse = await gameApi.user.updateProfile({
        username: values.displayName,
        displayName: values.displayName,
        email: values.email,
        bio: values.bio,
      });

      if (!updateResponse.success) {
        throw new Error(updateResponse.error || "Failed to update profile");
      }

      // Update local user context
      if (updateResponse.data) {
        updateUser(updateResponse.data);
      }

      // Refresh profile to get latest data
      await refreshProfile();

      showToast("Profile updated successfully!", "success");
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to save changes:", error);
      showToast(error.message || "Failed to update profile. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data to original values
    if (user?.profile) {
      formik.setValues({
        displayName:
          user.profile.displayName || user.profile.username || user.profile.name || "",
        email: user.profile.email || "",
        bio: user.profile.bio || "",
      });
    }
    // Reset file and preview
    if (file) {
      setFile(null);
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
      setPreview(user?.profile?.avatar || "/assets/images/avatar/default.png");
    }
  };

  return (
    <StyleProfile>
      <AccountPageTitle icon={USER} title="Profile" />

      <UserContainer />

      {/* Avatar Section */}
      <div className="section-container">
        <h3 className="section-title">Profile Picture</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "24px" }}>
          <div style={{ position: "relative" }} className="bg-dark-300 rounded-full">
            <img
              src={preview || DefaultAvatar}
              alt="Avatar"
              style={{
                width: "96px",
                height: "96px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(203, 215, 255, 0.1)",
              }}
            />
            {loading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    borderTop: "2px solid #fff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
              </div>
            )}
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "2px solid #1a1d29",
                backgroundColor: "rgba(203, 215, 255, 0.1)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ color: "#fff" }}
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#b1b6c6", fontSize: "14px", marginBottom: "8px" }}>
              Upload a new profile picture. JPG, PNG or GIF. Max size 5MB.
            </p>
            {file && (
              <button
                type="button"
                onClick={uploadAvatar}
                disabled={loading}
                className="change-button"
                style={{ marginTop: "8px" }}
              >
                {loading ? "Uploading..." : "Save Avatar"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="section-container">
        <h3 className="section-title">Profile Information</h3>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ marginBottom: "24px" }}>
            <label htmlFor="displayName" className="input-label">
              Display Name <span className="required">*</span>
            </label>
            <div className="input-container">
              <input
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Enter your display name"
                value={formik.values.displayName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!isEditing}
              />
            </div>
            {formik.touched.displayName && formik.errors.displayName && (
              <div className="required">{formik.errors.displayName}</div>
            )}
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label htmlFor="email" className="input-label">
              Email <span className="required">*</span>
            </label>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={!isEditing}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="required">{formik.errors.email}</div>
            )}
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label htmlFor="bio" className="input-label">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself..."
              value={formik.values.bio}
              onChange={formik.handleChange}
              disabled={!isEditing}
              style={{
                width: "100%",
                minHeight: "100px",
                padding: "12px 15px",
                borderRadius: "6px",
                border: "1px solid transparent",
                background: "rgba(15, 17, 26, 0.55)",
                color: "#fff",
                fontFamily: "inherit",
                fontSize: "15px",
                fontWeight: 700,
                resize: "vertical",
                outline: "none",
                transition: "all 0.1s ease",
              }}
              onFocus={(e) => {
                if (isEditing) {
                  e.target.style.border = "1px solid rgb(255, 255, 193)";
                  e.target.style.boxShadow =
                    "rgb(255, 252, 57) 0px 0px 1px inset, rgb(255, 93, 0) 0px 0px 4px";
                }
              }}
              onBlur={(e) => {
                e.target.style.border = "1px solid transparent";
                e.target.style.boxShadow = "none";
                formik.handleBlur(e);
              }}
            />
            <div
              style={{
                fontSize: "12px",
                color: "#b1b6c6",
                marginTop: "4px",
                textAlign: "right",
              }}
            >
              {formik.values.bio.length}/500
            </div>
            {formik.touched.bio && formik.errors.bio && (
              <div className="required">{formik.errors.bio}</div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end", marginTop: "24px" }}>
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="submit-button"
                disabled={loading}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading || !formik.isValid}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="change-button"
                  disabled={loading}
                  style={{
                    background: "rgba(15, 17, 26, 0.55)",
                    color: "#b1b6c6",
                    border: "1px solid rgba(203, 215, 255, 0.1)",
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>

        <div className="checkbox-container">
          <SwitchToggle
            checked={useRollbotAsAvatar}
            toggle={setUseRollbotAsAvatar}
            label={"Use profile linked rollbot as chat/lottery avatar"}
          />
        </div>
        <div className="checkbox-container">
          <SwitchToggle
            checked={isPrivateProfile}
            toggle={setIsPrivateProfile}
            label={"Make profile private"}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            size="15"
            color="hsl(225.70000000000005, 15.6%, 58.8%)"
            className="svg"
            style={{ marginLeft: "8px" }}
          >
            <path
              d="M2.313 2.313A7.896 7.896 0 1 0 13.48 13.479 7.896 7.896 0 0 0 2.312 2.313zm5.9 1c.666 0 1.2.55 1.2 1.216a1.22 1.22 0 0 1-1.2 1.217c-.667 0-1.217-.55-1.217-1.234 0-.666.55-1.2 1.216-1.2zm1.716 8.15a.79.79 0 0 1-.167.283c-.433.45-.966.716-1.6.716-.3 0-.583 0-.883-.05-.483-.066-1.1-.666-1.017-1.3l.2-1.3c.134-.75.267-1.516.4-2.266 0-.05.017-.1.017-.15 0-.317-.1-.433-.416-.467-.134-.017-.267-.033-.4-.066-.15-.05-.234-.184-.217-.3.016-.134.1-.217.267-.25.083-.017.183-.017.283-.017h2.3c.283 0 .45.133.45.417 0 .233-.034.466-.084.7-.15.866-.316 1.716-.466 2.583-.05.283-.117.566-.15.85-.017.133 0 .283.033.416.05.184.184.284.367.267.15-.017.3-.066.45-.133.117-.05.216-.134.333-.167.2-.066.35.05.3.234z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div className="section-container">
        <h3 className="section-title">Link Account</h3>
        <div className="social-media">
          <STEAM className="svg" style={{ marginRight: "12px" }} />
          <div style={{ marginRight: "auto" }}>Steam</div>
          <CHECKMARK
            className="svg"
            style={{ color: "rgb(114, 242, 56)", marginRight: "8px" }}
          />
          <div>Connected</div>
        </div>
        <div className="social-media">
          <TWITCH className="svg" style={{ marginRight: "13px" }} />
          <div style={{ marginRight: "auto" }}>Twitch</div>
          <CHECKMARK
            className="svg"
            style={{ color: "rgb(114, 242, 56)", marginRight: "8px" }}
          />
          <div>Connected</div>
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
          <SocialMediaButton socialIcon={STEAM} socialName={"Steam"} />
          <SocialMediaButton socialIcon={TWITCH} socialName={"Twitch"} />
          <SocialMediaButton socialIcon={METAMASK} socialName={"Metamask"} />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </StyleProfile>
  );
};

export default Profile;
