const values = [
  {
    title: "Integrity",
    text: "We believe in showing up, communicating clearly, and doing what we say we are going to do.",
    iconImage: "/images/integrity-icon.png",
  },
  {
    title: "Craftsmanship",
    text: "Every project is built with attention to detail, quality materials, and pride in the finished result.",
    iconImage: "/images/craftsmanship-icon.png",
  },
  {
    title: "Family Values",
    text: "We treat your home with respect because we know the work we do affects the people who live there.",
    iconImage: "/images/family-values-icon.png",
  },
];

export default function AboutPage() {
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
      <a className="border-b-2 border-[#d98a2b] pb-2 text-[#d98a2b]" href="/about">
        About Us
      </a>
      <a className="transition hover:text-[#d98a2b]" href="/services">
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
        <div className="absolute inset-x-0 top-0 h-[420px] overflow-hidden">
          <img
            src="/images/nav-background.png"
            alt=""
            className="h-full w-full object-cover object-top -translate-y-10"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.2)_0%,rgba(8,12,9,0.45)_48%,#111613_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_35%,rgba(17,22,19,0.18)_65%,#111613_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 pb-20 pt-44 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              About Premier Home Services
            </p>

            <h1 className="max-w-3xl text-[4.2rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f4ead6] drop-shadow-2xl md:text-[7rem]">
              Rooted Here.
              <br />
              <span className="text-[#d98a2b]">Built on Family.</span>
            </h1>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-40 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-40 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              Premier Home Services is a family-owned exterior contractor built on
              honest work, clear communication, and craftsmanship that lasts.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#d98a2b]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d98a2b]/50 bg-[#0b0f0d] p-3 shadow-2xl shadow-black/40">
              <img
                src="/images/hero-family.png"
                alt="Premier Home Services owner and family"
                className="h-[460px] w-full rounded-[2rem] object-cover object-[center_28%]"
              />
              <div className="absolute inset-3 rounded-[2rem] bg-[linear-gradient(180deg,transparent_45%,rgba(8,12,9,0.82)_100%)]" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                  Local. Family-Owned.
                </p>
                <p className="mt-2 max-w-md text-2xl font-black uppercase leading-tight text-white">
                  Built for families, crafted to last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#171d19] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Our Story
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              A local contractor built around trust.
            </h2>
          </div>

          <div className="grid gap-6 text-base leading-8 text-[#f4ead6]/78">
            <p>
              Premier Home Services was built with a simple idea: homeowners deserve a
              contractor who communicates clearly, takes pride in the work, and treats
              every project like it matters.
            </p>

            <p>
              From fencing and decks to siding and exterior improvements, our work is
              focused on helping families get more out of their home. Whether the goal is
              privacy, safety, curb appeal, or a better outdoor space, we bring practical
              craftsmanship and honest guidance to the process.
            </p>

            <p>
              We are proud to serve homeowners throughout the Pacific Northwest with work
              that is durable, clean, and built for real life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#111613] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              What We Stand For
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              The values behind every project.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-md border border-[#d98a2b]/45 bg-[#171d19] p-8 shadow-xl shadow-black/25"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-2">
                  <img
                    src={value.iconImage}
                    alt={`${value.title} icon`}
                    className="h-full w-full rounded-full object-contain"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-black uppercase tracking-[0.12em] text-[#d98a2b]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-[#f4ead6]/75">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d98a2b]/30 bg-[#171d19] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Why Homeowners Choose Us
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6]">
              Built different from the first conversation.
            </h2>
          </div>

          <div className="grid gap-5 lg:col-span-2 md:grid-cols-2">
            {[
              "Clear expectations before the work begins.",
              "Practical recommendations based on your home and goals.",
              "Clean, durable exterior work designed for Northwest weather.",
              "A family-owned approach where the details still matter.",
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
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              Ready to Get Started?
            </p>
            <h2 className="mt-2 max-w-3xl text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Let’s build something great together.
            </h2>
          </div>

          <a
            href="tel:2535550198"
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