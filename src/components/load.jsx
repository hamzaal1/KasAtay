"use client"; import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoadAnimation() {
    const [isMounted, setMounted] = useState(false);

    const pathname = usePathname();
    useEffect(() => {
        setMounted(false);

        return () => {
            // Re-enable scrolling when the component is unmounted
            document.body.style.overflow = 'auto';
        };
    }, [pathname]);

    const onAnimationComplete = () => {
        setTimeout(() => {
            setMounted(true);
            // Re-enable scrolling when the animation is complete and the component is mounted
            document.body.style.overflow = 'auto';
        }, 500);
    };

    // Disable scrolling when the component is not mounted
    useEffect(() => {
        if (!isMounted) {
            document.body.style.overflow = 'hidden';
        }
    }, [isMounted]);

    return (
        <AnimatePresence>
            {!isMounted && (
                <motion.div
                    layout
                    initial={{ opacity: 1 ,zIndex:5000 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay:1,duration:0.8 }}
                    onAnimationComplete={onAnimationComplete}
                    className='absolute top-0 left-0 min-w-full min-h-screen'
                >
                    <main className="absolute top-0 left-0 z-50 flex min-h-screen min-w-full justify-center bg-mred p-10 md:p-24">
                        <div className="border-[10px] py-8 md:py-10 border-black min-w-full flex-col items-center justify-center flex relative bg-mgreen">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeIn' }}
                                className="text-7xl md:text-[12rem]"
                            >
                                KasAtay
                            </motion.h1>
                            <motion.h3
                                initial={{ x: 30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeIn' }}
                                className="text-lg md:text-2xl"
                            >
                                Moroccan Tea & Stories
                            </motion.h3>
                            <motion.div
                                initial={{ x: 100, opacity: 0, scale: 1.5 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: 'easeIn' }}
                            >
                                <Image
                                    alt="cap"
                                    className="fixed top-10 right-10 rotate-12"
                                    src={'/cap.png'}
                                    width={100}
                                    height={10}
                                />
                            </motion.div>
                        </div>
                    </main>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
