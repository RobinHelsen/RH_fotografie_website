import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import FotoAlbumService from '@services/FotoAlbumService';
import { FotoAlbum } from '@types';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AlbumDetailPage: React.FC = () => {

  const router = useRouter();
  const { albumId } = router.query;

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [album, setAlbum] = useState<FotoAlbum | null>(null);
  const { t } = useTranslation();

  const fetchAlbumDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await FotoAlbumService.getAlbumById(Number(albumId));
      if (result.error) {
        setError(result.error);
      } else {
        setAlbum(result.data);
      }
    } catch (err) {
      setError(t('albums.details.fetchError'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
        fetchAlbumDetails();
  }, [router.query]);

  return (
    <>
      <Head>
        <title>{t('albums.details.title')}</title>
      </Head>
      <Header />
      <main className="container mx-auto mt-10">
        {loading && <p className="text-gray-500 text-center">{t('albums.details.loading')}</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {!loading && !error && album && (
          <div>
            <h1 className="text-4xl text-center mb-6">{album.albumname}</h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold">{t('albums.details.photographer')}</h2>
              <p>
                {album.photographer.firstname} {album.photographer.lastname} (
                {album.photographer.email})
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold">{t('albums.details.photographedUser')}</h2>
              <p>
                {album.photographedUser.firstname} {album.photographedUser.lastname} (
                {album.photographedUser.email})
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">{t('albums.details.photos')}</h2>
              {album.photos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {album.photos.map((photo) => (
                    <div key={photo.id} className="border rounded shadow p-2">
                      <img src={photo.url} alt={photo.title} className="w-full h-48 object-cover mb-2" />
                      <h3 className="font-semibold">{photo.title}</h3>
                      <p>{photo.explanation}</p>
                      <p className="text-sm text-gray-500">{photo.credits}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>{t('albums.details.noPhotos')}</p>
              )}
            </div>
          </div>
        )}
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

export default AlbumDetailPage;
