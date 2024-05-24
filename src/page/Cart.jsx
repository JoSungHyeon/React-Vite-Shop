import Header from '../components/Header'
import Footer from '../components/Footer'
import CartDetail from '../components/CartDetail'
import { useContext } from 'react';
import { ItemStateContext } from '../App';

const Cart = () => {
    return (
        <>
            <Header />
            <CartDetail />
            <Footer />
        </>
    )
}

export default Cart;