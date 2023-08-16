import { useDojo } from '../DojoContext';

const GameStart = () => {
  const { systemCalls: { mapCreate } } = useDojo();

  const handleStartGame = () => {
    mapCreate(); 
    console.log("Game Start!");
  };

  return (
    <div className="game-start">
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default GameStart;

