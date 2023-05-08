import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const carContext = createContext('Toyota Car');
export const moneyContext = createContext(50000);


const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const [money, setMoney] = useState(50000);
    // const car = 'BMW Car'; 

    return (
        <carContext.Provider value={[house, setHouse]}>
            <moneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Grandpa</h2>
                    <section className='flex'>
                        <Father house={house}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunty house={house}></Aunty>
                    </section>
                </div>
            </moneyContext.Provider>
        </carContext.Provider>
    );
};

export default Grandpa;