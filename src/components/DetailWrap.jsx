import './css/DetailWrap.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailWrap = ({itemData}) => {
    const params = useParams();
    useEffect(()=>{
        let outData;
        if(localStorage.getItem('watched') !== null) {
            outData = localStorage.getItem('watched');
            outData = JSON.parse(outData);
            if(outData.length == "3") {
                outData.shift();
            }
            outData.push(itemData[params.id - 1].id)
            outData = new Set(outData)
            outData = Array.from(outData);
            localStorage.setItem('watched', JSON.stringify(outData));
        }
    }, [])

    return (
        <>
            <div className='DetailWrap'>
                <div className='detail_img'>
                    <img src={`https://JoSungHyeon.github.io/shop-data/img/${Number(params.id)}.png`} />
                </div>
                <div className='detail_txt'>
                    <h3>{itemData[params.id - 1].title}</h3>
                    <h4>{itemData[params.id - 1].content}</h4>
                    <p>{itemData[params.id - 1].price.toLocaleString()} 원</p>
                    <button>장바구니</button>
                </div>
            </div>
        </>
    )
}

export default DetailWrap;