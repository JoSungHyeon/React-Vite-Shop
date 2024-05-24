import './css/DetailWrap.css'
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const saveCart = (itemNumber) => {
    let outData;
    /* if(localStorage.getItem('item') !== null) { */
        outData = localStorage.getItem('item');
        outData = JSON.parse(outData);
        if(outData === null) {
            outData = new Array();
        }
        outData.push(itemNumber);
        outData = new Set(outData);
        outData = Array.from(outData);
        localStorage.setItem('item', JSON.stringify(outData));
    /* } */
}

const DetailWrap = ({itemData}) => {
    
    const params = useParams();

    let {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 50);

    let dispatch = useDispatch();


    return (
        <>
            <div className='DetailWrap'>
                <div className='detail_img'>
                    <img src={`https://JoSungHyeon.github.io/shop-data/img/${Number(params.id)}.png`} />
                </div>
                {
                    isLoading === false
                    ? <div className='detail_txt'>
                        <h3>{itemData[params.id-1].title}</h3>
                        <h4>{itemData[params.id-1].content}</h4>
                        <p>{itemData[params.id-1].price.toLocaleString()} 원</p>
                        <button onClick={()=>{
                            dispatch(addItem( {id: id, title: itemData[params.id-1].title, count: 1, price: itemData[params.id-1].price} ));
                            alert("관심품목에 저장되었습니다.");
                            saveCart(itemData[params.id - 1]);
                        }}
                        >관심품목 추가</button>
                        </div>
                    : null
                }
            </div>
        </>
    )
}

export default DetailWrap;