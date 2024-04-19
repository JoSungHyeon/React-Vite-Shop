import './css/Recent.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Recent = ({itemData}) => {
    let [recentData, setRecentData] = useState(JSON.parse(localStorage.getItem('watched')))

    let navigate = useNavigate()

    return (
        <div className="Recent">
            <p>최근본상품</p>
            {   
                localStorage.getItem('watched') === null
                ? null
                : recentData.map((a)=>{
                    return(
                        <>
                            <img onClick={()=>{navigate(`/product/${a}`)}} src={`https://JoSungHyeon.github.io/shop-data/img/${a}.png`} />
                        </>
                    )
                })

                //localStorage.getItem('watched')
            }



        </div>
    )
}

export default Recent;