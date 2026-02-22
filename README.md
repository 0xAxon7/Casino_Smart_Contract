# Casino Smart Contract · Web3 Casino on Solana

**Casino** · **Web3 casino** · **Casino smart contract**. On-chain **casino smart contract** for a **web3 casino** platform: provably fair **casino** games (jackpot, coinflip, duel, lottery, plinko, prediction, crash, dice, roulette, wheel, mines, loot box). Built for Solana, EVM, Monad, Sui, Abstract, Ronin. ORAO VRF for provably fair randomness.

---

## About this repository

**Casino** · **Web3 casino** · **Casino smart contract**. On-chain **casino smart contract** powering a **web3 casino**: modular **casino** games (Coinflip, Duel, Lottery, Plinko, Prediction, Crash, Dice, Roulette, Wheel, Mines, Loot Box). Built for Solana, EVM, Monad, Sui, Abstract, Ronin. ORAO VRF provably fair.

> **Git repo About (copy for description):** Casino · Web3 casino · Casino smart contract. On-chain casino smart contract for web3 casino: Coinflip, Duel, Lottery, Plinko, Prediction, Crash, Dice, Roulette, Wheel, Mines, Loot Box. Solana, EVM, Monad, Sui, Abstract, Ronin. ORAO VRF provably fair.

---

## What Is This Casino Smart Contract?

This repository is a full-stack **web3 casino** project: a **casino smart contract** (Anchor/Solana) and a **casino** frontend (Gamblify).

**Current on-chain version:** The **casino smart contract** implements a **shared jackpot**—multiple players deposit SOL into a round, and one winner takes the pot. The smart contract handles:

- **Game creation** – Admin-created rounds with round time, min deposit, and max players
- **Joining rounds** – Users deposit SOL to enter a jackpot round
- **Winner selection** – Admin sets the winner after the round ends
- **Claim rewards** – Winner claims the pot from the **smart contract** vault

**Other games:** The **web3 casino** includes or can be extended with **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mines**, **loot box**, **slots**, **blackjack**, live casino, game shows, sports betting, NFT marketplace, and more. Additional **casino** games can be developed and wired to new **casino smart contracts**.

---

## Why a Casino Smart Contract?

- **Transparency** – Round rules and payouts are visible on-chain.
- **Trust** – Funds are held by the **smart contract**; no single party can move them without the program logic.
- **Decentralization** – **Web3 casino** rounds run on-chain; no central game server required.
- **Composability** – The **casino smart contract** can power any **web3 casino** or Solana dApp.

---

## Casino Games – Jackpot (On-Chain) & More

The **web3 casino** platform supports a wide range of **casino** games. The **current** on-chain implementation is the **shared jackpot** (**casino smart contract**). Other games are available in the frontend or can be developed and connected to **casino smart contracts**:

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
| **Mines** | Mine / grid reveal game | Extensible |
| **Loot Box** | Randomized reward box openings | Extensible |
| **Slots** | Slot machine games | Extensible |
| **Blackjack** | Classic blackjack | Extensible |
| **Live Casino** | Live dealers, game shows | Extensible |
| **Sports Betting** | Sports, live betting | Extensible |
| **NFT Marketplace** | NFT trading, portfolio | Extensible |

Use this **casino smart contract** (jackpot) as the foundation for your **web3 casino**, and extend with **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mines**, **loot box**, and other **casino** games.

---

## Repository Structure

| Path | Description |
|------|-------------|
| **[Smart-Contract](./Smart-Contract/)** | Solana **casino smart contract** (Anchor) – jackpot rounds, config, join, set winner, claim |
| **[FrontEnd](./FrontEnd/)** | **Casino** frontend (React) – **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **crash**, **dice**, **roulette**, **wheel**, **mines**, **loot box**, slots, blackjack, live casino, sports, NFT |

The **casino smart contract** (shared **jackpot**) lives in `Smart-Contract/programs/jackpot_smart_contract/`. The **web3 casino** frontend delivers **coinflip**, **duel**, **lottery**, **plinko**, **prediction**, **crash**, **dice**, **roulette**, **wheel**, **mines**, **loot box**, and other **casino** games; more can be developed and hooked to new **casino smart contracts**.

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

Open [http://localhost:3000](http://localhost:3000). The **web3 casino** UI includes **jackpot**, **coinflip**, **duel**, **lottery**, **plinko**, **crash**, **dice**, **roulette**, **wheel**, **mines**, **loot box**, slots, blackjack, live casino, sports betting, NFT marketplace, and more. See **[FrontEnd README](./FrontEnd/README.md)** for scripts and structure.

---

## Tech Stack

- **Casino smart contract:** Rust, [Anchor](https://anchor-lang.com/), Solana
- **Casino frontend:** React, Tailwind CSS, Material-UI, React Router

---

## Keywords Summary (for SEO)

- **Casino** – **Casino** platform and **casino** games (jackpot, coinflip, duel, lottery, plinko, prediction, crash, dice, roulette, wheel, mines, loot box, slots, blackjack).
- **Web3 casino** – **Web3 casino** on Solana; decentralized **casino** with on-chain **casino smart contract**.
- **Casino smart contract** – On-chain **casino smart contract** for **web3 casino**; provably fair with ORAO VRF; modular **casino** games.
- Related: casino, web3 casino, casino smart contract, blockchain casino, Solana casino, decentralized casino, online casino smart contract, provably fair casino.

---

## Disclaimer

This **web3 casino** and **casino smart contract** are for educational and development use. Ensure compliance with local gambling and financial regulations before operating any real-money **casino** or gaming product.

---

## Links

- [Smart-Contract setup & CLI](./Smart-Contract/README.md)
- [FrontEnd setup & features](./FrontEnd/README.md)
- [Solana](https://solana.com/) · [Anchor](https://anchor-lang.com/)

**Contact:** [Discord](https://discord.com/users/1274339638668038187) — reach me here for questions or collaboration.
