import LightRays from "@shared/ui/LightRays";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <LightRays />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 flex flex-col items-center"
                >
                    <TypeAnimation
                        sequence={["안녕하세요", 800]}
                        wrapper="h2"
                        speed={50}
                        className="font-bold text-4xl tracking-tight sm:text-5xl"
                        repeat={Infinity}
                        cursor={false}
                    />
                    <div className="mt-4 flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl"></span>
                        <TypeAnimation
                            sequence={[
                                "행복한",
                                1000,
                                "협업을 중시하는",
                                1000,
                                "일머리 있는",
                                1000,
                                "문제 해결을 즐기는",
                                1000,
                                "성장하는",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="inline-block min-w-[8ch] text-2xl text-blue-400 sm:text-3xl"
                            repeat={Infinity}
                            cursor={true}
                            style={{ display: "inline-block" }}
                        />
                        <TypeAnimation
                            sequence={["개발자", 500]}
                            wrapper="span"
                            speed={50}
                            className="text-2xl sm:text-3xl"
                            repeat={0}
                            cursor={false}
                        />
                    </div>
                    <TypeAnimation
                        sequence={["강혜리입니다."]}
                        wrapper="h2"
                        speed={50}
                        className="mt-4 text-2xl sm:text-3xl"
                        repeat={0}
                        cursor={false}
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-[600px] space-y-4"
                >
                    <TypeAnimation
                        sequence={[1000, "Front-end Developer"]}
                        wrapper="p"
                        speed={50}
                        className="text-gray-400 text-lg sm:text-xl"
                        repeat={0}
                        cursor={false}
                    />
                    <div className="flex flex-wrap justify-center gap-3">
                        <TypeAnimation
                            sequence={[
                                1500,
                                "React",
                                500,
                                "React • Vite • JavaScript • TypeScript",
                                500,
                                "React • Vite • JavaScript • TypeScript • Tailwind CSS",
                                500,
                                "React • Vite • JavaScript • TypeScript • Tailwind CSS • Docker",
                                2000,
                            ]}
                            wrapper="div"
                            speed={50}
                            className="font-medium text-green-400/60 text-sm"
                            repeat={Infinity}
                            cursor={true}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                >
                    <motion.div
                        className="flex h-12 w-6 items-start justify-center rounded-full border-2 border-white/20"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="h-2 w-2 rounded-full bg-white"
                            animate={{ y: [0, 16, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
