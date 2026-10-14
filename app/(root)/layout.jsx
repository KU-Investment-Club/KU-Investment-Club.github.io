export const metadata = { title: "TISC 2026 – Thailand Intercollegiate Stock Challenge", robots: { index: false } };

export default function RootRedirectLayout({ children }) {
  return <html lang="th"><body>{children}</body></html>;
}
