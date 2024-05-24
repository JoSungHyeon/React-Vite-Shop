import './css/CartDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount } from '../store/cartSlice'
import { useEffect, useState } from 'react';


const CartDetail = () => {

    let state = useSelector((state) => { return state });
    
    let dispatch = useDispatch();

    let [quantity, setQuantity] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        state.cart.map((a)=>{
            setTotalPrice(totalPrice += a.price);
            setQuantity(quantity += a.count);
        })
    }, [])

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
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                        </tr>
                     </thead>
                     <tbody className='CartDetail_tbody'>
                        {
                            state.cart.map((a, i)=>
                                <tr key={i}>
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
                <div className='cart_totla_quantity'>총 수량 : {quantity}</div>
                <div className='cart_total_price'>합계 금액 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
            </div>     
        </div>
    )
}

export default CartDetail;