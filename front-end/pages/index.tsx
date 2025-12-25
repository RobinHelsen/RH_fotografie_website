import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import styles from '@styles/home.module.css';
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
      <Header></Header>
      {/* Hero section */}
      <section className="relative w-full h-[60vh]">
        <img src="/images/mountains.jpg" alt="background" className="w-full h-full object-cover"/>

        <h1 className="
          absolute
          left-1/2
          top-1/4
          -translate-x-1/2
          -translate-y-1/2
          text-4xl md:text-5xl lg:text-6xl
          font-semibold
          text-white
          drop-shadow-lg
        ">
          {t('portfolio.H1')}
        </h1>


      </section>

      {/* Content below hero */}
      <main className="text-center mt-12 mx-auto md:w-3/5 lg:w-1/2">
        <p>{t('portfolio.description1')}</p>
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

export default Home;
