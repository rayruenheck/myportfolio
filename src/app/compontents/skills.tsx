"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Icon {
  icon_id: number;
  raster_sizes: {
    formats: {
      preview_url: string;
      download_url: string;
      format: string;
    }[];
    size: number;
    size_height: number;
    size_width: number;
  }[];
}

const keywords = [
  "javascript",
  "typescript",
  "python",  
  "react",
  "nodejs",
  "postgres",
  "sql",
  "nextjs",
  "tailwindcss",
];

export default function Skills() {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    fetchIcons();
  }, []);

  const fetchIcons = async () => {
    try {
      const iconsData: Icon[] = [];

      for (const keyword of keywords) {
        const response = await fetch(
          `https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${keyword}&count=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.ICONFINDER_API_KEY}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch icons for ${keyword}.`);
        }

        const data = await response.json();
        if (data.icons && data.icons.length > 0) {
          iconsData.push(data.icons[0]);
        }
      }

      setIcons(iconsData);
    } catch (error) {
      console.error("Error fetching icons:", error);
    }
  };

  return (
    <div id='skills' className='h-[100vh] flex flex-col justify-center items-center '>
    <motion.div  className='w-full h-full flex flex-col items-center'
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: .5,
        }}
      >
      
      <h1 className='text-5xl md:text-7x1 mb-[100px] font-mono'> Technologies</h1>
      <div className='col-span-1 flex items-start font-mono flex-col p-4 border-2 rounded shadow-2xl lg:w-1/2 '>
      <ul className="flex justify-between w-full h-full">
    {icons.map((icon) => (
      <li key={icon.icon_id}>
        <div>
          <img
            src={icon.raster_sizes[5]?.formats[0]?.preview_url}
            alt={`Icon ${icon.icon_id}`}
            className="w-[75px] h-[75px] "
          />
        </div>
      </li>
    ))}
  </ul>
      </div>
    </motion.div>
    </div>
    
  );
}





