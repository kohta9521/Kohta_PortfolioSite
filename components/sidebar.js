import Image from 'next/image'

export default function Sidebar() {
    return (
        <>
            <div className='w-full h-1/2 bg-black'>
                <div className='w-full h-full'>
                    <dir className='flex flex-no-wrap'>
                        <div className='w-64 absolute'>
                            <div className='px-8'>
                                <div className='h-16 w-full flex items-cneter'>
                                    <div className='px-8'>
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
                    </dir>
                </div>
            </div>
        </>
    )
}