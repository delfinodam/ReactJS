import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const {items} = useContext(ItemsContext);

    const quantity = items.reduce((acc, act) => acc + act.quantity,0)
    return (
    <Link to="/cart">
    <img src={cart} height={35} />
    <span>{quantity}</span>
    </Link>
    );
};