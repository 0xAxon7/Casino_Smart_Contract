use crate::{
    constants::{CONFIG, GAME_GROUND, GLOBAL},
    errors::*,
    state::{config::*, gameground::*},
};
use anchor_lang::{prelude::*, system_program};

use orao_solana_vrf::cpi::accounts::RequestV2;
use orao_solana_vrf::program::OraoVrf;
use orao_solana_vrf::state::NetworkState;
use orao_solana_vrf::CONFIG_ACCOUNT_SEED;
use orao_solana_vrf::RANDOMNESS_ACCOUNT_SEED;

#[derive(Accounts)]
#[instruction(force: [u8; 32])]

pub struct CreateGame<'info> {
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

    #[account(mut)]
    creator: Signer<'info>,

    #[account(mut,
        constraint = global_config.payer_wallet == payer.key() @ ContractError::IncorrectPayerAuthority)]
    payer: Signer<'info>,

    #[account(
        init,
        payer = payer,
        space = 8 + GameGround::INIT_SPACE,
        seeds = [GAME_GROUND.as_bytes(), global_config.game_round.to_le_bytes().as_ref()],
        bump
    )]
    game_ground: Box<Account<'info, GameGround>>,

    /// CHECK:
    #[account(
        mut,
        seeds = [RANDOMNESS_ACCOUNT_SEED, &force],
        bump,
        seeds::program = orao_solana_vrf::ID
    )]
    pub random: AccountInfo<'info>,
    /// CHECK:
    #[account(mut)]
    pub treasury: AccountInfo<'info>,

    #[account(
        mut,
        seeds = [CONFIG_ACCOUNT_SEED],
        bump,
        seeds::program = orao_solana_vrf::ID
    )]
    pub config: Account<'info, NetworkState>,

    pub vrf: Program<'info, OraoVrf>,

    #[account(address = system_program::ID)]
    system_program: Program<'info, System>,
}

impl<'info> CreateGame<'info> {
    pub fn handler(
        &mut self,
        force: [u8; 32],
        round_time: i64,
        min_deposit_amount: u64,
        max_joiner_count: u64,
    ) -> Result<()> {
        let game_ground = &mut self.game_ground;
        let global_config = &mut self.global_config;
        let timestamp = Clock::get()?.unix_timestamp;

        // solana Casino smart contract | customized Casino smart contract, CoinFlip, Blackjack, Roulette, Slot, Dice, etc.
        // **Discord**: [@0xAxon7](https://discord.com/users/1274339638668038187)    

        Ok(())
    }
}
