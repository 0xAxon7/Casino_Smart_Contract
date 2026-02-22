import React from "react";
import TableCard from "./TableCard";
import { StyleSupportedCollectionTable } from "./styles";

const cardsData = [
  {
    img: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format",
    url: "/nft/eth:0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
    name: "Crypto Punks",
    amountRange: "$46,920 - $50,000",
    fee: "0%",
  },
  {
    img: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format",
    url: "/nft/eth:0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    name: "Bored Ape Yacht Club",
    amountRange: "$20,802 - $45,736",
    fee: "0%",
  },
  {
    img: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format",
    url: "/nft/eth:0x60e4d786628fea6478f785a6d7e704777c86a7c6",
    name: "Mutant Ape Yacht Club",
    amountRange: "$4,398 - $9,000",
    fee: "0%",
  },
  {
    img: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format",
    url: "/nft/eth:0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
    name: "Pudgy Penguins",
    amountRange: "$3,920 - $6,788",
    fee: "0%",
  },
  {
    img: "https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?w=500&auto=format",
    url: "/nft/eth:0xed5af388653567af2f388e6224dc7c4b3241c544",
    name: "Azuki",
    amountRange: "$3,605 - $3,605",
    fee: "0%",
  },
];

const SupportedCollectionTable = () => {
  return (
    <StyleSupportedCollectionTable>
      <table class="css-wcq858">
        <thead class="css-oe1okv">
          <tr>
            <th class="th-collection">
              <div>Collection</div>
            </th>
            <th class="th-borrow">
              <div>Borrow amount range</div>
            </th>
            <th class="th-borrow">
              <div>Fee %</div>
            </th>
          </tr>
        </thead>
        <tbody class="css-13107in">
          {cardsData.map((card, index) => (
            <TableCard key={index} card={card} />
          ))}
        </tbody>
      </table>
    </StyleSupportedCollectionTable>
  );
};

export default SupportedCollectionTable;
