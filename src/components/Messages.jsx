import React, {useState} from 'react'

const Messages = () => {

    const [preview, setPreview] = useState(false);

    return (
      <div className='flex items-center justify-center w-full'>
        <div className='bg-black p-4 rounded-full'>
                <div className='text-white'>Hello</div>
        </div>
      </div>
    )
  }

export default Messages