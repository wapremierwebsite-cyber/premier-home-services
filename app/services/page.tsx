const services = [
  {
    title: "Fencing",
    eyebrow: "Our Specialty",
    description:
      "Privacy fencing, cedar fencing, gates, repairs, and custom fence layouts built for Northwest weather and real family use.",
    image: "/images/fencing-service.jpg",
    iconImage: "/images/fencing-icon.png",
    features: [
      "Wood and cedar fencing",
      "Privacy fence installation",
      "Fence repairs and gate work",
      "Custom layouts and practical recommendations",
    ],
  },
  {
    title: "Decks",
    eyebrow: "Outdoor Living",
    description:
      "Deck builds, stairs, railings, landings, and outdoor spaces designed to feel solid, safe, and ready for everyday life.",
    image: "/images/deck-service.jpg",
    iconImage: "/images/deck-icon.png",
    features: [
      "New deck builds",
      "Deck repairs and upgrades",
      "Stairs, railings, and landings",
      "Outdoor living improvements",
    ],
  },
  {
    title: "Siding",
    eyebrow: "Exterior Protection",
    description:
      "Siding repairs, replacement sections, trim work, and exterior improvements that help protect your home and improve curb appeal.",
    image: "/images/siding-service.jpg",
    iconImage: "/images/siding-icon.png",
    features: [
      "Siding repairs",
      "Replacement siding sections",
      "Exterior trim work",
      "Curb appeal and weather protection",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Talk Through the Project",
    text: "We start with your goals, the problem you want solved, and what matters most for your home.",
  },
  {
    number: "02",
    title: "Clear Estimate",
    text: "You get straightforward expectations around scope, materials, timeline, and next steps.",
  },
  {
    number: "03",
    title: "Quality Build",
    text: "We complete the work with attention to detail, communication, and respect for your property.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#111613] text-[#f4ead6]">
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="block">
            <img
              src="/images/logo.png"
              alt="Premier Home Services logo"
              className="h-28 w-28 rounded-full object-contain drop-shadow-2xl"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-black uppercase tracking-wider text-[#f4ead6] lg:flex">
            <a className="transition hover:text-[#d98a2b]" href="/">
              Home
            </a>
            <a className="transition hover:text-[#d98a2b]" href="/about">
              About Us
            </a>
            <a className="border-b-2 border-[#d98a2b] pb-2 text-[#d98a2b]" href="/services">
              Services
            </a>
            <a className="transition hover:text-[#d98a2b]" href="/project-gallery">
              Project Gallery
            </a>
            <a className="transition hover:text-[#d98a2b]" href="/service-areas">
              Service Areas
            </a>
          </nav>

          <a
            href="tel:2532286878"
            className="hidden rounded-sm bg-black/30 px-5 py-3 text-right text-sm font-black uppercase tracking-wider text-[#f4ead6] ring-1 ring-[#d98a2b]/30 md:block"
          >
            <span className="block text-xs text-[#d98a2b]">Call or Text</span>
            253-228-6878
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#d98a2b]/40 bg-[#111613]">
        <div className="absolute inset-x-0 top-0 h-[430px] overflow-hidden">
          <img
            src="/images/nav-background.png"
            alt=""
            className="h-full w-full object-cover object-top -translate-y-10"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.18)_0%,rgba(8,12,9,0.48)_50%,#111613_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_35%,rgba(17,22,19,0.16)_65%,#111613_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[700px] max-w-7xl items-center gap-12 px-6 pb-20 pt-44 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              Fencing • Decks • Siding
            </p>

            <h1 className="max-w-3xl text-[4.2rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f4ead6] drop-shadow-2xl md:text-[7rem]">
              Exterior Work
              <br />
              <span className="text-[#d98a2b]">Built to Last.</span>
            </h1>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-40 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-40 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              Premier Home Services helps homeowners improve privacy, safety,
              curb appeal, and outdoor living with quality fencing, deck, and
              siding work.
            </p>

            <a
              href="#quote"
              className="mt-8 inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
            >
              Get a Free Estimate <span className="text-2xl">→</span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.title}
                href={`#${service.title.toLowerCase()}`}
                className="group rounded-md border border-[#d98a2b]/45 bg-black/35 p-5 shadow-xl shadow-black/25 backdrop-blur transition hover:border-[#d98a2b]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-1.5">
                  <img
                    src={service.iconImage}
                    alt={`${service.title} icon`}
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#d98a2b]">
                  {service.eyebrow}
                </p>

                <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.1em] text-[#f4ead6]">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#f4ead6]/70">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#161b18] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              What We Do
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Practical exterior services with a premium finish.
            </h2>
          </div>

          <div className="mt-12 grid gap-10">
            {services.map((service, index) => (
              <article
                id={service.title.toLowerCase()}
                key={service.title}
                className={`grid overflow-hidden rounded-md border border-[#d98a2b]/45 bg-[#111613] shadow-2xl shadow-black/30 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative min-h-[340px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} work by Premier Home Services`}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.72)_100%)]" />

                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-1.5">
                      <img
                        src={service.iconImage}
                        alt={`${service.title} icon`}
                        className="h-full w-full rounded-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d98a2b]">
                        {service.eyebrow}
                      </p>
                      <h3 className="text-3xl font-black uppercase tracking-[0.12em] text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6]">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[#f4ead6]/78">
                    {service.description}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 border-l border-[#d98a2b]/55 pl-4"
                      >
                        <span className="mt-1 text-[#d98a2b]">★</span>
                        <p className="text-sm font-bold leading-6 text-[#f4ead6]/82">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#quote"
                    className="mt-8 inline-flex w-fit items-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-6 py-4 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
                  >
                    Talk About {service.title} <span className="text-xl">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#171d19] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Our Process
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Simple, clear, and built around the homeowner.
            </h2>
          </div>

          <div className="grid gap-5">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-5 rounded-md border border-[#d98a2b]/35 bg-[#111613] p-6 md:grid-cols-[90px_1fr]"
              >
                <p className="text-5xl font-black tracking-[-0.08em] text-[#d98a2b]">
                  {step.number}
                </p>

                <div>
                  <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-[#f4ead6]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#f4ead6]/75">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="quote"
        className="relative overflow-hidden border-b border-[#d98a2b]/30 bg-[#111613] px-6 py-16"
      >
        <div className="absolute inset-0">
          <img
            src="/images/footer-background.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#080b09_0%,rgba(8,12,9,0.55)_45%,#080b09_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.25)_0%,rgba(8,12,9,0.78)_100%)]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Ready to Get Started?
            </p>
            <h2 className="mt-2 max-w-3xl text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Let’s build something great together.
            </h2>
          </div>

          <a
            href="tel:2532286878"
            className="inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
          >
            Get a Free Estimate <span className="text-2xl">→</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#0b0f0d] px-6 py-6 text-[#f4ead6]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Premier Home Services logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <p>
              © 2026 Premier Home Services
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 font-black uppercase tracking-wider">
            <span>Licensed & Insured</span>
            <span>5-Star Rated on Google</span>
          </div>

          <div className="flex gap-3 text-[#d98a2b]">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Maps</span>
          </div>
        </div>
      </footer>
    </main>
  );
}