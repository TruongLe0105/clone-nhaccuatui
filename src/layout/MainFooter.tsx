/* eslint-disable jsx-a11y/alt-text */

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import galleyry from '../assets/images/galleyry.png';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';

const MainFooter = () => {

    return (
        <div className='flex flex-col main-footer'>
            <div className='flex align-center header-footer'>
                <ul className='flex link-footer'>
                    <li>
                        <a href='https://nctcorp.vn/'>Giới thiệu</a>
                    </li>
                    <li>
                        <a href='http://apps.nhaccuatui.com/nhaccuatui-for-desktop.html/'>SP-DV</a>
                    </li>
                    <li>
                        <a href='https://www.nct.vn/ho-tro/'>Hỗ trợ</a>
                    </li>
                    <li>
                        <a href='https://beta.nhaccuatui.com/thoa-thuan-su-dung/'>Thỏa thuận sử dụng</a>
                    </li>
                </ul>
                <div className='flex align-center'>
                    <a className='flex align-center' href='https://www.facebook.com/NhacCuaTuiOfficial'><FacebookIcon className='icon-fb' /></a>
                    <a className='flex align-center' href='https://www.instagram.com/Nhaccuatui/'><InstagramIcon className='icon-ins' /></a>
                    <a className='flex align-center' href='https://apps.apple.com/vn/app/nhaccuatui/id1210763463?ls=1'><img src={appstore} className='logo-footer' /></a>
                    <a className='flex align-center' href='https://play.google.com/store/apps/details?id=ht.nct&hl=vi'><img src={googleplay} className='logo-footer' /></a>
                    <a className='flex align-center' href='http://cdc.hispace.hicloud.com/000000fC'><img src={galleyry} className='logo-footer' /></a>
                </div>
            </div>
            <div className='content-footer'>
                <div className='flex align-center justify-between'>
                    <img src='https://stc-id.nixcdn.com/v12/images/logo-nctc.svg' />
                    <div className='flex flex-col align-center'>
                        <span style={{ color: 'white', fontSize: '1.5rem' }}>CÔNG TY CỔ PHẦN NCT</span>
                        <span>Chủ sở hữu website: Ông Nhan Thế Luân</span>
                    </div>
                    <img src='https://stc-id.nixcdn.com/v12/images/Cong_Thuong.svg' />
                    <img src='	https://stc-id.nixcdn.com/v12/images/DMCA.svg' />
                </div>
                <ul style={{ paddingLeft: '1.2rem' }}>
                    <li>Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày 28/09/2015.</li>
                    <li>Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và Đầu tư Tp.Hồ Chí Minh cấp ngày 01/03/2008.</li>
                </ul>
            </div>
            <div className='flex align-center final-text'>
                <FmdGoodIcon className='address-icon' />
                <span>Tòa nhà The 678 Tower, 67 Hoàng Văn Thái, P.Tân Phú, Q.7, TPHCM</span>
            </div>
        </div >
    )
}

export default MainFooter;