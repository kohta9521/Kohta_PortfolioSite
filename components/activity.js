import Image from 'next/image'

export default function Activity() {
    return (
        <>
            <h1>Here is Activity components</h1>
            <div className='w-1/2 '>
                <Image 
                src=""
                width="300px"
                />
            </div>
            <div className='w-40 h-40 bg-black absolute top-40'>
                <h1>Test Area</h1>
            </div>
        </>
    )
}