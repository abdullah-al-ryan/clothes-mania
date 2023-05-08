import React, { useContext } from 'react';
import { carContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(carContext)
    return (
        <div>
            <h4>Special</h4>
            <p>Gift: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;