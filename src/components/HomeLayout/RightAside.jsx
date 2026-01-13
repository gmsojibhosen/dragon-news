import React from 'react';
import SocialLogin from '../../pages/CategoryNews/SocialLogin/SocialLogin';
import FindSocial from '../../pages/CategoryNews/SocialLogin/FindSocial';
import QZone from '../../pages/CategoryNews/QZone';
import BGHero from '../../pages/CategoryNews/SocialLogin/BGHero';

const RightAside = () => {
    return (
        <div className='space-y-7'>
            <SocialLogin></SocialLogin>
            <FindSocial></FindSocial>
            <QZone></QZone>
            <BGHero></BGHero>
        </div>
    );
};

export default RightAside;