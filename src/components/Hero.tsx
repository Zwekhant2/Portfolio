export function Hero() {
  return (
    <div className="wrap">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-kicker">Zwe Khant Lwin — Helsinki</p>

          <h1 className="hero-title">
            I build websites, and I run the servers that keep them online.
          </h1>

          <p className="hero-lede">
            Most of my work sits on the seam between those two things: a WordPress site that needs
            migrating without losing a page, a learning platform that needs a network designed
            around it, an invoicing app that needs a backend that actually exists. I finished a BBA
            in Business Information Technology at Haaga-Helia in 2026, wrote a thesis on WordPress
            security that was graded 5/5, and spent a traineeship at SpeedZone (Zone Media OY)
            doing client migrations and maintenance.
          </p>

          <p className="hero-lede">
            Below are five projects, written up properly — including the parts that went wrong.
          </p>

          <div className="hero-actions">
            <a className="link-underline" href="#work">
              Read the work
            </a>
            <a className="link-underline" href="mailto:zwekhantlwin5@gmail.com">
              zwekhantlwin5@gmail.com
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={`${import.meta.env.BASE_URL}photo.jpg`} alt="Zwe Khant Lwin" />
        </figure>
      </section>
    </div>
  )
}
