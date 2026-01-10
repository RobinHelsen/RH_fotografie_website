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
              <h1 className="text-6xl md:text-7xl font-serif font-normal text-white mb-4 tracking-tight italic drop-shadow-lg">
                {t('reviews.title')}
              </h1>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="space-y-8">
            
            {reviews.map((review, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10"
              >
                {/* Review Text */}
                <p className="text-white leading-relaxed mb-6 italic">
                  "{t(review.text)}"
                </p>

                {/* Reviewer Info */}
                <div className="pt-4 border-t border-white/20">
                  <p className="text-white font-medium mb-1">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-stone-300">
                    <span>{review.date}</span>
                    <span>•</span>
                    <span>{t(review.type)}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Statistics Card */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-8 italic -ml-5">
                {t('reviews.stats.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-white/20 pb-4">
                  <span className="text-stone-300">{t('reviews.stats.total')}</span>
                  <span className="text-3xl font-light text-white">2</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-800/60 backdrop-blur-sm border-l-4 border-[#ffffff] p-6 md:p-10">
              <h3 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic -ml-5">
                {t('reviews.cta.title')}
              </h3>
              <p className="text-stone-300 mb-6 leading-relaxed">
                {t('reviews.cta.subtitle')}
              </p>
              <button 
                className="group self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
              >
                <a href="/contact" className="relative z-10">
                  {t('reviews.cta.button')}
                </a>
                <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
              </button>
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