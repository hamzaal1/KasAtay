"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoadAnimation() {
    const [isMounted, setMounted] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setMounted(false);
    }, [pathname]);
    
    const onAnimationComplete = () => {
        setTimeout(() => {
            setMounted(true)
        }, 500);
    };

    return (
        !isMounted && <main className="absolute top-0 left-0 z-50 flex min-h-screen min-w-full justify-center bg-mred p-10 md:p-24">
            <div className="border-[10px] py-8 md:py-10 border-black min-w-full flex-col items-center justify-center flex relative bg-mgreen">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    className="text-7xl md:text-[12rem]"
                >
                    KasAtay
                </motion.h1>
                <motion.h3
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    className="text-lg md:text-2xl"
                >
                    Moroccan Tea & Stories
                </motion.h3>
                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 1.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    onAnimationComplete={onAnimationComplete}
                >
                    <Image className="fixed top-10 right-10 rotate-12" src={"/cap.png"} width={100} height={10} />
                </motion.div>
            </div>
        </main>
    );
}
