import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu as Icon } from 'react-icons/fi'
interface setter {
    setter : Dispatch<SetStateAction<boolean>>
}
export default function SideBarMobile({ setter } : setter) {
    return (
        <nav className="md:hidden fixed z-20 top-0 left-0 right-0 h-[60px] flex [&>*]:my-auto px-2 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <button
                className="text-4xl flex text-black dark:text-white"
                onClick={() => {
                    setter(oldVal => !oldVal);
                }}
            >
                <Icon />
            </button>
            <Link href="/" className="mx-auto">
                <Image
                    src="/images/Ray Ruenheck.png"
                    alt="Ray Ruenheck"
                    width={200}
                    height={200}
                />
            </Link>
        </nav>
    )
}