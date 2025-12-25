import Head from 'next/head';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('app.title')}</title>
        <meta name="description" content="Exam app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="relative w-full">
          <img src="/images/mountains.jpg" alt="Mountains" className="w-full object-cover" />

          <h1 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-4xl md:text-5xl lg:text-6xl font-semibold text-white drop-shadow-lg text-center">
            {t('portfolio.H1')}
          </h1>

          <p className="absolute top-[25%] left-1/2 -translate-x-1/2 font-semibold text-white drop-shadow-lg text-center">
            {t('portfolio.description1')}
          </p>
        </section>

        <section className="relative w-full">
          <img src="/images/boats.jpg" alt="Boats" className="w-full object-cover" />

          {/* Overlay panel */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[90%] md:w-2/3 lg:w-1/2 bg-black/50 backdrop-blur-sm p-6 md:p-10 text-center rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              {t('portfolio.ibiza.title')}
            </h2>

            <p className="text-white mb-6">
              {t('portfolio.ibiza.description')}
            </p>

            <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-200 transition">
              {t('portfolio.seeMore')}
            </button>
          </div>
        </section>

        
      </main>

      
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
  },
});

export default Home;
