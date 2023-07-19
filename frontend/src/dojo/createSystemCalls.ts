import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, syncWorker }: SetupNetworkResult,
) {
    const gameStart = async () => {
        const tx = await execute("GameStart", []);
        // await awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("GameStart", )
    };

    const squareCreate = async () => {
        // execute from core
        const tx = await execute("SquareCreate", []);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("SquareCreate", )
      };

    return {
        gameStart,
        squareCreate,
    };
}