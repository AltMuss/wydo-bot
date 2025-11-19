import { useLang } from '../../context/LangContext'

function Row({ i }: { i: number }) {
  return <>placeholder#{i + 1} </>;
}

function Home() {
  const { t } = useLang()

  return (
    <main>
      {/* hero */}
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-4xl font-bold">{t.page.home.hero}</span>
          <span className="text-lg text-white-100">{t.page.home.subhero}</span>
          <a
            href="/predict"
            className="inline-block px-4 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            role="button"
          >
            {t.page.home.heroBtn}
          </a>
        </div>
      </section>

      {/* placeholder for future progress */}
      {Array.from({ length: 1000 }).map((_, i) => (
        <Row key={i} i={i} />
      ))}
    </main>
  )
}

export default Home;
