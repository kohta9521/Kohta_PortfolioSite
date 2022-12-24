import Image from 'next/image'

export default function Sidebar() {
    return (
        <>
            <div className="w-full h-full">
                <dh-component>
                    <div className="flex flex-no-wrap">
                        <div className='w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex'>
                            <div className="px-8">
                                <div className="h-16 w-full flex items-center">
                                    <Image
                                        src="/enterlogo.png"
                                        aria-label="Enter Logo"
                                        role="img"
                                        width="144"
                                        height="30"
                                        viewBox="0 0 144 30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </dh-component>
            </div>
        </>
    )
}