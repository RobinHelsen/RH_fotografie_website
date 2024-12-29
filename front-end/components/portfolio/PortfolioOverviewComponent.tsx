import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import PorfolioService from '@services/UserService';
import { StatusMessage } from '@types';
import { useTranslation } from 'next-i18next';

const PortfolioOverviewComponent: React.FC = () => {
    return (
        <div>
            <h1>Component 1</h1>
        </div>
    )
}

export default PortfolioOverviewComponent;