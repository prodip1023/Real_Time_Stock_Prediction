import React,{useEffect} from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosinstance'


const Dashboard = () => {
  // const accessToken = localStorage.getItem('accessToken')
  useEffect(() => {
    const fetchProtectedData = async() => {
      try{
        const response = await axiosInstance.get('/protected-view/');
        
      console.log('sucess:',response.data);
    }catch(error){
      console.error('Error fetching data:',error)
    }

    }
    fetchProtectedData()
    
  },[])
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard