import React,{useEffect} from 'react';
import axios from 'axios';

function Home() {
  useEffect(()=>{
    const config={
      headers:{
        Authorization:'Bearer'+localStorage.getItem('token')
      }
    };
    axios.get('https://myphysio.digitaldarwin.in/api/get-patient/',config)
    .then((res)=>{console.log(res.data);})
    .catch((err)=>{console.log(err);})
  },[]);
  
  return(
    <>
      <h1 style={{textAlign:"center",color:"#fff"}}>You have successfully logged In.</h1>
    </>
  )
}

export default Home;
