"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 2AX63lgKuYfj3VOmp5MUklnzPUEJmooB9lfS1af8fnbEwTDvJty9hys52ck7VzGp',
      },
    };

    fetch('https://api.iconfinder.com/v4/icons/search?query=arrow&count=10', options)
      .then((response) => response.json())
      .then((response) => {
        const firstIcon = response.icons?.[0];
        const firstRasterSize = firstIcon?.raster_sizes?.[0];
        const previewUrl = firstRasterSize?.formats?.[0]?.preview_url;
        console.log(previewUrl)
        setIconUrl(previewUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  

  return (
    <div id='skills' className='h-[100vh] flex flex-col justify-center items-center'>
      <motion.div
        id='about'
        className='w-full h-full flex flex-col items-center'
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className='text-7xl mb-[100px] font-mono'>Technologies</h1>
        <div className='col-span-1 flex items-start h-[400px] font-mono flex-col p-4 border-2 rounded shadow-2xl lg:w-1/2 '>
          {iconUrl ? <img src={iconUrl} alt="" /> : <div>Loading icon...</div>}
        </div>
      </motion.div>
    </div>
  );
}






