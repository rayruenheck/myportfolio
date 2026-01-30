import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Ray Ruenheck',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col mt-64">
      <h1 className='font-bold text-center uppercase text-3xl text-gray-800 dark:text-gray-200'>Not Found</h1>
      <p className='font-bold text-center uppercase text-3xl mt-3 text-gray-600 dark:text-gray-400'>Sorry, this page does not exist</p>
      <Link href="/" className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-12 inline-block">
        Homepage
      </Link>
    </div>
  );
}
