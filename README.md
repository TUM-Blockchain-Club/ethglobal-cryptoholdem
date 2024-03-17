# Crypto Hold'Em: On-chain Poker

This repository contains a project that implements on-chain poker enabled by FHE on Fhenix.

Cryptohold'em builds on Fhenix for the smart contract functionality, Nouns DAO for icons/design, and React; the entire game logic is implemented in the Poker.sol smart contract. For demo purposes, the poker hands are simplified a bit but can easily be extended at a later point. Connecting the frontend to the smart contract functions is done via Metamask. The FHE aspect is used to encrypt the set of in-play cards while they should be hidden. Any player can view their cards plus any revealed tabletop cards while the game is running; after the showdown all (still participating) hands can be viewed by everyone.

- Why use FHE: FHE enables us to keep the entire game state on-chain without revealing face-down cards to players before they are supposed to be known. Players can only view their own and flipped cards while the game is going on. After the showdown, the remaining cards of active players are revealed to everyone.

- Workflow: Users open the CryptoHold’em Website and connect their wallet to the game by clicking the button in the pop-up window. After logging into MetaMask and successfully connecting the wallet, the player joins the contract and is put into a game. When pressing start, the poker session starts, and no one can join the game anymore. When it’s the player's turn, there are three play options: Fold, Check and Raise. If the player decides to raise, the player needs to type in the specific amount to raise. By folding, the player awaits the end of the round, and by checking, the game goes on as usual until a winner is determined.

- For demo purposes, the possible hands are reduced to
    - high card
    - pair
    - two pair
    - three-of-a-kind
    - four-of-a-kind
    - flush, with the usual ranking among them

- Setup:
    - generate a wallet mnemonic and save it to the .env file
    - install npm dependencies for both the hardhat and frontend environment
    - compile and deploy the contract using the provided npm tasks
    - serve the react frontend after updating the contract addresses
    - open the website, connect Metamask (with imported wallet) and enjoy the game