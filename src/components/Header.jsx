import { useNavigate } from 'react-router-dom';
import './css/Header.css'

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className='Header'>
            <div className='header_logo' onClick={()=>{navigate("/")}}>BOARD SHOP</div>
            <div className='user-wrap'>
                <div className='signup' onClick={()=>{navigate("/cart")}}>관심품목</div>
            </div>
        </header>
    )
}

export default Header;