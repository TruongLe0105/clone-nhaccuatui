import React, { FC, useState, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

import CloseIcon from '@mui/icons-material/Close';
import InputDefault from '../InputDefault';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import ButtonDefault from '../ButtonDefault';
import { FormType } from "../types";
import { images } from '../../helpers/images';
import { validateEmail, validateForm } from '../../helpers/utils';
import { ShowNotification } from './ShowNotification'

const RegisterForm: FC<FormType> = (props) => {
    const { onClose, onSwitch } = props;

    const [formInput, setFormInput] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const [checked, setChecked] = useState(true);
    const [errorType, setErrorType] = useState('');

    const registerRef = useRef<any>();

    const { micro } = images;

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit", formInput);
        const { username, password, confirmPassword, email } = formInput;
        if (username.length === 0) {
            console.log("here");
            setErrorType('username');
        } else if (!validateForm(username)) {
            setErrorType('invalidUsername');
        } else if (password.length === 0) {
            setErrorType('password');
        } else if (password.length < 6) {
            setErrorType('invalidPassword');
        } else if (confirmPassword !== password) {
            setErrorType('confirmPassword');
        } else if (email.length === 0) {
            setErrorType('email');
        } else if (!validateEmail(email)) {
            setErrorType('invalidEmail');
        }

        setTimeout(() => {
            setErrorType('');
        }, 3000)
    };

    const handleCheckbox = () => {
        setChecked(!checked)
    };

    const handleChangeInput =
        (key: 'username' | 'password' | 'confirmPassword' | 'email') =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setFormInput({
                    ...formInput,
                    [key]: event.target.value
                })
            };

    const onChangeCaptcha = (value: any) => {
        console.log("Captcha value:", value);
    };

    const handleClosePopup = () => {
        registerRef?.current?.classList.add('animate__zoomOut');
        setTimeout(() => {
            onClose();
        }, 400)
    };

    const switchForm = () => {
        registerRef?.current?.classList.add('animate__zoomOutLeft');
        setTimeout(() => {
            onClose();
            onSwitch();
        }, 500);
    };

    const renderNoteText = (field: string) => {
        const textNote = () => {
            switch (field) {
                case 'username':
                    return 'B???n c?? th??? s??? d???ng ch??? c??i, ch??? s???, g???ch d?????i v?? d???u ch???m. Chi???u d??i 6-30 k?? t???'
                case 'password':
                    return 'Chi???u d??i 6-30 k?? t???. Kh??ng s??? d???ng ti???ng vi???t c?? d???u'
                case 'confirmPassword':
                    return 'Nh???p l???i m???t kh???u gi???ng b??n tr??n 1 l???n n???a'
                case 'email':
                    return '??i???n v??o email b???n mu???n s??? d???ng cho t??i kho???n n??y'
            }
        }
        return (
            <div className='flex-center wrapper-validate'>
                <ErrorOutlineIcon className='icon-form icon-description pointer' />
                <div className='description-validate'>{textNote()}</div>
            </div>
        )
    }

    return (
        <div ref={registerRef} className='flex flex-col align-center animate__animated animate__zoomIn login-form'>
            <div className='flex-center header-form'>
                <span>????ng k??</span>
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
                        placeholder='Nh???p t??n ????ng nh???p'
                        onChange={handleChangeInput('username')}
                        value={formInput.username}
                    />
                    {renderNoteText('username')}
                </div>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <KeyboardIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='password'
                        type='password'
                        placeholder='Nh???p m???t kh???u'
                        onChange={handleChangeInput('password')}
                        value={formInput.password}
                    />
                    {renderNoteText('password')}
                </div>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <KeyboardIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='password'
                        type='password'
                        placeholder='Nh???p l???i m???t kh???u'
                        onChange={handleChangeInput('confirmPassword')}
                        value={formInput.confirmPassword}
                    />
                    {renderNoteText('confirmPassword')}
                </div>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <MailOutlineIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='email'
                        type='email'
                        placeholder='Nh???p email'
                        onChange={handleChangeInput('email')}
                        value={formInput.email}
                    />
                    {renderNoteText('email')}
                </div>
                <div
                    className='flex align-center pointer wrapper-checkbox w-100'
                    onClick={handleCheckbox}
                >
                    <InputDefault
                        name='remember'
                        type='checkbox'
                        inputClass='pointer checkbox-input'
                        checked={checked}
                        onChange={handleCheckbox}
                    />
                    <span className='text-term'>T??i ???? ?????c v?? ?????ng ?? c??c <a href='https://www.nhaccuatui.com/thoa-thuan-su-dung/' className='text-agree'>th???a thu???n s??? d???ng</a >
                    </span>
                </div>
                <ReCAPTCHA
                    sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                    onChange={onChangeCaptcha}
                    style={{
                        marginTop: '1rem',
                    }}
                    className='flex-center'
                />
                <ButtonDefault
                    title='????ng k??'
                />
            </form >
            <div className='flex-center social-login'>
                <span>????ng nh???p NCT ID:</span>
                <img onClick={switchForm} src={micro} alt='micro' className='pointer social-icon' />
                <span style={{ marginLeft: '1rem' }}>Ho???c</span>
                <FacebookIcon className='pointer social-icon' color='primary' />
                <GoogleIcon className='pointer social-icon' color='secondary' />
            </div>
            {
                errorType && <ShowNotification field={errorType} />
            }
        </div >
    )
}

export default RegisterForm;