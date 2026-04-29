import Link from 'next/link';

const launchStrips = [
  ['Build state', 'Live public shell'],
  ['Signal mode', 'Owner-led discipline'],
  ['Visual lane', 'Dark luxury + cyberpunk order'],
  ['Traffic rule', 'Route into site before chat'],
] as const;

const timeline = [
  [
    'Phase 01 · Reference decoding',
    'The public direction was aligned to the approved intake logic: premium surface, ordered navigation, and useful buyer context before promotional pressure.',
  ],
  [
    'Phase 02 · Public shell',
    'The main site was rebuilt around the same section rhythm as the intake HTML: grow, create, shop, business, world, and community.',
  ],
  [
    'Phase 03 · Trust frame',
    'Launch notes, risk, and access were positioned as first-class pages so buyers can verify structure, not just read slogans.',
  ],
  [
    'Phase 04 · Access control',
    'Token mint, treasury wallet, wallet-connect, and checkout remain gated behind explicit confirmation instead of theatrical readiness claims.',
  ],
] as const;

export default function LaunchNotesPage() {
  return (
    <main className="wcx-doc-page">
      <section className="wcx-doc-shell">
        <Link href="/" className="wcx-doc-back">Return to weed-coin.cash</Link>

        <header className="wcx-doc-hero">
          <div>
            <p className="wcx-kicker">Launch Notes</p>
            <h1>Public build dossier.</h1>
            <p className="wcx-doc-lead">
              This page keeps the live build sequence visible. It explains how Weed Coin is being assembled,
              what changed in the public surface, and why the site is structured as a controlled customer route
              rather than a noisy one-page hype shell.
            </p>
          </div>
          <aside className="wcx-doc-panel">
            <span className="wcx-pill">Live domain</span>
            <strong>weed-coin.cash</strong>
            <p>Public shell first. Trust and structure before amplification.</p>
          </aside>
        </header>

        <section className="wcx-doc-strip">
          {launchStrips.map(([label, value]) => (
            <article className="wcx-doc-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </section>

        <section className="wcx-doc-block">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Timeline</p>
              <h2>Ordered progress, not theatre.</h2>
            </div>
            <p>
              The point of this page is to show sequence. Every major public change should have a visible reason,
              a place in the buyer journey, and a clear relationship to launch safety.
            </p>
          </div>

          <div className="wcx-doc-timeline">
            {timeline.map(([title, body], index) => (
              <article className="wcx-doc-timeline-item" key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">What is live</p>
            <h2>Shipped public artifacts.</h2>
            <ul className="wcx-list">
              <li>Homepage rebuilt from the intake section logic</li>
              <li>Launch notes as the public operating log</li>
              <li>Risk page as a real trust boundary</li>
              <li>Access desk as the token readiness checkpoint</li>
            </ul>
          </article>

          <article className="wcx-doc-panel wcx-doc-panel-accent">
            <p className="wcx-kicker">Operating discipline</p>
            <h2>The public lane stays narrow.</h2>
            <ul className="wcx-list">
              <li>No fake traction or invented dashboards</li>
              <li>No checkout claims without configuration</li>
              <li>No internal office logic on the public path</li>
              <li>No vague partner talk without a destination</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
