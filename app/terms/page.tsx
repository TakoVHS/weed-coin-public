import Link from 'next/link';

const termPoints = [
  'Public content is informational and brand-operational in nature.',
  'Nothing on the public site should be interpreted as guaranteed financial outcome.',
  'Official token references must be taken only from the verified public routes.',
  'Access to future gated services may change as launch conditions and verification rules evolve.',
] as const;

export default function TermsPage() {
  return (
    <main className="wcx-doc-page">
      <section className="wcx-doc-shell">
        <Link href="/" className="wcx-doc-back">Return to weed-coin.cash</Link>

        <header className="wcx-doc-hero">
          <div>
            <p className="wcx-kicker">Terms</p>
            <h1>Public use terms.</h1>
            <p className="wcx-doc-lead">
              These terms govern the public Weed Coin site as an information, access, and launch-communication surface.
              They do not grant any hidden guarantee, and they do not replace the need to read the risk disclosure before taking token-related action.
            </p>
          </div>
          <aside className="wcx-doc-panel wcx-doc-panel-accent">
            <span className="wcx-pill">Terms rule</span>
            <strong>Use the site as a verified source, not as a promise engine.</strong>
            <p>Official materials are for structured access and public guidance only.</p>
          </aside>
        </header>

        <section className="wcx-doc-strip">
          {termPoints.map((item, index) => (
            <article className="wcx-doc-card" key={item}>
              <strong>Point {index + 1}</strong>
              <p>{item}</p>
            </article>
          ))}
        </section>

        <section className="wcx-doc-block">
          <div className="wcx-section-head">
            <div>
              <p className="wcx-kicker">Core conditions</p>
              <h2>Clear boundaries for public use.</h2>
            </div>
            <p>
              The public site exists to make the project legible. It is not a replacement for independent review,
              legal compliance in the user’s jurisdiction, or secure wallet behavior.
            </p>
          </div>

          <div className="wcx-doc-timeline">
            {[
              'Use only the official domain and linked channels.',
              'Do not treat any unofficial screenshot, DM, or repost as a valid token instruction.',
              'Assume payment and wallet flows are inactive until the access page states otherwise.',
              'If public terms and public risk conflict with a chat message, the site controls.',
            ].map((item, index) => (
              <article className="wcx-doc-timeline-item" key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>Condition {index + 1}</h3>
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
