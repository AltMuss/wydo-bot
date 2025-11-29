import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import testimg from '../../assets/meddle.jpg'

type FeatArticleProps = {
  img: string; alt: string; h3: string; text: string;
}

type StepArticleProps = {
  number: number; head: string; desc: string;
}

function FeatureArticle({ img, alt, h3, text }: FeatArticleProps) {
  return (
    <article
      className="rounded-2xl bg-white/60 shadow-sm shadow-slate-100
      px-4 py-4 sm:px-5 sm:py-5
      flex flex-col gap-3 hover:shadow-md hover:bg-white transition"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-sm overflow-hidden"
        >
          <img src={img} alt={alt} loading="lazy" className="w-full h-full object-cover" />
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 leading-snug">
          {h3}
        </h3>
      </div>

      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {text}
      </p>
    </article>
  );
}

function StepArticle({ number, head, desc }: StepArticleProps) {
  return (
    <div className="flex flex-col items-center text-center gap-3 rounded-xl bg-white/70 shadow-sm shadow-slate-100 px-5 py-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-600 text-white text-sm font-semibold">
        {number}
      </div>
      <h3 className="text-lg font-semibold text-slate-800">
        {head}
      </h3>
      <p className="text-sm text-slate-600">
        {desc}
      </p>
    </div>
  )
}

function Home() {
  const { t } = useLang()

  return (
    <main>
      {/* hero */}
      <section className="h-screen flex items-center">
        <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-5 text-center px-4 w-full">
          {/* ekstiny badge */}
          <p className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-[0.75rem] md:text-sm font-medium text-cyan-700">
            {t.page.home.heros.badge}
          </p>

          {/* main heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl">
            {t.page.home.hero}
          </h1>

          {/* subheading */}
          <p className="text-base text-slate-600 max-w-2xl">
            {t.page.home.subhero}
          </p>

          {/* buttons row */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/predict"
              className="inline-block px-6 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            > {t.page.home.heros.heroBtn}
            </Link>

            <Link
              to="/about"
              className="inline-block px-6 py-2.5 rounded-full border border-cyan-600 text-cyan-700 hover:bg-cyan-50 transition"
            > {t.page.home.heros.secondBtn}
            </Link>
          </div>

          {/* idk just for reassurance */}
          <p className="text-sm text-slate-500 mt-1">
            {t.page.home.heros.smallNote}
          </p>
        </div>
      </section>

      {/* features? */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto flex flex-col gap-10 px-2 sm:px-4">
          {/* heading + intro */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              {t.page.home.featHeadline}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              {t.page.home.featSubheadline}
            </p>
          </div>

          {/* feature list */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <FeatureArticle
              img={testimg} alt="placeholder"
              h3={t.page.home.feature.first} text={t.page.home.feature.first2}
            />
            <FeatureArticle
              img={testimg} alt="placeholder"
              h3={t.page.home.feature.second} text={t.page.home.feature.second2}
            />
            <FeatureArticle
              img={testimg} alt="placeholder"
              h3={t.page.home.feature.third} text={t.page.home.feature.third2}
            />
            <FeatureArticle
              img={testimg} alt="placeholder"
              h3={t.page.home.feature.fourth} text={t.page.home.feature.fourth2}
            />
          </div>
        </div>
      </section>

      {/* how it works, hmm */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-2 flex flex-col gap-10">
          {/* heading and its sub */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              {t.page.home.steps.headline}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              {t.page.home.steps.subheadline}
            </p>
          </div>

          {/* 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepArticle number={1} head={t.page.home.steps.first.head}
              desc={t.page.home.steps.first.desc}
            />
            <StepArticle number={2} head={t.page.home.steps.second.head}
              desc={t.page.home.steps.second.desc}
            />
            <StepArticle number={3} head={t.page.home.steps.third.head}
              desc={t.page.home.steps.third.desc}
            />
          </div>
        </div>
      </section>

      {/* last cta: lets predict */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-2">
          <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 sm:px-10 py-10 flex flex-col gap-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              {t.page.home.cta.headline}
            </h2>

            <p className="text-lg text-slate-600 max-w-xl mx-auto">{t.page.home.cta.sub}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/predict"
                className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
              >
                {t.page.home.cta.button}
              </Link>
            </div>

            <p className="text-sm text-slate-500">{t.page.home.cta.lastline}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;
