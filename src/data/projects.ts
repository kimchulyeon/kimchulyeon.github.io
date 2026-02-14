export interface Project {
  title: string;
  description: string;
  techStack: string[];
  screenshot: string;
  imagePosition?: string;
  githubUrl: string;
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'GlitchSnap Studio',
    description:
      'QA All-in-One 데스크톱 도구. 브라우저 녹화, 스크린샷, 환경정보 수집, TC 관리까지 하나의 앱에서.',
    techStack: ['Electron', 'React', 'TypeScript', 'Tailwind', 'Supabase'],
    screenshot: '/images/glitchsnap.png',
    githubUrl: 'https://github.com/kimchulyeon',
    websiteUrl: undefined,
  },
  {
    title: 'Dasibogi',
    description:
      'AI 링크 정리 트레이 앱. URL을 붙여넣기만 하면 AI가 자동으로 분류하고 태그를 생성.',
    techStack: ['Tauri', 'React', 'Rust', 'TypeScript', 'SQLite'],
    screenshot: '/images/dasibogi.png',
    imagePosition: 'top',
    githubUrl: 'https://github.com/kimchulyeon',
    websiteUrl: undefined,
  },
  {
    title: 'RectangleSnap',
    description:
      '커서 이펙트, 줌인, 웹캠 오버레이를 지원하는 화면 녹화 앱.',
    techStack: ['Tauri', 'React', 'Rust', 'TypeScript'],
    screenshot: '',
    githubUrl: 'https://github.com/kimchulyeon',
    websiteUrl: undefined,
  },
];
