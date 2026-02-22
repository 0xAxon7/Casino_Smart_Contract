import React from "react";
import { Link } from "react-router-dom";
import { StyleTableCard } from "./styles";

const TableCard = ({ card }) => {
  return (
    <StyleTableCard image={card.img}>
      <td class="avatar-container">
        <div>
          <Link to={card.url}>
            <div class="avatar-img"></div>
          </Link>
          <Link to={card.url}>{card.name}</Link>
        </div>
      </td>
      <td class="amount-range" style={{ color: "rgb(177, 182, 198)" }}>
        <div>{card.amountRange}</div>
      </td>
      <td
        class="amount-range fee-style"
        style={{ color: "rgb(177, 182, 198)" }}
      >
        <div>{card.fee}</div>
      </td>
    </StyleTableCard>
  );
};

export default TableCard;
