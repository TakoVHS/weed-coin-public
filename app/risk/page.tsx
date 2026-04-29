import Link from 'next/link';

const principles = [
  ['No guarantees', 'Nothing on the public site should be read as guaranteed return, guaranteed utility, or guaranteed liquidity.'],
  ['Volatility exists', 'Any token path can involve loss, slippage, illiquidity, execution delays, or changing market conditions.'],
  ['Trust before traffic', 'The project rejects fake APY, fake urgency, fake partner logos, and synthetic certainty as acquisition tactics.'],
  ['Standards matter', 'Impersonation, hidden links, manipulative claims, and private-wallet pressure are outside the acceptable public culture.'],
] as const;

export default function RiskPage() {
  return (
    <main className="wcx-doc-page">
      <section className="wcx-doc-shell">
        <Link href="/" className="wcx-doc-back">Return to weed-coin.cash</Link>

        <header className="wcx-doc-hero">
          <div>
            <p className="wcx-kicker">Risk Disclosure</p>
            <h1>Plain-language trust boundary.</h1>
            <p className="wcx-doc-lead">
              Weed Coin is a live public build and communication surface. This site is not investment advice,
              not a profit promise, and not a substitute for independent judgment. The value of this page is clarity.
            </p>
          </div>
          <aside className="wcx-doc-panel wcx-doc-panel-accent">
            <span className="wcx-pill">Risk rule</span>
            <strong>No fake certainty.</strong>
            <p>The brand gets stronger when the trust boundary is explicit and readable.</p>
          </aside>
        </header>

        <section className="wcx-doc-strip">
          {principles.map(([title, body]) => (
            <article className="wcx-doc-card" key={title}>
              <strong>{title}</strong>
              <p>{body}</p>
            </article>
          ))}
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">This site is</p>
            <h2>A public launch shell.</h2>
            <ul className="wcx-list">
              <li>A buyer education surface</li>
              <li>A launch and trust documentation layer</li>
              <li>A source for official routes and verified references</li>
              <li>A controlled public entry into the Weed Coin ecosystem</li>
            </ul>
          </article>

          <article className="wcx-doc-panel wcx-doc-panel-accent">
            <p className="wcx-kicker">This site is not</p>
            <h2>A certainty machine.</h2>
            <ul className="wcx-list">
              <li>Not a promise of return or price behavior</li>
              <li>Not proof that every utility layer is already live</li>
              <li>Not a reason to skip wallet or route verification</li>
              <li>Not permission for hype theatre or misleading claims</li>
            </ul>
          </article>
        </section>

        <section className="wcx-doc-block">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Practical reading</p>
              <h2>How to use this page correctly.</h2>
            </div>
            <p>
              Read the risk page before any buy decision, before joining a channel, and before accepting any mint or treasury
              address from outside the public site. This page exists to reduce wrong assumptions.
            </p>
          </div>

          <div className="wcx-doc-timeline">
            {[
              'Use only the official public domain as the reference point.',
              'Verify mint and treasury only when the access desk confirms them.',
              'Ignore any promise that skips launch notes, risk, or access verification.',
              'Treat urgency without verification as a hostile signal.',
            ].map((item, index) => (
              <article className="wcx-doc-timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>Rule {index + 1}</h3>
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
