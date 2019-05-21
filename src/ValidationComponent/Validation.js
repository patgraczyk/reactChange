import React from 'react'

const valiadtion = (props) => {
    let validationMessage = "Text longenoug";

    if (props.inputLength <= 5) {
        validationMessage="Changed message"
    } 
    return (
        <div> 
            <p>{validationMessage}</p>
         </div>   
    )
}

export default valiadtion;


// ternary option 
{/* <div> 
{
    props.inputLength > 5 ? 
    <p>Text too long</p> :
    <p>Text too short</p>
}
</div>    */}