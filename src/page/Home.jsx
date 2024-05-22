import { useContext, useEffect, useState } from 'react'
import { ItemStateContext } from '../App'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductWrap from '../components/ProductWrap'
import Footer from '../components/Footer'

const Home = () => {
    const itemData = useContext(ItemStateContext);
    
    useEffect(() => {
        const loadTab = document.querySelector(".Button_all");
        loadTab.classList.add("Button_on");
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <ProductWrap itemData={itemData} />
            <Footer />
        </>
    )
}

export default Home;