/* "/" → /th/ or /en/ (saved choice → browser language → Thai).
   Also maps the old hash URLs (#/statistic, #/our-team, #/our-team-ibmp) to the new pages. */
const script = `(function(){
  var l; try { l = localStorage.getItem("lang"); } catch (e) {}
  if (l !== "th" && l !== "en") l = /^th\\b/i.test(navigator.language || "th") ? "th" : "en";
  var m = { "#/statistic": "statistic/", "#/our-team": "our-team/", "#/our-team-ibmp": "our-team/#ibmp" };
  var h = location.hash, p = m[h] || (h && h.indexOf("#/") !== 0 ? h : "");
  location.replace("/" + l + "/" + p);
})();`;

export default function RootRedirect() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript><meta httpEquiv="refresh" content="0; url=/th/" /></noscript>
      <p style={{ fontFamily: "system-ui", padding: 24 }}><a href="/th/">ภาษาไทย</a> · <a href="/en/">English</a></p>
    </>
  );
}
