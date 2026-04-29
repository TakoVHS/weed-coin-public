import Link from 'next/link';

const privacyRules = [
  'The public site should collect as little personal data as possible.',
  'Operational analytics should be limited to uptime, traffic quality, and abuse prevention.',
  'Wallet addresses are treated as public blockchain identifiers, not as identity proof by themselves.',
  'Private operator, office, and robot data stay outside the public site contour.',
] as const;

export default function PrivacyPage() {
  return (
    <main className="wcx-doc-page">
      <section className="wcx-doc-shell">
        <Link href="/" className="wcx-doc-back">Return to weed-coin.cash</Link>

        <header className="wcx-doc-hero">
          <div>
            <p className="wcx-kicker">Privacy</p>
            <h1>Minimal public-data policy.</h1>
            <p className="wcx-doc-lead">
              The public Weed Coin site is meant to explain the product, not to harvest private data.
              This page states the default rule: keep public collection minimal, keep sensitive operations off the public lane,
              and keep the private office contour out of the marketing surface.
            </p>
          </div>
          <aside className="wcx-doc-panel">
            <span className="wcx-pill">Privacy rule</span>
            <strong>Public by design, minimal by default.</strong>
            <p>Only the data needed to operate the public site safely should be processed here.</p>
          </aside>
        </header>

        <section className="wcx-doc-strip">
          {privacyRules.map((item, index) => (
            <article className="wcx-doc-card" key={item}>
              <strong>Rule {index + 1}</strong>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="wcx-doc-dual">
          <article className="wcx-doc-panel">
            <p className="wcx-kicker">Public-site scope</p>
            <h2>What may be processed.</h2>
            <ul className="wcx-list">
              <li>Basic HTTP logs and uptime telemetry</li>
              <li>Abuse and rate-limit signals</li>
              <li>Optional launch-form or contact submissions, if explicitly enabled later</li>
              <li>Public blockchain references used for token verification</li>
            </ul>
          </article>

          <article className="wcx-doc-panel wcx-doc-panel-accent">
            <p className="wcx-kicker">Out of scope</p>
            <h2>What stays private.</h2>
            <ul className="wcx-list">
              <li>Internal office workflows</li>
              <li>Bot control channels and control-plane events</li>
              <li>Operator CRM data and employee records</li>
              <li>Secrets, treasury operations, and internal dispatch payloads</li>
            </ul>
          </article>
        </section>
      </section>
    </main>
  );
}
