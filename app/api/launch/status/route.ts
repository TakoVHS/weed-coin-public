import { NextResponse } from 'next/server';
import { getPublicLaunchConfig, isLaunchConfigComplete, isPaymentFlowLive } from '@/lib/launch-config';
import {
  ACCESS_LADDER,
  BUYER_PROCESS,
  EDUCATION_PROGRAM,
  HOLDER_SERVICES,
  INFRASTRUCTURE_LAYERS,
} from '@/lib/token-values';

export const dynamic = 'force-dynamic';

export function GET() {
  const config = getPublicLaunchConfig();
  const complete = isLaunchConfigComplete(config);
  const paymentLive = isPaymentFlowLive(config);

  const warnings: string[] = [];
  if (!paymentLive) {
    warnings.push('Payment/access flow is not live until official links, launch wallet, mint, treasury wallet, wallet connect, and checkout are all configured.');
    warnings.push('Do not present checkout as active while this endpoint is in safe_mode or configured_safe_mode.');
  }
  if (!config.launchWallet) warnings.push('LAUNCH_WALLET is not confirmed - operational launch wallet is still pending.');
  if (!config.tokenMint) warnings.push('TOKEN_MINT is not confirmed - showing pending state.');
  if (!config.treasuryWallet) warnings.push('TREASURY_WALLET is not confirmed - showing pending state.');

  return NextResponse.json({
    status: paymentLive ? 'live' : complete ? 'configured_safe_mode' : 'safe_mode',
    launchMode: config.launchMode,
    paymentFlowMode: config.paymentFlowMode,
    walletConnectEnabled: config.walletConnectEnabled,
    tokenCheckoutEnabled: config.tokenCheckoutEnabled,
    requiredPublicValues: {
      telegramUrl: Boolean(config.telegramUrl),
      xUrl: Boolean(config.xUrl),
      launchWallet: Boolean(config.launchWallet),
      tokenMint: Boolean(config.tokenMint),
      treasuryWallet: Boolean(config.treasuryWallet),
    },
    walletRoles: {
      launchWallet: config.launchWallet || null,
      treasuryWallet: config.treasuryWallet || null,
    },
    publicToken: {
      tokenName: config.tokenName,
      tokenSymbol: config.tokenSymbol,
      tokenNetwork: config.tokenNetwork,
      tokenStandard: config.tokenStandard,
      tokenMint: config.tokenMint || null,
      treasuryWallet: config.treasuryWallet || null,
      totalSupply: config.totalSupply,
      circulatingSupply: config.circulatingSupply,
      mintAuthorityStatus: config.mintAuthorityStatus,
      freezeAuthorityStatus: config.freezeAuthorityStatus,
    },
    tokenomics: {
      liquidityAllocation: config.liquidityAllocation,
      communityAllocation: config.communityAllocation,
      ecosystemAllocation: config.ecosystemAllocation,
      teamAllocation: config.teamAllocation,
      reserveAllocation: config.reserveAllocation,
      teamVesting: config.teamVesting,
      treasuryPolicy: config.treasuryPolicy,
    },
    holderServices: HOLDER_SERVICES,
    educationProgram: EDUCATION_PROGRAM,
    accessLadder: ACCESS_LADDER,
    infrastructureLayers: INFRASTRUCTURE_LAYERS,
    buyerProcess: BUYER_PROCESS,
    warnings,
  });
}
