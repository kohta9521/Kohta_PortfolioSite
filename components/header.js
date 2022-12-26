import Image from "next/image"
import Link from "next/link"

// react icons
import { SiQiita } from 'react-icons/Si';
import { SiZenn } from 'react-icons/Si';
import { AiOutlineGithub } from 'react-icons/Ai';

export default function Header() {
    return (
        <>
        <div className="w-full h-20 bg-black max-h-32 flex justify-between">
            <div className="w-1/6 h-full">
                <Image
                    className="object-cover w-full mt-0.5"
                    src={"/logo.jpg"}
                    alt={"ロゴ画像"}
                    width={550}
                    height={250}
                    objectFit="contain"
                />
            </div>
            <div className="w-1/5 h-full">
                <ul className="flex justify-around h-full">
                    <li className="w-30 h-full mt-6">
                        <Link href="/">
                            <SiQiita 
                                className=" text-3xl"
                                color="white"
                            />
                        </Link>
                    </li>
                    <lii className="w-30 h-full mt-6">
                        <Link href="/">
                            <SiZenn 
                                className=" text-2xl"
                                color="white"
                            />
                        </Link>
                    </lii>
                    <lii className="w-30 h-full mt-6">
                        <Link href="/">
                            <AiOutlineGithub 
                                className="text-2xl"
                                color="white"
                            />
                        </Link>
                    </lii>
                </ul>
            </div>
        </div>
        </>
    )
}