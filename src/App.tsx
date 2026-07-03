import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Globe2,
  HeartHandshake,
  MapPin,
  Menu,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const navItems = [
  "Home",
  "Tour Packages",
  "Visa Services",
  "Client Gallery",
  "Visa Success",
  "Reviews",
  "About",
  "Contact",
];

const packages = [
  {
    title: "Signature Holiday Packages",
    copy: "Premium itineraries for families, couples, and groups with a polished planning experience.",
    meta: "Curated stays, transport, and guidance",
  },
  {
    title: "Custom Destination Planning",
    copy: "Flexible travel builds shaped around budget, dates, occasion, and comfort level.",
    meta: "Built for domestic and international travel",
  },
  {
    title: "Group Travel Coordination",
    copy: "Organized support for larger client groups, from planning through documentation.",
    meta: "Clear timelines and communication",
  },
];

const visaServices = [
  "Tourist visa guidance",
  "Document checklist preparation",
  "Application review support",
  "Appointment and status coordination",
];

const galleryImages = [
  {
    title: "Client Departures",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Memorable Trips",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Family Travel",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];

const successItems = ["Approved visa", "Happy client", "Ready to fly"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main>
      <header className="site-header" id="home">
        <a className="brand" href="#home" aria-label="RJAS home">
          <span className="brand-mark">R</span>
          <span>
            <strong>RJAS</strong>
            <small>Travel & Visa Services</small>
          </span>
        </a>

        <button
          className="icon-button"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${slugify(item)}`}>
              {item}
            </a>
          ))}
        </nav>

        <nav
          className={`mobile-nav ${isMenuOpen ? "is-open" : ""}`}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${slugify(item)}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-media" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} /> Premium travel planning
          </p>
          <h1 id="hero-title">RJAS premium travel and visa services</h1>
          <p className="hero-copy">
            A refined digital home for tour packages, visa services, client moments,
            approved visa stories, and trusted reviews from 150+ happy clients.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#tour-packages">
              Explore Packages <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#contact">
              Contact RJAS
            </a>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="RJAS highlights">
        <div>
          <strong>150+</strong>
          <span>Happy Clients</span>
        </div>
        <div>
          <strong>Premium</strong>
          <span>Travel Support</span>
        </div>
        <div>
          <strong>Visa</strong>
          <span>Success Gallery</span>
        </div>
      </section>

      <section className="section" id="tour-packages" aria-labelledby="packages-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Plane size={16} /> Tour Packages
          </p>
          <h2 id="packages-title">Travel experiences with polish and clarity</h2>
        </div>
        <div className="card-grid">
          {packages.map((item) => (
            <article className="service-card" key={item.title}>
              <Globe2 className="card-icon" size={26} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="visa-services" aria-labelledby="visa-title">
        <div>
          <p className="eyebrow">
            <ShieldCheck size={16} /> Visa Services
          </p>
          <h2 id="visa-title">Documentation support built around trust</h2>
          <p>
            RJAS can present visa services with a calm, premium flow that helps clients
            understand requirements, next steps, and success stories without confusion.
          </p>
        </div>
        <div className="check-list">
          {visaServices.map((item) => (
            <div key={item}>
              <BadgeCheck size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="client-gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Camera size={16} /> Client Gallery
          </p>
          <h2 id="gallery-title">Client journeys, shown beautifully</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <article className="photo-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section success-section" id="visa-success" aria-labelledby="success-title">
        <div className="section-heading">
          <p className="eyebrow">
            <BadgeCheck size={16} /> Approved Visa Success Gallery
          </p>
          <h2 id="success-title">Approved visa moments ready for a premium showcase</h2>
        </div>
        <div className="success-grid">
          {successItems.map((item, index) => (
            <article className="success-card" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>Placeholder card for verified RJAS visa success content.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split reviews" id="reviews" aria-labelledby="reviews-title">
        <div>
          <p className="eyebrow">
            <Star size={16} /> Reviews
          </p>
          <h2 id="reviews-title">150+ happy clients and growing</h2>
          <p>
            The review section is ready for client testimonials, star ratings, and social
            proof once real copy and approved media are available.
          </p>
        </div>
        <blockquote>
          "RJAS made our travel plan feel simple, clear, and special from start to finish."
          <cite>Sample client review</cite>
        </blockquote>
      </section>

      <section className="section split" id="about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">
            <HeartHandshake size={16} /> About
          </p>
          <h2 id="about-title">A premium rebuild for a trusted travel brand</h2>
        </div>
        <p>
          This scaffold positions RJAS as a polished travel and visa service provider,
          with space for brand story, trust signals, destinations, client proof, and future
          Supabase-backed content if needed.
        </p>
      </section>

      <section className="section contact" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">
            <MapPin size={16} /> Contact
          </p>
          <h2 id="contact-title">Start a premium RJAS inquiry</h2>
          <p>
            Contact form integration can be added later without storing credentials in the
            repository.
          </p>
        </div>
        <form aria-label="RJAS contact inquiry" onSubmit={handleInquirySubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone or Email
            <input type="text" name="contact" placeholder="How should RJAS reach you?" />
          </label>
          <label>
            Inquiry
            <textarea name="message" placeholder="Tell us what you want to plan" />
          </label>
          <button className="button primary" type="submit">
            Send Inquiry <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default App;
