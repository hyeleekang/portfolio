import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    let animationFrameId: number

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      originalX: number
      originalY: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.1
        this.speedX = 0
        this.speedY = 0
        this.originalX = this.x
        this.originalY = this.y
      }

      update(mouseX: number, mouseY: number) {
        // 마우스와의 거리 계산
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // 마우스 영향 범위 (픽셀)
        const mouseRadius = 100
        
        if (distance < mouseRadius) {
          // 마우스에서 멀어지는 방향으로 이동
          const angle = Math.atan2(dy, dx)
          const force = (mouseRadius - distance) / mouseRadius
          
          this.speedX -= Math.cos(angle) * force * 0.5
          this.speedY -= Math.sin(angle) * force * 0.5
        }

        // 원래 위치로 돌아가려는 힘
        const returnForce = 0.05
        this.speedX += (this.originalX - this.x) * returnForce
        this.speedY += (this.originalY - this.y) * returnForce
        
        // 마찰력
        const friction = 0.95
        this.speedX *= friction
        this.speedY *= friction

        this.x += this.speedX
        this.y += this.speedY
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update(mousePosition.x, mousePosition.y)
        particle.draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      canvasRef.current.width = window.innerWidth
      canvasRef.current.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full bg-black" />
      <motion.div 
        style={{ opacity }} 
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-col items-center"
        >
          <TypeAnimation
            sequence={[
              '안녕하세요',
              800,
            ]}
            wrapper="h2"
            speed={50}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            repeat={Infinity}
            cursor={false}
          />
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl sm:text-3xl"></span>
            <TypeAnimation
              sequence={[
                '행복한',
                1000,
                '협업을 중시하는',
                1000,
                '일머리 있는',
                1000,
                '문제 해결을 즐기는',
                1000,
                '성장하는',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl text-blue-400 min-w-[8ch] inline-block"
              repeat={Infinity}
              cursor={true}
              style={{ display: 'inline-block' }}
            />
            <TypeAnimation
              sequence={[
                '개발자',
                500,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl"
              repeat={0}
              cursor={false}
            />
          </div>
          <TypeAnimation
            sequence={[
              '강혜리입니다.',
            ]}
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
            sequence={[
              1000,
              'Front-end Developer',
            ]}
            wrapper="p"
            speed={50}
            className="text-lg text-gray-400 sm:text-xl"
            repeat={0}
            cursor={false}
          />
          <div className="flex flex-wrap justify-center gap-3">
            <TypeAnimation
              sequence={[
                1500,
                'React',
                500,
                'React • Vite • JavaScript • TypeScript',
                500,
                'React • Vite • JavaScript • TypeScript • Tailwind CSS',
                500,
                'React • Vite • JavaScript • TypeScript • Tailwind CSS • Docker',
                2000,
              ]}
              wrapper="div"
              speed={50}
              className="text-sm text-green-400/60 font-medium"
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
      </motion.div>
    </div>
  )
}
