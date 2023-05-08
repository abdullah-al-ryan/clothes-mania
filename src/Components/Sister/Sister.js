import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>Add: 1000</button>
        </div>
    );
};

export default Sister;