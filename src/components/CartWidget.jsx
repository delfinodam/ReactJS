import cart from '../assets/cart.png';

export const CartWidget = () => {
    return (<>
    <img src={cart} height={35} />
    <span>0</span>
    </>);
};