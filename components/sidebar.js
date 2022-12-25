import Image from 'next/image'

export default function Sidebar() {
    return (
        <>
            <div className='w-52 h-full bg-black'>
                <div className='container'>
                    <div className='w-full h-20'>
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
        </>
    )
}