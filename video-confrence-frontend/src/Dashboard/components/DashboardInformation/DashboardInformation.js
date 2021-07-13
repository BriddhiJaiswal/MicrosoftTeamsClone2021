import React from 'react';
import './DashboardInformation.css';

const DashboardInformation = ({ username }) => {
    return (
        <div className='dashboard_info_text_container'>
            {/* <span className='dashboard_info_text_title'>
                Hello {username}, welcome to Microsoft Teams!
            </span>
            <span className='dashboard_info_text_description'>
                You can start video chat to any person from the active users list or create a meeting or join any ongoing meeting.
            </span> */}
        </div>
    );
};

export default DashboardInformation;