export const ShowNotification = ({ field }: any) => {
    console.log("field", field)
    const textShow = () => {
        switch (field) {
            case 'username':
                return 'Tên đăng nhập không được rỗng'
            case 'invalidUsername':
                return 'Tên đăng nhập không hợp lệ'
            case 'password':
                return 'Mật khẩu không được rỗng'
            case 'invalidPassword':
                return 'Mật khẩu tối thiểu phải 6 kí tự'
            case 'confirmPassword':
                return 'Mật khẩu nhập lại không đúng'
            case 'email':
                return 'Email không được rỗng'
            case 'invalidEmail':
                return 'Email không hợp lệ'
        }
    }
    return (
        <div className='show-notify'>
            {textShow()}
        </div>
    )
}