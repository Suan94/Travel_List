import React from 'react';






export const Item = ({ item, setItem }) => {




    const handleCheck = ( id ) => {
        setItem( its => 
            its.map( item =>
                item.id === id 
                    ? { ...item, packed: !item.packed }
                    : item          
            )
        )
    };
   


    const handleRest = ( id ) => {
        setItem( item => item.filter( item => item.id !== id ))
    };




    return (


            <li>
                <input type='checkbox' value={ item.packed } onChange={ () => handleCheck( item.id )}/>
                <span style={ item.packed ? {textDecoration: 'line-through'} : {} }>{ item.quantity } { item.description }</span>
                <button onClick={ () => handleRest( item.id )}>❌&type;</button>
            </li>


    );
};
