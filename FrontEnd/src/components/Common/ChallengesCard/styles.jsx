import styled from "styled-components";

export const StyleChallengesCard = styled.div`
  font-weight: 400;
  text-align: left;
  color: #b1b6c6;
  font-size: 1rem;
  line-height: 1.2;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(203, 215, 255, 0.075);
  padding: 12px;
  animation-delay: 0s;

  .card-image {
    position: relative;

    img {
      display: block;
      width: 100%;
      border-radius: 6px;
      cursor: pointer;
      user-select: none;
      opacity: 1;
    }
  }

  .card-text {
    flex: 1 1 0%;
    min-height: 0px;
    padding-top: 12px;
    opacity: 1;

    .description {
      margin: 0px 0px 12px;
      line-height: 1.6;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
    }

    .prize-pot {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      min-height: 20px;
      font-weight: 500;
      font-style: normal;
      font-size: 12px;

      .key {
        margin-right: auto;
        min-width: 65px;
        white-space: nowrap;
        color: rgb(177, 182, 198);
      }

      .value {
        margin-left: 4px;
        color: rgb(255, 255, 255);
        font-weight: 500;
        font-style: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: clip;
      }
    }

    .creator {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      min-height: 20px;
      font-weight: 500;
      font-style: normal;
      font-size: 12px;
      cursor: pointer;
      user-select: none;

      .key {
        margin-right: auto;
        min-width: 65px;
        white-space: nowrap;
        color: rgb(177, 182, 198);
      }

      .value {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        column-gap: 5.15021px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        .rank-icon {
          display: inline-flex;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          min-width: 18px;
          width: 18px;
          min-height: 18px;
          height: 18px;

          img {
            width: 72%;
          }
        }

        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: white;
          font-weight: 500;
        }
      }
    }
  }

  .featured {
    position: absolute;
    top: 12px;
    right: 10px;
    opacity: 1;

    img {
      width: 70px;
    }

    span {
      position: absolute;
      top: 6px;
      right: 7px;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
      font-weight: 800;
      font-style: normal;
      font-size: 10px;
    }
  }
`;

export const StyleChallengesCardSection = styled.div`
  width: 100%;
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
  gap: 18px 12px;
`;
