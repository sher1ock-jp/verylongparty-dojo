
#[system]
mod PlayerUpdate {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;
    use starknet::ContractAddress;

    use partygame::components::Player;

    fn execute(ctx: Context, game_id: felt252, player_position: u32, player_balance: u32) {

        // ユーザーidで指定が必要
        let (player) = get !(ctx.world, game_id.into(), (Player));
        //assert( == , '');

        set !(
            ctx.world,
            ctx.game_id.into(),
            (Player {
                playerQuestStatus: false,
            })
        );
    }
}
