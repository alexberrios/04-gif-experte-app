import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }

    const onInputChange = ({target}) => {

        setInputValue(target.value);

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar GIFS..."
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}
