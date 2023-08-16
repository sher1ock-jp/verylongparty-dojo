import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
    { execute, syncWorker }: SetupNetworkResult,
) {
    const mapCreate = async () => {
        const tx = await execute("MapCreate", []);
        // await awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("MapCreate", )
    };

    const squareCreate = async () => {
        // execute from core
        const tx = await execute("SquareCreate", []);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("SquareCreate", )
      };

    const playerCreate = async () => {
        // execute from core
        const tx = await execute("PlayerCreate", []);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("PlayerCreate", )
      };

    const playerMove = async () => {
        // execute from core
        const tx = await execute("PlayerMove", []);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("PlayerMove", )
      };

    const playerUpdate = async () => {
        // execute from core
        const tx = await execute("PlayerUpdate", []);
        // awaitStreamValue(txReduced$, (txHash) => txHash === tx.transaction_hash);
        syncWorker.sync(tx.transaction_hash);
        console.log("PlayerUpdate", )
      };
    
    return {
        mapCreate,
        squareCreate,
        playerCreate,
        playerMove,
        playerUpdate,
    };
}