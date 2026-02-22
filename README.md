# Casino Smart Contract – Jackpot, Coinflip, Duel, Lottery, Plinko, Crash, Dice, Roulette, Wheel & More on Solana

**Casino smart contract** for a full **casino** platform on Solana: **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, **slots**, **blackjack**, live casino, sports betting, and more. Build a transparent, decentralized **casino** with provably fair games and instant payouts via Solana **smart contracts**.

---

## What Is This Casino Smart Contract?

This repository is a full-stack **casino** project with an **Anchor (Solana) smart contract** and a **casino** frontend (Gamblify).

**Current on-chain version:** The **casino smart contract** implements a **shared jackpot**—multiple players deposit SOL into a round, and one winner takes the pot. The smart contract handles:

- **Game creation** – Admin-created rounds with round time, min deposit, and max players
- **Joining rounds** – Users deposit SOL to enter a jackpot round
- **Winner selection** – Admin sets the winner after the round ends
- **Claim rewards** – Winner claims the pot from the **smart contract** vault

**Other games:** The platform includes or can be extended with **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, **slots**, **blackjack**, live casino, game shows, sports betting, NFT marketplace, and more. Additional **casino games** can be developed and wired to new or existing **casino smart contracts** on Solana.

---

## Why a Casino Smart Contract?

- **Transparency** – Round rules and payouts are visible on-chain.
- **Trust** – Funds are held by the **smart contract**; no single party can move them without the program logic.
- **Decentralization** – **Casino** rounds run on Solana; no central game server required for core logic.
- **Composability** – The **casino smart contract** can be integrated with other Solana dApps and frontends.

---

## Casino Games – Jackpot (On-Chain) & More

The **casino** platform supports a wide range of **casino games**. The **current** live implementation is the **shared jackpot** (on-chain **casino smart contract**). Other games are available in the frontend or can be developed and connected to **casino smart contracts**:

| Game | Description | On-chain today |
|------|-------------|----------------|
| **Jackpot** | Shared pot; players join a round, one winner takes all | ✅ **Yes** (this repo) |
| **Coinflip** | 50/50 flip vs house or player | Extensible |
| **Duel** | Head-to-head vs another player | Extensible |
| **Lottery** | Draw-based lottery games | Extensible |
| **Plinko** | Ball-drop multiplier game | Extensible |
| **Prediction** | Price or outcome prediction markets | Extensible |
| **Crash** | Multiplier crash game | Extensible |
| **Dice** | Dice roll over/under | Extensible |
| **Roulette** | European / American roulette | Extensible |
| **Wheel** | Wheel of fortune / spin games | Extensible |
| **Mined** | Mine / grid reveal game | Extensible |
| **Loot box** | Randomized reward boxes | Extensible |
| **Slots** | Slot machine games | Extensible |
| **Blackjack** | Classic blackjack | Extensible |
| **Live Casino** | Live dealers, game shows | Extensible |
| **Sports Betting** | Sports, live betting | Extensible |
| **NFT Marketplace** | NFT trading, portfolio | Extensible |

Use this **casino smart contract** (jackpot) as the foundation, and extend with **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, and other **casino games** as you build.

---

## Repository Structure

| Path | Description |
|------|-------------|
| **[Smart-Contract](./Smart-Contract/)** | Solana **casino smart contract** (Anchor) – jackpot rounds, config, join, set winner, claim |
| **[FrontEnd](./FrontEnd/)** | **Casino** frontend (React) – **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, slots, blackjack, live casino, sports, NFT |

The **casino smart contract** (shared **jackpot**) lives in `Smart-Contract/programs/jackpot_smart_contract/`. The **casino** web app delivers **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, and other **casino games**; more can be developed and hooked to new smart contracts.

---

## Casino Smart Contract – Quick Start

1. **Prerequisites:** [Rust](https://www.rust-lang.org/tools/install), [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools), [Anchor](https://anchor-lang.com/docs/installation) (e.g. 0.30.1).
2. **Build:** From `Smart-Contract/`, run:
   ```bash
   RUSTUP_TOOLCHAIN="nightly-2024-11-19" anchor build
   anchor keys sync
   ```
3. **Deploy:** Set cluster to devnet in `Anchor.toml`, then:
   ```bash
   anchor deploy
   ```
4. **Configure & create a round:**
   ```bash
   yarn script config
   yarn script create -t 60 -d 100000000 -j 100
   ```
5. **Users:** Join rounds (`yarn script join`), then after round end: set winner (`yarn script winner`), then winner claims (`yarn script claim`).

Full CLI and setup details: **[Smart-Contract README](./Smart-Contract/README.md)**.

---

## Casino Frontend – Quick Start

From `FrontEnd/`:

```bash
npm install   # or yarn
npm start     # or yarn start
```

Open [http://localhost:3000](http://localhost:3000). The **casino** UI includes **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, slots, blackjack, live casino, sports betting, NFT marketplace, and more. See **[FrontEnd README](./FrontEnd/README.md)** for scripts and structure.

---

## Tech Stack

- **Casino smart contract:** Rust, [Anchor](https://anchor-lang.com/), Solana
- **Casino frontend:** React, Tailwind CSS, Material-UI, React Router

---

## Keywords Summary (for SEO)

- **Casino** – Full **casino** platform: **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, slots, blackjack, live casino, sports, NFT.
- **Casino smart contract** – Solana **smart contract** for **casino** (current: shared **jackpot**; extensible to **coinflip**, **duel**, **lottery**, **plinko**, **crash**, **dice**, **roulette**, **wheel**, **mined**, etc.).
- **Casino games** – **Coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mined**, **loot box**, slots, blackjack, jackpot, live casino, sports betting, NFT.
- Related: blockchain casino, Solana casino, decentralized casino, casino coinflip, casino plinko, crash game casino, dice casino, roulette casino, casino loot box, online casino smart contract, provably fair casino.

---

## Disclaimer

This **casino** and **casino smart contract** are for educational and development use. Ensure compliance with local gambling and financial regulations before operating any real-money **casino** or gaming product.

---

## Links

- [Smart-Contract setup & CLI](./Smart-Contract/README.md)
- [FrontEnd setup & features](./FrontEnd/README.md)
- [Solana](https://solana.com/) · [Anchor](https://anchor-lang.com/)

**Contact:** [Discord](https://discord.com/users/1274339638668038187) — reach me here for questions or collaboration.
