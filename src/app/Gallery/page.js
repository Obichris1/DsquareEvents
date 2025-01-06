import React from 'react'
import Gallery from '../Components/GallerySection'
import { Typography } from '@mui/material'

import TypewriterEffect from '../Components/Typewriter'




const page = () => {

  const animatedText = "Think celebrations, Think D'square"


  console.log(animatedText);
  
  return (
    <div className='w-[90%] m-auto flex flex-col gap-4 md:w-[90%]'>
      {/* <Typography variant='h2' className='text-center'>Think celebration, Think D'square</Typography>
       */}
       <TypewriterEffect text={animatedText} />
       <hr className='mt-3' />
       
      <Gallery />

    </div>
  )
}

export default page