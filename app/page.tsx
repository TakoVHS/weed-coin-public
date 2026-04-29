import Link from 'next/link';
import { getPublicLaunchConfig, isPaymentFlowLive } from '@/lib/launch-config';
import {
  ACCESS_LADDER,
  BUYER_PROCESS,
  HOLDER_SERVICES,
  INFRASTRUCTURE_LAYERS,
  TOKEN_ALLOCATION,
  TOKEN_VALUES,
  formatTokenAmount,
} from '@/lib/token-values';

const productSurfaces = [
  {
    title: 'Public education',
    body: 'Open pages for launch notes, risk, buyer flow, and token literacy so the first contact with the project is useful and verifiable.',
    action: 'Read launch notes',
    href: '/launch-notes',
  },
  {
    title: 'Access desk',
    body: 'The controlled route for mint status, treasury wallet, wallet-connect readiness, and payment flow activation.',
    action: 'Check access',
    href: '/access',
  },
  {
    title: 'Holder services',
    body: 'Premium support, gated releases, private updates, and verified holder routing that only open after launch values are confirmed.',
    action: 'See holder logic',
    href: '#utility',
  },
  {
    title: 'Partner lane',
    body: 'A clear handoff point for creators, brands, and operators who need actual product context instead of Telegram chaos.',
    action: 'Review product',
    href: '#product',
  },
] as const;

const trustRules = [
  {
    title: 'No fake certainty',
    body: 'The site does not promise returns, listings, or instant utility that is not already confirmed.',
  },
  {
    title: 'One official route',
    body: 'Mint address, treasury wallet, launch notes, and risk guidance should be taken only from weed-coin.cash.',
  },
  {
    title: 'Verification before action',
    body: 'If checkout, wallet-connect, or token details are not confirmed in the access desk, the correct action is to wait.',
  },
  {
    title: 'Premium means service',
    body: 'The value proposition is access, support, signal, and gated utility. Not fantasy token language.',
  },
] as const;

export default function Page() {
  const config = getPublicLaunchConfig();
  const live = isPaymentFlowLive(config);
  const telegramReady = Boolean(config.telegramUrl);
  const xReady = Boolean(config.xUrl);
  const mintReady = Boolean(config.tokenMint);
  const treasuryReady = Boolean(config.treasuryWallet);

  const heroStats = [
    ['Network', `${config.tokenNetwork} / ${config.tokenStandard}`],
    ['Total supply', formatTokenAmount(config.totalSupply)],
    ['Initial circulation', formatTokenAmount(config.circulatingSupply)],
    ['Access mode', live ? 'LIVE' : 'SAFE-MODE'],
  ] as const;

  const tokenUtility = [
    {
      title: 'What the token is for',
      body: 'Weed Coin is the access layer for premium holder routing, gated drops, verified updates, and future private releases.',
    },
    {
      title: 'What the token is not for',
      body: 'It is not presented as guaranteed yield, passive income, or automatic status without verification.',
    },
    {
      title: 'What is live now',
      body: 'Public education, launch notes, risk guidance, tokenomics, and access preflight are live right now.',
    },
    {
      title: 'What unlocks later',
      body: 'Holder desk, gated vault, private releases, and full checkout activate only after mint, treasury, and route checks are confirmed.',
    },
  ] as const;

  const officialLinks = [
    {
      title: 'Official Telegram',
      value: telegramReady ? 'Ready' : 'Pending',
      href: config.telegramUrl || '/launch-notes',
      action: telegramReady ? 'Open Telegram' : 'Pending channel',
    },
    {
      title: 'Official X',
      value: xReady ? 'Ready' : 'Pending',
      href: config.xUrl || '/launch-notes',
      action: xReady ? 'Open X' : 'Pending channel',
    },
    {
      title: 'Token mint',
      value: mintReady ? 'Published in access desk' : 'Pending',
      href: '/access',
      action: 'Check mint',
    },
    {
      title: 'Treasury wallet',
      value: treasuryReady ? 'Published in access desk' : 'Pending',
      href: '/access',
      action: 'Check treasury',
    },
  ] as const;

  return (
    <main className="wcx-page">
      <section className="wcx-hero">
        <img
          className="wcx-hero-art"
          src="/brand/weed-coin-cyber-luxury-reference.png"
          alt="Weed Coin premium network composition"
        />
        <div className="wcx-hero-filter" />
        <div className="wcx-hero-orb wcx-hero-orb-a" />
        <div className="wcx-hero-orb wcx-hero-orb-b" />

        <header className="wcx-nav">
          <a className="wcx-brand" href="/">
            <span className="wcx-brand-mark">WC</span>
            <span>
              <strong>Weed Coin</strong>
              <small>Public launch shell and token access desk</small>
            </span>
          </a>

          <nav className="wcx-nav-links" aria-label="Public site navigation">
            <a href="#product">Product</a>
            <a href="#utility">Utility</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#buyer-flow">Buyer flow</a>
            <a href="#trust">Trust</a>
            <a className="wcx-nav-action" href="/access">Access</a>
          </nav>
        </header>

        <div className="wcx-hero-shell">
          <div className="wcx-hero-copy">
            <p className="wcx-kicker">Public product surface</p>
            <h1>
              Premium access,
              <br />
              clear tokenomics,
              <br />
              verified routes.
            </h1>
            <p className="wcx-lead">
              Weed Coin is a public-facing launch shell for buyers, holders, and partners. It explains what the token does,
              what is live right now, what remains gated, and how to move through the project without hype or route confusion.
            </p>
            <div className="wcx-action-row" aria-label="Primary actions">
              <Link className="wcx-btn wcx-btn-primary" href="/access">Check access status</Link>
              <Link className="wcx-btn" href="/launch-notes">Read launch notes</Link>
              <Link className="wcx-btn wcx-btn-ghost" href="/risk">Read risk boundary</Link>
            </div>
            <div className="wcx-hero-subgrid">
              <article className="wcx-mini-panel">
                <span>Live now</span>
                <strong>Public education, risk, launch notes, access preflight.</strong>
              </article>
              <article className="wcx-mini-panel">
                <span>Unlocks later</span>
                <strong>Holder desk, gated releases, wallet flow, checkout.</strong>
              </article>
            </div>
          </div>

          <aside className="wcx-console" aria-label="Launch state">
            <div className="wcx-console-head">
              <span>Launch console</span>
              <strong>{live ? 'Buyer flow enabled' : 'Buyer flow in preflight'}</strong>
            </div>
            <div className="wcx-stat-grid">
              {heroStats.map(([label, value]) => (
                <article className="wcx-stat" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="wcx-console-links">
              <span>Official route</span>
              <strong>{config.siteUrl}</strong>
              <p>Mint: {config.tokenMint || 'Pending official mint publication'}</p>
              <p>Treasury: {config.treasuryWallet || 'Pending treasury wallet publication'}</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="wcx-main">
        <section className="wcx-section" id="product">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Product</p>
              <h2>What the visitor actually gets here.</h2>
            </div>
            <p>
              The public site is not supposed to impress with adjectives. It is supposed to explain the product clearly:
              public information, verified access, holder utility, and a credible path for partner interest.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            {productSurfaces.map((item) => (
              <article className="wcx-card wcx-card-world" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className="wcx-inline-link" href={item.href}>{item.action}</Link>
              </article>
            ))}
          </div>

          <section className="wcx-showcase-band" aria-label="Weed Coin product showcase">
            <img
              className="wcx-showcase-image"
              src="/brand/weed-coin-brand-board-reference.png"
              alt="Weed Coin brand board"
            />
            <div className="wcx-showcase-copy">
              <p className="wcx-kicker">Official channels and references</p>
              <h2>The buyer should never guess where to go.</h2>
              <p>
                A serious token site exposes the official routes directly inside the product surface:
                channels, mint status, treasury status, and the access desk that verifies them.
              </p>
              <div className="wcx-grid wcx-grid-compact">
                {officialLinks.map((item) => (
                  <article className="wcx-card wcx-card-token" key={item.title}>
                    <span className="wcx-pill">{item.value}</span>
                    <h3>{item.title}</h3>
                    <Link className="wcx-inline-link" href={item.href}>{item.action}</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="wcx-section" id="utility">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Token utility</p>
              <h2>Why the token exists.</h2>
            </div>
            <p>
              Utility has to be explicit. The site now states what the token opens, what remains inactive until verification,
              and where premium value actually comes from.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            {tokenUtility.map((item) => (
              <article className="wcx-card wcx-card-emerald" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="wcx-grid wcx-grid-shop wcx-grid-margin">
            {ACCESS_LADDER.map((item) => (
              <article className="wcx-card wcx-card-gold" key={item.title}>
                <span className="wcx-tier">{item.price}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wcx-section" id="tokenomics">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Tokenomics</p>
              <h2>Numbers before narrative.</h2>
            </div>
            <p>
              Tokenomics belongs on the public landing because buyers should see supply structure and allocation logic before anyone asks for trust.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Supply</span>
              <h3>{formatTokenAmount(TOKEN_VALUES.TOKEN_TOTAL_SUPPLY)}</h3>
              <p>Total token supply.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Circulation</span>
              <h3>{formatTokenAmount(TOKEN_VALUES.TOKEN_CIRCULATING_SUPPLY)}</h3>
              <p>Initial circulating supply target.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Mint authority</span>
              <h3>{TOKEN_VALUES.MINT_AUTHORITY_STATUS}</h3>
              <p>Status of the mint authority on the public launch path.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Freeze authority</span>
              <h3>{TOKEN_VALUES.FREEZE_AUTHORITY_STATUS}</h3>
              <p>Status of the freeze authority on the public launch path.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Treasury policy</span>
              <h3>Controlled treasury</h3>
              <p>{TOKEN_VALUES.TREASURY_POLICY}</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Team vesting</span>
              <h3>Long-horizon release</h3>
              <p>{TOKEN_VALUES.TEAM_VESTING}</p>
            </article>
          </div>

          <div className="wcx-grid wcx-grid-token wcx-grid-margin">
            {TOKEN_ALLOCATION.map((item) => (
              <article className="wcx-card wcx-card-token" key={item.label}>
                <div className="wcx-token-row">
                  <strong>{item.label}</strong>
                  <b>{item.percent}%</b>
                </div>
                <div className="wcx-bar">
                  <span style={{ width: `${item.percent}%` }} />
                </div>
                <p className="wcx-token-amount">{formatTokenAmount(item.amount)}</p>
                <p>{item.purpose}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wcx-section" id="buyer-flow">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Buyer flow</p>
              <h2>How to move through the project safely.</h2>
            </div>
            <p>
              A good token site reduces buyer error. The sequence below is the intended order of action and the standard the public surface should enforce.
            </p>
          </div>

          <div className="wcx-doc-timeline">
            {BUYER_PROCESS.map((step, index) => (
              <article className="wcx-doc-timeline-item" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>Step {index + 1}</h3>
                  <p>{step}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wcx-section" id="trust">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Trust boundary</p>
              <h2>What the site will not pretend.</h2>
            </div>
            <p>
              The project needs a public boundary as much as it needs a brand surface. These rules protect the site from empty token language and route confusion.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            {trustRules.map((item) => (
              <article className="wcx-card wcx-card-world" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="wcx-community-grid wcx-grid-margin">
            <article className="wcx-panel">
              <p className="wcx-kicker">Holder services</p>
              <h3>What becomes premium after verification.</h3>
              <div className="wcx-feed">
                {HOLDER_SERVICES.map((item) => (
                  <div className="wcx-feed-item" key={item.title}>
                    <span>{item.state.slice(0, 2).toUpperCase()}</span>
                    <p>
                      <strong>{item.title}</strong>
                      <br />
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="wcx-panel">
              <p className="wcx-kicker">Infrastructure</p>
              <h3>What must stay visible on the site.</h3>
              <div className="wcx-feed">
                {INFRASTRUCTURE_LAYERS.map((item) => (
                  <div className="wcx-feed-item" key={item.title}>
                    <span>OK</span>
                    <p>
                      <strong>{item.title}</strong>
                      <br />
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="wcx-final">
          <div>
            <p className="wcx-kicker">Next step</p>
            <h2>Use the official route. Verify first. Then act.</h2>
            <p>
              The site should end with action, not noise. If the visitor needs more detail, send them to launch notes.
              If they need safety, send them to risk. If they need to know whether buying is possible, send them to access.
            </p>
          </div>
          <div className="wcx-action-row">
            <Link className="wcx-btn wcx-btn-primary" href="/access">Check access</Link>
            <Link className="wcx-btn" href="/launch-notes">Launch notes</Link>
            <Link className="wcx-btn wcx-btn-ghost" href="/risk">Risk boundary</Link>
            {telegramReady ? <a className="wcx-btn" href={config.telegramUrl}>Official Telegram</a> : null}
            {xReady ? <a className="wcx-btn" href={config.xUrl}>Official X</a> : null}
          </div>
        </section>
      </div>
    </main>
  );
}
