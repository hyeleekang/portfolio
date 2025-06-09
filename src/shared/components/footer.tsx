import { FiGithub, FiMail } from "react-icons/fi"
import { SiTistory } from "react-icons/si"
import { HiOutlineDocumentText } from "react-icons/hi"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <a 
              href="mailto:hyelee.dev@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              title="이메일"
            >
              <FiMail className="w-5 h-5" />
              <span>hyelee.dev@gmail.com</span>
            </a>
          </div>
          <div className="flex gap-6">
            <a 
              href="https://easytopic.tistory.com" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="블로그"
            >
              <SiTistory className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/hyeleekang" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="깃허브"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="/resume.pdf" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="이력서"
            >
              <HiOutlineDocumentText className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} hyelee's portfolio.</p>
        </div>
      </div>
    </footer>
  )
}
