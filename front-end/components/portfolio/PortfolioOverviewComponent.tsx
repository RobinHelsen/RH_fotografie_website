import classNames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import { FotoAlbum } from '@types';
import { useTranslation } from 'next-i18next';

type Props = {
  fotoalbums: FotoAlbum[];
};

const PortfolioOverviewComponent: React.FC<Props> = ({ fotoalbums }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleAlbumClick = (albumId: number) => {
    router.push(`/portfolioOverviewPage/${albumId}`); // Navigate to detailed album page
  };

  return (
    <div>
      <h1>{t('albums.overview')}</h1>
      {fotoalbums.map((album) => (
        <div
          key={album.id}
          onClick={() => handleAlbumClick(album.id)}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            marginBottom: '10px',
            cursor: 'pointer',
            backgroundImage: album.photos.length > 0 ? `url(${album.photos[0].url})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: album.photos.length > 0 ? 'white' : 'black', // Adjust text color for readability
          }}
        >
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
            <p>{t('albums.photos.clickToViewMore')}</p>
          ) : (
            <p>{t('albums.photos.noPhotos')}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PortfolioOverviewComponent;

