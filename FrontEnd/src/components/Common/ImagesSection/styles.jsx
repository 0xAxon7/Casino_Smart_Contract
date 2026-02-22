import styled from "styled-components";

export const StyledImageSection = styled.div`
  width: 100%;

  .button-load-more {
    padding: 0px 20px;
    letter-spacing: 0.5px;
  }

  .image-cards {
    display: grid;
    width: 100%;
    align-items: stretch;
    grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
    gap: 12px 6px;
  }

  .btn-wrapper {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 48px 0px;
  }

  @media (min-width: 600px) {
    .image-cards {
      gap: 18px 12px;
      grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
    }
  }
`;
