//check if the new squareId is empty
//check if the new square is the last square
//create square (arguments: creator address, square description, square image, quest address, quest description)
#[system]
mod SquareCreate {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;
    use starknet::ContractAddress;

    use partygame::square1::Square;
    
    // 次に作成したマスをフロントエンドから確認できるようにしないといけない
    fn execute(
            ctx: Context, 
            newSquareId: u8, 
            newSquareCreater: ContractAddress, // Caution
            newSquareDescription: u32, 
            newSquareImageUrl: u32, 
            newSquareQuestAddress: u32, 
            newSquareQuestDescription: u32) {
            
            // Cauntion: Probably, this is not correct. need for array and loop to check all squares
            let square = get !(ctx.world, ctx.origin.into(), (Square));
            assert(square.squareId == newSquareId, 'the coordinate is not empty'); // squareId → coordinates with frontend

            // fn check_squareId_available() -> bool {
            // }

            set !(
                ctx.world,
                ctx.origin.into(),
                (Square {
                    squareId: newSquareId,
                    squareCreater: newSquareCreater,
                    squareDescription: newSquareDescription,
                    squareImageUrl: newSquareImageUrl,
                    squareQuestAddress: newSquareQuestAddress,
                    squareQuestDescription: newSquareQuestDescription,
                    }
                )
            );

            //emit?

            return ();

            }
}