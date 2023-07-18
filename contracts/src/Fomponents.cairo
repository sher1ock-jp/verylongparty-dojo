use array::ArrayTrait;
use starknet::ContractAddress;

// square
// User
#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct user {
    userPosition: u8, 
    userQuestStatus: bool,
}


#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct  square {
    //ai
    creater: ContractAddress,
    squareDescription: u64,
    // 検証 
    //quest
}