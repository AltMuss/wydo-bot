import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBolt, faGaugeHigh, } from "@fortawesome/free-solid-svg-icons";
// faWandMagicSparkles, faRoute

type TeamCardProps = {
  name: string; nim: string; desc?: string;
};

function TeamCard({ name, nim, desc = "Member" }: TeamCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="rounded-xl bg-white/70 border border-slate-200 px-5 py-5 flex flex-col items-center text-center gap-2">
      <div className="h-12 w-12 rounded-full bg-cyan-600/40 text-slate-800 flex items-center justify-center text-lg font-semibold">
        {initial}
      </div>
      <p className="text-sm font-semibold text-slate-800">{name}</p>
      <p className="text-xs font-mono text-cyan-700">{nim}</p>
      <p className="text-xs text-slate-600">{desc}</p>
    </div>
  );
}

type TechCardProps = {
  name: string; desc: string; icon: React.ReactNode;
};

function TechCard({ name, desc, icon }: TechCardProps) {
  return (
    <article className="rounded-xl bg-white/70 border border-slate-200 px-5 py-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
        <div className="h-9 w-9 rounded-full bg-cyan-600/10 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-center sm:text-left space-y-1">
          <h3 className="text-sm font-semibold text-slate-800">{name}</h3>
          <p className="text-xs text-slate-600">{desc}</p>
        </div>
      </div>
    </article>
  );
}

const techItems = [
  {
    name: "React",
    desc: "Component-based UI for a fast, responsive interface.",
    icon: <FontAwesomeIcon icon={faCode} className="text-cyan-700 text-sm" />,
  },
  {
    name: "TypeScript",
    desc: "Static typing to keep our logic a bit less chaotic.",
    icon: <FontAwesomeIcon icon={faBolt} className="text-cyan-700 text-sm" />,
  },
  {
    name: "Vite",
    desc: "Fast dev server and bundler for smoother workflow.",
    icon: (
      <FontAwesomeIcon icon={faGaugeHigh} className="text-cyan-700 text-sm" />
    ),
  },
];

function AboutPage() {
  return (
    <main className="mt-[115px] mb-10">
      <section className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-16 space-y-12">
        {/* hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            About WYDO
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Will You Drop Out? (WYDO) is a small web tool that helps students
            estimate their next semester status without spreadsheets, panic, or
            mysterious formulas.
          </p>
        </div>

        {/* overview */}
        <section className="rounded-2xl bg-white/70 shadow-sm shadow-slate-100 border border-slate-200 px-6 sm:px-10 py-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            What is this project?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            WYDO was built as a discrete math group project by three students
            who were tired of guessing whether they&apos;d pass the semester.
            Instead of juggling grades in random notes and half-broken
            spreadsheets, we wanted a simple way to see where we actually stand.
          </p>
          <p className="text-slate-600 text-sm sm:text-base">
            The app lets you input your course grades, try different scenarios,
            and quickly check if you&apos;re likely safe, at risk, or in
            &quot;time to panic strategically&quot; territory.
          </p>
        </section>

        {/* meta features */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 text-center">
            Why we built it this way
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <article className="rounded-xl bg-white/70 border border-slate-200 px-5 py-4 space-y-2">
              <h3 className="text-base font-semibold text-slate-800">
                Made for real students
              </h3>
              <p className="text-sm text-slate-600">
                No academic jargon, no extra features you don&apos;t need. Just
                a clear view of your semester status.
              </p>
            </article>

            <article className="rounded-xl bg-white/70 border border-slate-200 px-5 py-4 space-y-2">
              <h3 className="text-base font-semibold text-slate-800">
                Transparent logic
              </h3>
              <p className="text-sm text-slate-600">
                The prediction is based on simple, visible calculations inspired
                by what we learned in discrete math, not a black-box model.
              </p>
            </article>

            <article className="rounded-xl bg-white/70 border border-slate-200 px-5 py-4 space-y-2">
              <h3 className="text-base font-semibold text-slate-800">
                Privacy-friendly
              </h3>
              <p className="text-sm text-slate-600">
                Your data stays in your browser. We don't store grades,
                accounts, or any personal information on a server.
              </p>
            </article>
          </div>
        </section>

        {/* tech stack */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 text-center">
            Tech stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {techItems.map((item) => (
              <TechCard
                key={item.name}
                name={item.name}
                desc={item.desc}
                icon={item.icon}
              />
            ))}
          </div>
        </section>

        {/* team behind this mess */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 text-center">
            Our team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TeamCard
              name="Arini Dwi Rahmawati"
              nim="2404130030"
              desc="Member"
            />
            <TeamCard
              name="Samudra Azriel Pradana"
              nim="2404130143"
              desc="Design & Frontend"
            />
            <TeamCard
              name="Mustofa Ahmad Dhani"
              nim="2404130103"
              desc="Member"
            />
          </div>
        </section>
      </section>
    </main>
  );
}

export default AboutPage;
