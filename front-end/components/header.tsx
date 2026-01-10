import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  const navLinks = [
    { href: "/", label: t('header.nav.portfolio') },
    { href: "/reviews", label: t('header.nav.reviews') },
    { href: "/aboutme", label: t('header.nav.aboutme') },
    { href: "/pricing", label: t('header.nav.pricing') },
    { href: "/contact", label: t('header.nav.contact') },
  ];

  return (
    <header 
      className={`w-full bg-stone-900/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isExpanded ? 'py-5' : 'py-2'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="w-full px-6 lg:px-12 flex items-center justify-between">
        
        <Link href="/" className="flex items-center group">
          <img 
            src="/images/logo.png" 
            alt="R.H Photography Logo" 
            className={`w-auto brightness-0 invert group-hover:opacity-80 transition-all duration-300 ${
              isExpanded ? 'h-12' : 'h-7'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center gap-1 transition-all duration-300 ${
          isExpanded ? 'opacity-100' : 'opacity-70'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-stone-300 hover:text-white tracking-wide transition-all duration-300 after:content-[''] after:absolute after:bottom-1 after:left-4 after:right-4 after:h-px after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                isExpanded ? 'text-sm' : 'text-xs'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-6 pl-6 border-l border-stone-700">
            <button
              onClick={() => changeLanguage("nl")}
              className={`px-2 py-1 tracking-wide transition-all duration-300 ${
                isExpanded ? 'text-sm' : 'text-xs'
              } ${
                locale === "nl" 
                  ? "text-white" 
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              NL
            </button>
            <span className="text-stone-600">/</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 tracking-wide transition-all duration-300 ${
                isExpanded ? 'text-sm' : 'text-xs'
              } ${
                locale === "en" 
                  ? "text-white" 
                  : "text-stone-500 hover:text-stone-300"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-stone-300 hover:text-white text-sm tracking-wide transition-colors duration-300 border-b border-stone-800 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-4 pt-4 mt-2">
              <button
                onClick={() => changeLanguage("nl")}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  locale === "nl" 
                    ? "text-white" 
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                Nederlands
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  locale === "en" 
                    ? "text-white" 
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}