export function SystemChrome() {
  return (
    <div className="system-chrome" aria-hidden="true">
      <span className="system-chrome__noise" />
      <span className="system-chrome__grid" />
      <span className="system-chrome__glow system-chrome__glow--cyan" />
      <span className="system-chrome__glow system-chrome__glow--armor" />
      <span className="system-chrome__edge system-chrome__edge--left" />
      <span className="system-chrome__edge system-chrome__edge--right" />
    </div>
  );
}
