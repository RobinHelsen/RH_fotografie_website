import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Header() {

  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (

    <header className="w-full border-b border-black bg-gray-100 shadow-sm">

      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-4">
        
        <span className="flex items-center gap-2 text-2xl font-semibold text-gray-800 mb-2 md:mb-0 cursor-default">
          <CameraIcon className="w-8 h-8 text-gray-800" />
          R.H_photography
        </span>

        {/* Static Navigation */}
        <nav className="flex items-center gap-4 relative">
          <Link
            href="/"
            className="relative px-3 py-2 text-gray-700 hover:text-blue-900 text-sm font-medium font-bold transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('header.nav.portfolio')}
          </Link>
          <Link
            href="/reviews"
            className="relative px-3 py-2 text-gray-700 hover:text-blue-900 text-sm font-medium font-bold transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('header.nav.reviews')}
          </Link>
          <Link
            href="/aboutme"
            className="relative px-3 py-2 text-gray-700 hover:text-blue-900 text-sm font-medium font-bold transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('header.nav.aboutme')}
          </Link>
          <Link
            href="/pricing"
            className="relative px-3 py-2 text-gray-700 hover:text-blue-900 text-sm font-medium font-bold transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('header.nav.pricing')}
          </Link>
          <Link
            href="/contact"
            className="relative px-3 py-2 text-gray-700 hover:text-blue-900 text-sm font-medium font-bold transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
          >
            {t('header.nav.contact')}
          </Link>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => changeLanguage("nl")}
              className={locale === "nl" ? "font-bold underline" : ""}
            >
              NL
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={locale === "en" ? "font-bold underline" : ""}
            >
              EN
            </button>
          </div>
          
        </nav>
      </div>
    </header>
  );
}