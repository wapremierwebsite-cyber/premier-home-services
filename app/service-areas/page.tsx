const primaryAreas = [
  "Puyallup",
  "Bonney Lake",
  "Sumner",
  "Orting",
  "Graham",
  "Spanaway",
  "Tacoma",
  "Lakewood",
  "University Place",
  "Gig Harbor",
  "Auburn",
  "Federal Way",
];

const regionCards = [
  {
    title: "Pierce County",
    text: "Fencing, decks, siding, and exterior improvements for homeowners throughout the South Sound.",
    areas: ["Puyallup", "Tacoma", "Graham", "Spanaway", "Lakewood", "University Place"],
  },
  {
    title: "South Sound",
    text: "Quality exterior work for families looking to improve privacy, curb appeal, safety, and outdoor living.",
    areas: ["Bonney Lake", "Sumner", "Orting", "Gig Harbor", "Edgewood", "Milton"],
  },
  {
    title: "Surrounding Areas",
    text: "Not sure if your home is in the service area? Reach out and we can let you know quickly.",
    areas: ["Auburn", "Federal Way", "Enumclaw", "Kent", "Roy", "Yelm"],
  },
];

export default function ServiceAreasPage() {
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
            <a className="transition hover:text-[#d98a2b]" href="/services">
              Services
            </a>
            <a className="transition hover:text-[#d98a2b]" href="/project-gallery">
              Project Gallery
            </a>
            <a
              className="border-b-2 border-[#d98a2b] pb-2 text-[#d98a2b]"
              href="/service-areas"
            >
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.18)_0%,rgba(8,12,9,0.52)_50%,#111613_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_35%,rgba(17,22,19,0.16)_65%,#111613_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 pb-20 pt-44 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              Proudly Serving the South Sound
            </p>

            <h1 className="max-w-3xl text-[4.2rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f4ead6] drop-shadow-2xl md:text-[7rem]">
              Local Work.
              <br />
              <span className="text-[#d98a2b]">Built Close to Home.</span>
            </h1>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-40 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-40 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              Premier Home Services provides fencing, deck, siding, and exterior
              improvement services across Pierce County, the South Sound, and nearby
              communities.
            </p>

            <a
              href="/request-estimate"
              className="mt-8 inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
            >
              Check Your Area <span className="text-2xl">→</span>
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#d98a2b]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-md border border-[#d98a2b]/45 bg-black/35 p-8 shadow-2xl shadow-black/35 backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-2">
                  <img
                    src="/images/serving-icon.png"
                    alt="Serving areas icon"
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                    Main Service Region
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase tracking-[0.08em] text-[#f4ead6]">
                    Pierce County & South Sound
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {primaryAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-sm border border-[#d98a2b]/35 bg-[#111613]/80 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-[#f4ead6]/85"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-[#f4ead6]/70">
                Don’t see your city listed? Reach out. If the project is a good fit,
                we may still be able to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#161b18] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Service Coverage
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Exterior services for homeowners across the region.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {regionCards.map((region) => (
              <article
                key={region.title}
                className="rounded-md border border-[#d98a2b]/45 bg-[#111613] p-8 shadow-xl shadow-black/25"
              >
                <h3 className="text-3xl font-black uppercase tracking-[0.08em] text-[#f4ead6]">
                  {region.title}
                </h3>

                <p className="mt-4 min-h-24 text-sm leading-7 text-[#f4ead6]/75">
                  {region.text}
                </p>

                <div className="mt-7 grid gap-3">
                  {region.areas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 border-l border-[#d98a2b]/55 pl-4"
                    >
                      <span className="text-[#d98a2b]">★</span>
                      <p className="text-sm font-bold text-[#f4ead6]/82">{area}</p>
                    </div>
                  ))}
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
              What We Provide
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              The same quality work, wherever we serve.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Fence installation, repairs, gates, and privacy upgrades.",
              "Deck builds, stairs, railings, landings, and exterior living spaces.",
              "Siding repairs, replacement sections, trim, and curb appeal improvements.",
              "Clear communication, practical recommendations, and work built for Northwest weather.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-md border border-[#d98a2b]/35 bg-[#111613] p-6"
              >
                <p className="text-lg font-bold leading-7 text-[#f4ead6]/85">
                  {item}
                </p>
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
          <div className="flex gap-5">
            <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-2 md:flex">
              <img
                src="/images/get-started-icon.png"
                alt="Get started icon"
                className="h-full w-full rounded-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                Not Sure If We Serve Your Area?
              </p>
              <h2 className="mt-2 max-w-3xl text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
                Give us a call and we’ll let you know.
              </h2>
            </div>
          </div>

          <a
            href="tel:2532286878"
            className="inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
          >
            Call 253-228-6878 <span className="text-2xl">→</span>
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

<div className="flex gap-4 text-[#d98a2b]">
  <a
    href="https://www.facebook.com/wapremier"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#f4ead6]"
  >
    Facebook
  </a>

  <a
    href="https://www.instagram.com/premierhome_service/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-[#f4ead6]"
  >
    Instagram
  </a>
</div>
        </div>
      </footer>
    </main>
  );
}