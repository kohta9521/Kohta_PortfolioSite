import Image from "next/image"
import Link from "next/link"

// react icons
import { SiQiita } from 'react-icons/Si';
import { SiZenn } from 'react-icons/Si';
import { AiOutlineGithub } from 'react-icons/Ai';

export default function Header() {
    return (
        <>
        <div className="w-full h-20 bg-black max-h-32 flex justify-between z-20 absolute">
            <div className="w-1/6 h-full">
                {/* <Image
                    className="object-cover mt-2 fixed"
                    src={"/logo.jpg"}
                    alt={"ロゴ画像"}
                    width={220}
                    height={230}
                    objectFit="contain"
                /> */}
                <h2 className="h-full w-auto text-2xl mt-5 ml-10 text-white">KohtaPortfolio</h2>
            </div>
            <div className="w-1/5 h-full">
                <ul className="flex justify-around h-full">
                    <li className="w-30 h-full mt-6">
                        <Link href="https://qiita.com/kohta9521">
                            <SiQiita 
                                className=" text-3xl"
                                color="white"
                            />
                        </Link>
                    </li>
                    <lii className="w-30 h-full mt-6">
                        <Link href="https://zenn.dev/kohta9521">
                            <SiZenn 
                                className=" text-2xl"
                                color="white"
                            />
                        </Link>
                    </lii>
                    <lii className="w-30 h-full mt-6">
                        <Link href="https://github.com/kohta9521">
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