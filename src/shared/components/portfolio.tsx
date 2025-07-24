import { projects } from "@shared/data/projects";
import type { ProjectDetails } from "@shared/types/projectInterface";
import { Button, Card, CardContent } from "@shared/ui";
import { AnimatePresence, domAnimation, LazyMotion, motion } from "framer-motion";
import { memo, Suspense, useCallback, useMemo, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdClose } from "react-icons/md";

// 프로젝트 이미지 컴포넌트
const ProjectImage = memo(({ src, alt }: { src: string; alt: string }) => (
    <img
        src={src}
        alt={alt}
        className="w-full transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
    />
));

ProjectImage.displayName = "ProjectImage";

// 프로젝트 카드 컴포넌트
const ProjectCard = memo(
    ({ work, onSelect }: { work: ProjectDetails; onSelect: (project: ProjectDetails) => void }) => (
        <Card className="h-full overflow-hidden bg-zinc-900">
            <CardContent className="h-full p-0">
                <button
                    className="group relative h-full cursor-pointer border-0 bg-transparent p-0"
                    onClick={() => onSelect(work)}
                    type="button"
                >
                    <ProjectImage src={work.image} alt={work.title} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <div className="w-full max-w-[85%] space-y-3">
                            <h3 className="break-keep font-semibold text-white text-xl leading-tight">{work.title}</h3>
                            <p className="overflow-hidden break-keep text-gray-300 text-sm leading-relaxed">
                                {work.description}
                            </p>
                            <p className="font-medium text-gray-400 text-sm">{work.period}</p>
                            <div className="flex gap-2">
                                {work.githubUrl && (
                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(work.githubUrl || "#", "_blank");
                                        }}
                                        variant="outline"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-200"
                                        title="Github"
                                    >
                                        <FiGithub className="h-5 w-5" />
                                    </Button>
                                )}
                                {work.demoUrl && (
                                    <Button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(work.demoUrl || "#", "_blank");
                                        }}
                                        variant="outline"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-200"
                                        title="Service URL"
                                    >
                                        <HiOutlineGlobeAlt className="h-5 w-5" />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </button>
            </CardContent>
        </Card>
    ),
);

ProjectCard.displayName = "ProjectCard";

// 프로젝트 모달 컴포넌트
const ProjectModal = memo(({ project, onClose }: { project: ProjectDetails; onClose: () => void }) => (
    <LazyMotion features={domAnimation}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80"
            onClick={onClose}
        >
            <div className="flex items-center justify-center">
                <div
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    className="relative m-20 min-h-screen w-8/12 rounded-lg border-2 border-gray-500 bg-zinc-900 px-4 py-12 shadow-gray-600/60 shadow-md"
                    role="dialog"
                    aria-modal="true"
                >
                    <button type="button" onClick={onClose} className="absolute right-6 top-6">
                        <MdClose className="h-8 w-8 text-white transition-transform duration-300 hover:rotate-180 hover:text-gray-400" />
                    </button>
                    <div className="relative mx-auto max-w-5xl">
                        <div className="mb-4 flex items-center justify-between pt-12">
                            <h2 className="font-bold text-4xl text-white">{project.title}</h2>
                            <div className="text-right"></div>
                        </div>
                        <p className="mb-6 text-gray-400 text-xl">{project.description}</p>
                        <ProjectImage src={project.image} alt={project.title} />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="mt-2 mb-8 space-y-4">
                                <p className="text-gray-400 text-lg text-end text-sm">{project.period}</p>
                                <h3 className="mb-4 font-semibold text-2xl text-white">주요 역할</h3>
                                <ul className="list-inside list-disc space-y-2 text-gray-300">
                                    {project.detailRole.map((role, index) => (
                                        <li key={`role-${index}-${role.slice(0, 10)}`}>{role}</li>
                                    ))}
                                </ul>
                                <h3 className="mb-4 font-semibold text-2xl text-white">기술 스택</h3>
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
                                <h3 className="mb-4 font-semibold text-2xl text-white">주요 기능</h3>
                                <ul className="list-inside list-disc space-y-2 text-gray-300">
                                    {project.features.map((feature, index) => (
                                        <li key={`feature-${index}-${feature.slice(0, 10)}`}>{feature}</li>
                                    ))}
                                </ul>
                                <h3 className="mb-4 font-semibold text-2xl text-white">주요 기술 과제와 해결 방안</h3>
                                {project.challenges.map((challenge, index) => (
                                    <div
                                        key={`challenge-${index}-${challenge.title.slice(0, 10)}`}
                                        className="rounded-lg border-2 border-gray-700 p-6"
                                    >
                                        <h4 className="font-semibold text-white text-xl">{challenge.title}</h4>
                                        <p className="text-gray-400">{challenge.description}</p>
                                        <p className="text-gray-300">{challenge.solution}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-4">
                                {project.githubUrl && (
                                    <Button
                                        onClick={() => window.open(project.githubUrl || "#", "_blank")}
                                        variant="outline"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-200"
                                        title="Github"
                                    >
                                        <FiGithub className="h-5 w-5" />
                                    </Button>
                                )}
                                {project.demoUrl && (
                                    <Button
                                        onClick={() => window.open(project.demoUrl, "_blank")}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-gray-200"
                                        title="Service URL"
                                    >
                                        <HiOutlineGlobeAlt className="h-5 w-5" />
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    </LazyMotion>
));

ProjectModal.displayName = "ProjectModal";

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

    const categories = useMemo(() => ["all", "AI Interface", "OCR System", "Public Data", "Personal Project"], []);

    const filteredWorks = useMemo(
        () => projects.filter((work) => (selectedCategory === "all" ? true : work.category === selectedCategory)),
        [selectedCategory],
    );

    const handleSelectProject = useCallback((project: ProjectDetails) => {
        setSelectedProject(project);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <section className="bg-black py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="mb-10 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-center font-bold text-4xl text-transparent drop-shadow-lg"
                    >
                        Projects
                    </motion.h2>
                    <div className="mb-12 flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : ("outline" as const)}
                                onClick={() => setSelectedCategory(category)}
                                className="bg-zinc-900 text-sm capitalize"
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
                                    <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-zinc-800" />}>
                                        <ProjectCard work={work} onSelect={handleSelectProject} />
                                    </Suspense>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
            </AnimatePresence>
        </LazyMotion>
    );
}
