import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import UsernameInput from './components/UsernameInput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import videoCon from '../resources/videoCon.png'
import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
    const [username, setUsername] = useState('');
    
    const history = useHistory();

    const handleSubmitButtonPressed = () => {
        registerNewUser(username);
        saveUsername(username);
        history.push('/dashboard');
    };

    return (
        <div className='login-page_container background_secondary_color'>
            <div className='login-page_login_box background_secondary_color login-page-div'>
                <div className='login-page_logo_container'>
                    <img className='login_page_logo_image' src={logo} alt='VideoCallIcon'/>
                </div>
                <div className='login-page_title_container'>
                    <h2 className='login-page_heading'>Microsoft Teams</h2>
                    <br />
                    <h3>Get started with Microsoft Teams!</h3>
                </div>
                <UsernameInput username={username} setUsername={setUsername} />
                <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
            </div>
            <div className='login-page_div'>
                <img src={videoCon} alt='VideoCall' />
            </div>
        </div>
    );
};

const mapActionToProps = (dispatch) => {
    return {
        saveUsername: username => dispatch(setUsername(username))
    };
};

export default connect(null, mapActionToProps)(LoginPage);