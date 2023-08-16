#[system]
mod PlayerCreate {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;
    use starknet::ContractAddress;
    use partygame::components::Player;

    fn execute(ctx: Context, game_id: felt252 ) {

        let map = get !(ctx.world, game_id.into(), Map);
        let map_sk: Query = (game_id, map.mapId).into();

        set !(
            ctx.world,
            map_sk,
            (Player { playerId :ContractAddress, uplayerPosition: 1, playerBalance: 1000, playerQuestStatus: true})
        );
        return ();
    }
}