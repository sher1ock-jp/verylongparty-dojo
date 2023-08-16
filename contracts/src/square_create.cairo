#[system]
mod SquareCreate {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;
    use starknet::ContractAddress;

    use partygame::components::Square;
    use partygame::components::Map;
    
    fn execute(
            ctx: Context, 
            news_square_id: u32, 
            new_square_creater: ContractAddress, 
            new_square_description: u32, 
            new_square_image_url: u32, 
            new_square_quest_address: u32, 
            new_square_quest_description: u32,
            game_id: felt252,
            ) {
            
            //let map_sk = get !(ctx.world, ,);


            //how to check if the new squareId is empty?
            
            // let squares = get !(ctx.world, game_id.into(), (Square));
            // let (squares) = find !(ctx.world, 0x0, (Square));
            
            let map = get !(ctx.world, game_id.into(), Map);
            let map_sk: Query = (game_id, map.mapId).into();

            set !(
                ctx.world,
                map_sk,
                (Square {
                    squareId: news_square_id,
                    squareCreater: new_square_creater,
                    squareDescription: new_square_description,
                    squareImageUrl: new_square_image_url,
                    squareQuestAddress: new_square_quest_address,
                    squareQuestDescription: new_square_quest_description,
                    }
                )
            );

    }
}