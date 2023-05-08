import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { moneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(moneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p><small>House: {house}</small></p>
            <p><small>Money: {money}</small></p>
            <section className='flex'>
                <Cousin house={house}></Cousin>

            </section>
        </div>
    );
};

export default Uncle;