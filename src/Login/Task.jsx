import React, { useEffect, useState } from 'react';
import {Table,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import ReactDeleteRow from 'react-delete-row';


const Task=()=>{
    const [data, setData]=useState([]);
    const getData=async ()=>{
       const result=await axios.get('http://jsonplaceholder.typicode.com/todos');
    //    console.log(result) 
        setData(result.data)
    }
    useEffect(()=>{
        getData();
    },[])
    // const handleDelete=(id)=>{
    //     const newData=data.filter((elem)=>elem.id!==id+1);
    //     setData(newData)
    // }
    return(
        <div>
            <Link to='/' ><Button>LogOut</Button></Link>
<Table style={{width:'60%'}}>
  <thead>
    <tr>
      <th>UserId</th>
      <th>Title</th>
      <th>Completed</th>
    </tr>
    </thead>
    <tbody>
{data.map((item,i)=>{
    return(
            <ReactDeleteRow key={i} data={item} onDelete={item=>{return window.confirm(`Are you sure?`)}} >
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed.toString()}</td>
            {/* <td><Button key={item.id} style={{color:'black'}} onClick={handle} variant='primary'>Delete</Button></td> */}
            </ReactDeleteRow>   
    )
})}
  </tbody>
</Table>
        </div>
    )
}
export default Task;