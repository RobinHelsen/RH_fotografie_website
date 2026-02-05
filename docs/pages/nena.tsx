import Head from 'next/head';
import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import fs from 'fs';
import path from 'path';
import { useState } from 'react';

interface PicosProps {
  images: string[];
}

const Picos: React.FC<PicosProps> = ({ images }) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Encode the filename to handle spaces and special characters
  const getImagePath = (filename: string) => {
    return `/images/nena/${encodeURIComponent(filename)}`;
  };
  
  return (
    <>
      <Head>
        <title>{t('app.title')} - Nena</title>
        <meta name="description" content="Nena portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-stone-100 p-6 md:p-12">
        <h1 className="text-5xl md:text-6xl font-light tracking-wide text-stone-800 mb-10">
          {t('portfolio.nena.title')}
        </h1>

        {/* Photo Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={getImagePath(image)} 
                alt={`Picos de Europa photo ${index + 1}`}
                className="w-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={getImagePath(selectedImage)} 
              alt="Selected photo"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  // Read images from the public/images/nena folder
  const imagesDirectory = path.join(process.cwd(), 'public', 'images', 'nena');
  
  let images: string[] = [];
  
  try {
    const files = fs.readdirSync(imagesDirectory);
    // Filter for image files only
    images = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
  } catch (error) {
    console.error('Error reading images directory:', error);
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'nl', ['common'])),
      images,
    },
  };
};


export default Picos;