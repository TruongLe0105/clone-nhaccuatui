import React, { FC, useState, useRef } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import InputDefault from '../InputDefault';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import ButtonDefault from '../ButtonDefault';
import { FormType } from '../types';

const LoginForm: FC<FormType> = (props) => {
    const { onClose, onSwitch } = props;

    const [formInput, setFormInput] = useState({
        username: '',
        password: ''
    });

    const [checked, setChecked] = useState(true);

    const loginRef = useRef<any>();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit", formInput);
    };

    const handleCheckbox = () => {
        setChecked(!checked)
    };

    const handleChangeInput =
        (key: 'username' | 'password') =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setFormInput({
                    ...formInput,
                    [key]: event.target.value
                })
            };

    const handleClosePopup = () => {
        loginRef?.current?.classList.add('animate__zoomOut');
        setTimeout(() => {
            onClose();
        }, 400)
    };

    const switchForm = () => {
        loginRef?.current?.classList.add('animate__zoomOutLeft');
        setTimeout(() => {
            onClose();
            onSwitch();
        }, 500);
    }

    return (
        <div ref={loginRef} className='flex flex-col align-center animate__animated animate__zoomIn login-form'>
            <div className='flex-center header-form'>
                <span>Đăng nhập</span>
                <CloseIcon className='pointer close-icon' onClick={handleClosePopup} />
            </div>
            <form onSubmit={onSubmit} className='flex flex-col form-submit'>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <PersonIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='username'
                        type='text'
                        placeholder='Nhập tên đăng nhập'
                        onChange={handleChangeInput('username')}
                        value={formInput.username}
                    />
                </div>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <KeyboardIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='password'
                        type='password'
                        placeholder='Nhập mật khẩu'
                        onChange={handleChangeInput('password')}
                        value={formInput.password}
                    />
                </div>
                <div
                    className='flex align-center pointer wrapper-checkbox'
                    onClick={handleCheckbox}
                >
                    <InputDefault
                        name='remember'
                        type='checkbox'
                        inputClass='pointer checkbox-input'
                        checked={checked}
                        onChange={handleCheckbox}
                    />
                    <span className='text-remember'>Ghi nhớ</span>
                </div>
                <ButtonDefault
                    title='Đăng nhập'
                />
            </form >
            <div className='flex-center social-login'>
                <span>Hoặc đăng nhập bằng: </span>
                <FacebookIcon className='pointer social-icon' color='primary' />
                <GoogleIcon className='pointer social-icon' color='secondary' />
            </div>
            <div className='flex-center footer-login'>
                <span>Bạn chưa có tài khoản NCT ID? </span>
                <span onClick={switchForm} className='pointer switch-form'>Đăng ký ngay</span>
            </div>
        </div >
    )
}

export default LoginForm;