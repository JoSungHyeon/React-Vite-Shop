import './css/TabButton.css'

const TabButton = ({ text, type, onClick }) => {
    return (
        <button onClick={onClick} className={`Button Button_${type}`} >{text}</button>
    )
};

export default TabButton