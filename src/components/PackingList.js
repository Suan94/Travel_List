import React, { useState } from 'react';
import { Item } from './Item';




export const PackingList = ({ items, setItem }) => {



    const [ sortBy, setSortBy ] = useState( 'input' );

    let sortedItem;
    if( sortBy === 'input' ) sortedItem = items;
    
    if( sortBy === 'description') 
        sortedItem = items
            .slice()
            .sort(( a, b ) => a.description.localeCompare( b.description ));
    
    if( sortBy === 'packed') 
        sortedItem = items
            .slice()
            .sort(( a, b ) => +a.packed - +b.packed );
    
    const handleSort = ({ target }) => {
        setSortBy( target.value );
    };


    const handleClear = (  ) => {
        const confirmed = window.confirm( 'Are you sure you want to delete all items?' );
        confirmed && setItem( [] );
    };



    return (

        <div className='list'>
            <ul>
                {
                    sortedItem.map( item => (
                        <Item
                            key={ item.id } 
                            item={ item }
                            setItem={ setItem }
                        />
                    ))
                }
            </ul>
            <div className='actions'>
                <select value={ sortBy } onChange={ handleSort }>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={ handleClear }>Clean List</button>
            </div>
        </div>


    );
};
