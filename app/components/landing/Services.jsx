import React from 'react'
import Card from '../common/Card'

const Services = () => {
  return (
    // <div className='h-screen w-full p-10 bg-fixed relative' style={{backgroundImage: 'url("secondbg.svg")'}}>

    //   {/* <div className='h-1/2 w-full bg-violet-950'>
    //   <img className='w-full h-full size-100' src="secondbg.svg" alt="landing img" />
    //   </div> */}

    //   <div className='h-1/2 w-full bg-green-300 flex justify-evenly p-4 z-50'>

    //     <div className='h-full flex justify-center items-center w-[30%] bg-yellow-300'>
    //     <img className='w-3/4' src="preai.svg" alt="landing img" />
    //     </div>

    //     <div className='h-full flex justify-center items-center w-[30%] bg-blue-300'>
    //     <img className='w-3/4 size-100' src="customai.svg" alt="landing img" />
    //     </div>

    //   </div>
    // </div>

    <div className='h-screen w-full flex justify-evenly items-center'>
      <Card title="AI Assisted" width="45" desc="" colorname="red-600" status="live"/>
      <Card title="Custom AI" desc="" status="not live"/>
      
    </div>
  )
}

export default Services
