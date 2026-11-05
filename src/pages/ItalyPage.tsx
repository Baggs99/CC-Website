export function ItalyPage() {
  return (
    <section className="italy-page" aria-labelledby="italy-title">
      <div
        className="italy-flag-shell"
        role="img"
        aria-label="A large waving Italian flag"
      >
        <div className="italy-flag" aria-hidden />
      </div>

      <div className="italy-copy">
        <h1 id="italy-title">Italy</h1>
        <p>A simple page. A massive flag.</p>
      </div>
    </section>
  );
}
