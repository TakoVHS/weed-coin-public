import { TOKEN_VALUES } from './token-values';

export type LaunchMode = 'token-only' | 'token+public-announcement' | 'token+payment-flow';

export type PublicLaunchConfig = {
  siteUrl: string;
  telegramUrl: string;
  xUrl: string;
  tokenName: string;
  tokenSymbol: string;
  tokenMint: string;
  treasuryWallet: string;
  paymentFlowMode: 'disabled' | 'preview' | 'live';
  walletConnectEnabled: boolean;
  tokenCheckoutEnabled: boolean;
  launchMode: LaunchMode;
  // tokenomics
  tokenNetwork: string;
  tokenStandard: string;
  totalSupply: number;
  circulatingSupply: number;
  liquidityAllocation: number;
  communityAllocation: number;
  ecosystemAllocation: number;
  teamAllocation: number;
  reserveAllocation: number;
  mintAuthorityStatus: string;
  freezeAuthorityStatus: string;
  teamVesting: string;
  treasuryPolicy: string;
};

function clean(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed && !trimmed.startsWith('replace_with_') ? trimmed : fallback;
}

function bool(value: string | undefined): boolean {
  return value === 'true' || value === '1' || value === 'yes';
}

function paymentMode(value: string | undefined): PublicLaunchConfig['paymentFlowMode'] {
  if (value === 'live' || value === 'preview') return value;
  return 'disabled';
}

function launchMode(value: string | undefined): LaunchMode {
  if (value === 'token+payment-flow' || value === 'token+public-announcement') return value;
  return 'token-only';
}

export function getPublicLaunchConfig(): PublicLaunchConfig {
  const tokenMint = clean(process.env.TOKEN_MINT, TOKEN_VALUES.TOKEN_MINT);
  const treasuryWallet = clean(process.env.TREASURY_WALLET, TOKEN_VALUES.TREASURY_WALLET);
  return {
    siteUrl: clean(process.env.PUBLIC_SITE_URL, 'https://weed-coin.cash'),
    telegramUrl: clean(process.env.PUBLIC_TELEGRAM_URL, ''),
    xUrl: clean(process.env.PUBLIC_X_URL, ''),
    tokenName: clean(process.env.TOKEN_NAME, 'Weed Coin'),
    tokenSymbol: clean(process.env.TOKEN_SYMBOL, 'WEED'),
    tokenMint,
    treasuryWallet,
    paymentFlowMode: paymentMode(process.env.PAYMENT_FLOW_MODE),
    walletConnectEnabled: bool(process.env.ENABLE_WALLET_CONNECT),
    tokenCheckoutEnabled: bool(process.env.ENABLE_TOKEN_CHECKOUT),
    launchMode: launchMode(process.env.LAUNCH_MODE),
    tokenNetwork: TOKEN_VALUES.TOKEN_NETWORK,
    tokenStandard: TOKEN_VALUES.TOKEN_STANDARD,
    totalSupply: TOKEN_VALUES.TOKEN_TOTAL_SUPPLY,
    circulatingSupply: TOKEN_VALUES.TOKEN_CIRCULATING_SUPPLY,
    liquidityAllocation: TOKEN_VALUES.ALLOCATION_LIQUIDITY,
    communityAllocation: TOKEN_VALUES.ALLOCATION_COMMUNITY,
    ecosystemAllocation: TOKEN_VALUES.ALLOCATION_ECOSYSTEM,
    teamAllocation: TOKEN_VALUES.ALLOCATION_TEAM,
    reserveAllocation: TOKEN_VALUES.ALLOCATION_RESERVE,
    mintAuthorityStatus: TOKEN_VALUES.MINT_AUTHORITY_STATUS,
    freezeAuthorityStatus: TOKEN_VALUES.FREEZE_AUTHORITY_STATUS,
    teamVesting: TOKEN_VALUES.TEAM_VESTING,
    treasuryPolicy: TOKEN_VALUES.TREASURY_POLICY,
  };
}

export function isLaunchConfigComplete(config: PublicLaunchConfig): boolean {
  return Boolean(config.telegramUrl && config.xUrl && config.tokenMint && config.treasuryWallet);
}

export function isPaymentFlowLive(config: PublicLaunchConfig): boolean {
  return config.paymentFlowMode === 'live' && config.walletConnectEnabled && config.tokenCheckoutEnabled && isLaunchConfigComplete(config);
}
