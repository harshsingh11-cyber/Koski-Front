import React, {  useContext } from 'react';
import { DataContext } from './DataContext';
import { BsFillPersonFill } from 'react-icons/bs';
import './More.css';

function More() {
    const {data,ind} = useContext(DataContext);
    
    console.log("our data" , data);

    const obj = data[ind];
    console.log(obj);

  return (<>
 <div className='oup'>
 <h1>⭐ User Details  ⭐</h1>
 </div>
    <div className="more">


    <div className='parent_more'> 
     
 <div className="profile">
 <BsFillPersonFill />
 </div>
    <div className="child_more">
        <h1> Name : {obj.name}</h1>
        <h4> Email : {obj.email}</h4>
        <h4>Phone : {obj.phone}</h4>
    </div>
    <div className='other'>
     <br />
     <br />
     <br />
     <br />
     <p>More info - 👇👇</p>
    <p> Position : {obj.position}</p>
        <p> About : {obj.about}</p>
        <p> Adreess : {obj.address}</p>
    </div>
       
    </div>
    </div>
    </>
  )
}

export default More
