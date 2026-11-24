
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Free Forex Education",
    description:
      "Build your trading foundation through structured lessons, practical examples and market knowledge.",
  },
  {
    number: "02",
    title: "Storm Market Analysis",
    description:
      "Explore market structure, volatility, options intelligence and institutional market behaviour.",
  },
  {
    number: "03",
    title: "Premium Signals",
    description:
      "Access our premium trading ideas, market setups and educational trade breakdowns.",
  },
  {
    number: "04",
    title: "Private Mentorship",
    description:
      "Develop your trading knowledge through focused one-on-one learning sessions.",
  },
];

const topics = [
  "Delta",
  "Vega",
  "Gamma",
  "Theta",
  "Beta",
  "Implied Volatility (IV)",
  "IV Skew",
  "Options Chains",
  "Footprint Charts",
  "Dealer & Hedger Positioning",
  "Order Book / Depth of Market",
  "Trader Protection",
  "Futures-to-Spot Discrepancy",
  "Market Timing",
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="brand">
          PIZZO <span>FX</span>
        </Link>

        <nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#education">Education</Link>
          <Link href="#event">Our Event</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <a
          href="https://wa.me/254753529501"
          className="nav-button"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">PROFESSIONAL FOREX EDUCATION</p>

          <h1>
            Understand the
            <br />
            Market. <span>Master Your</span>
            <br />
            Strategy.
          </h1>

          <p className="hero-description">
            Welcome to PIZZO FX — a professional trading education
            platform dedicated to market intelligence, technical
            knowledge, discipline and strategic development.
          </p>

          <div className="hero-actions">
            <a href="#event" className="primary-button">
              Explore Our Event
            </a>
            <a href="#education" className="secondary-button">
              Start Learning
            </a>
          </div>

          <div className="hero-note">
            LEARN WITH PURPOSE. TRADE WITH DISCIPLINE.
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <p className="visual-label">PIZZO FX</p>
            <div className="chart-symbol">↗</div>
            <h2>STORM MARKET</h2>
            <p>WITH PIZZO</p>
            <div className="chart-bars">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <small>MARKET INTELLIGENCE • EDUCATION • STRATEGY</small>
          </div>
        </div>
      </section>

      <section className="intro section" id="about">
        <p className="eyebrow">WELCOME TO PIZZO FX</p>
        <h2>Beyond Trading. Into Market Understanding.</h2>
        <p>
          We believe successful trading development starts with
          education, patience, risk management and understanding
          the forces that influence financial markets.
        </p>
      </section>

      <section className="services section" id="education">
        <div className="section-heading">
          <p className="eyebrow">WHAT WE OFFER</p>
          <h2>Explore the PIZZO FX Experience</h2>
          <p>Knowledge, strategy and structured trading development.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="event-section" id="event">
        <div className="event-content">
          <p className="eyebrow">THE NEXT BIG EXPERIENCE</p>
          <h2>STORM MARKET WITH PIZZO</h2>
          <p className="event-description">
            An advanced market education experience exploring
            volatility, options intelligence, order flow,
            dealer positioning and market timing.
          </p>

          <div className="event-details">
            <div>
              <strong>05 DECEMBER 2026</strong>
              <span>Event date</span>
            </div>
            <div>
              <strong>10:30 AM – 5:00 PM</strong>
              <span>East Africa Time</span>
            </div>
            <div>
              <strong>SARIT CENTRE</strong>
              <span>Loita Hall, Kenya</span>
            </div>
          </div>

          <p className="capacity">
            Maximum event capacity: 3,500 people.
          </p>

          <a
            href="https://wa.me/254753529501?text=Hello%20PIZZO%20FX%2C%20I%20am%20interested%20in%20the%20Storm%20Market%20with%20Pizzo%20event."
            className="primary-button"
            target="_blank"
            rel="noreferrer"
          >
            Enquire About Registration
          </a>

          <p className="registration-note">
            Registration expresses interest only. It does not
            guarantee a confirmed seat. Our team will follow up
            through WhatsApp. No certificates will be issued.
          </p>
        </div>
      </section>

      <section className="curriculum section">
        <div className="section-heading">
          <p className="eyebrow">EVENT CURRICULUM</p>
          <h2>Explore the Market at a Deeper Level</h2>
          <p>
            Advanced market intelligence and trading education.
          </p>
        </div>

        <div className="topic-grid">
          {topics.map((topic, index) => (
            <div className="topic" key={topic}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {topic}
            </div>
          ))}
        </div>
      </section>

      <section className="community section">
        <p className="eyebrow">JOIN THE COMMUNITY</p>
        <h2>Grow Your Market Knowledge With Us.</h2>
        <p>
          Stay connected with PIZZO FX for educational updates,
          market discussions and future learning opportunities.
        </p>
        <a
          href="https://whatsapp.com/channel/0029VbDZIxA6hENsCwsti53f"
          className="primary-button"
          target="_blank"
          rel="noreferrer"
        >
          Join WhatsApp Channel
        </a>
      </section>

      <footer className="footer" id="contact">
        <div>
          <Link href="/" className="brand footer-brand">
            PIZZO <span>FX</span>
          </Link>
          <p>Learn. Understand. Develop. Grow.</p>
        </div>

        <div className="footer-contact">
          <a href="https://wa.me/254753529501">+254 753 529501</a>
          <a href="https://wa.me/254737116103">+254 737 116103</a>
          <a
            href="https://www.tiktok.com/@pizzo-fx"
            target="_blank"
            rel="noreferrer"
          >
            TikTok: @pizzo-fx
          </a>
        </div>

        <p className="disclaimer">
          Forex trading involves substantial financial risk.
          Educational content is not personalized financial advice.
          Trading signals do not guarantee profits. Past performance
          does not guarantee future results.
        </p>

        <p className="copyright">
          © 2026 PIZZO FX. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
