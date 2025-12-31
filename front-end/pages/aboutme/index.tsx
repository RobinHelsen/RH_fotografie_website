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
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            {t('about.title')}
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Profile Section */}
          <div className="mb-16">
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <img
                    src="/images/Robin1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full shadow-lg ring-2 ring-gray-200"
                  />
                </div>
                <div className="text-left flex-1">
                  <ul className="text-xl text-gray-600 font-light mb-2">
                    * {t('about.subtitle1')}
                  </ul>
                   <ul className="text-xl text-gray-600 font-light mb-2">
                    * {t('about.subtitle2')}
                  </ul>
                   <ul className="text-xl text-gray-600 font-light mb-2">
                    * {t('about.subtitle3')}
                  </ul>
                  <ul className="text-xl text-gray-600 font-light mb-2">
                    * {t('about.subtitle4')}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Three Main Sections */}
          <div className="space-y-8">
            
            {/* Photography Section */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-3xl font-light text-gray-900 leading-tight m-0 p-0">
                  {t('about.photography.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.photography.intro')}</p>
                <p>{t('about.photography.passion')}</p>
                <p>{t('about.photography.style')}</p>
                <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-200">
                  {t('about.photography.quote')}
                </p>
              </div>
            </div>

            {/* IT Section */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h2 className="text-3xl font-light text-gray-900 leading-tight m-0 p-0">
                  {t('about.it.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.it.intro')}</p>
                <p>{t('about.it.website')}</p>
                <div className="flex flex-wrap gap-2 py-4">
                  {['HTML', 'CSS', 'Tailwind', 'JavaScript', 'React', 'Next.js'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 border border-gray-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{t('about.it.blend')}</p>
              </div>
            </div>

            {/* Abstract Music Section */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h2 className="text-3xl font-light text-gray-900 leading-tight m-0 p-0">
                  {t('about.music.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.music.intro')}</p>
                <p>{t('about.music.exploration')}</p>
                <p>{t('about.music.connection')}</p>
                <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-200">
                  {t('about.music.quote')}
                </p>
              </div>
            </div>

            {/* Hike/Nature Enjoyer Section */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20l4.5-9 3.5 4 4-6 4 11H4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11l2-3 2 2" />
                </svg>
                <h2 className="text-3xl font-light text-gray-900 leading-tight m-0 p-0">
                  {t('about.hike.title')}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.hike.intro')}</p>
                <p>{t('about.hike.exploration')}</p>
                <p>{t('about.hike.connection')}</p>
                <p className="text-sm text-gray-500 italic pt-4 border-t border-gray-200">
                  {t('about.hike.quote')}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)] text-center">
            <h3 className="text-3xl font-light text-gray-900 mb-4">
              {t('about.cta.title')}
            </h3>
            <p className="text-gray-600 mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition-colors"
              >
                {t('about.cta.contact')}
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-3 bg-transparent border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition-colors"
              >
                {t('about.cta.pricing')}
              </a>
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