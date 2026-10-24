/** หัวหน้าย่อย (Statistic / Our Team): รูปพื้นหลัง + overlay สีกรม */
export default function PageHero({ img, title, hl, sub }) {
  return (
    <section className="hero page">
      <img src={img} alt="" />
      <div className="hero-in">
        <p className="eyebrow">TISC 2026</p>
        <h1>{title}</h1>
        <p className="motto">{hl}</p>
        <p className="lead">{sub}</p>
      </div>
    </section>
  );
}
