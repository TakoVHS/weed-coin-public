export const TOKEN_VALUES = {
  TOKEN_NETWORK: 'Solana',
  TOKEN_STANDARD: 'SPL',
  TOKEN_MINT: '',
  TOKEN_TOTAL_SUPPLY: 1_000_000_000,
  TOKEN_CIRCULATING_SUPPLY: 400_000_000,
  MINT_AUTHORITY_STATUS: 'Awaiting official launch confirmation',
  FREEZE_AUTHORITY_STATUS: 'Awaiting official launch confirmation',
  TREASURY_WALLET: '',
  ALLOCATION_LIQUIDITY: 300_000_000,
  ALLOCATION_COMMUNITY: 250_000_000,
  ALLOCATION_ECOSYSTEM: 200_000_000,
  ALLOCATION_TEAM: 150_000_000,
  ALLOCATION_RESERVE: 100_000_000,
  TEAM_VESTING: 'Team allocation reserved for staged release after public launch confirmation',
  TREASURY_POLICY: 'Treasury address will be published only through the official launch announcement',
} as const;

export const PRODUCT_PILLARS = [
  {
    title: 'Education vault',
    state: 'Live now',
    body: 'A public knowledge layer for token literacy, wallet hygiene, launch notes, risk reading, and official route verification.',
    action: 'Start with launch notes and risk before any wallet action.',
  },
  {
    title: 'Holder desk',
    state: 'Prepared',
    body: 'A premium holder-facing lane for verified announcements, gated drops, support routing, and future token-gated unlocks.',
    action: 'Opens only after mint, treasury, and wallet checks are confirmed.',
  },
  {
    title: 'Creator lab',
    state: 'Buildable',
    body: 'A structured lane for AI-assisted campaign assets, creator prompts, visual kits, launch packs, and repeatable content systems.',
    action: 'Used to turn community attention into branded output rather than chaotic posting.',
  },
  {
    title: 'Partner desk',
    state: 'Commercial',
    body: 'A direct path for brands, affiliates, merch operators, event partners, and growth collaborators who need a verified handoff.',
    action: 'Designed for operators who want a business route instead of Telegram noise.',
  },
] as const;

export const BUYER_PERSONAS = [
  {
    title: 'Retail buyer',
    body: 'Needs clarity on token purpose, supply structure, official links, and how to avoid fake checkout or wrong wallet instructions.',
  },
  {
    title: 'Holder member',
    body: 'Wants gated access, project updates, premium drops, private support lanes, and confidence that the route is official.',
  },
  {
    title: 'Creator / ambassador',
    body: 'Needs templates, briefs, campaign packs, education rails, moderation rules, and an actual system for contribution.',
  },
  {
    title: 'Partner / operator',
    body: 'Needs a concise commercial overview: what the token unlocks, where the audience comes from, and what business lanes exist.',
  },
] as const;

export const REVENUE_LANES = [
  {
    title: 'Membership access',
    state: 'Safe-mode ready',
    body: 'Structured paid or token-gated access to briefs, gated content, premium updates, and member-only operating materials.',
  },
  {
    title: 'Partner campaigns',
    state: 'Sales lane',
    body: 'Creator bundles, co-branded drops, event collabs, premium placement, and operator-facing handoff packs.',
  },
  {
    title: 'Creator products',
    state: 'Content lane',
    body: 'Prompt packs, visuals, templates, education sets, and high-signal digital products built around the Weed Coin brand system.',
  },
  {
    title: 'Holder upgrades',
    state: 'Post-launch',
    body: 'Private vault, gated desk, verified signals, launch briefings, and reward loops that rely on holder verification rather than hype.',
  },
] as const;

export const REVIEW_CHAIN = [
  {
    title: 'Research',
    body: 'Validates claims, token facts, routes, and commercial assumptions before anything becomes public copy.',
  },
  {
    title: 'Security',
    body: 'Checks links, anti-scam language, wallet instructions, checkout claims, and anything that could create public risk.',
  },
  {
    title: 'Coders',
    body: 'Implement the approved structure, CTA logic, route behavior, and status surfaces without weakening safety rules.',
  },
  {
    title: 'CGO / owner',
    body: 'Approves final wording, launch state, and what may be shown as live versus prepared.',
  },
] as const;

export const TOKEN_ALLOCATION = [
  { label: 'Liquidity', amount: TOKEN_VALUES.ALLOCATION_LIQUIDITY, percent: 30, purpose: 'Market depth and launch liquidity support' },
  { label: 'Community', amount: TOKEN_VALUES.ALLOCATION_COMMUNITY, percent: 25, purpose: 'Holder campaigns, quests, rewards, and public community growth' },
  { label: 'Ecosystem', amount: TOKEN_VALUES.ALLOCATION_ECOSYSTEM, percent: 20, purpose: 'Partnerships, product integrations, content drops, and utility experiments' },
  { label: 'Team', amount: TOKEN_VALUES.ALLOCATION_TEAM, percent: 15, purpose: 'Long-term builders and operating contributors' },
  { label: 'Reserve', amount: TOKEN_VALUES.ALLOCATION_RESERVE, percent: 10, purpose: 'Security buffer, launch operations, and future expansion' },
] as const;

export const HOLDER_ENGAGEMENT = [
  'Official launch updates through weed-coin.cash, Telegram, and X',
  'Community quests and Telegram/X campaign participation',
  'Future gated drops and access checks after mint confirmation',
  'Public build notes so buyers can track what is live and what is still pending',
  'Anti-scam routing through one verified public domain',
] as const;

export const HOLDER_SERVICES = [
  {
    title: 'Premium holder desk',
    body: 'A direct owner-controlled support lane for verified holders: official links, launch status, risk reminders, and anti-scam guidance.',
    state: 'Gated after mint confirmation',
  },
  {
    title: 'Launch vault',
    body: 'A private release shelf for brand assets, community missions, campaign packs, future drops, and gated product notes.',
    state: 'Prepared for token gating',
  },
  {
    title: 'Signal brief',
    body: 'A recurring public-to-private update loop: what shipped, what is pending, what changed on-chain, and what holders should verify.',
    state: 'Public now, gated upgrades later',
  },
  {
    title: 'Partner access',
    body: 'A curated lane for cannabis, lifestyle, creator, and crypto-native partners who can provide real utility instead of empty logos.',
    state: 'Partner pipeline',
  },
] as const;

export const EDUCATION_PROGRAM = [
  {
    title: 'Culture and law basics',
    level: 'Start here',
    body: 'A practical overview of regulated cannabis culture, regional differences, public communication rules, and responsible brand positioning.',
  },
  {
    title: 'Wallet and token safety',
    level: 'Required',
    body: 'Seed phrase safety, fake links, mint verification, treasury checks, wallet approvals, slippage, liquidity, and transaction hygiene.',
  },
  {
    title: 'AI creator lab',
    level: 'Practical',
    body: 'Campaign prompts, visual briefing, meme discipline, product storytelling, and brand-safe creator workflows.',
  },
  {
    title: 'Community missions',
    level: 'Participation',
    body: 'Weekly learning tasks, moderation rules, contribution loops, feedback intake, and reputation without fake holder metrics.',
  },
  {
    title: 'Business and partner desk',
    level: 'Premium',
    body: 'How partners can approach Weed Coin: creator bundles, education content, merch, events, analytics, and verified collaboration lanes.',
  },
  {
    title: 'Risk and compliance track',
    level: 'Always visible',
    body: 'Risk literacy, market volatility, wallet safety, responsible claims, and clear rules for public communication.',
  },
] as const;

export const ACCESS_LADDER = [
  {
    title: 'Visitor',
    price: 'Free',
    body: 'Open education, launch notes, risk page, tokenomics, and official link verification.',
  },
  {
    title: 'Student',
    price: 'Free / community',
    body: 'Guided learning path, wallet safety tasks, content prompts, and community onboarding.',
  },
  {
    title: 'Member',
    price: 'Seasonal access',
    body: 'Premium briefs, creator packs, partner notes, campaign templates, and early product drops.',
  },
  {
    title: 'Holder',
    price: 'Token-gated',
    body: 'Verified holder desk, gated vault, launch updates, partner access, and future utility checks.',
  },
] as const;

export const INFRASTRUCTURE_LAYERS = [
  {
    title: 'RPC nodes',
    body: 'Primary and backup Solana RPC providers for supply checks, treasury verification, and holder tooling.',
    examples: 'Shyft, Chainstack, Helius, private RPC',
  },
  {
    title: 'On-chain monitor',
    body: 'Token supply, treasury wallet, authority status, and holder report checks exposed through the portal status API.',
    examples: '/api/launch/status',
  },
  {
    title: 'Devnet testing lane',
    body: 'A separate test environment for wallet UX and access logic before any mainnet payment path is presented as live.',
    examples: 'Devnet validation only',
  },
  {
    title: 'Verified routing',
    body: 'The public site remains the single source for mint address, risk page, launch notes, and official social links.',
    examples: 'weed-coin.cash',
  },
] as const;

export const BUYER_PROCESS = [
  'Read the token snapshot and allocation before entering any chat flow',
  'Check mint and treasury status only from weed-coin.cash',
  'Review risk notes before any buy decision',
  'Use the official access page when wallet and checkout rails are enabled',
  'Join holder services only after wallet ownership can be verified',
] as const;

export function formatTokenAmount(value: number): string {
  return `${value.toLocaleString('en-US')} WEED`;
}
