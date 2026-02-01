import Image from "next/image";

export default function Home() {
  const streaming = [
    {
      label: "Apple Music",
      href: "https://music.apple.com/us/artist/praise-priestess/1575948449",
    },
    {
      label: "Amazon Music",
      href: "https://music.amazon.com/artists/B0992R4L4Q/praise-priestess",
    },
    {
      label: "iHeartRadio",
      href: "https://www.iheart.com/artist/praise-priestess-36529816/",
    },
    {
      label: "TIDAL",
      href: "https://tidal.com/browse/artist/26875743",
    },
    {
      label: "Shazam",
      href: "https://www.shazam.com/en-us/artist/praise-priestess/1575948449",
    },
  ] as const;

  const featuredSingles = [
    { title: "Ode (He Has Come)", year: "2021" },
    { title: "Shameless Testimony", year: "2021" },
    { title: "Magnify the Lord", year: "2022" },
    { title: "Hallelujah", year: "2023" },
    { title: "A Joyful Song", year: "2023" },
  ] as const;

  const groupedDiscography = [
    {
      year: "2023",
      releases: ["A Joyful Song", "Hallelujah"],
    },
    {
      year: "2022",
      releases: ["Magnify the Lord"],
    },
    {
      year: "2021",
      releases: ["Shameless Testimony", "Ode (He Has Come)"],
    },
  ] as const;

  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#05050a] text-zinc-50">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="pp-aurora absolute -inset-24" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.8)_65%,rgba(0,0,0,0.95))]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 rounded-full px-2 py-1 transition-colors hover:bg-white/5"
          >
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-linear-to-br from-fuchsia-500/90 via-violet-500/90 to-cyan-400/90 text-sm font-semibold tracking-wide text-black shadow-[0_20px_40px_rgba(168,85,247,0.25)]">
              PP
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                PraisePriestess
              </div>
              <div className="text-xs text-zinc-300">
                Recording Artist • Praise & Worship
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 text-sm text-zinc-200 md:flex">
            {[
              { label: "Profile", href: "#profile" },
              { label: "Discography", href: "#discography" },
              { label: "Media", href: "#media" },
              { label: "Listen", href: "#listen" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#listen"
              className="pp-sheen ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2 font-semibold text-black shadow-[0_20px_60px_rgba(236,72,153,0.18)] transition hover:brightness-110 active:brightness-95"
            >
              <span>Listen Now</span>
              <span className="text-black/70">→</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative">
        <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-20">
          <div className="grid items-start gap-10 md:grid-cols-[1.25fr_0.75fr]">
            <div className="pp-fade-up" style={{ animationDelay: "60ms" }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.12)]" />
                <span>Praise • worship • testimony • joy</span>
              </div>

              <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
                PraisePriestess
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-zinc-200 sm:text-xl">
                PraisePriestess releases worship-centered singles that celebrate
                gratitude, praise, and testimony—songs like “Hallelujah”,
                “Magnify the Lord”, and “A Joyful Song”.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#profile"
                  className="pp-sheen inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_24px_70px_rgba(255,255,255,0.16)] transition hover:bg-zinc-100 active:bg-zinc-200"
                >
                  Read Her Story
                </a>
                <a
                  href="#listen"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 active:bg-white/5"
                >
                  Listen on Streaming
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Catalog", value: "Singles" },
                  { label: "Active Listings", value: "2021–2023" },
                  { label: "Theme", value: "Praise • Worship • Uplifting" },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className="pp-glass pp-fade-up rounded-2xl px-5 py-4"
                    style={{ animationDelay: `${120 + idx * 80}ms` }}
                  >
                    <div className="text-xs text-zinc-300">{item.label}</div>
                    <div className="mt-1 text-base font-semibold">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pp-fade-up" style={{ animationDelay: "160ms" }}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
                <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-fuchsia-500/25 blur-2xl" />
                <div className="absolute -bottom-12 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

                <div className="relative">
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">
                        Featured Releases
                      </div>
                      <div className="mt-1 text-xs text-zinc-300">
                        Titles seen on major streaming listings
                      </div>
                    </div>
                    <div className="pp-float grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white/85"
                      >
                        <path
                          d="M9 18V6l12-2v12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {featuredSingles.slice(0, 4).map((song) => (
                      <div
                        key={song.title}
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition hover:border-white/20 hover:bg-black/30"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold">
                            {song.title}
                          </div>
                          <div className="mt-0.5 text-xs text-zinc-300">
                            Single • {song.year}
                          </div>
                        </div>
                        <div className="ml-4 inline-flex h-9 items-center gap-2 rounded-full bg-white/10 px-3 text-xs font-semibold text-white transition group-hover:bg-white/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Featured</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-zinc-300">
                    Streaming pages:{" "}
                    {streaming.map((s, idx) => (
                      <span key={s.href}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-white/90 underline decoration-white/20 underline-offset-4 transition hover:text-white hover:decoration-white/60"
                        >
                          {s.label}
                        </a>
                        {idx < streaming.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="profile"
          className="mx-auto max-w-6xl px-6 pb-14 pt-6 md:pb-20"
        >
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="pp-fade-up" style={{ animationDelay: "60ms" }}>
              <h2 className="text-2xl font-semibold tracking-tight">
                Artist Profile
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-zinc-200">
                PraisePriestess is a recording artist with worship-centered
                singles released across 2021–2023. Her public catalog reflects
                praise, gratitude, and testimony through titles like “Magnify
                the Lord” and “Hallelujah”.
              </p>

              <p className="mt-4 max-w-md text-sm leading-7 text-zinc-200">
                Singles listed on major platforms include{" "}
                <span className="font-semibold">Ode (He Has Come)</span> (2021),{" "}
                <span className="font-semibold">Shameless Testimony</span>{" "}
                (2021), <span className="font-semibold">Magnify the Lord</span>{" "}
                (2022), <span className="font-semibold">Hallelujah</span>{" "}
                (2023), and <span className="font-semibold">A Joyful Song</span>{" "}
                (2023).
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    title: "Message",
                    value: "Praise • worship • gratitude • testimony",
                  },
                  {
                    title: "Sound",
                    value: "Uplifting, worship-forward singles",
                  },
                  {
                    title: "Highlights",
                    value:
                      "Hallelujah (2023) • A Joyful Song (2023) • Magnify the Lord (2022)",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <div className="text-xs text-zinc-300">{item.title}</div>
                    <div className="mt-1 text-sm font-semibold text-white/90">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pp-fade-up" style={{ animationDelay: "120ms" }}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_20%,rgba(168,85,247,0.25),transparent_55%),radial-gradient(700px_circle_at_70%_70%,rgba(34,211,238,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="text-sm font-semibold">Artist Statement</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-200">
                    PraisePriestess delivers worship music that centers on
                    praise and heartfelt testimony. Her listed releases carry a
                    clear message of gratitude and celebration, inviting
                    listeners into a sound that lifts faith and strengthens
                    hope.
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200">
                    <div className="text-sm font-semibold text-white/90">
                      Listed Singles (2021–2023)
                    </div>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {featuredSingles.map((song) => (
                        <div
                          key={song.title}
                          className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2"
                        >
                          <div className="min-w-0 truncate font-semibold">
                            {song.title}
                          </div>
                          <div className="text-xs text-zinc-300">
                            {song.year}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "Praise",
                        desc: "Songs that exalt and celebrate.",
                      },
                      {
                        title: "Worship",
                        desc: "Music shaped for devotion and reflection.",
                      },
                      {
                        title: "Testimony",
                        desc: "Lyrics that point to transformation and gratitude.",
                      },
                      {
                        title: "Joy",
                        desc: "A bright, uplifting sound for everyday listening.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                      >
                        <div className="text-sm font-semibold">
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-zinc-200">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-200">
                    Featured lyric from “Shameless Testimony”:{" "}
                    <span className="font-semibold text-white/90">
                      “Jehovah don turn my life around.”
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="discography"
          className="mx-auto max-w-6xl px-6 pb-14 pt-6 md:pb-20"
        >
          <div className="pp-fade-up" style={{ animationDelay: "60ms" }}>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Discography Timeline
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-200">
                  A readable timeline of releases seen on public streaming
                  listings. This is written so you can scan and understand the
                  catalog at a glance.
                </p>
              </div>
              <a
                href="#listen"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Jump to Links →
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold">Quick Summary</div>
              <div className="mt-2 text-sm leading-7 text-zinc-200">
                Public listings show at least{" "}
                <span className="font-semibold text-white/90">
                  {featuredSingles.length} singles
                </span>{" "}
                across{" "}
                <span className="font-semibold text-white/90">2021–2023</span>.
                The titles consistently reflect praise and worship themes:
                “Hallelujah”, “Magnify the Lord”, and “A Joyful Song”.
              </div>

              <div className="mt-6 grid gap-3">
                {groupedDiscography.map((y) => (
                  <div
                    key={y.year}
                    className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold">{y.year}</div>
                      <div className="text-xs text-zinc-300">
                        {y.releases.length} release
                        {y.releases.length === 1 ? "" : "s"}
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {y.releases.map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredSingles.map((song, idx) => (
                <div
                  key={song.title}
                  className="group pp-fade-up relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]"
                  style={{ animationDelay: `${90 + idx * 60}ms` }}
                >
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10 blur-2xl transition group-hover:from-fuchsia-500/30 group-hover:to-cyan-400/20" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate text-base font-semibold">
                          {song.title}
                        </div>
                        <div className="mt-1 text-xs text-zinc-300">
                          Single • {song.year}
                        </div>
                      </div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/20 text-white/85 transition group-hover:bg-black/30">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17l10-10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9 7h8v8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <div className="text-xs text-zinc-300">
                        Highlighted release
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 transition group-hover:bg-white/15">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>Single</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="media"
          className="mx-auto max-w-6xl px-6 pb-14 pt-6 md:pb-20"
        >
          <div className="pp-fade-up" style={{ animationDelay: "60ms" }}>
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Photos & Visuals
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-200">
                  A clean space for portraits, cover art, and featured visuals.
                </p>
              </div>
              <a
                href="#listen"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Jump to Listen →
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
              <div className="absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="relative">
                <div className="text-sm font-semibold">Portrait Artwork</div>
                <div className="mt-1 text-xs text-zinc-300">
                  PraisePriestess
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                  <Image
                    src="/praisepriestess-portrait.svg"
                    alt="PraisePriestess artist photo"
                    width={900}
                    height={1050}
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-xs leading-6 text-zinc-300">
                  Official photos, cover art, and videos can be featured here.
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <div className="text-sm font-semibold">Featured Visuals</div>
                <div className="mt-2 text-sm leading-7 text-zinc-200">
                  A showcase area for cover art, promo shots, and performance
                  moments.
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Cover Art",
                    "Promo Photos",
                    "Live/Ministry Moments",
                    "Brand Assets",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm font-semibold text-white/90"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {["Feature Visual", "Cover Art", "Live Shot"].map((label) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(560px_circle_at_70%_80%,rgba(34,211,238,0.14),transparent_60%)] opacity-70" />
                    <div className="relative">
                      <div className="text-sm font-semibold">{label}</div>
                      <div className="mt-2 text-xs leading-6 text-zinc-300">
                        Featured visual
                      </div>
                      <div className="mt-5 h-24 rounded-2xl border border-white/10 bg-black/25" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="listen" className="mx-auto max-w-6xl px-6 pb-20 pt-6">
          <div className="pp-fade-up" style={{ animationDelay: "60ms" }}>
            <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="relative">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Listen
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-200">
                    Choose your platform and start listening to PraisePriestess.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {streaming.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="pp-sheen inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-sm font-semibold text-white/90 transition hover:border-white/20 hover:bg-black/35"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-black/20 p-5 text-xs leading-6 text-zinc-300">
                    For collaborations and event invitations, connect through
                    her official platform profiles.
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="text-sm font-semibold">Start Here</div>
                <div className="mt-2 text-sm leading-7 text-zinc-200">
                  Pick a release and press play.
                </div>
                <div className="mt-6 grid gap-3">
                  {[
                    {
                      title: "Featured releases",
                      desc: "Hallelujah • A Joyful Song • Magnify the Lord",
                    },
                    {
                      title: "Theme",
                      desc: "Praise • worship • gratitude • testimony",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                    >
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm leading-6 text-zinc-200">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#top"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100"
                >
                  Back to Top
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/35">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-zinc-300">
            © {new Date().getFullYear()} PraisePriestess
          </div>
          <div className="text-sm text-zinc-400">All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
