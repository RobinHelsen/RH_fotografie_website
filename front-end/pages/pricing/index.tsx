// pages/index.tsx (refined minimal pricing)
import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Pricing: React.FC = () => {
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

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/images/mountainBP.jpg" 
          alt="Mountains" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-black/50"></div>
      </div>

      <main className="min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-10">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              {t('pricing.title')}
            </h1>
          </div>

          {/* Pricing Grid */}
          <div className="space-y-8">
            
            {/* Base Price */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl font-light text-gray-900">€20</span>
                <span className="text-gray-500">{t('pricing.base.title')}</span>
              </div>
              <p className="text-gray-600 text-sm">
                {t('pricing.base.note')}
              </p>
            </div>

            {/* Hourly Rates */}
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h2 className="text-2xl font-light text-gray-900 mb-8 -ml-6">
                {t('pricing.hourly.title')}
              </h2>
              
              <div className="space-y-4">
                {[
                  { duration: `1 ${t('pricing.hour')}`, price: '€20' },
                  { duration: `2 ${t('pricing.hours')}`, price: '€40' },
                  { duration: `3 ${t('pricing.hours')}`, price: '€55' },
                  { duration: `4 ${t('pricing.hours')}`, price: '€65' },
                  { duration: `5 ${t('pricing.hours')}`, price: '€75' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                    <span className="text-gray-600">{item.duration}</span>
                    <span className="text-2xl font-light text-gray-900">{item.price}</span>
                  </div>
                ))}
                
                <div className="flex justify-between items-baseline pt-4">
                  <span className="text-gray-900">{t('pricing.hourly.extra')}</span>
                  <span className="text-2xl font-light text-gray-900">€10 / {t('pricing.hour')}</span>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Extra Costs */}
              <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-light text-gray-900 mb-6 -ml-6">
                  {t('pricing.extras.title')}
                </h2>
                <p className="text-gray-600">
                  {t('pricing.extras.travel')}
                </p>
              </div>

              {/* Example */}
              <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-light text-gray-900 mb-6 -ml-6">
                  {t('pricing.example.title')}
                </h2>
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <p>{t('pricing.example.booking')}</p>
                  <div className="space-y-1 pl-4 border-l-2 border-gray-200">
                    <p>{t('pricing.example.base')}</p>
                    <p>{t('pricing.example.hours')}</p>
                    <p>{t('pricing.example.travel')}</p>
                  </div>
                </div>
                <p className="text-2xl font-light text-gray-900">
                  {t('pricing.example.total')}
                </p>
              </div>
            </div>
            <div className="bg-white/95 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="space-y-4 text-sm text-gray-600">
                <p>{t('pricing.notes.custom')}</p>
                <p>{t('pricing.notes.editing')}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-900 text-red-700 font-semibold">
                    {t('pricing.notes.refund')}
                  </p>
                </div>
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

export default Pricing;