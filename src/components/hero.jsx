"use client";
import { motion } from 'framer-motion';
import "./css/hero.css"
function Hero() {

    return (
        <>
            <div className='hero_section min-w-full container mx-auto md:ps-14 py-44'>
                <video
                    autoPlay
                    muted
                    loop
                    className='hero_video'
                >
                    <source src="/maroc.mp4" type="video/mp4" />
                    {/* Add additional video formats here if needed */}
                </video>
                <div className='hero_overlay' />
                <div className='absolute top-[20%]'>
                    <motion.h1
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8, ease: "easeIn" }}
                        className='text-4xl mb-3 text-mgreen'
                    >
                        Can't Get Enough From KasAtay ? <br /> Join Our Community Now !
                    </motion.h1>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                        className='flex gap-5'
                    >
                        <button className='bg-myellow py-1 px-3 text-black'>Subscribe to Blog</button>
                        <button className='bg-mred py-1 px-3 text-black'>Listen to Podcast</button>
                    </motion.div>
                </div>
            </div>

            <div className='bg-myellow min-w-full container mx-auto md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 '>
                <h2 className='text-2xl mb-3'>Join the Tea Party</h2>
                <p>
                    Welcome to KasAtay, your gateway to the enchanting world of Moroccan tea culture! Our vibrant blog takes you on a flavorful journey, unraveling the secrets behind the art of brewing traditional Moroccan mint tea. Dive into our engaging podcast episodes, where we delve deeper into the history, rituals, and fascinating stories surrounding this iconic beverage. Immerse yourself in the aromatic blends, savor the rich traditions, and learn the techniques passed down through generations. Join us as we explore the magic of Moroccan tea, inviting you to experience a taste of Morocco's hospitality and warmth from wherever you are in the world.                </p>
            </div>
            <div
                className='bg-mred min-w-full container mx-auto md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-32'>
                <motion.div
                    initial={{ scale:0.8,y: 30, opacity: 0 }}
                    whileInView={{scale:1, y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='py-20 bg-black flex flex-col justify-center items-center text-7xl  text-mgreen'>
                    <i className="fa-solid fa-arrow-trend-up -rotate-12 mb-9"></i>
                    <p>100+</p>
                </motion.div>
                <motion.div
                    initial={{ scale:0.8,y: 30, opacity: 0 }}
                    whileInView={{ scale:1,y: 0, opacity: 1 }}
                    transition={{ delay: .3, duration: 0.8, ease: "easeOut" }}
                    className='py-20 bg-black flex flex-col justify-center items-center text-7xl  text-mgreen'>
                    <i className="fa-solid fa-microphone mb-9"></i>
                    <p>50+</p>
                </motion.div>
            </div >
        </>
    )
}

export default Hero;
