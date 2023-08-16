#[system]
mod MapCreate {
    use array::ArrayTrait;
    use traits::Into;

    use dojo::world::Context;

    use partygame::components::Square;
    use partygame::components::Map;

    fn execute(ctx: Context, game_id: felt252, map_id: u32, map_name: u32){

        let player_id: felt252 = ctx.origin.into();
        let game_id = ctx.world.uuid();

        // set start square
        let squareId = 1;
        let squareCreater = "satoshi nakamoto";
        let SquareDescription = "start square";
        let SquareImageUrl = "https://www.gettyimages.co.jp/detail/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88/image-of-bitcoin-cryptocurrency-%E3%83%AD%E3%82%A4%E3%83%A4%E3%83%AA%E3%83%86%E3%82%A3%E3%83%95%E3%83%AA%E3%83%BC%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88/1319662239";

        set !(
            ctx.world,
            game_id.into(),
            (
                Map {
                gameId: game_id,
                mapId: map_id,
                mapName: map_name,
            },  Square {
                squareId: squareId,
                squareCreater: squareCreater,
                SquareDescription:  SquareDescription,
                SquareImageUrl: SquareImageUrl,
            }
            )
        );
    }
}