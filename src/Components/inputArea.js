import React, { useState } from 'react'

const InputArea = (props) => {
    const[inputText,setInputText]=useState("");
    const handleChange=(event)=>{
       setInputText(event.target.value);
    }
    const handleSubmit=(e)=>{
    e.preventDefault();
    }
    return (
        <div className="container">
        {/* <form className="Input-form" onSubmit={handleSubmit} > */}
            <input type="text" placeholder="Enter your todos..." onChange={handleChange}
             value={inputText}/>
            <button onClick={()=>{
                props.additems(inputText);
                setInputText("");
            }} >Add</button>
        {/* </form> */}
        </div>
    )
}

export default  InputArea;
