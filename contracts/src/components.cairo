use array::ArrayTrait;
use starknet::ContractAddress;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct Player {
    playerId: ContractAddress,
    playerPosition: u32, 
    playerBalance: u32,
    playerQuestStatus: bool,
}

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct  Square {
    gameId: u32,
    squareId: u32,
    squareCreater: ContractAddress,
    squareDescription: u32,
    squareImageUrl: u32,
    squareQuestAddress: u32,
    squareQuestDescription: u32,
}

// must link backend_quare and this new_square as array for advancing thorugh the squares
#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct  Map {
    gameId: u32,
    mapId: u32,
    mapName: u32,
}