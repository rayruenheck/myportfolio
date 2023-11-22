import { projectcard } from "../types";
import Image from "next/image";

export const ProjectCard = ({ title, description, link, image }:projectcard) => {
    
    return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div className='h-full md:h-[400px] w-[400px] border rounded shadow-md md:mr-6 flex flex-col justify-center items-center'>
            <Image width={600} height={600} className='h-full w-full' src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </a>
      );
    }
  