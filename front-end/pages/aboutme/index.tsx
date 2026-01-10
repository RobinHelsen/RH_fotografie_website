// pages/about.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('about.pageTitle')}</title>
        <meta name="description" content="About me - Photography, IT, and Music" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/images/lissabon.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-black/50"></div>
      </div>

      <main className="min-h-screen py-20 px-6">

        <div className="text-center md:text-left flex-1 mb-10">
          <h1 className="text-6xl md:text-7xl font-serif font-normal text-[#8b7154] mb-6 tracking-tight italic drop-shadow-lg">
            {t('about.title')}
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Profile Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <img
                    src="/images/Robin1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full shadow-lg ring-2 ring-white/20"
                  />
                </div>
                <div className="text-left flex-1">
                  <ul className="text-xl text-stone-200 font-light mb-2">
                    * {t('about.subtitle1')}
                  </ul>
                   <ul className="text-xl text-stone-200 font-light mb-2">
                    * {t('about.subtitle2')}
                  </ul>
                   <ul className="text-xl text-stone-200 font-light mb-2">
                    * {t('about.subtitle3')}
                  </ul>
                  <ul className="text-xl text-stone-200 font-light mb-2">
                    * {t('about.subtitle4')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Three Main Sections */}
          <div className="space-y-8">
            
            {/* Photography Section */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white italic -ml-2">
                  {t('about.photography.title')}
                </h2>
              </div>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>{t('about.photography.intro')}</p>
                <p>{t('about.photography.passion')}</p>
                <p>{t('about.photography.style')}</p>
                <p className="text-sm text-stone-400 italic pt-4 border-t border-white/20">
                  {t('about.photography.quote')}
                </p>
              </div>
            </div>

            {/* IT Section */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white italic -ml-2">
                  {t('about.it.title')}
                </h2>
              </div>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>{t('about.it.intro')}</p>
                <p>{t('about.it.website')}</p>
                <div className="flex flex-wrap gap-2 py-4">
                  {['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Next.js'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-stone-200 border border-white/20 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{t('about.it.blend')}</p>
              </div>
            </div>

            {/* Abstract Music Section */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white italic -ml-2">
                  {t('about.music.title')}
                </h2>
              </div>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>{t('about.music.intro')}</p>
                <p>{t('about.music.exploration')}</p>
                <p>{t('about.music.connection')}</p>
                <p className="text-sm text-stone-400 italic pt-4 border-t border-white/20">
                  {t('about.music.quote')}
                </p>
              </div>
            </div>

            {/* Hike/Nature Enjoyer Section */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20l4.5-9 3.5 4 4-6 4 11H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11l2-3 2 2" />
                </svg>
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white italic -ml-2">
                  {t('about.hike.title')}
                </h2>
              </div>
              <div className="space-y-4 text-stone-300 leading-relaxed">
                <p>{t('about.hike.intro')}</p>
                <p>{t('about.hike.exploration')}</p>
                <p>{t('about.hike.connection')}</p>
                <p className="text-sm text-stone-400 italic pt-4 border-t border-white/20">
                  {t('about.hike.quote')}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic">
              {t('about.cta.title')}
            </h3>
            <p className="text-stone-300 mb-8 leading-relaxed">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="group px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer">
                <a href="/contact" className="relative z-10">
                  {t('about.cta.contact')}
                </a>
                <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </button>
              <button className="group px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer">
                <a href="/pricing" className="relative z-10">
                  {t('about.cta.pricing')}
                </a>
                <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async (context: { locale: any }) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
    },
  };
};

export default About;