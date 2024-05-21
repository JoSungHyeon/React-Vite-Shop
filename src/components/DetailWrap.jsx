import './css/DetailWrap.css'
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { ItemStateContext } from "../App";

const DetailWrap = ({itemData}) => {
    
    const params = useParams();

    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 50);


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
                        <button>장바구니</button>
                        </div>
                    : null
                }
            </div>
        </>
    )
}

export default DetailWrap;