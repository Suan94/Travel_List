import React from 'react';





export const Stats = ({ item }) => {

    if( !item.length ) 
        return (
            <p className='stats'>
                <em>Start adding some items to your packing list</em>
            </p>
        );

    const numItems = item.length;
    const numPack = item.filter( it => it.packed === true ).length;
    const itemOk = numPack !== 0 ? numPack/numItems*100 : 0;


    return (


            <footer className='stats'>
                <em>
                    { itemOk === 100
                    ? 'You got everithing! Ready to go'
                    :`You have ${ numItems } items on your list 🎒, and you already packed 🗿 ${ numPack } (${ Math.round( itemOk )}%)` 
                    }
                </em>
            </footer>


    );
};
