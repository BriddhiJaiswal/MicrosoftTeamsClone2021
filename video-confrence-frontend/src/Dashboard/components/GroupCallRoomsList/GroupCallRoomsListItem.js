import React from 'react';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCallRoomsListItem = ({ room }) => {
    const handleListItemPressed = () => {
        webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
    };

    return(
        <div onClick={handleListItemPressed} className='group_calls_list_item background_main_color'>
            {/* <span className='roomId'>{room.roomId}</span> */}
            <div className='roomId'>
                {room.roomId}
            </div>
        </div>
    );
};

export default GroupCallRoomsListItem;