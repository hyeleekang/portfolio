import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const photos = Array.from({ length: 46 }, (_, i) => ({
    id: i + 1,
    path: `/photo/film${i + 1}.jpg`,
}));

export default function About() {
    // 스크롤 애니메이션
    const { scrollY } = useScroll();
    const _y = useTransform(scrollY, [0, 200], [0, -60]);

    // 무한 슬라이드용 상태
    const [offset, setOffset] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let raf: number;
        const animate = () => {
            setOffset((prev) => (prev - 1) % (photos.length * 160));
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, []);

    // 사진 한 장의 너비(150px) + 마진(10px)
    const photoWidth = 150 + 10;
    const totalWidth = photos.length * photoWidth;

    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mb-10 text-center font-bold text-3xl text-gray-300 drop-shadow-lg"
            >
                사진처럼, 기억에 남는 웹을 만들고 싶어요
            </motion.h2>

            <div className="w-full overflow-x-hidden">
                <div
                    ref={sliderRef}
                    className="flex items-center gap-2"
                    style={{
                        width: totalWidth * 2,
                        transform: `translateX(${offset}px)`,
                        willChange: "transform",
                    }}
                >
                    {[...photos, ...photos].map((photo) => (
                        <img
                            key={photo.id}
                            src={photo.path}
                            alt={`film${photo.id}`}
                            className="pointer-events-none h-[200px] w-[350px] select-none object-cover shadow-md"
                            draggable={false}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
