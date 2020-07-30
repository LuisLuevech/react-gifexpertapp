import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Hello']);

    //const handleAdd = () =>{
    //    setCategories([...categories, 'Hunter Hunter']);
    //}

    
    return (
            <>
                <h2>GifExpertApp</h2>
                <hr></hr>
                <AddCategory setCategories={ setCategories } />
                <ol>
                    {
                        categories.map (category =>(
                            <GifGrid 
                                key = {category}
                                category = {category}
                            />
                        ))
                    }
                    
                    
                </ol>     
                
            </>
    )

}


export default GifExpertApp;