import './css/Recent.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Recent = () => {
    let [recentData, setRecentData] = useState([]);


    useEffect(() => {
        if(localStorage.getItem('watched') === null) {
            setRecentData([]);
        } else {
            setRecentData(JSON.parse(localStorage.getItem('watched')));
        }
    }, [])

    let navigate = useNavigate();

    return (
        <div className="Recent">
            <p>최근본상품</p>
            {   
                localStorage.getItem('watched') === null
                ? null
                : recentData.map((a, key)=>{
                    return(
                        <>
                            <img key={key} onClick={()=>{navigate(`/product/${a}`)}} src={`https://JoSungHyeon.github.io/shop-data/img/${a}.png`} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default Recent;