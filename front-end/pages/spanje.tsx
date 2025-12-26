import Head from 'next/head';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const BoJasper: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Head>
        <title>{t('app.title')} - Bo & Jasper</title>
        <meta name="description" content="Bo & Jasper portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-serif italic mb-6">
          {t('portfolio.bo&jasper.title')}
        </h1>
        <p className="text-lg">
          {t('portfolio.bo&jasper.description')}
        </p>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
  },
});

export default BoJasper;