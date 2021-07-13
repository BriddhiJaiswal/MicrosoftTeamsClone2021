import React from 'react';
import ConversationButtons from '../ConversationButtons/ConversationButtons';
import GroupCallVideo from './GroupCallVideo';
import './GroupCallRoom.css';

const GroupCallRoom = (props) => {
    const { groupCallStreams } = props;
    return (
        <div className='group_call_room_container'>
            <div className='group_call_videos_container'>
                {
                    groupCallStreams.map(stream => {
                        return <GroupCallVideo key={stream.id} stream={stream} />
                    })
                }
            </div>
            <ConversationButtons {...props} groupCall />
        </div>
    );
};

export default GroupCallRoom;