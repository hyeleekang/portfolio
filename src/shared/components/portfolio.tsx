import { useState, useMemo, useCallback, memo, Suspense } from "react"
import { motion, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { ProjectDetails } from "@shared/types/projectInterface"
import { Button, Card, CardContent } from "@shared/ui"
import { projects } from "@shared/data/projects"
import { FiGithub } from "react-icons/fi"
import { HiOutlineGlobeAlt } from "react-icons/hi"

// 프로젝트 이미지 컴포넌트
const ProjectImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="w-full transition-transform duration-300 group-hover:scale-105"
    loading="lazy"
    decoding="async"
  />
))

ProjectImage.displayName = "ProjectImage"

// 프로젝트 카드 컴포넌트
const ProjectCard = memo(({ work, onSelect }: { work: ProjectDetails; onSelect: (project: ProjectDetails) => void }) => (
  <Card className="overflow-hidden bg-zinc-900 h-full">
    <CardContent className="p-0 h-full">
      <div 
        className="group relative cursor-pointer h-full" 
        onClick={() => onSelect(work)}
      >
        <ProjectImage src={work.image} alt={work.title} />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <div className="w-full max-w-[85%] space-y-3">
            <h3 className="text-xl font-semibold text-white break-keep leading-tight">
              {work.title}
            </h3>
            <p className="text-sm text-gray-300 break-keep leading-relaxed overflow-hidden">
              {work.description}
            </p>
            <p className="text-sm text-gray-400 font-medium">
              {work.period}
            </p>
            <div className="flex gap-2">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(work.githubUrl || "#", '_blank');
                }}
                variant="outline"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors"
                title="Github"
              >
                <FiGithub className="w-5 h-5" />
              </Button>
              {work.demoUrl && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(work.demoUrl || "#", '_blank');
                  }}
                variant="outline"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors"
                title="Service URL"
              >
                  <HiOutlineGlobeAlt className="w-5 h-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
))

ProjectCard.displayName = "ProjectCard"

// 프로젝트 모달 컴포넌트
const ProjectModal = memo(({ project, onClose }: { project: ProjectDetails; onClose: () => void }) => (
  <LazyMotion features={domAnimation}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black"
    >
      <div className="min-h-screen px-4 py-12">
        <div className="relative mx-auto max-w-5xl">
          <button
            onClick={onClose}
            className="absolute -top-8 right-0 text-white hover:text-gray-300"
          >
            close 
          </button>
          
          <ProjectImage src={project.image} alt={project.title} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="mb-4 flex items-center justify-between pt-12">
              <h2 className="text-4xl font-bold text-white">{project.title}</h2>
              <div className="text-right">
                <p className="text-lg text-gray-400">{project.period}</p>
                <p className="text-gray-500">{project.company} {project.position}</p>
              </div>
            </div>
            
            <p className="mb-6 text-xl text-gray-400">{project.description}</p>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-white">주요 역할</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                {project.detailRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-white">기술 스택</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-zinc-800 px-4 py-1 text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-semibold text-white">주요 기능</h3>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="mb-4 text-2xl font-semibold text-white">트러블 슈팅</h3>
              {project.challenges.map((challenge, index) => (
                <div key={index} className="rounded-lg bg-zinc-900 p-6">
                  <h4 className="text-xl font-semibold text-white">{challenge.title}</h4>
                  <p className="text-gray-400">{challenge.description}</p>
                  <p className="text-gray-300">{challenge.solution}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => window.open(project.githubUrl || "#", '_blank')}
                variant="outline"
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors"
                title="Github"
              >
                <FiGithub className="w-5 h-5" />
              </Button>
              {project.demoUrl && (
                <Button
                  onClick={() => window.open(project.demoUrl, '_blank')}
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-black hover:bg-gray-200 transition-colors"
                  title="Service URL"
                >
                  <HiOutlineGlobeAlt className="w-5 h-5" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </LazyMotion>
))

ProjectModal.displayName = "ProjectModal"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null)

  const categories = useMemo(() => ["all", "AI Interface", "OCR System", "Public Data", "System Tool"], [])

  const filteredWorks = useMemo(() => 
    projects.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory)),
    [selectedCategory]
  )

  const handleSelectProject = useCallback((project: ProjectDetails) => {
    setSelectedProject(project)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline" as const}
                onClick={() => setSelectedCategory(category)}
                className="text-sm capitalize bg-zinc-900"
              >
                {category}
              </Button>
            ))}
          </div>
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Suspense fallback={<div className="h-64 bg-zinc-800 animate-pulse rounded-lg" />}>
                    <ProjectCard work={work} onSelect={handleSelectProject} />
                  </Suspense>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
