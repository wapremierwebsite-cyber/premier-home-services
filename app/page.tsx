const services = [
  {
    title: "Fencing",
    label: "Our Specialty",
    description:
      "From classic wood to durable cedar and modern metal, we build fences that add security, privacy, and curb appeal.",
    image: "/images/fencing-service.jpg",
    iconImage: "/images/fencing-icon.png",
  },
  {
    title: "Decks",
    label: "",
    description:
      "Custom decks designed for the way you live. Built with quality materials and expert craftsmanship.",
    image: "/images/deck-service.jpg",
    iconImage: "/images/deck-icon.png",
  },
  {
    title: "Siding",
    label: "",
    description:
      "Elevate your home's exterior with beautiful, low-maintenance siding installed with precision.",
    image: "/images/siding-service.jpg",
    iconImage: "/images/siding-icon.png",
  },
];


const values = [
  {
    title: "Integrity",
    text: "We do what we say we are going to do and stand behind our work.",
    iconImage: "/images/integrity-icon.png",
  },
  {
    title: "Craftsmanship",
    text: "Quality materials and skilled work that lasts.",
    iconImage: "/images/craftsmanship-icon.png",
  },
  {
    title: "Family Values",
    text: "We treat our clients like neighbors — because you are.",
    iconImage: "/images/family-values-icon.png",
  },
];

export default function Home() {
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
      <a className="border-b-2 border-[#d98a2b] pb-2 text-[#d98a2b]" href="/">
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

<section className="relative min-h-[780px] overflow-hidden border-b border-[#d98a2b]/40">
  <div className="absolute inset-0 bg-[#111613]" />

  <div className="absolute inset-x-0 top-0 h-[480px] overflow-hidden">
<img
  src="/images/nav-background.png"
  alt=""
  className="h-full w-full object-cover object-top -translate-y-20"
/>
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.15)_0%,rgba(8,12,9,0.35)_45%,#111613_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_28%,rgba(17,22,19,0.12)_60%,#111613_100%)]" />
  </div>

        <div className="absolute bottom-0 right-0 top-24 hidden w-[58%] lg:block">
          <div className="absolute bottom-0 right-0 h-[590px] w-[95%] overflow-hidden rounded-tl-[8rem] shadow-2xl shadow-black/50">
            <img
              src="/images/hero-family.png"
              alt="Premier Home Services family"
              className="h-full w-full object-cover object-[center_18%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#111613_0%,rgba(17,22,19,0.35)_38%,rgba(17,22,19,0)_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,19,0)_0%,rgba(17,22,19,0.15)_60%,#111613_100%)]" />
          </div>
        </div>

        <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-center px-6 pb-20 pt-40">
          <div className="max-w-2xl">
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              Local. Family-Owned. Built on Integrity.
            </p>

<div className="max-w-3xl">
  <h1 className="sr-only">
    Built for Families. Crafted to Last.
  </h1>

  <img
    src="/images/hero-headline.png"
    alt="Built for Families. Crafted to Last."
    className="w-full max-w-[720px] drop-shadow-2xl"
  />
</div>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-44 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-44 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              Premier Home Services delivers expert craftsmanship in fencing, decks, and
              siding. Built to enhance your home and stand the test of time.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/request-estimate"
                className="group inline-flex items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
              >
                Get a Free Estimate
                <span className="text-2xl transition group-hover:translate-x-1">→</span>
              </a>


            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative border-b border-[#d98a2b]/30 bg-[#161b18] px-6 py-12">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_90%_10%,#d98a2b,transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
            Our Services
          </p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6]">
            Quality Work. Lasting Impact.
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-md border border-[#d98a2b]/60 bg-[#111613] shadow-xl shadow-black/25"
              >
                {service.label && (
                  <div className="absolute left-0 top-0 z-10 bg-[#c64527] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                    {service.label}
                  </div>
                )}

                <div className="h-44 overflow-hidden border-b border-[#d98a2b]/40">
                  <img
                    src={service.image}
                    alt={`${service.title} service`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="relative p-7">
                  <div className="absolute -top-8 left-7 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-1.5">
                    <img
  src={service.iconImage}
  alt={`${service.title} icon`}
  className="h-full w-full rounded-full object-contain"
/>
                  </div>

                  <h3 className="mt-7 text-3xl font-black uppercase tracking-[0.16em] text-[#f4ead6]">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-24 text-sm leading-7 text-[#f4ead6]/75">
                    {service.description}
                  </p>

                  <a
                    href="/request-estimate"
                    className="mt-5 inline-flex items-center gap-3 text-sm font-black uppercase tracking-wider text-[#d98a2b]"
                  >
                    Learn More <span className="text-xl">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[#d98a2b]/30 bg-[#171d19] px-6 py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[330px_1fr]">
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-[#d98a2b] bg-[#111613] p-2 shadow-2xl shadow-black/30">
            <img
              src="/images/hero-family.png"
              alt="Premier Home Services owner and family"
              className="h-full w-full rounded-full object-cover object-center"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
              About Premier Home Services
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6] md:text-5xl">
              Rooted Here. Built on Family.
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-[#f4ead6]/80">
              We are a local, family-owned business proudly serving homeowners across the
              Pacific Northwest. Every project we take on is treated like it’s for our own
              home. Honesty, hard work, and attention to the details are what matter most.
            </p>

<div className="mt-8 grid gap-5 md:grid-cols-3">
  {values.map((value) => (
    <div key={value.title} className="border-l border-[#d98a2b]/60 pl-5">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#d98a2b] bg-[#111613] p-1.5">
        <img
          src={value.iconImage}
          alt={`${value.title} icon`}
          className="h-full w-full rounded-full object-contain"
        />
      </div>

      <h3 className="font-black uppercase tracking-wider text-[#d98a2b]">
        {value.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#f4ead6]/75">
        {value.text}
      </p>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

  

<section
  id="areas"
  className="relative overflow-hidden border-b border-[#d98a2b]/30 bg-[#111613] px-6 py-14"
>
  <div className="absolute inset-0">
    <img
      src="/images/footer-background.png"
      alt=""
      className="h-full w-full object-cover object-[center_99%]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,9,0.15)_0%,rgba(8,12,9,0.42)_45%,rgba(8,12,9,0.72)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,#080b09_0%,rgba(8,12,9,0.42)_42%,rgba(8,12,9,0.25)_58%,#080b09_100%)]" />
  </div>

  <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex gap-5">
<div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-2">
  <img
    src="/images/serving-icon.png"
    alt="Serving areas icon"
    className="h-full w-full rounded-full object-contain"
  />
</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                Proudly Serving
              </p>
              <h2 className="mt-1 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6]">
                The Pacific Northwest
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-[#f4ead6]/80">
                Pierce County • King County • Thurston County • South Sound • And
                surrounding areas
              </p>
            </div>
          </div>

          <div id="quote" className="flex gap-5 border-[#f4ead6]/20 md:border-l md:pl-12">
<div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#d98a2b] bg-[#111613] p-2">
  <img
    src="/images/get-started-icon.png"
    alt="Get started icon"
    className="h-full w-full rounded-full object-contain"
  />
</div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#d98a2b]">
                Ready to Get Started?
              </p>
              <h2 className="mt-1 text-4xl font-black uppercase tracking-[-0.04em] text-[#f4ead6]">
                Let’s build something great together.
              </h2>
              <a
                href="tel:2535550198"
                className="mt-5 inline-flex items-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b]"
              >
                Get a Free Estimate <span className="text-2xl">→</span>
              </a>
            </div>
          </div>
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