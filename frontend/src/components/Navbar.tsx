import { Button, Modal, notification } from "antd";
import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { Typography } from "antd";


const Navbar: React.FC = () => {
  const [api] = notification.useNotification();

  const { Text, Link } = Typography;
  const [account, setAccount] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  const metaMaskAccount = (
    <Button shape="round" type="primary" className={"bg-primary"}>
      {account}
    </Button>
  );
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

  const openNotification = () => {
    api.info({
      message: `Connection failed`,
      description: "Please try again",
    });
  };


  return (
    <nav>
      <div className="flex items-center h-[6vH] bg-table_black">
        <Button type={"primary"} className="text-table_black bg-white">
          {account}
        </Button>
        <Button type={"primary"} className="text-table_black bg-white">
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
