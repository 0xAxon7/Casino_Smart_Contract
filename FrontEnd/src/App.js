import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import HomeAppBar from "./components/home/header/AppBar";

//reward section models

// deposit section models
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import NFTDetails from "./components/Common/NFTDetails/NFTDetails";
import ScrollToTop from "./components/Common/ScrollToTop";
import SupportButton from "./components/Common/SupportButton/SupportButton";
import AKOriginals from "./components/Pages/Casino/AKOriginals";
import Blackjack from "./components/Pages/Casino/Blackjack";
import BonusBattles from "./components/Pages/Casino/BonusBattles";
import Casino from "./components/Pages/Casino/Casino";
import Challenges from "./components/Pages/Casino/Challenges";
import Clans from "./components/Pages/Casino/Clans";
import CryptoPortfolio from "./components/Pages/Casino/CryptoPortfolio";
import GameShows from "./components/Pages/Casino/GameShows";
import LiveCasino from "./components/Pages/Casino/LiveCasino";
import Rollercoaster from "./components/Pages/Casino/Rollercoaster";
import Roulette from "./components/Pages/Casino/Roulette";
import Slots from "./components/Pages/Casino/Slots";
import WithChallenges from "./components/Pages/Casino/WithChallenges";
import WithSidebets from "./components/Pages/Casino/WithSidebets";
import AKBots from "./components/Pages/NFT/AkBots";
import ManageRollbots from "./components/Pages/NFT/ManageRollbots";
import ManageSportsbots from "./components/Pages/NFT/ManageSportsbots";
import Marketplace from "./components/Pages/NFT/Marketplace";
import MyNFTs from "./components/Pages/NFT/MyNfts";
import NFTBox from "./components/Pages/NFT/NFTBox";
import NFTExternal from "./components/Pages/NFT/NFTExternal";
import NFTLoans from "./components/Pages/NFT/NFTLoans";
import NFTLootboxes from "./components/Pages/NFT/NFTLootboxes";
import NFTMainPage from "./components/Pages/NFT/NFTMainPage";
import NFTMyLoans from "./components/Pages/NFT/NFTMyLoans";
import NFTMyLootboxes from "./components/Pages/NFT/NFTMyLootboxes";
import NFTMyPurchases from "./components/Pages/NFT/NFTMyPurchases";
import NFTMySales from "./components/Pages/NFT/NFTMySales";
import AKLottery from "./components/Pages/Other/AKLottery";
import Jackpot from "./components/Pages/Other/Jackpot";
import Race25K from "./components/Pages/Other/Race25k";
import Streams from "./components/Pages/Other/Streams";
import MyBets from "./components/Pages/Sports/MyBets/MyBets";
import Sports from "./components/Pages/Sports/Sports";
import ProtectedRoute from "./components/Router/ProtectedRoute";
import AccountPageLayout from "./components/home/Account/AccountPageLayout";
import BalancesPage from "./components/home/Account/Balances/Balances";
import Deposits from "./components/home/Account/Deposits/Deposits";
import Profile from "./components/home/Account/Profile/Profile";
import Referrals from "./components/home/Account/Referrals/Referrals";
import Settings from "./components/home/Account/Settings/Settings";
import Withdrawals from "./components/home/Account/Withdrawals/Withdrawals";
import PageLayout from "./components/home/MainHome/PageLayout";
import {
  ContentLayout,
  SportsContentLayout,
} from "./components/home/MainHome/styles";
import NavBar from "./components/home/header/NavBar/NavBar";
import SideBar from "./components/home/header/SideBar";

const routesSportsLayout = [
  { path: "/sports", component: Sports },
  { path: "/nft/marketplace", component: Marketplace },
  { path: "/nft/marketplace/my-sales", component: NFTMySales },
  { path: "/nft/marketplace/my-purchases", component: NFTMyPurchases },
  { path: "/nft/marketplace/box", component: NFTBox },
  { path: "/nft/portfolio", component: MyNFTs },
  { path: "/nft/my-loans", component: NFTMyLoans },
  { path: "/nft/external", component: NFTExternal },
  { path: "/nft/lootboxes/play", component: NFTLootboxes },
  { path: "/nft/lootboxes/manage", component: NFTMyLootboxes },
  { path: "/nft/details", component: NFTDetails },
  { path: "/nft/rollbot/:tab", component: ManageRollbots },
  { path: "/nft/sportsbots/:tab", component: ManageSportsbots },
  // Add more routes as needed
];

const routesBets = [{ path: "/my-bets", component: MyBets }];

const routesContentLayout = [
  { path: "/", component: HomeAppBar },
  { path: "/casino", component: Casino },
  { path: "/ak-originals", component: AKOriginals },
  { path: "/blackjack", component: Blackjack },
  { path: "/bonus-battles", component: BonusBattles },
  { path: "/challenges", component: Challenges },
  { path: "/game-shows", component: GameShows },
  { path: "/live-casino", component: LiveCasino },
  { path: "/rollercoaster", component: Rollercoaster },
  { path: "/roulette", component: Roulette },
  { path: "/slots", component: Slots },
  { path: "/with-challenges", component: WithChallenges },
  { path: "/with-sidebets", component: WithSidebets },
  { path: "/crypto-portfolio", component: CryptoPortfolio },
  { path: "/clans", component: Clans },
  { path: "/ak-lottery", component: AKLottery },
  { path: "/jackpot", component: Jackpot },
  { path: "/streams", component: Streams },
  { path: "/25k-race", component: Race25K },
  { path: "/nft", component: NFTMainPage },
  { path: "/nft/lobby/:tab", component: AKBots },
  { path: "/nft/loans", component: NFTLoans },
  { path: "/nft/details/:nftId", component: NFTDetails },
];

const routesAccountLayout = [
  { path: "/account/profile", component: Profile },
  { path: "/account/balances", component: BalancesPage },
  { path: "/account/referrals/:tab", component: Referrals },
  { path: "/account/deposits/:tab", component: Deposits },
  { path: "/account/withdrawals/:tab", component: Withdrawals },
  { path: "/account/settings", component: Settings },
];

function App() {
  const { isTabletScreen } = useContext(AppContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <SideBar />

      <PageLayout>
        <Routes>
          {routesSportsLayout.map((route) => (
            <Route
              path={route.path}
              element={
                <SportsContentLayout isTabletScreen={isTabletScreen}>
                  <route.component />
                </SportsContentLayout>
              }
            />
          ))}
        </Routes>

        <Routes>
          {routesContentLayout.map((route) => (
            <Route
              path={route.path}
              element={
                <ContentLayout isTabletScreen={isTabletScreen}>
                  <route.component />
                </ContentLayout>
              }
            />
          ))}
        </Routes>

        <Routes>
          {routesBets.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>

        <Routes>
          {routesAccountLayout.map((route) => (
            <Route
              path={route.path}
              element={
                <ContentLayout isTabletScreen={isTabletScreen}>
                  <ProtectedRoute>
                    <AccountPageLayout>
                      <route.component />
                    </AccountPageLayout>
                  </ProtectedRoute>
                </ContentLayout>
              }
            />
          ))}
        </Routes>
        {!isTabletScreen && <SupportButton />}
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
