import CloseIcon from '@mui/icons-material/Close';
import InputDefault from '../InputDefault';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import Checkbox from '@mui/material/Checkbox';

import ButtonDefault from '../ButtonDefault';

const LoginForm = () => {

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("submit");
    }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className='flex flex-col align-center login-form'>
            <div className='flex-center header-form'>
                <span>Đăng nhập</span>
                <CloseIcon className='close-icon' />
            </div>
            <form onSubmit={onSubmit} className='flex flex-col form-submit'>
                <div className='flex align-center input-default'>
                    <div className='flex-center wrapper-icon'>
                        <PersonIcon className='icon-form' />
                    </div>
                    <InputDefault
                        name='userName'
                        type='text'
                        placeholder='Nhập tên đăng nhập'
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
                    />
                </div>
                <div className='wrapper-checkbox'>
                    <Checkbox
                        {...label}
                        defaultChecked
                    />
                    <span>Ghi nhớ</span>
                </div>
                <ButtonDefault
                    title='Đăng nhập'
                />
            </form>
        </div>
    )
}

export default LoginForm;