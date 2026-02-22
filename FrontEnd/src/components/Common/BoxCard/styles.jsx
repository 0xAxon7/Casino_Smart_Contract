import styled from "styled-components";

const Boxes = styled.div`
  //   width: 150px;
  //   height: 210px;
  flex-shrink: 0;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`;

export const StyledBoxCard = styled(Boxes)`
  padding-top: 20px;

  .box-wrapper {
    border-radius: 8px;
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(203, 215, 255, 0.03);
    gap: 12px;

    .content {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-direction: column;
      padding: 22px 33px;

      .box-image {
        width: 28px;
        height: 28px;
      }

      .box-title {
        color: #fff;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14.4px;
      }
    }

    .box-amount {
      color: #72f238;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 14.4px;
      margin-top: -20px;
    }
  }
`;
