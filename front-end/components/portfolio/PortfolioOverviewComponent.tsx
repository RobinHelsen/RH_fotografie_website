import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import PorfolioService from '@services/UserService';
import { StatusMessage } from '@types';
import { useTranslation } from 'next-i18next';

import { FotoAlbum } from '@types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type Props = {
  fotoalbums: FotoAlbum[];
};

const PortfolioOverviewComponent: React.FC<Props> = ({ fotoalbums }) => {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('albums.overview')}</h1>
      {fotoalbums.map((album) => (
        <div key={album.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h2>{t('albums.name')}: {album.albumname}</h2>
          <p>
            <strong>{t('albums.photographer')}</strong> {album.photographer.firstname} {album.photographer.lastname} (
            {album.photographer.email})
          </p>
          <p>
            <strong>{t('albums.photographeduser')}</strong> {album.photographedUser.firstname} {album.photographedUser.lastname} (
            {album.photographedUser.email})
          </p>

          {album.photos.length > 0 ? (
            <div>
              <h3>{t('albums.photos.photos')}</h3>
              <ul>
                {album.photos.map((photo) => (
                  <li key={photo.id}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      style={{ maxWidth: '150px', display: 'block', marginBottom: '5px' }}
                    />
                    <p>
                      <strong>{t('albums.photos.title')}</strong> {photo.title}
                    </p>
                    <p>
                      <strong>{t('albums.photos.description')}</strong> {photo.explanation}
                    </p>
                    <p>
                      <strong>{t('albums.photos.credits')}</strong> {photo.credits}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No photos available in this album.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioOverviewComponent;