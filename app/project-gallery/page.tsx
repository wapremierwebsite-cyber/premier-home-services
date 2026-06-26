const projects = [
  {
    title: "Cedar Privacy Fence",
    category: "Fencing",
    image: "/images/gallery-fence-1.jpg",
  },
  {
    title: "Fence and Gate Work",
    category: "Fencing",
    image: "/images/gallery-fence-2.jpg",
  },
  {
    title: "Wood Fence Detail",
    category: "Fencing",
    image: "/images/gallery-fence-3.jpg",
  },
  {
    title: "Property Line Fence",
    category: "Fencing",
    image: "/images/gallery-fence-4.jpg",
  },
  {
    title: "Backyard Fence Installation",
    category: "Fencing",
    image: "/images/gallery-fence-5.jpg",
  },
  {
    title: "Finished Fence Project",
    category: "Fencing",
    image: "/images/gallery-fence-6.jpg",
  },
  {
    title: "Deck Project",
    category: "Decks",
    image: "/images/gallery-deck-1.jpg",
  },
];

const categories = [
  "Fencing",
  "Decks",
  "Siding",
  "Exterior Work",
];

export default function ProjectGalleryPage() {
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
            <a
              className="border-b-2 border-[#d98a2b] pb-2 text-[#d98a2b]"
              href="/project-gallery"
            >
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
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.18)_0%,rgba(8,12,9,0.52)_50%,#111613_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_35%,rgba(17,22,19,0.16)_65%,#111613_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-6 pb-20 pt-44 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              Project Gallery
            </p>

            <h1 className="max-w-3xl text-[4.2rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f4ead6] drop-shadow-2xl md:text-[7rem]">
              Real Work.
              <br />
              <span className="text-[#d98a2b]">Built Right.</span>
            </h1>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-40 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-40 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              A look at recent fencing, deck, and exterior projects completed by
              Premier Home Services. This gallery will continue to grow as more
              finished projects are added.
            </p>

            <a
              href="/request-estimate"
              className="mt-8 inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
            >
              Start Your Project <span className="text-2xl">→</span>
            </a>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-md border border-[#d98a2b]/45 shadow-2xl shadow-black/40">
              <img
                src="/images/gallery-fence-1.jpg"
                alt="Featured fence project"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="mt-12 overflow-hidden rounded-md border border-[#d98a2b]/45 shadow-2xl shadow-black/40">
              <img
                src="/images/gallery-fence-2.jpg"
                alt="Featured fence project"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#161b18] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                Recent Projects
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
                Built with care and attention to detail.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-sm border border-[#d98a2b]/45 bg-[#111613] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f4ead6]/80"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.image}
                className="group overflow-hidden rounded-md border border-[#d98a2b]/45 bg-[#111613] shadow-xl shadow-black/25"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.78)_100%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase tracking-[0.08em] text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-md border border-[#d98a2b]/35 bg-[#111613] p-8 text-center shadow-xl shadow-black/20">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              More projects coming soon
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#f4ead6]/75">
              This gallery is set up so more photos can be added later. As new
              fence, deck, siding, and exterior projects are completed, we can
              drop new images into the folder and update this page quickly.
            </p>
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