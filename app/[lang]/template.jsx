/* template = remounts on every navigation → replays the page-enter animation (see globals.css) */
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
