import { useDojo } from '../DojoContext';

const GameStart = () => {
  const { systemCalls: { gameStart } } = useDojo();

  const handleStartGame = () => {
    gameStart(); // gameStartを実行する
    alert("Game Start!");
  };

  return (
    <div className="game-start">
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default GameStart;

