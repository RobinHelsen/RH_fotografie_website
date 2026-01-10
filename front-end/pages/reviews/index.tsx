// pages/reviews.tsx
import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: "Marnix De Swert",
      date: "November 2025",
      text: "reviews.review1.text",
      type: "reviews.review1.type"
    },
    {
      name: "Tom Janssens",
      date: "Oktober 2024",
      text: "reviews.review2.text",
      type: "reviews.review2.type"
    }
  ];

  return (
    <>
      <Head>
        <title>{t('reviews.pageTitle')}</title>
        <meta name="description" content="Client reviews and testimonials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="/images/portugal.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/30"></div>
      </div>

      <main className="min-h-screen py-20 px-6">
    
        <div className="ml-auto max-w-3xl w-full md:w-1/2">

          <div className="mb-10">
            <div>
              <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-4 tracking-tight">
                {t('reviews.title')}
              </h1>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="space-y-8">
            
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-white/90 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{t(review.text)}"
                </p>

                {/* Reviewer Info */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-900 font-medium mb-1">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span>{review.date}</span>
                    <span>•</span>
                    <span>{t(review.type)}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Statistics Card */}
            <div className="bg-white/90 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl font-light text-gray-900 mb-8 -ml-6">
                {t('reviews.stats.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-4">
                  <span className="text-gray-600">{t('reviews.stats.total')}</span>
                  <span className="text-3xl font-light text-gray-900">2</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white/90 p-10 border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <h3 className="text-2xl font-light text-gray-900 mb-4 -ml-6">
                {t('reviews.cta.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('reviews.cta.subtitle')}
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition-colors"
              >
                {t('reviews.cta.button')}
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

export default Reviews;