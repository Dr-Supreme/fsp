import React, {useState} from "react";

function ColorPicker(){

    const [color, setcolor] = useState("#FFFFFF");

    function handleColorChange(event){
        setcolor(event.target.value);
    }

return (<div className="color-picker-container"> 
        <h1>Color Picker</h1>

        <label>Select a Color: </label>
        <input type="color" value={color} onChange={handleColorChange}></input><br />

        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color:</p>
        </div> 
        
</div>);
}
export default ColorPicker