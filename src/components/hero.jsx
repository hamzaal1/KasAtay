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
                    Embark on a flavorful journey and discover the secrets of Moroccan tea culture through the KasAtay Blog and our engaging podcast episodes.
                </p>
            </div>
            <div className='bg-mred min-w-full container mx-auto md:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-32'>
                <div className='py-20 bg-black flex flex-col justify-center items-center text-7xl  text-mgreen'>
                    <i className="fa-solid fa-arrow-trend-up -rotate-12 mb-9"></i>
                    <p>100+</p>
                </div>
                <div className='py-20 bg-black flex flex-col justify-center items-center text-7xl  text-mgreen'>
                    <i className="fa-solid fa-microphone mb-9"></i>
                    <p>50+</p>
                </div>
            </div>
        </>
    )
}

export default Hero;
