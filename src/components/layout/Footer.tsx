import { NavLink } from "react-router-dom";
import { useLang } from "../../context/LangContext";

function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-3xl mx-auto px-6 md:px-0 flex flex-col items-center gap-4">
        {/* upper div: desc + navlinks */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:justify-between w-full">
          {/* brand + short desc lol */}
          <div className="flex flex-col justify-between gap-3 md:gap-1 items-center md:items-start">
            <div className="flex flex-row gap-2 items-center">
              <img src="/icon.png" className="w-8 h-auto" />
              <h3 className="text-xl font-semibold text-slate-800">WYDO</h3>
            </div>
            <p className="text-sm text-slate-600 text-center md:text-left max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          {/* navlinks */}
          <nav className="mt-2">
            <ul className="flex flex-row md:flex-col gap-6 md:gap-2 text-sm text-slate-700 underline">
              <li><NavLink to="/" className="hover:text-slate-950">{t.header.home}</NavLink></li>
              <li><NavLink to="/predict" className="hover:text-slate-950">{t.header.predict}</NavLink></li>
              <li><NavLink to="/about" className="hover:text-slate-950">{t.header.about}</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* bottomline: copyright */}
        <p className="text-xs text-slate-500 mt-4 text-center">
          © {new Date().getFullYear()} {t.footer.bottom}
        </p>
      </div>
    </footer>
  )
}

export default Footer;
