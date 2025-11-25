import { NavLink } from "react-router-dom";
import { useLang } from "../../context/LangContext";

function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-20 border-t border-slate-200 py-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4 text-center">
        {/* brand + short desc lol */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-slate-800">WYDO</h3>
          <p className="text-sm text-slate-600 max-w-sm">
            {t.footer.tagline}
          </p>
        </div>

        {/* navlinks */}
        <nav className="mt-2">
          <ul className="flex gap-6 text-sm text-slate-700">
            <li><NavLink to="/" className="hover:text-slate-950">{t.header.home}</NavLink></li>
            <li><NavLink to="/predict" className="hover:text-slate-950">{t.header.predict}</NavLink></li>
            <li><NavLink to="/about" className="hover:text-slate-950">{t.header.about}</NavLink></li>
          </ul>
        </nav>

        {/* bottomlin; copyright */}
        <p className="text-xs text-slate-500 mt-4">
          © {new Date().getFullYear()} {t.footer.bottom}
        </p>
      </div>
    </footer>
  )
}

export default Footer;
