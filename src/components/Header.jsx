import { useNavigate } from 'react-router-dom';
import './css/Header.css'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className='Header'>
            <div className='header_logo' onClick={()=>{navigate("/")}}>SHOP</div>
            <div className='user-wrap'>
                <div className='login' onClick={()=>{navigate("/signin")}}>로그인</div>
                <div className='signup' onClick={()=>{navigate("/signup")}}>회원가입</div>
                <div className='signup' onClick={()=>{navigate("/cart")}}>장바구니</div>
            </div>
        </header>
    )
}

export default Header;