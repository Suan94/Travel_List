import React, { useState } from 'react';





export const Form = ({ setItem }) => {


    const [ description, setDescription ] = useState( '' );
    const [ quantity, setQuantity ] = useState( 1 );
    




    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( description.trim().length <= 2) return
        const newItem = { id: Date.now() ,description, quantity, packed: false };
        setItem( item =>
            [ ...item, newItem ]
        );
        setDescription( '' );
        setQuantity( 1 );
    };


    const handleInput = ({ target }) => {
        setDescription( target.value );
    };


    const handleSelect = ({ target }) => {
        setQuantity( +target.value );
    };






    return (

        <form className='add-form' onSubmit={ handleSubmit }>

            <h3> What do you need 🥰 for your tip? </h3>
            <select 
                value={ quantity }
                onChange={ handleSelect }
            >
                {
                    //Como crear un arreglo en JSX (1-20)
                    Array.from({length: 20}, (_, i) => i + 1 ).map( num => 
                        <option 
                            key={ num }
                            value={ num }
                        >
                            { num }
                        </option>
                    )
                }
            </select>
            <input 
                type='text' 
                placeholder='Item...' 
                name='description'
                value={ description }
                onChange={ handleInput }
                autoComplete='off'
                />
            <button>Add</button>
        </form>


    );
};
