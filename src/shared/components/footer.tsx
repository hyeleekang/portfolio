import { FiGithub, FiMail } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SiTistory } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="border-zinc-800 border-t bg-black py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex gap-6">
                        <a
                            href="mailto:hyelee.dev@gmail.com"
                            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                            title="이메일"
                        >
                            <FiMail className="h-5 w-5" />
                            <span>hyelee.dev@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://easytopic.tistory.com"
                            className="text-gray-400 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="블로그"
                        >
                            <SiTistory className="h-5 w-5" />
                        </a>
                        <a
                            href="https://github.com/hyeleekang"
                            className="text-gray-400 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="깃허브"
                        >
                            <FiGithub className="h-5 w-5" />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="text-gray-400 transition-colors hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="이력서"
                        >
                            <HiOutlineDocumentText className="h-5 w-5" />
                        </a>
                    </div>
                    <p className="text-gray-400 text-sm">© Copyright by Hyelee</p>
                </div>
            </div>
        </footer>
    );
}
