import React from 'react'
import CardBg from '../../assets/card-bg.svg'
import InsertPhoto from '../../assets/photo.svg'
import ItemIcon from '../../assets/item-icon.svg'
import Widget from '../../assets/widget-icon.svg'
import AddEvent from '../../assets/plus-icon.svg'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-fit relative'>
        <div className= 'h-10 relative '>
            <img src= {CardBg} alt="Background" className=' w-full max-h-full rounded-tl-xl rounded-tr-xl'/>
            <div className='w-fit bg-white p-1 rounded-full absolute top-0 left-0 right-0 ml-auto mr-auto mt-2'>
                <img src={InsertPhoto} alt="Insert Photo Icon" className=' h-16 border-t-2 border-gray-400 rounded-full '/>
            </div>  
            
        </div>
        <div className='h-2/3 flex flex-col items-center pt-16 bg-white text-2xl font-bold rounded-br-xl rounded-bl-xl -mt-4'>
            
        <h3 className='text-center leading-10 '>Welcome! {localStorage.getItem('username') || 'there'}<br /></h3>
        <div className='relative flex flex-col'>
            <button className=' font-normal text-lg text-blue-600'>Add a photo</button>
            <input type="file" id="myFile" name="filename" className='absolute text-sm w-48 bg-black -left-24 cursor-pointer opacity-0'></input>
        </div>
        <hr className=' border-gray-300 w-full m-4'/>
        <div className='h-1/4 p-2 flex w-full justify-between hover:cursor-pointer hover:bg-slate-100'>
            <div>
                <p className=' text-base font-normal text-gray-400'>Connections</p>
                <p className=' text-lg font-bold'>Grow your network</p>
            </div>
            <img src={Widget} alt="Widgets Icon" className='h-1/2 mt-4'/>
        </div>
            <hr className='border-gray-300 w-full m-4'/>
            <div className='mr-auto w-full p-2 flex gap-1 hover:cursor-pointer hover:bg-slate-100 items-center'>
                <img src= {ItemIcon} alt="Items Icon" className='h-full'/>
                <p className=' text-lg font-bold' >My items</p>
            </div>
        </div>
        <div className='bg-white my-4 rounded-xl'>
            <div className='leading-8'>
                <p className='text-blue-500 p-2 '>Groups</p>
                <div className='py-1 px-2 flex justify-between hover:cursor-pointer hover:bg-slate-100'>
                    <p >Events</p>
                    <img src={AddEvent} alt="Event Add Icon" />
                </div>
        
                <p className = 'py-1 px-2 hover:cursor-pointer hover:bg-slate-100'>Follow Hashtags</p>
            </div>
            <hr className='w-full m-2'/>
            <div className='p-2'>
                <p className='text-gray-400 -mt-1 pb-1'>Discover More</p>
            </div>
        </div>
  </div>
  )
}

export default Sidebar