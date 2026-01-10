// pages/pricing.tsx
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
            <h1 className="text-6xl md:text-7xl font-serif font-normal text-white mb-6 tracking-tight italic drop-shadow-lg">
              {t('pricing.title')}
            </h1>
          </div>

          {/* Pricing Grid */}
          <div className="space-y-8">
            
            {/* Base Price */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-slate-600 p-6 md:p-10">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-5xl font-light text-white">€20</span>
                <span className="text-stone-400">{t('pricing.base.title')}</span>
              </div>
              <p className="text-stone-300 text-sm">
                {t('pricing.base.note')}
              </p>
            </div>

            {/* Hourly Rates */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-slate-600 p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-8 italic -ml-5">
                {t('pricing.hourly.title')}
              </h2>
              
              <div className="space-y-4">
                {[
                  { duration: `1 ${t('pricing.hour')}`, price: '€20' },
                  { duration: `2 ${t('pricing.hours')}`, price: '€40' },
                  { duration: `3 ${t('pricing.hours')}`, price: '€55' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-white/20 pb-3">
                    <span className="text-stone-300">{item.duration}</span>
                    <span className="text-2xl font-light text-white">{item.price}</span>
                  </div>
                ))}
                
                <div className="flex justify-between items-baseline pt-4">
                  <span className="text-white">{t('pricing.hourly.extra')}</span>
                  <span className="text-2xl font-light text-white">€10 / {t('pricing.hour')}</span>
                </div>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Extra Costs */}
              <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-slate-600 p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6 italic -ml-5">
                  {t('pricing.extras.title')}
                </h2>
                <p className="text-stone-300 leading-relaxed">
                  {t('pricing.extras.travel')}
                </p>
              </div>

              {/* Example */}
              <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-slate-600 p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-6 italic -ml-5">
                  {t('pricing.example.title')}
                </h2>
                <div className="space-y-3 text-sm text-stone-300 mb-6">
                  <p>{t('pricing.example.booking')}</p>
                  <div className="space-y-1 pl-4 border-l-2 border-white/30">
                    <p>{t('pricing.example.base')}</p>
                    <p>{t('pricing.example.hours')}</p>
                    <p>{t('pricing.example.travel')}</p>
                  </div>
                </div>
                <p className="text-2xl font-light text-white">
                  {t('pricing.example.total')}
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-slate-600 p-6 md:p-10">
              <div className="space-y-4 text-sm text-stone-300 leading-relaxed">
                <p>{t('pricing.notes.custom')}</p>
                <p>{t('pricing.notes.editing')}</p>
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