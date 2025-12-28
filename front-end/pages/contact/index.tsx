// pages/contact.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('contact.pageTitle')}</title>
        <meta name="description" content="Contact information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/images/Blue3.jpg" 
          alt="Mountains" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-black/10"></div>
      </div>

      <main className="min-h-screen py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-10">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
              {t('contact.title')}
            </h1>
          </div>

          {/* Contact Grid */}
          <div className="space-y-8">
            
            {/* Email */}
            <div className="bg-white/85 px-10 py-6 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h2 className="text-2xl font-light text-gray-900 mb-4 -ml-6">
                {t('contact.email.title')}
              </h2>
              <a 
                href="mailto:robin.helsen.rh@gmail.com" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
              >
                robin.helsen.rh@gmail.com
              </a>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Phone */}
              <div className="bg-white/85 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-light text-gray-900 mb-4 -ml-6">
                  {t('contact.phone.title')}
                </h2>
                <a 
                  href="tel:+32123456789" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                >
                  +32 492 39 37 99
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-white/85 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <h2 className="text-2xl font-light text-gray-900 mb-4 -ml-6">
                  {t('contact.instagram.title')}
                </h2>
                <a 
                  href="https://instagram.com/r.h_phtgrphy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors text-lg"
                >
                  @r.h_phtgrphy
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white/85 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h2 className="text-2xl font-light text-gray-900 mb-4 -ml-6">
                {t('contact.location.title')}
              </h2>
              <p className="text-gray-600 text-lg mb-2">
                {t('contact.location.area')}
              </p>
              <p className="text-sm text-gray-500">
                {t('contact.location.note')}
              </p>
            </div>

            {/* Availability */}
            <div className="bg-white/85 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h2 className="text-2xl font-light text-gray-900 mb-6 -ml-6">
                {t('contact.availability.title')}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-3">
                  <p className="text-sm text-gray-500">
                    {t('contact.availability.text')} 
                  </p>
                </div>
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-gray-600">{t('contact.availability.response')}</span>
                  <span className="text-gray-900">{t('contact.availability.hours')}</span>
                </div>
              </div>
            </div>

            {/* Contact Form Note */}
            <div className="bg-white/85 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('contact.notes.preferred')}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-900 font-medium">
                    {t('contact.notes.looking')}
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

export default Contact;