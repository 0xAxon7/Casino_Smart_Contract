import React from "react";

const Description = ({ description, className }) => {
  const {
    descriptionLink,
    descriptionPart1,
    descriptionPart2,
    descriptionPart3,
    descriptionPart4,
  } = description;

  return (
    <div className={`description-text ${className}`}>
      <span>
        <span>{descriptionPart1}</span>{" "}
        <a target="blank" href={descriptionLink.link}>
          {descriptionLink.name}
        </a>
        <span>{descriptionPart2}</span>
        <br />
        <br />
        <span>{descriptionPart3}</span>
        <br />
        <br />
        <span>{descriptionPart4}</span>
      </span>
    </div>
  );
};

export default Description;
