# HP Coin

HP Coin is a lightweight, React-powered blockchain application demonstrating the core principles of a decentralized ledger. It features a custom blockchain implementation, transaction management, and a built-in blockchain explorer.

## Features

- **Custom Blockchain Engine**: Proof-of-Work (PoW) consensus mechanism with adjustable difficulty.
- **Transaction Management**: Create and broadcast transactions between wallets.
- **Blockchain Explorer**: Real-time visualization of blocks, transactions, and network statistics.
- **Secure Hashing**: Utilizes `crypto-js` for deterministic block hashing.
- **Modern UI**: A clean, responsive "Blue and White" theme built with React and Tailwind CSS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh-PAHADIA/HP_Coin.git
   cd HP_Coin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Built With

- **React**: Frontend UI framework
- **Tailwind CSS**: Styling and layout
- **Lucide React**: Modern iconography
- **Crypto-JS**: Cryptographic primitives
- **Vite**: Ultra-fast build tool

## Configuration

- **Difficulty**: You can adjust the mining difficulty in `src/blockchain/Blockchain.ts`.
- **Mining Reward**: The reward for mining a new block can be configured in the same file.

---
Built by [Harshita PAHADIA](https://github.com/Harsh-PAHADIA)
