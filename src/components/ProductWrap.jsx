import { useState } from 'react';
import './css/ProductWrap.css'
import Item from './Item';
import Recent from './Recent';
import TabButton from './TabButton';

const ProductWrap = ({ itemData }) => {

    const [ tabName, setTabName ] = useState("all");

    const onClickTab = (e) => {
        const allTab = document.querySelector(".Button_all");
        const boardTab = document.querySelector(".Button_board");
        const wheelTab = document.querySelector(".Button_wheel");
        const myText = e.target.innerText;

        if(myText === "ALL") {
            allTab.classList.add("Button_on");
            boardTab.classList.remove("Button_on");
            wheelTab.classList.remove("Button_on");
            setTabName("all");
        } else if(myText === "BOARD") {
            allTab.classList.remove("Button_on");
            boardTab.classList.add("Button_on");
            wheelTab.classList.remove("Button_on");
            setTabName("board");
        } else if(myText === "WHEEL") {
            allTab.classList.remove("Button_on");
            boardTab.classList.remove("Button_on");
            wheelTab.classList.add("Button_on");
            setTabName("wheel");
        }
    }

    return (
        <div className="ProductWrap">
            <Recent itemData={itemData} />
            <div style={{display:"flex", flexWrap:"wrap"}}>
                <TabButton onClick={onClickTab} text={'ALL'} type={'all'} />
                <TabButton onClick={onClickTab} text={'BOARD'} type={'board'} />
                <TabButton onClick={onClickTab} text={'WHEEL'} type={'wheel'} />
            </div>
            <div className='product_wrap_item'>
                {itemData.map((a, key)=> {
                    return (
                        tabName === a.type
                        ? <Item key={key} itemData={itemData[key]} />
                        : (
                            tabName === "all"
                            ? <Item key={key} itemData={itemData[key]} />
                            : null
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default ProductWrap;