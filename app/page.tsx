import Link from 'next/link';
import { getPublicLaunchConfig, isPaymentFlowLive } from '@/lib/launch-config';
import {
  ACCESS_LADDER,
  BUYER_PERSONAS,
  BUYER_PROCESS,
  HOLDER_SERVICES,
  INFRASTRUCTURE_LAYERS,
  PRODUCT_PILLARS,
  REVIEW_CHAIN,
  REVENUE_LANES,
  TOKEN_ALLOCATION,
  TOKEN_VALUES,
  formatTokenAmount,
} from '@/lib/token-values';

const trustRules = [
  {
    title: 'No fake earnings story',
    body: 'The public site explains product, access, and launch rules. It does not manufacture price certainty or guaranteed upside.',
  },
  {
    title: 'One canonical route',
    body: 'Mint, treasury, launch notes, risk, and official channels belong on one public domain so buyers do not have to guess.',
  },
  {
    title: 'Utility before hype',
    body: 'Every section has to answer what a buyer, holder, creator, or partner can actually do here.',
  },
  {
    title: 'Review before publish',
    body: 'Research, security, implementation, and owner review should gate all public promises before they reach the landing.',
  },
] as const;

export default function Page() {
  const config = getPublicLaunchConfig();
  const live = isPaymentFlowLive(config);
  const telegramReady = Boolean(config.telegramUrl);
  const xReady = Boolean(config.xUrl);
  const launchWalletReady = Boolean(config.launchWallet);
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
      title: 'Access and verification',
      body: 'The token acts as the entrance layer for holder routing, gated updates, private releases, and verified membership states.',
    },
    {
      title: 'Commercial distribution',
      body: 'The site is built to convert attention into memberships, premium drops, partner lanes, and future token-gated offers.',
    },
    {
      title: 'Education and retention',
      body: 'The public layer teaches safer wallet behavior and token literacy first, then moves verified users into deeper product loops.',
    },
    {
      title: 'What stays off',
      body: 'Anything that cannot be verified yet stays in safe-mode. No fake “buy now” theatre and no false unlocks.',
    },
  ] as const;

  const officialLinks = [
    {
      title: 'Official Telegram',
      value: telegramReady ? 'Ready' : 'Pending',
      href: config.telegramUrl || '/launch-notes',
      action: telegramReady ? 'Open Telegram' : 'Track launch channel',
      external: telegramReady,
    },
    {
      title: 'Official X',
      value: xReady ? 'Ready' : 'Pending',
      href: config.xUrl || '/launch-notes',
      action: xReady ? 'Open X' : 'Track public posts',
      external: xReady,
    },
    {
      title: 'Launch wallet',
      value: launchWalletReady ? 'Published' : 'Pending',
      href: '/access',
      action: 'Check launch wallet',
      external: false,
    },
    {
      title: 'Token mint',
      value: mintReady ? 'Published' : 'Pending',
      href: '/access',
      action: 'Check mint status',
      external: false,
    },
    {
      title: 'Treasury wallet',
      value: treasuryReady ? 'Published' : 'Pending',
      href: '/access',
      action: 'Check treasury wallet',
      external: false,
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
              <small>Public token surface, access logic, and premium product route</small>
            </span>
          </a>

          <nav className="wcx-nav-links" aria-label="Public site navigation">
            <a href="#product">Product</a>
            <a href="#utility">Utility</a>
            <a href="#revenue">Revenue</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#buyer-flow">Buyer flow</a>
            <a className="wcx-nav-action" href="/access">Access</a>
          </nav>
        </header>

        <div className="wcx-hero-shell">
          <div className="wcx-hero-copy">
            <p className="wcx-kicker">Public launch shell</p>
            <h1>
              Build trust,
              <br />
              verify the route,
              <br />
              monetize the audience.
            </h1>
            <p className="wcx-lead">
              Weed Coin is not a decorative token page. It is the public entry layer for education, holder access,
              creator products, premium memberships, and partner conversion. The site exists to show what is real now,
              what opens after launch, and how a buyer should move without confusion.
            </p>
            <div className="wcx-action-row" aria-label="Primary actions">
              <Link className="wcx-btn wcx-btn-primary" href="/access">Check launch facts</Link>
              <a className="wcx-btn" href="#revenue">See revenue lanes</a>
              <Link className="wcx-btn wcx-btn-ghost" href="/risk">Read risk first</Link>
            </div>
            <div className="wcx-hero-subgrid">
              <article className="wcx-mini-panel">
                <span>What works today</span>
                <strong>Education, tokenomics, launch notes, anti-scam routing, and access preflight.</strong>
              </article>
              <article className="wcx-mini-panel">
                <span>What grows after launch</span>
                <strong>Holder desk, premium member lanes, creator products, partner campaigns, and token-gated releases.</strong>
              </article>
            </div>
          </div>

          <aside className="wcx-console" aria-label="Launch state">
            <div className="wcx-console-head">
              <span>Launch console</span>
              <strong>{live ? 'Payment route live' : 'Safe-mode preflight'}</strong>
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
              <p>Launch wallet: {config.launchWallet || 'Pending launch wallet publication'}</p>
              <p>Mint: {config.tokenMint || 'Pending official publication'}</p>
              <p>Treasury: {config.treasuryWallet || 'Pending treasury publication'}</p>
            </div>
          </aside>
        </div>
      </section>

      <div className="wcx-main">
        <section className="wcx-section" id="product">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Product map</p>
              <h2>What the project actually sells and unlocks.</h2>
            </div>
            <p>
              A serious token site has to show product lanes, not just visual mood. These are the lanes that turn traffic
              into participation, memberships, holder activity, and commercial follow-up.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            {PRODUCT_PILLARS.map((item) => (
              <article className="wcx-card wcx-card-world" key={item.title}>
                <span className="wcx-pill">{item.state}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="wcx-card-note">{item.action}</p>
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
              <p className="wcx-kicker">Official links and proof points</p>
              <h2>The first question is not hype. It is “where is the official route?”</h2>
              <p>
                The public surface has to publish the same channel block, token facts, and treasury references that moderators,
                operators, and buyers are expected to use. This is where that verification starts.
              </p>
              <div className="wcx-grid wcx-grid-compact">
                {officialLinks.map((item) => (
                  <article className="wcx-card wcx-card-token" key={item.title}>
                    <span className="wcx-pill">{item.value}</span>
                    <h3>{item.title}</h3>
                    {item.external ? (
                      <a className="wcx-inline-link" href={item.href}>{item.action}</a>
                    ) : (
                      <Link className="wcx-inline-link" href={item.href}>{item.action}</Link>
                    )}
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
              <h2>Why the token belongs in the system.</h2>
            </div>
            <p>
              The token needs explicit jobs: access control, premium routing, holder services, and deeper product release logic.
              Anything outside those jobs should not be represented as real.
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

        <section className="wcx-section" id="revenue">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Revenue logic</p>
              <h2>How this can become a money-making machine without lying.</h2>
            </div>
            <p>
              Conversion has to be grounded in actual offers: memberships, premium content, partner lanes, and holder upgrades.
              These are the revenue surfaces the site can credibly build toward.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            {REVENUE_LANES.map((item) => (
              <article className="wcx-card wcx-card-token" key={item.title}>
                <span className="wcx-pill">{item.state}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="wcx-grid wcx-grid-shop wcx-grid-margin">
            {BUYER_PERSONAS.map((item) => (
              <article className="wcx-card wcx-card-world" key={item.title}>
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
              Tokenomics belongs on the landing because buyers should see supply structure, launch authority status, and treasury rules
              before anyone asks for trust or action.
            </p>
          </div>

          <div className="wcx-grid wcx-grid-shop">
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Supply</span>
              <h3>{formatTokenAmount(TOKEN_VALUES.TOKEN_TOTAL_SUPPLY)}</h3>
              <p>Total token supply for the current launch model.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Circulation</span>
              <h3>{formatTokenAmount(TOKEN_VALUES.TOKEN_CIRCULATING_SUPPLY)}</h3>
              <p>Planned public circulation at the beginning of launch operations.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Mint authority</span>
              <h3>{TOKEN_VALUES.MINT_AUTHORITY_STATUS}</h3>
              <p>The site should show the real authority state, not imply a revocation that has not happened.</p>
            </article>
            <article className="wcx-card wcx-card-token">
              <span className="wcx-pill">Freeze authority</span>
              <h3>{TOKEN_VALUES.FREEZE_AUTHORITY_STATUS}</h3>
              <p>The same rule applies to freeze authority: publish fact, not theatre.</p>
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
              <h2>How a serious buyer should move through the project.</h2>
            </div>
            <p>
              The public site should lower confusion and raise intent. This sequence is the operational path from curiosity to safe participation.
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
              <h2>What the public site must refuse to do.</h2>
            </div>
            <p>
              Strong public surfaces do not just attract traffic. They protect buyers from wrong assumptions, fake urgency, and internal publishing mistakes.
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
              <p className="wcx-kicker">Infrastructure and review chain</p>
              <h3>What keeps public content honest.</h3>
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
                {REVIEW_CHAIN.map((item) => (
                  <div className="wcx-feed-item" key={item.title}>
                    <span>RV</span>
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
            <h2>Verify the facts. Choose the right lane. Then convert attention into action.</h2>
            <p>
              If the visitor wants token facts, send them to access. If they need product logic, keep them on the main page.
              If they need risk clarity, send them to risk. If they need proof of build discipline, send them to launch notes.
            </p>
          </div>
          <div className="wcx-action-row">
            <Link className="wcx-btn wcx-btn-primary" href="/access">Open access desk</Link>
            <a className="wcx-btn" href="#revenue">View revenue lanes</a>
            <Link className="wcx-btn" href="/launch-notes">Launch dossier</Link>
            <Link className="wcx-btn wcx-btn-ghost" href="/risk">Risk boundary</Link>
            {telegramReady ? <a className="wcx-btn" href={config.telegramUrl}>Official Telegram</a> : null}
          </div>
        </section>
      </div>
    </main>
  );
}
