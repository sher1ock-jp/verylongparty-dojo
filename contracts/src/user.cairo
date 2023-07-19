use array::ArrayTrait;

#[derive(Component, Copy, Drop, Serde, SerdeLen)]
struct User {
    userPosition: u8, 
    userQuestStatus: bool,
}