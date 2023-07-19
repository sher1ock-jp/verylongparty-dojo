//if user push the start button and create user (user position, user quest status)
#[system]
mod GameStart {
    use array::ArrayTrait;
    use traits::Into;
    use dojo::world::Context;

    use partygame::user::User;

    fn execute(ctx: Context) {
        set !(
            ctx.world,
            ctx.origin.into(),
            (User { userPosition: 1, userQuestStatus: true})
        );
        return ();
    }
}

// must create the start square as defalut when this contract is deployed(!not quest square for UX!)