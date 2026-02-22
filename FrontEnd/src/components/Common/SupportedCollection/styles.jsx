import styled from "styled-components";

export const StyledSupportedCollection = styled.div`
  border-radius: 8px;
  background: rgba(203, 215, 255, 0.03);
  padding: 16px;
  width: ${(props) => props.cardWidth};

  .image-collection {
    padding-bottom: 32.55%;
    border-radius: 8px;
    background-image: url(https://i.seadn.io/gae/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA?w=500&auto=format);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content-section {
    display: flex;
    gap: 16px;
    -webkit-box-align: center;
    align-items: center;
    padding-top: 20px;
  }

  .avatar {
    height: 64px;
    width: 64px;
    min-height: 64px;
    min-width: 64px;
    border-radius: 8px;
    background-image: url(https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format);
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;

    .title-container {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      column-gap: 8px;

      .title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: rgb(255, 255, 255);
        text-transform: uppercase;
        font-weight: 800;
        font-style: normal;
        font-size: 16px;
      }
    }

    .description {
      line-height: 1.6;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font-weight: 500;
      font-style: normal;
      font-size: 14px;
      color: #b1b6c6;
    }
  }
`;

export const StyledSupportedCollectionSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const StyledHeaderCollection = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0px 0px 18px;
  text-transform: uppercase;
  gap: 12px;
  font-family: "Geogrotesque Wide", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 14px;
  color: #b1b6c6;

  .input-style {
    width: 220px;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
  }
`;

export const StyleTableCard = styled.tr`
  height: 48px;
  border-radius: 4px;
  color: rgb(255, 255, 255);
  background: rgba(203, 215, 255, 0.03);

  .avatar-container {
    padding-left: 24px;
    padding-right: 16px;
    border-radius: 4px 0px 0px 4px;

    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    > div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      min-height: 28px;
      font-variant-numeric: tabular-nums;
    }
  }

  .avatar-img {
    height: 32px;
    width: 32px;
    min-height: 32px;
    min-width: 32px;
    margin-right: 12px;
    border-radius: 999px;
    background-image: url(${(props) => props.image});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .amount-range {
    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    font-style: normal;
    font-size: 14px;

    padding-right: 16px;

    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      min-height: 28px;
      font-variant-numeric: tabular-nums;
      -webkit-box-pack: end;
      justify-content: flex-end;
    }
  }

  .fee-style {
    padding-right: 24px;
    border-radius: 0px 4px 4px 0px;
  }
`;

export const StyleSupportedCollectionTable = styled.div`
  position: relative;
  overflow: auto hidden;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0px 4px;
  }

  thead {
    height: 28px;
    background: rgba(203, 215, 255, 0.03);
  }

  .th-collection {
    text-transform: uppercase;
    color: rgb(103, 109, 124);
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;

    padding-left: 24px;
    padding-right: 16px;
    border-radius: 4px 0px 0px 4px;

    > div {
      display: flex;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .th-borrow {
    text-transform: uppercase;
    color: rgb(103, 109, 124);
    white-space: nowrap;
    overflow: hidden;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    padding-right: 16px;

    &:last-of-type {
      padding-right: 24px;
      border-radius: 0px 4px 4px 0px;
    }

    > div {
      display: flex;
      -webkit-box-align: center;
      white-space: nowrap;
      overflow: hidden;
      justify-content: flex-end;
    }
  }
`;
