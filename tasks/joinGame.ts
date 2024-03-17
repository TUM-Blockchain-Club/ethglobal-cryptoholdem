import { Poker } from "../types";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:joinGame")
    .addParam("amount", "Amount to add to the counter (plaintext number)", "0.0000001")
    .setAction(async function (taskArguments: TaskArguments, hre) {
        const { fhenixjs, ethers, deployments } = hre;
        const [signer] = await ethers.getSigners();

        if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
            await fhenixjs.getFunds(signer.address);
        }

        //const amountToAdd = Number(taskArguments.amount);
        //const Counter = await deployments.get("Counter");
        const Poker = await deployments.get("Poker");

        console.log(
            `Running joinGame(${taskArguments.amount}), targeting contract at: ${Poker.address}`,
        );


        //console.log(
        //  `Running addCount(${amountToAdd}), targeting contract at: ${Counter.address}`,
        //);

        const contract = await ethers.getContractAt("Poker", Poker.address) as unknown as unknown as Poker;

        //const encyrptedAmount = await fhenixjs.encrypt_uint32(amountToAdd);

        //let contractWithSigner = contract.connect(signer) as unknown as Counter;

        try {
            await contract.joinGame({ value: ethers.parseEther(taskArguments.amount) });
            //await contractWithSigner.add(encyrptedAmount);
        } catch (e) {
            console.log(`Failed to send add transaction: ${e}`);
            return;
        }
    });
