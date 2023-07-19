use array::ArrayTrait;
use starknet::ContractAddress;

// Qestion: sturct automatically create array of squares?
// must link backend_quare and this new_square as array for advancing thorugh the squares
#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct  Square {
    squareId: u8,
    squareCreater: ContractAddress, // is this userWalletAddress?
    squareDescription: u32,
    squareImageUrl: u32,
    squareQuestAddress: u32,
    squareQuestDescription: u32,
}