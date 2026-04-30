import Link from 'next/link';
import { getPublicLaunchConfig, isLaunchConfigComplete, isPaymentFlowLive } from '@/lib/launch-config';
import {
  BUYER_CTA_SEQUENCE,
  BUYER_PRECHECKS,
  BUYER_PROCESS,
  HOLDER_SERVICES,
  INFRASTRUCTURE_LAYERS,
  MONETIZATION_OFFERS,
  PREMIUM_DESK_STACK,
  REVIEW_CHAIN,
  REVENUE_LANES,
} from '@/lib/token-values';

export default function AccessPage() {
  const config = getPublicLaunchConfig();
  const complete = isLaunchConfigComplete(config);
  const live = isPaymentFlowLive(config);
  const pending = 'Pending owner confirmation';

  const checks = [
    ['Official Telegram', config.telegramUrl ? 'ready' : 'missing'],
    ['Official X', config.xUrl ? 'ready' : 'missing'],
    ['Launch wallet', config.launchWallet ? 'ready' : 'missing'],
    ['Token mint', config.tokenMint ? 'ready' : 'missing'],
    ['Treasury wallet', config.treasuryWallet ? 'ready' : 'missing'],
    ['Wallet connect', config.walletConnectEnabled ? 'enabled' : 'disabled'],
    ['Token checkout', config.tokenCheckoutEnabled ? 'enabled' : 'disabled'],
  ] as const;

  const tokenCards = [
    ['Token name / symbol', `${config.tokenName} (${config.tokenSymbol})`],
    ['Network / standard', `${config.tokenNetwork} / ${config.tokenStandard}`],
    ['Total supply', `${config.totalSupply.toLocaleString('en-US')} WEED`],
    ['Initial circulation', `${config.circulatingSupply.toLocaleString('en-US')} WEED`],
    ['Launch wallet', config.launchWallet || pending],
    ['Mint status', config.tokenMint || pending],
    ['Treasury status', config.treasuryWallet || pending],
  ] as const;

  return (
    <main className="wcx-doc-page">
      <section className="wcx-doc-shell">
        <Link href="/" className="wcx-doc-back">Return to weed-coin.cash</Link>

        <header className="wcx-doc-hero">
          <div>
            <p className="wcx-kicker">Access Desk</p>
            <h1>{live ? 'Access flow is live.' : 'Access flow preflight.'}</h1>
            <p className="wcx-doc-lead">
              This page is the official readiness surface for token access. It will not simulate live checkout.
              Payment unlock becomes real only after public links, mint, treasury, wallet-connect, and checkout
              settings are fully confirmed.
            </p>
          </div>
          <aside className="wcx-doc-panel">
            <span className="wcx-pill">Current mode</span>
            <strong>{live ? 'LIVE' : complete ? 'CONFIGURED / SAFE-MODE' : 'SAFE-MODE'}</strong>
            <p>Launch mode: {config.launchMode}</p>
          </aside>
        </header>

        <section className="wcx-doc-strip">
          {tokenCards.map(([label, value]) => (
            <article className="wcx-doc-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </section>

        <section className="wcx-doc-block">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Readiness checks</p>
              <h2>Every public prerequisite stays visible.</h2>
            </div>
            <p>The access desk is where a buyer sees whether official links, token identifiers, and payment rails are genuinely ready.</p>
          </div>

          <div className="wcx-doc-grid-3">
            {checks.map(([label, value]) => (
              <article className="wcx-doc-card" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </article>
            ))}
          </div>
        </section>

        {!live && (
          <section className="wcx-doc-panel wcx-doc-panel-accent">
            <p className="wcx-kicker">Safe-mode</p>
            <h2>Safe-mode is intentional.</h2>
            <p>
              Safe-mode means one or more launch values are still pending owner confirmation. This prevents fake checkout states,
              wrong wallet instructions, and premature claims that access is active when it is not.
            </p>
          </section>
        )}

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">What happens next</p>
            <h2>Route to live checkout.</h2>
            <ol className="wcx-list">
              <li>Confirm `TOKEN_MINT` and `TREASURY_WALLET`</li>
              <li>Keep `LAUNCH_WALLET` separate from `TOKEN_MINT` so the site does not label the operator wallet as the token mint</li>
              <li>Enable wallet-connect and checkout in environment</li>
              <li>Publish official mint confirmation through the public domain</li>
              <li>Open holder access only after verification passes</li>
            </ol>
          </article>

          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Use now</p>
            <h2>Current safe actions.</h2>
            <div className="wcx-action-row">
              <Link className="wcx-btn wcx-btn-primary" href="/launch-notes">Open launch notes</Link>
              <Link className="wcx-btn" href="/risk">Read risk boundary</Link>
              <Link className="wcx-btn" href="/">Review product map</Link>
              {config.telegramUrl ? <a className="wcx-btn" href={config.telegramUrl}>Official Telegram</a> : null}
              {config.xUrl ? <a className="wcx-btn" href={config.xUrl}>Official X</a> : null}
            </div>
          </article>
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">What buyers are really buying into</p>
            <h2>Access and premium routes.</h2>
            <div className="wcx-doc-mini-stack">
              {REVENUE_LANES.map((lane) => (
                <article className="wcx-doc-card" key={lane.title}>
                  <span>{lane.state}</span>
                  <strong>{lane.title}</strong>
                  <p>{lane.body}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Premium desk</p>
            <h2>What the access layer is preparing.</h2>
            <div className="wcx-doc-mini-stack">
              {PREMIUM_DESK_STACK.map((item) => (
                <article className="wcx-doc-card" key={item.title}>
                  <span>{item.state}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Actual offers</p>
            <h2>What can be sold without pretending mint is live.</h2>
            <div className="wcx-doc-mini-stack">
              {MONETIZATION_OFFERS.map((item) => (
                <article className="wcx-doc-card" key={item.title}>
                  <span>{item.state}</span>
                  <strong>{item.title}</strong>
                  <p>{item.deliverable}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Action sequence</p>
            <h2>What the next safe step actually is.</h2>
            <div className="wcx-doc-mini-stack">
              {BUYER_CTA_SEQUENCE.map((item) => (
                <article className="wcx-doc-card" key={item.step}>
                  <span>{item.step}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Editorial gate</p>
            <h2>No public claim ships without review.</h2>
            <div className="wcx-doc-mini-stack">
              {REVIEW_CHAIN.map((item) => (
                <article className="wcx-doc-card" key={item.title}>
                  <span>review</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Pre-checks</p>
            <h2>What has to be true before any payment flow.</h2>
            <div className="wcx-doc-mini-stack">
              {BUYER_PRECHECKS.map((item) => (
                <article className="wcx-doc-card" key={item}>
                  <span>pre-check</span>
                  <strong>Gate</strong>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Editorial gate</p>
            <h2>Holder services after verification.</h2>
            <div className="wcx-doc-mini-stack">
              {HOLDER_SERVICES.map((item) => (
                <article className="wcx-doc-card" key={item.title}>
                  <span>{item.state}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Infrastructure</p>
            <h2>Verification stays product-visible.</h2>
            <div className="wcx-doc-mini-stack">
              {INFRASTRUCTURE_LAYERS.map((layer) => (
                <article className="wcx-doc-card" key={layer.title}>
                  <span>{layer.examples}</span>
                  <strong>{layer.title}</strong>
                  <p>{layer.body}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="wcx-doc-block">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Buyer sequence</p>
              <h2>Do not skip verification.</h2>
            </div>
            <p>
              The correct buying route is controlled and sequential. If a link or actor tries to bypass this order, treat it as untrusted.
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
      </section>
    </main>
  );
}
