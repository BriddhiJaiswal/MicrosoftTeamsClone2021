import React, { useEffect } from 'react';
import ActiveUsersList from './components/ActiveUsersList/ActiveUsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler';
import DirectCall from './components/DirectCall/DirectCall';
import GroupCall from './components/GroupCall/GroupCall';
import DashboardInformation from './components/DashboardInformation/DashboardInformation';
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomsList';
import { connect } from 'react-redux';
import { callStates } from '../store/actions/callActions';
import './Dashboard.css';

const Dashboard = ({ username, callState }) => {
  useEffect(() => {
    webRTCHandler.getLocalStream();
    webRTCGroupHandler.connectWithMyPeer();
  }, []);

  return (
    <div className='dashboard_container background_main_color'>
      <div className='dashboard_left_section background_secondary_color'>
        <div className='join_group'>
            <h4>Join following Group Call</h4>
            <GroupCallRoomsList />
        </div>
      </div>
      <div className='dashboard_middle_section'>
        <div className='dashboard_content_container'>
          <DirectCall />
          <GroupCall />
          {callState !== callStates.CALL_IN_PROGRESS && <DashboardInformation username={username} />}
        </div>
      </div>
      <div className='dashboard_right_section background_secondary_color'>
        <div className='dashboard_active_users_list'>
          <ActiveUsersList />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard
})

export default connect(mapStateToProps)(Dashboard);
