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
        <title>{t('about.title')} - {t('app.title')}</title>
        <meta name="description" content="About me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Solid Background */}
      <div className="fixed inset-0 -z-10 bg-gray-50"></div>

      <main className="min-h-screen">
        
        {/* Hero Image Section */}
        <div className="relative h-[70vh] md:h-[80vh]">
          <Image
            src="/images/Robin2.jpg"
            alt="Robin"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="px-6 pb-20 -mt-32 relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="bg-white p-10 md:p-16 border border-gray-200">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
                {t('about.heading')}
              </h1>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('about.bio.intro')}</p>
                <p>{t('about.bio.passion')}</p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-white p-10 md:p-16 border border-gray-200">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                {t('about.philosophy.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('about.philosophy.text')}
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-white p-10 md:p-16 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">
                    {t('about.contact.title')}
                  </h2>
                  <p className="text-gray-600">
                    {t('about.contact.message')}
                  </p>
                </div>
                <a 
                  href="/contact" 
                  className="inline-block px-10 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm tracking-wide whitespace-nowrap"
                >
                  {t('about.contact.button')}
                </a>
              </div>
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