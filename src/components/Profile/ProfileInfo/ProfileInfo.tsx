import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img alt='Logo' src='https://image.pbs.org/video-assets/EpdqJM1-asset-mezzanine-16x9-WROhWU0.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Profile info
            </div>
        </div>
    )
}

export default ProfileInfo;