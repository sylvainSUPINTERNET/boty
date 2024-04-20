import Image from 'next/image';


export default function Header () {
    return (
        <div className='p-6 text-5xl font-extrabold leading-tight flex mx-auto container'>
            <p>TypeBot</p>
            <Image
                    src="/bot.png"
                    alt="Logo"
                    className="dark:invert py-0.5 ml-1"
                    width={56}
                    height={10}
                    priority
                />
        </div>
    )
}