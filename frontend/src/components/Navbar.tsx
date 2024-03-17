import { Button, Modal, notification } from "antd";
import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { Typography } from "antd";
import { FhenixClient, generatePermit } from 'fhenixjs';
import { Contract, Eip1193Provider, ethers } from 'ethers';
import type { SupportedProvider, HardhatEthersProvider } from "fhenixjs";
import { BrowserProvider } from "ethers";


type ExtendedProvider = SupportedProvider & {
  getTransactionReceipt(txHash: string): Promise<ethers.TransactionReceipt>;
  send(method: string, params: any[] | Record<string, any>): Promise<any>;
  getSigner(): Promise<any>;
  getBalance(address: string): Promise<any>;
};


const Navbar: React.FC = () => {
  const [api] = notification.useNotification();

  const { Text, Link } = Typography;
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, chainId } = useSDK();
  const metaMaskAccount = (
    <Button shape="round" type="primary" className={"bg-primary"}>
      {account}
    </Button>
  );
  var provider =  new BrowserProvider(window.ethereum as Eip1193Provider);
  // const client = new FhenixClient({provider});

  //const provider = new BrowserProvider(window.ethereum);


  const abi = ["function startGame() public", "function joinGame() public", "function bet() public"]
  //const signer = account;

  //const signer = await provider.getSigner();


  const contract = new Contract("0x0", abi);
  //const auctionContract = new ethers.Contract(TokenContractDeployment.address, ExampleToken.abi, signer);


  function getProvider() {
    if (provider === null) {
      // @ts-ignore
      provider = new BrowserProvider(window.ethereum);
    }
    return provider;
  }

  //function initFHEClient() {
  //  fheClient.value = new FhenixClient({ provider: provider as HardhatEthersProvider as SupportedProvider });
  //}

  //function getFheClient() {
  //  return fheClient.value;
 // }


  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      // @ts-ignore
      setAccount(accounts?.[0]);
      console.log(!(connected && !connecting));
    } catch (err) {
      console.warn("failed to connect..", err);
      openNotification();
    }
  };

  const startGame = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0x82FBF91aE0093Eeac15D7941cD2a2Db6B4bbbAd2", abi, signer);
      const tx = await contract.startGame();
      await tx.wait();
      console.log(tx);
    } catch (err) {
      console.warn("failed to start game..", err);
      openNotification();
    }
  }

  const joinGame = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0x82FBF91aE0093Eeac15D7941cD2a2Db6B4bbbAd2", abi, signer);
      const tx = await contract.joinGame();
      await tx.wait();
      console.log(tx);
    } catch (err) {
      console.warn("failed to join game..", err);
      openNotification();
    }
  }

  const bet = async () => {
    try {
      provider = getProvider();
      const signer = await provider.getSigner();
      const contract = new Contract("0x82FBF91aE0093Eeac15D7941cD2a2Db6B4bbbAd2", abi, signer);
      const tx = await contract.joinGame();
      await tx.wait();
      console.log(tx);
    } catch (err) {
      console.warn("failed to join game..", err);
      openNotification();
    }
  }

  const openNotification = () => {
    api.info({
      message: `Connection failed`,
      description: "Please try again",
    });
  };


  return (
    <nav>
      <div className="flex items-center h-[6vH] bg-table_black">
        <Button type={"primary"} className="text-table_black bg-cgrey">
          {account}
        </Button>
        <Button type={"primary"} className="text-table_black bg-cgrey" onClick={joinGame}>
          {account}
        </Button>

      </div>
      <Modal title="Connect your wallet" open={!(connected && !connecting && account)} footer={[
        <Button key="Connect" type="primary" onClick={connect}>
          Connect
        </Button>]}
      >
        <p>Please connect your wallet with Cryptoholdem.</p>
      </Modal>
    </nav>
  );
};

export default Navbar;
