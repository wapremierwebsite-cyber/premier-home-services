"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Fencing",
  "Decks",
  "Siding",
  "Fence Repair",
  "Deck Repair",
  "Exterior Work",
  "Not Sure Yet",
];

export default function RequestEstimatePage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      projectType: String(formData.get("projectType") || ""),
      city: String(formData.get("city") || ""),
      preferredContact: String(formData.get("preferredContact") || ""),
      timeline: String(formData.get("timeline") || ""),
      details: String(formData.get("details") || ""),
    };

    try {
      const response = await fetch("/api/request-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage(
        "Thanks! Your estimate request has been sent. We will follow up as soon as possible."
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please call or text instead."
      );
    }
  }

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

        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 pb-20 pt-44 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-[#d98a2b]">
              Request an Estimate
            </p>

            <h1 className="max-w-3xl text-[4.2rem] font-black uppercase leading-[0.84] tracking-[-0.08em] text-[#f4ead6] drop-shadow-2xl md:text-[7rem]">
              Tell Us
              <br />
              <span className="text-[#d98a2b]">About Your Project.</span>
            </h1>

            <div className="my-7 flex items-center gap-4">
              <div className="h-px w-40 bg-[#d34b28]" />
              <span className="text-xl text-[#d98a2b]">★</span>
              <div className="h-px w-40 bg-[#d34b28]" />
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#f4ead6]/85">
              Fill out the form and we will follow up about your fence, deck,
              siding, or exterior project. Prefer to talk now? Call or text
              253-228-6878.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative rounded-md border border-[#d98a2b]/45 bg-[#111613]/90 p-6 shadow-2xl shadow-black/35 backdrop-blur md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Name *
                </span>
                <input
                  name="name"
                  required
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Phone *
                </span>
                <input
                  name="phone"
                  required
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="Phone number"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="Email address"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  City / Area
                </span>
                <input
                  name="city"
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="Puyallup, Tacoma, etc."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Project Type *
                </span>
                <select
                  name="projectType"
                  required
                  defaultValue=""
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition focus:border-[#d98a2b]"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#111613]">
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Preferred Contact
                </span>
                <select
                  name="preferredContact"
                  defaultValue="Call or text"
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition focus:border-[#d98a2b]"
                >
                  <option className="bg-[#111613]">Call or text</option>
                  <option className="bg-[#111613]">Call</option>
                  <option className="bg-[#111613]">Text</option>
                  <option className="bg-[#111613]">Email</option>
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Timeline
                </span>
                <input
                  name="timeline"
                  className="rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="ASAP, next month, planning ahead, etc."
                />
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d98a2b]">
                  Project Details *
                </span>
                <textarea
                  name="details"
                  required
                  rows={6}
                  className="resize-none rounded-sm border border-[#d98a2b]/35 bg-black/35 px-4 py-3 text-[#f4ead6] outline-none transition placeholder:text-[#f4ead6]/35 focus:border-[#d98a2b]"
                  placeholder="Tell us what you are looking to have built, repaired, or replaced."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-4 rounded-sm border border-[#f1b65d]/50 bg-[#c64527] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-black/30 transition hover:bg-[#d98a2b] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Estimate Request"}
              <span className="text-2xl">→</span>
            </button>

            {message && (
              <p
                className={`mt-5 rounded-sm border px-4 py-3 text-sm font-bold leading-6 ${
                  status === "success"
                    ? "border-green-500/40 bg-green-500/10 text-green-100"
                    : "border-red-500/40 bg-red-500/10 text-red-100"
                }`}
              >
                {message}
              </p>
            )}
          </form>
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