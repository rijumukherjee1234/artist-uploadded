import './App.css'
import React, { useEffect, useState }  from "react";
function App(){
    const [data,setdata]=useState([])
    const [count,setcount]=useState([])
    
    

    
    
    const click=()=> {   
        fetch("https://reqres.in/api/users?page=1").then((result)=>{
            result.json().then((resp)=>{
                console.warn("result",resp)
                setdata(resp.data)
                
            })
        })
    } 
useEffect(()=>{
    
},[])
    
    const clickhandel=()=>{
        fetch ("https://reqres.in/api/users?page=2").then((result)=>{
            result.json().then((resp)=>{
                setcount(resp.data)
                
            })
        })}
useEffect(()=>{

},[])
    
return(
    

    
    <div>
    
    <h1>Get api call</h1>
    
    
        
        
        <div className='container'>
      <button type='button' onClick={click} className="button1"  >page1</button>

        <button type='button' onClick={clickhandel}className="button2">page2</button></div>
        <br></br>

        <table>


        
        <tr >
            <td>id</td>
            <td>email</td>
            <td>first_name</td>
            <td>last_name</td>
            <td>avater</td>
        </tr>
        {
        data.map((item)=>
    
        <tr>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td><img src={item.avatar}></img></td>
    </tr>
        )}

    
    


    
   
        {
        count.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td><img src={item.avatar}></img></td>
    </tr>)}
    </table>

    </div>

    
)            

}
export default App;
