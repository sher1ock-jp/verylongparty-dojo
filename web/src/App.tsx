import { useState } from 'react';
import './App.css';
import Square from './component/square';
import { useStoreWallet } from './component/wallet/walletContext';
import { encode } from "starknet";
import { StarknetWindowObject, connect } from "get-wallet-starknet";
import { ChakraProvider } from '@chakra-ui/react'
import { Center,Button } from '@chakra-ui/react';

interface Square {
  id: number;
  x: number;
  y: number;
}

const App = () => {
  const [initialFocusId] = useState(1275);

  const gridSize = 50;
  const centerX = Math.floor(gridSize / 2);
  const centerY = Math.floor(gridSize / 2);

  const squares: Square[] = [];
  for (let id = 1; id < 2501; id++) {
    const x = id % gridSize - centerX;
    const y = Math.floor(id / gridSize) - centerY;
    squares.push({ id, x, y });
  }

  // Connect Argent-X or Braavos wallet
  const [isConnected, setConnected] = useState(false);
  const [wallet, setWallet] = useState<StarknetWindowObject | null>(null);
  const addressAccountFromContext = useStoreWallet(state => state.address);
  const setAddressAccount = useStoreWallet(state => state.setAddressAccount);
  const chainFromContext = useStoreWallet(state => state.chain);
  const setChain = useStoreWallet(state => state.setChain);
  const accountFromContext = useStoreWallet(state => state.account);
  const setAccount = useStoreWallet(state => state.setAccount);
  const providerFromContext = useStoreWallet(state => state.provider);
  const setProvider = useStoreWallet(state => state.setProvider);

  // Component context

  const handleConnectClick = async () => {
      const wallet = await connect({ modalMode: "alwaysAsk", modalTheme: "light" });
      await wallet?.enable({ starknetVersion: "v5" } as any);
      setWallet(wallet);
      const addr = encode.addHexPrefix(encode.removeHexPrefix(wallet?.selectedAddress ?? "0x").padStart(64, "0"));
      setAddressAccount(addr);
      setConnected(!!wallet?.isConnected);
      if (wallet?.account) {
          setAccount(wallet.account);
      }
      if (wallet?.isConnected) {
          setChain(wallet.chainId); // not provided by Braavos
          setProvider(wallet.provider);
      }
  }

  return (
    <body>
      <div className="background">
        <div className="square-zone">
          {squares.map((square) => (
            <Square
                key={square.id}
                squareId={square.id}
                coordinateX={square.x}
                coordinateY={square.y}
                initialFocusId={initialFocusId}
            />
            ))}

            {wallet ? (
            <>
            </>
            ) : (
            <>
                <div className="wallet-area">
                    <Center>
                        <Button
                            ml="4"
                            textDecoration="none !important"
                            outline="none !important"
                            boxShadow="none !important"
                            onClick={() => {
                                handleConnectClick();
                            }}
                        >
                            Connect Wallet
                        </Button>
                    </Center>
                </div>
            </>
            )}

        </div>
      </div>
    </body>
  );
};

export default App;






