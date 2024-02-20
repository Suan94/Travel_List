import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Form } from './components/Form';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';





export const App = () => {


    const [ item, setItem ] = useState( [] );






    return (


        <div className='app'>

            <Logo />
            <Form setItem={ setItem }/>
            <PackingList 
                items={ item } 
                setItem={ setItem }
            />
            <Stats 
                item={ item }
            />

        </div>


    );
};
