import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Facebook,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";

const facebookUrl = "https://www.facebook.com/RJASTravelAndTours";
const messengerUrl = "https://m.me/RJASTravelAndTours";

const navItems = [
  ["Home", "home"],
  ["Tour Packages", "tour-packages"],
  ["Visa Services", "visa-services"],
  ["Visa Success", "visa-success"],
  ["Client Gallery", "client-gallery"],
  ["Reviews", "reviews"],
  ["About", "about"],
  ["Contact", "contact"],
];

const trustBadges = [
  "DOT Accredited",
  "Trusted Travel Agency",
  "Professional Visa Assistance",
  "Thousands of Happy Travelers",
];

const tourPackages = [
  "Japan",
  "Korea",
  "Taiwan",
  "Vietnam",
  "Thailand",
  "Singapore",
  "Malaysia",
  "China",
  "Hong Kong",
  "Macau",
  "Bali",
  "Australia",
  "New Zealand",
  "USA",
  "Canada",
  "Europe",
];

const visaServices = [
  "Japan Visa",
  "Korea Visa",
  "Australia Visa",
  "Canada Visa",
  "USA Visa",
  "Schengen Visa",
  "UK Visa",
  "New Zealand Visa",
  "China Visa",
  "Dubai Visa",
];

const reviewCards = [
  {
    title: "Overall 5-Star Service Standard",
    service: "RJAS International Travel & Tours",
    text: "A premium review showcase for verified client feedback, designed to direct visitors to the official RJAS Facebook page for current reviews.",
  },
  {
    title: "Professional Visa Assistance",
    service: "Trust Signal",
    text: "Clear documentation guidance, organized application support, and professional communication for international travelers.",
  },
  {
    title: "Trusted Travel Planning",
    service: "Trust Signal",
    text: "International tour package support for families, couples, groups, and individual travelers planning meaningful journeys.",
  },
];

const clientGallery = [
  {
    title: "Premium Airport Departures",
    note: "Licensed destination-style placeholder until official RJAS client photos are uploaded",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "International City Escapes",
    note: "Elegant destination placeholder for future RJAS travel stories",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Couple Travel Moments",
    note: "Candid travel placeholder until official RJAS client photos are uploaded",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Friends Exploring Cities",
    note: "Premium city travel placeholder for future RJAS group tour photos",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Luxury Resort Holidays",
    note: "Elegant vacation placeholder until official RJAS client photos are uploaded",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Senior Traveler Journeys",
    note: "Refined travel placeholder ready to be replaced with real RJAS client photos",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=90",
  },
];

const visaSuccessGallery = [
  {
    title: "Approved Visa Showcase",
    story: "Elegant placeholder area for official approved visa photos and verified success posts.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Multiple Entry Approvals",
    story: "Designed so real multiple-entry approval photos can replace this placeholder cleanly.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Family Visa Assistance",
    story: "Prepared for official RJAS family approval stories and documentation highlights.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Ready To Fly Success",
    story: "A conversion-focused success slot for travelers moving from approval to departure.",
    image:
      "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1400&q=90",
  },
];

type GalleryItem = {
  title: string;
  image: string;
  note?: string;
  story?: string;
};

function App() {
  const [activeReview, setActiveReview] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviewCards.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  function moveReview(direction: "previous" | "next") {
    setActiveReview((current) => {
      if (direction === "previous") {
        return current === 0 ? reviewCards.length - 1 : current - 1;
      }

      return (current + 1) % reviewCards.length;
    });
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="RJAS International Travel and Tours home">
          <span className="brand-mark">RJAS</span>
          <span>
            <strong>RJAS International Travel & Tours</strong>
            <small>Your Journey. Our Priority.</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section" id="home" aria-labelledby="hero-title">
        <div className="hero-media" />
        <div className="hero-content">
          <p className="eyebrow">
            <Plane size={16} /> Professional travel planning
          </p>
          <h1 id="hero-title">RJAS International Travel & Tours</h1>
          <p className="tagline">Your Journey. Our Priority.</p>
          <div className="hero-services" aria-label="Featured services">
            <span>Visa Assistance</span>
            <span>International Tour Packages</span>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#visa-services">
              Apply for Visa <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#tour-packages">
              View Tour Packages
            </a>
            <a className="button gold" href={messengerUrl} target="_blank" rel="noreferrer">
              Message Us <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="RJAS trust badges">
        {trustBadges.map((badge) => (
          <div key={badge}>
            <BadgeCheck size={20} />
            <span>{badge}</span>
          </div>
        ))}
      </section>

      <section className="section intro-grid" id="about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">
            <BriefcaseBusiness size={16} /> About RJAS
          </p>
          <h2 id="about-title">Premium travel and visa assistance from Makati City</h2>
        </div>
        <p>
          RJAS International Travel & Tours provides professional travel planning, visa
          assistance, and international tour package support for clients preparing for
          memorable journeys across Asia, North America, Australia, New Zealand, and Europe.
        </p>
      </section>

      <section className="section" id="tour-packages" aria-labelledby="packages-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Globe2 size={16} /> Tour Packages
          </p>
          <h2 id="packages-title">International destinations arranged with care</h2>
        </div>
        <div className="destination-grid">
          {tourPackages.map((destination) => (
            <article className="destination-card" key={destination}>
              <span>{destination}</span>
              <p>Premium RJAS tour package planning and travel coordination.</p>
              <a href="#contact">Inquire now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section" id="visa-services" aria-labelledby="visa-title">
        <div className="section-heading">
          <p className="eyebrow">
            <ShieldCheck size={16} /> Visa Services
          </p>
          <h2 id="visa-title">Professional visa assistance for international travelers</h2>
        </div>
        <div className="service-grid">
          {visaServices.map((service) => (
            <article className="service-card" key={service}>
              <ShieldCheck size={24} />
              <h3>{service}</h3>
              <p>Document checklist guidance, application preparation, and client support.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="visa-success" aria-labelledby="success-title">
        <div className="section-heading">
          <p className="eyebrow">
            <BadgeCheck size={16} /> Visa Success
          </p>
          <h2 id="success-title">Visa success gallery designed for approved RJAS stories</h2>
          <p>
            A professional gallery for approved visa photos, multiple entry approvals, family
            approvals, and documented success moments.
          </p>
        </div>
        <Gallery items={visaSuccessGallery} onOpen={setLightboxItem} />
      </section>

      <section className="section cream-section" id="client-gallery" aria-labelledby="gallery-title">
        <div className="section-heading">
          <p className="eyebrow">
            <Camera size={16} /> Client Gallery
          </p>
          <h2 id="gallery-title">Elegant travel inspiration for future RJAS client stories</h2>
          <p>
            Premium licensed travel photography is used as a temporary visual system until
            official RJAS client photos are uploaded. The layout is ready for direct photo
            replacement.
          </p>
        </div>
        <Gallery items={clientGallery} onOpen={setLightboxItem} />
      </section>

      <section className="section reviews-section" id="reviews" aria-labelledby="reviews-title">
        <div className="reviews-copy">
          <p className="eyebrow">
            <Star size={16} /> Client Reviews
          </p>
          <h2 id="reviews-title">Trusted by travelers nationwide</h2>
          <div className="stats-grid">
            <div>
              <strong>150+</strong>
              <span>Happy Clients</span>
            </div>
            <div>
              <strong>Nationwide</strong>
              <span>Traveler Trust</span>
            </div>
            <div>
              <strong>Thousands</strong>
              <span>Successful Visa Applications Processed</span>
            </div>
          </div>
        </div>

        <div className="review-carousel" aria-live="polite">
          <article className="review-card">
            <div className="stars" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
            <h3>{reviewCards[activeReview].title}</h3>
            <p>{reviewCards[activeReview].text}</p>
            <span>{reviewCards[activeReview].service}</span>
          </article>
          <div className="carousel-controls">
            <button type="button" aria-label="Previous review" onClick={() => moveReview("previous")}>
              <ChevronLeft size={20} />
            </button>
            <a className="button primary" href={facebookUrl} target="_blank" rel="noreferrer">
              Read More Reviews on Facebook
            </a>
            <button type="button" aria-label="Next review" onClick={() => moveReview("next")}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">
            <MapPin size={16} /> Contact RJAS
          </p>
          <h2 id="contact-title">Plan your next journey with RJAS International Travel & Tours</h2>
          <div className="contact-actions">
            <a className="button primary" href={messengerUrl} target="_blank" rel="noreferrer">
              Messenger <MessageCircle size={18} />
            </a>
            <a className="button outline" href={facebookUrl} target="_blank" rel="noreferrer">
              Facebook <Facebook size={18} />
            </a>
          </div>
        </div>
        <div className="contact-panel">
          <ContactLine icon={<MapPin size={20} />} label="Address">
            Unit 204, 2F Ansa II Bldg., 1078 Don Chino Roces Avenue, Montojo St.,
            Brgy. Tejeros, Makati City
          </ContactLine>
          <ContactLine icon={<Phone size={20} />} label="Telephone">
            02 8256 6418
          </ContactLine>
          <ContactLine icon={<Phone size={20} />} label="Mobile">
            0945 977 1947 · 0954 361 0821 · 0954 441 9362
          </ContactLine>
          <ContactLine icon={<Mail size={20} />} label="Email">
            rjasmakatibranch@gmail.com
          </ContactLine>
          <ContactLine icon={<Clock size={20} />} label="Office Hours">
            Monday - Sunday, 9:00 AM - 6:00 PM
          </ContactLine>
        </div>
        <iframe
          className="map"
          title="RJAS International Travel and Tours Makati map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Ansa%20II%20Bldg%201078%20Don%20Chino%20Roces%20Avenue%20Makati%20City&output=embed"
        />
      </section>

      <footer className="site-footer">
        <div>
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">RJAS</span>
            <span>
              <strong>RJAS International Travel & Tours</strong>
              <small>Your Journey. Our Priority.</small>
            </span>
          </a>
          <p>Premium travel planning, international tour packages, and visa assistance.</p>
        </div>
        <FooterGroup title="Quick Links" links={navItems.slice(0, 6)} />
        <FooterGroup
          title="Visa Services"
          links={visaServices.slice(0, 6).map((item) => [item, "visa-services"])}
        />
        <FooterGroup
          title="Tour Packages"
          links={tourPackages.slice(0, 6).map((item) => [item, "tour-packages"])}
        />
        <div>
          <h3>Contact Information</h3>
          <p>Unit 204, 2F Ansa II Bldg., Makati City</p>
          <p>02 8256 6418</p>
          <a href={facebookUrl} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <small className="copyright">
          Copyright {new Date().getFullYear()} RJAS International Travel & Tours. All rights
          reserved.
        </small>
      </footer>

      {lightboxItem && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightboxItem.title}>
          <button type="button" aria-label="Close preview" onClick={() => setLightboxItem(null)}>
            <X size={24} />
          </button>
          <img src={lightboxItem.image} alt={lightboxItem.title} />
          <div>
            <h3>{lightboxItem.title}</h3>
            <p>{lightboxItem.story ?? lightboxItem.note}</p>
          </div>
        </div>
      )}
    </main>
  );
}

function Gallery({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}) {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="photo-card" key={item.title}>
          <button type="button" onClick={() => onOpen(item)} aria-label={`Preview ${item.title}`}>
            <img src={item.image} alt={item.title} />
          </button>
          <div>
            <h3>{item.title}</h3>
            <p>{item.story ?? item.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactLine({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="contact-line">
      {icon}
      <div>
        <strong>{label}</strong>
        <span>{children}</span>
      </div>
    </div>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h3>{title}</h3>
      {links.map(([label, id]) => (
        <a key={`${title}-${label}`} href={`#${id}`}>
          {label}
        </a>
      ))}
    </div>
  );
}

export default App;
