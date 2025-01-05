import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import PorfolioService from '@services/UserService';
import { StatusMessage } from '@types';
import { useTranslation } from 'next-i18next';

import { FotoAlbum } from '@types';

type Props = {
  fotoalbums: FotoAlbum[];
};

const PortfolioOverviewComponent: React.FC<Props> = ({ fotoalbums }) => {
  return (
    <div>
      <h1>Portfolio Overview</h1>
      {fotoalbums.map((album) => (
        <div key={album.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h2>Album: {album.albumname}</h2>
          <p>
            <strong>Photographer:</strong> {album.photographer.firstname} {album.photographer.lastname} (
            {album.photographer.email})
          </p>
          <p>
            <strong>Photographed User:</strong> {album.photographedUser.firstname} {album.photographedUser.lastname} (
            {album.photographedUser.email})
          </p>

          {album.photos.length > 0 ? (
            <div>
              <h3>Photos:</h3>
              <ul>
                {album.photos.map((photo) => (
                  <li key={photo.id}>
                    <img
                      src={photo.url}
                      alt={photo.title}
                      style={{ maxWidth: '150px', display: 'block', marginBottom: '5px' }}
                    />
                    <p>
                      <strong>Title:</strong> {photo.title}
                    </p>
                    <p>
                      <strong>Description:</strong> {photo.explanation}
                    </p>
                    <p>
                      <strong>Credits:</strong> {photo.credits}
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