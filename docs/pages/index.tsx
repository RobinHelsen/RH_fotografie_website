import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleNenaClick = () => {
    router.push('/nena');
  };

  const handleIbizaClick = () => {
    router.push('/ibiza');
  };

  const handleBoJasperClick = () => {
    router.push('/bo-jasper');
  };

  const handleKruiwagenkoersClick = () => {
    router.push('/kruiwagenkoers');
  };

  const handleKvhvshoot1Click = () => {
    router.push('/kvhvp1');
  };

  const handleCharlotteClick = () => {
    router.push('/charlotte');
  };

  const handleLiesjeClick = () => {
    router.push('/liesje');
  };

  const handlePicosClick = () => {
    router.push('/picos');
  };

  const handleSpanjeClick = () => {
    router.push('/spanje');
  };

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
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-auto">
          <img src="/images/mountains.jpg" alt="Mountains" className="w-full h-full md:h-auto object-cover" />
          <h1 className="absolute top-[15%] left-1/2 -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal text-stone-200 mb-6 tracking-tight italic drop-shadow-lg text-center px-4">
            {t('portfolio.H1')}
          </h1>
        </section>

        {/* Nena Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/nena3.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:right-6 md:right-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#ffffff] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.nena.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.nena.description')}
              </p>
            </div>
            <button 
              onClick={handleNenaClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Ibiza Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/boats.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:left-6 md:left-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-slate-600 p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.ibiza.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.ibiza.description')}
              </p>
            </div>
            <button 
              onClick={handleIbizaClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Bo & Jasper Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/bo&jappeshoot.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:right-6 md:right-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#fbe031] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.bo&jasper.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.bo&jasper.description')}
              </p>
            </div>
            <button 
              onClick={handleBoJasperClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* KVHV Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/kvhvshoot1.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:left-6 md:left-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#8C6B2E] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.kvhvshoot1.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.kvhvshoot1.description')}
              </p>
            </div>
            <button 
              onClick={handleKvhvshoot1Click}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Charlotte Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/charlotte.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:right-6 md:right-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#FAECC5] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.charlotte.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.charlotte.description')}
              </p>
            </div>
            <button 
              onClick={handleCharlotteClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Picos Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/picos.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:left-6 md:left-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#767976] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.picos.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.picos.description')}
              </p>
            </div>
            <button 
              onClick={handlePicosClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Spanje Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/spanje.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:right-6 md:right-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#9bccd6] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.spanje.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.spanje.description')}
              </p>
            </div>
            <button 
              onClick={handleSpanjeClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Liesje Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/liesje.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:left-6 md:left-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#d8a15f] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.liesje.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.liesje.description')}
              </p>
            </div>
            <button 
              onClick={handleLiesjeClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

        {/* Kruiwagenkoers Section */}
        <section className="relative w-full min-h-[500px] md:min-h-[600px]">
          <img src="/images/kruiwagenkoers 2025.jpg" alt="Boats" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 md:inset-auto md:top-6 md:bottom-6 md:right-6 md:right-12 w-full md:w-1/3 bg-gradient-to-br from-stone-900/90 to-stone-800/80 md:backdrop-blur-sm border-l-0 md:border-l-4 border-[#748d55] p-6 md:p-10 flex flex-col justify-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-4 italic md:-ml-5">
                {t('portfolio.kruiwagenkoers.title')}
              </h2>
              <p className="text-white leading-relaxed text-sm md:text-base">
                {t('portfolio.kruiwagenkoers.description')}
              </p>
            </div>
            <button 
              onClick={handleKruiwagenkoersClick}
              className="group mt-6 self-start px-6 py-3 text-white font-semibold border border-white/40 rounded-md relative overflow-hidden hover:bg-white/10 transition cursor-pointer"
            >
              <span className="relative z-10">
                {t('portfolio.seeMorePhotos')}
              </span>
              <span className="absolute left-6 right-6 bottom-2 h-px bg-white scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            </button>
          </div>
        </section>

      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
  },
});

export default Home;