use crate::{
    constants::{CONFIG, GAME_GROUND, GLOBAL},
    errors::*,
    misc::*,
    state::{config::*, gameground::*},
};
use anchor_lang::{prelude::*, system_program};
use orao_solana_vrf::RANDOMNESS_ACCOUNT_SEED;

#[derive(Accounts)]
#[instruction(round_num: u64)]
pub struct SetWinner<'info> {
    #[account(
        mut,
        seeds = [CONFIG.as_bytes()],
        bump,
    )]
    global_config: Box<Account<'info, Config>>,

    /// CHECK: global vault pda which stores SOL
    #[account(
        mut,
        seeds = [GLOBAL.as_bytes()],
        bump,
    )]
    pub global_vault: AccountInfo<'info>,

    #[account(mut,
    constraint = global_config.authority == creator.key() @ ContractError::IncorrectAuthority)]
    creator: Signer<'info>,

    #[account(
        mut,
        seeds = [GAME_GROUND.as_bytes(), round_num.to_le_bytes().as_ref()],
        bump
    )]
    game_ground: Box<Account<'info, GameGround>>,

    /// CHECK:
    #[account(
        mut,
        seeds = [RANDOMNESS_ACCOUNT_SEED, &game_ground.force],
        bump,
        seeds::program = orao_solana_vrf::ID
    )]
    pub random: AccountInfo<'info>,

    #[account(address = system_program::ID)]
    system_program: Program<'info, System>,
}

impl<'info> SetWinner<'info> {
    pub fn handler(&mut self, round_num: u64) -> Result<()> {
       
        // solana Casino smart contract | customized Casino smart contract, CoinFlip, Blackjack, Roulette, Slot, Dice, etc.
        // **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)    

        Ok(())
    }
}
