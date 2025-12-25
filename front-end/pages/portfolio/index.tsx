import Header from '@components/header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

import FotoAlbumService from '@services/FotoAlbumService';
import { FotoAlbum } from '@types';
import useInterval from 'use-interval';
import React, { useState } from 'react';

const portfolioOverviewPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [album, setSetup] = useState<FotoAlbum[]>([]);
  const { t } = useTranslation();

  const fetchFotoAlbums = async () => {
    setLoading(true);
    const result = await FotoAlbumService.getAllFotoAlbums();
    if (result.error) {
      setError(result.error);
    } else {
      setSetup(result.data);
    }
    setLoading(false);
  };

  useInterval(() => {
    fetchFotoAlbums();
  }, 50000);

  React.useEffect(() => {fetchFotoAlbums();}, []);

  return (
    <>
      <Head>
        <title>{t('albums.title')}</title>
      </Head>
      <Header />
      <main>
        <section className="flex flex-col justify-center">
        <h1 className="text-center text-4xl mt-10">{t('albums.H1')}</h1>
        </section>

        {loading && <p className="text-gray-500 text-center">Loading fotoAlbums...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}
      </main>
    </>
  );
};

export default portfolioOverviewPage;