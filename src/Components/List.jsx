import React, {useState} from 'react';
import "../App.css";

const List = (props) => {
  
//   const [input,setinput]=useState('');

  const data=props.data;
  const index=props.index;

  const editTask=(index)=>{

    const newEditData=data.find((value,i)=>i===index);
    props.setInput(newEditData);
    props.setEditId(index+1);

    // console.log("edit button is pressed",newEditData);
  }

  const deleteTask=(index)=>{

    const newData=data.filter((value,i)=>{
        return index!=i;
    })
    props.setData(newData);


    // console.log("delete button is pressed",data,newData)
  }
    
  return (
    <div className='list'>
      <label >
      {/* <input type="text" value={props.value}  id='inputListBox' readOnly/>
       <span style={{display:'none'}}>{props.value}</span> */}
      </label>
      {props.value}

        
        <button onClick={()=>editTask(index)}>Edit Task</button>
        <button onClick={()=>deleteTask(index)}>Delete Task</button> 
    </div>
  )
}

export default List