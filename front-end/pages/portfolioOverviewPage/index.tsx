import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PortfolioComponent from '@components/portfolio/PortfolioOverviewComponent';
import Head from 'next/head';

const portfolioOverviewPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('albums.title')}</title>
      </Head>
      <Header />
      <main>
        <section className="flex flex-col justify-center">
            <h1 className="text-center text-4xl mt-10">{t('albums.H1')}</h1>
            <p className= "pl-5 mt-10">{t('albums.p')}</p>
        </section>
        <PortfolioComponent />
      </main>
    </>
  );
};

export const getServerSideProps = async (context: { locale: any }) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

export default portfolioOverviewPage;