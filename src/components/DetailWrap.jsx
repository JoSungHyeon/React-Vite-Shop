import './css/DetailWrap.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { addItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const saveCart = (itemNumber) => {
    let outData;
    if(localStorage.getItem('item') !== null) {
        outData = localStorage.getItem('item');
        outData = JSON.parse(outData);
        if(outData === null) {
            outData = new Array();
        }
        outData.push(itemNumber);
        outData = new Set(outData);
        outData = Array.from(outData);
        localStorage.setItem('item', JSON.stringify(outData));
    }
}


const DetailWrap = ({itemData}) => {
    
    const params = useParams();

    let {id} = useParams();

    const [tempItem, setTempItem] = useState(false);

    let moreData;

    /* useEffect(() => {
        for(var ele of JSON.parse(localStorage.getItem('item'))) {
            moreData.push(ele.id)
        }

        if(moreData.includes(Number(params.id))) {
            setTempItem(true);
        } else {
            setTempItem(false);
        }
    }, []) */

    let findTitle;

    useEffect(() => {
        if(localStorage.getItem('item') === null) {
            moreData = [];
        } else {
            moreData = JSON.parse(localStorage.getItem('item'));
        }

        findTitle = moreData.findIndex((item)=>item.id === Number(params.id));

        if(findTitle !== -1) {
            setTempItem(true);
        } else{
            setTempItem(false);
        }
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 500);

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
                            <h4>Size : {itemData[params.id-1].inch}</h4>
                            <p>{itemData[params.id-1].content}</p>
                            <h4>{itemData[params.id-1].price.toLocaleString()} 원</h4>
                            {   tempItem === false
                                ? <button onClick={()=>{
                                    dispatch(addItem( {id: id, title: itemData[params.  id-1].title, count: 1, price: itemData[params.id-1].  price} ));
                                    saveCart(itemData[params.id - 1]);
                                    setTempItem(true);
                                    alert("관심품목에 저장되었습니다.");
                                }}
                                >관심품목 추가</button>
                                : <button className='tempBtn'>이미 추가된 상품입니다.</button>
                            }
                            {/* <button onClick={()=>{
                                dispatch(addItem( {id: id, title: itemData[params.  id-1].title, count: 1, price: itemData[params.id-1].  price} ));
                                saveCart(itemData[params.id - 1]);
                                alert("관심품목에 저장되었습니다.");
                            }}
                            >관심품목 추가</button> */}
                    </div>
                    : null
                }
            </div>
        </>
    )
}

export default DetailWrap;