import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
  return (
      <div className='
      text-center   items-center justify-center bg-gray-100  mt-50'>
          <h1 className='text-2xl font-bold mb-4'>Counter</h1>




          <div className='text-5xl font-semibold text-blue-600 mb-6 no-underline'>
              {count}
        
          </div>
          <div className='flex justify-center '> 
          <div className='m-5'>
              <button onClick={()=> setCount(count +1)} className='bg-red-500  text-white px-5 py-2 rounded-lg hover:bg-red-600 transition '>add</button>
          </div>

          <div className='m-5'>
              <button onClick={()=> setCount(count -1 )} className='bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition '>
                  sub
              </button>
          </div>
        

          <div className='m-5'>
              <button onClick={()=> setCount(0)} className='bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition '>
                  reset
              </button>
          </div>

          </div>
          
      </div> 
    
  )
}

export default Counter