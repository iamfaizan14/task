import React,{useState} from "react";
import Dropdown  from './Dropdown';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Information } from "./Information";

const Home = () => {
  const [number, setNumber]=useState('');
  const handleDropdown=(e)=>{
    setNumber(e.target.value)
  }
  return (
    <div>
      <Link to='/' ><Button>LogOut</Button></Link>
      <Dropdown handleDropdown={handleDropdown}/>
      <Information number={number} />
    </div>
  );
};
export default Home;
