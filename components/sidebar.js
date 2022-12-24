import { FaGithub } from "react-icons/fa"
import Link from 'next/link'

export default function Sidebar() {
    return (
        <>
        <div className="w-full h-50">
            <h1 className="text-center p-2">Sidebar</h1>

            <Link href="https://github.com/kohta9521">
                <FaGithub />            
            </Link>

        </div>
        </>
    )
}