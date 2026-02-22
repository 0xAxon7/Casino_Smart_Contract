import styled from "styled-components";

export const StyledPageContainer = styled.div`
  .live-wins {
    border-radius: 8px;
    background: rgba(203, 215, 255, 0.03);
    position: relative;
    padding: 0px 16px 14px;
  }

  .divider {
    height: 24px;
  }

  .navigation-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    column-gap: 6px;
    max-width: 100%;
    margin-bottom: 24px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .image-cards {
      display: grid;
      width: 100%;
      align-items: stretch;
      grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
      gap: 12px 6px;
    }

    @media (min-width: 600px) {
      .image-cards {
        gap: 18px 12px;
        grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
      }
    }
  }
`;
