import { ProjectDetails } from '@shared/types/projectInterface'

// 임시 이미지 파일 사용
const TEMP_IMAGES = {
  NIFI: "/nifiManagement.gif",
  OCR: "/ocrDemo.gif",
  GGDATA: "/ggdataChatbot.gif",
  LLMOPS: "/llmops.gif",
  CHATBOT: "/worktroChatbot.gif"
} as const

export const projects: ProjectDetails[] = [
  {
    id: 1,
    title: "LLMOps 솔루션",
    category: "AI Interface",
    image: TEMP_IMAGES.LLMOPS,
    description: "LLM(Large Language Model) 운영, 모니터링, 설정 관리를 위한 통합 관리 시스템",
    period: "2024.11 - 2025.02",
    role: "프론트엔드 개발",
    company: "기술연구소",
    position: "사원",
    detailRole: [
      "모델 사용 현황 모니터링 및 데이터 시각화 구현",
      "ECharts를 활용한 실시간 통계 대시보드 개발",
      "LLM 모델 버전 관리 및 설정 인터페이스 개발",
      "모델 성능 모니터링 및 분석 기능 구현",
      "검색 기반 생성 시스템 설정 및 관리 인터페이스 구현",
      "데이터 소스 연동 및 관리 기능 개발",
      "프롬프트 템플릿 관리 및 버전 관리 기능 구현",
      "프롬프트 테스트 및 평가 인터페이스 개발",
      "데이터 마스킹 규칙 설정 및 관리 기능 구현",
      "보안 정책 적용 및 모니터링 시스템 구축"
    ],
    techStack: [
      "React v18",
      "Vite",
      "TypeScript",
      "Zustand",
      "React Query",
      "Keycloak",
      "Tailwind CSS",
      "React Router DOM",
      "React Hook Form",
      "ECharts",
      "React Select",
      "DatePicker",
      "ky"
    ],
    challenges: [
      {
        title: "복잡한 상태 관리",
        description: "다양한 LLM 모델과 설정들의 상태를 효율적으로 관리해야 했습니다.",
        solution: "Zustand와 React Query를 활용한 체계적인 상태 관리 아키텍처를 구축했습니다."
      },
      {
        title: "실시간 데이터 시각화",
        description: "대량의 모델 사용 데이터를 실시간으로 시각화해야 했습니다.",
        solution: "ECharts를 활용한 최적화된 차트 렌더링과 데이터 스트리밍 처리를 구현했습니다."
      }
    ],
    features: [
      "LLM 모델 관리 및 모니터링",
      "실시간 통계 대시보드",
      "프롬프트 템플릿 관리",
      "데이터 마스킹 및 보안 설정"
    ],
    demoUrl: "https://llmops.edentns.ai/",
  },
  {
    id: 2,
    title: "도면 OCR 시스템",
    category: "OCR System",
    image: TEMP_IMAGES.OCR,
    description: "OCR 문서(도면) 텍스트 추출 페이지 및 로그 관리 페이지 개발",
    period: "2025.05 - 2025.05",
    role: "프론트엔드 개발",
    company: "기술연구소",
    position: "주임",
    detailRole: [
      "이미지 파일 업로드 및 OCR 분석 후 추출된 텍스트 Bounding Box 표시",
      "로그 관리 기능 구현 및 전역 상태 관리 적용",
      "Axios를 이용한 OCR API 연동 및 실시간 처리",
      "Keycloak 기반 사용자 인증 및 권한 제어 로직 구현",
      "Tailwind CSS 기반 반응형 UI 구성 및 레이아웃 개선",
      "Feature 기반 구조 설계 및 공통 모듈/유틸리티 분리"
    ],
    techStack: [
      "React v18",
      "Vite",
      "TypeScript",
      "Zustand",
      "React Query",
      "Keycloak",
      "Tailwind CSS",
      "Axios"
    ],
    challenges: [
      {
        title: "이미지 처리 최적화",
        description: "대용량 도면 이미지의 효율적인 처리와 표시가 필요했습니다.",
        solution: "이미지 최적화 및 지연 로딩 전략을 도입하여 성능을 개선했습니다."
      },
      {
        title: "실시간 OCR 처리",
        description: "OCR 처리 결과를 실시간으로 시각화해야 했습니다.",
        solution: "Canvas를 활용한 효율적인 Bounding Box 렌더링 시스템을 구현했습니다."
      }
    ],
    features: [
      "도면 이미지 업로드 및 OCR 처리",
      "텍스트 영역 시각화",
      "로그 관리 및 분석",
      "사용자 권한 관리"
    ],
  },
  {
    id: 3,
    title: "경기데이터 찾아드림",
    category: "AI Interface",
    image: TEMP_IMAGES.GGDATA,
    description: "경기도의 공공데이터를 쉽고 빠르게 검색하고 시각화할 수 있는 웹 애플리케이션 개발",
    period: "2025.04 - 2025.04",
    role: "프론트엔드 개발",
    company: "기술연구소",
    position: "주임",
    detailRole: [
      "React와 TypeScript를 활용한 SPA 기반 웹 애플리케이션 개발",
      "Tailwind CSS를 활용한 반응형 웹 디자인 구현 (PC/모바일/태블릿)",
      "Feature 기반 아키텍처 설계 및 모듈화된 코드 구조 구현",
      "Zustand를 활용한 전역 상태 관리 시스템 구축",
      "Vite를 활용한 빠른 개발 환경 및 빌드 최적화",
      "Docker와 Nginx를 활용한 컨테이너화 및 배포 환경 구성"
    ],
    techStack: [
      "React v18",
      "Vite",
      "TypeScript",
      "Zustand",
      "React Query",
      "react-router-dom",
      "Keycloak",
      "Tailwind CSS",
      "ky"
    ],
    challenges: [
      {
        title: "실시간 채팅 인터페이스",
        description: "사용자와 AI 챗봇 간의 자연스러운 대화 흐름을 구현해야 했습니다.",
        solution: "스트리밍 응답 처리와 타이핑 효과를 구현하여 자연스러운 대화 경험을 제공했습니다."
      }
    ],
    features: [
      "AI 챗봇 인터페이스",
      "실시간 응답 스트리밍",
      "데이터 시각화",
      "반응형 디자인"
    ],
    demoUrl: "https://ggdata.edentns.ai/",
  },
  {
    id: 4,
    title: "NIFI 관리 페이지",
    category: "Public Data",
    image: TEMP_IMAGES.NIFI,
    description: "전라북도 데이터허브 NIFI 운영을 위한 통합 관리 시스템의 프론트엔드 개발",
    period: "2025.06 - 2025.06",
    role: "프론트엔드 개발",
    company: "기술연구소",
    position: "주임",
    detailRole: [
      "React와 TypeScript를 활용한 대규모 웹 애플리케이션 설계 및 개발",
      "컴포넌트 기반 아키텍처 설계 및 구현",
      "전역 상태 관리 시스템 구축 (Zustand)",
      "API 통신 및 에러 핸들링 시스템 구현",
      "반응형 UI/UX 구현",
      "Docker를 활용한 컨테이너화 및 배포 자동화"
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "React Router v6",
      "Zustand",
      "React Query v5",
      "TailwindCSS",
      "CSS Modules",
      "Axios",
      "Vite",
      "ESLint",
      "Prettier",
      "Docker",
      "Nginx"
    ],
    challenges: [
      {
        title: "대규모 데이터 처리",
        description: "NIFI의 복잡한 데이터 파이프라인을 효율적으로 시각화하고 관리해야 했습니다.",
        solution: "컴포넌트 가상화와 효율적인 상태 관리를 통해 대규모 데이터를 원활하게 처리했습니다."
      },
      {
        title: "실시간 모니터링",
        description: "NIFI 프로세스의 실시간 상태를 모니터링하고 즉각적인 대응이 필요했습니다.",
        solution: "WebSocket을 활용한 실시간 데이터 업데이트와 효율적인 상태 관리 시스템을 구축했습니다."
      }
    ],
    features: [
      "NIFI 프로세스 모니터링",
      "실시간 상태 대시보드",
      "프로세스 관리 및 제어",
      "에러 로그 분석"
    ],
  },
  {
    id: 5,
    title: "챗봇 서비스 리팩토링",
    category: "AI Interface",
    image: TEMP_IMAGES.CHATBOT,
    description: "기존 HTML 기반 챗봇 서비스를 React + TypeScript 환경으로 리팩토링",
    period: "2023.09 - 2023.11",
    role: "프론트엔드 개발",
    company: "기술연구소",
    position: "주임",
    detailRole: [
      "html 기반 챗봇 UI를 React 기반 SPA로 리팩토링 및 상태 관리 구조 설계",
      "LLM 모델·프롬프트·RAG 설정 기능 구현 및 전역 상태 관리 적용",
      "ky 및 fetch를 이용한 챗봇 API 연동 및 실시간 스트리밍 처리",
      "Keycloak 기반 사용자 인증 및 권한 제어 로직 구현",
      "Tailwind CSS 기반 반응형 UI 구성 및 레이아웃 개선",
      "Feature 기반 구조 설계 및 공통 모듈/유틸리티 분리"
    ],
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Zustand",
      "React Query",
      "Keycloak",
      "Tailwind CSS",
      "ky",
      "fetch"
    ],
    challenges: [
      {
        title: "레거시 코드 마이그레이션",
        description: "기존 HTML/jQuery 기반 코드를 모던 React 환경으로 전환해야 했습니다.",
        solution: "점진적인 마이그레이션 전략과 컴포넌트 기반 아키텍처를 도입하여 안정적으로 전환했습니다."
      }
    ],
    features: [
      "모던 챗봇 인터페이스",
      "실시간 응답 처리",
      "LLM 설정 관리",
      "사용자 인증"
    ],
    githubUrl: "https://github.com/hyeleekang/ai-chatbot-frontend"
  }
] 