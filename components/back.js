import Image from 'next/image'

export default function Back() {
    return (
        <>
            <div className='absolute top-0 left-0   w-screen h-screen'>
                <Image 
                    className="object-cover fixed"
                    src={"/back.jpg"}
                    alt={"背景画像"}
                    width="5000"
                    height="1000"
                    objectFit="contain"
                />
            </div>
        </>
    )
}