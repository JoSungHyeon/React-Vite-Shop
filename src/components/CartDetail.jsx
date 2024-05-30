import './css/CartDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount } from '../store/cartSlice'
import { useEffect, useState } from 'react';

const CartDetail = () => {

    let state = useSelector((state) => { return state });
    
    let dispatch = useDispatch();

    let [quantity, setQuantity] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);
    let [emptyItem, setEmptyItem] = useState(false);

    useEffect(() => {
        state.cart.map((a)=>{
            setTotalPrice(totalPrice += a.price);
            setQuantity(quantity += a.count);
        });
        
        if(localStorage.getItem('item') === "[]") {
            setEmptyItem(true);
        }
    }, []);

    const minusFunction = (i) => {
        setTotalPrice(totalPrice -= state.cart[i].price);
        setQuantity(quantity -= 1);
    }

    return (
        <div className='CartDetail'>
            <h1>나의 관심품목</h1>
            <div className='CartDetail_table'>
                <table>
                    <thead className='CartDetail_thead'>
                        <tr>
                            {/* <th>#</th> */}
                            <th className='item_img'>상품 이미지</th>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                        </tr>
                     </thead>
                     <tbody className='CartDetail_tbody'>
                        {
                            emptyItem === true
                            ? <tr className='empty_text'><td>현재 관심품목이 없습니다.</td></tr>
                            : null
                        }
                        {
                            state.cart.map((a, i)=>
                                <tr key={i}>
                                    <td><img src={`https://JoSungHyeon.github.io/shop-data/img/${state.cart[i].id}.png`} /></td>
                                    <td>{state.cart[i].title}</td>
                                    <td
                                        value={state.cart[i].price * state.cart[i].count}
                                        className='price'
                                        key={a.price}
                                    >
                                        {(state.cart[i].price * state.cart[i].count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                    </td>
                                    <td className='CartDetail_count'>
                                        <button onClick={()=>{
                                            dispatch(minusCount(state.cart[i].id));
                                            state.cart[i].count === 0
                                            ? null
                                            : minusFunction(i)
                                        }}>-</button>
                                        <p className='count'>{state.cart[i].count}</p>
                                        <button onClick={()=>{
                                            dispatch(addCount(state.cart[i].id));
                                            setTotalPrice(totalPrice += state.cart[i].price);
                                            setQuantity(quantity += 1)
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    emptyItem === true
                    ? null
                    : <div className='cart_total_wrap'>
                        <div className='cart_total_price'>합계 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div className='cart_total_quantity'>총 수량 : {quantity}</div>
                    </div>
                }
            </div>     
        </div>
    )
}

export default CartDetail;