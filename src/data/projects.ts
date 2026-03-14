export interface Project {
  title: string;
  description: string;
  techStack: string[];
  screenshot: string;
  imagePosition?: string;
  githubUrl: string;
  websiteUrl?: string;
  serviceUrl?: string;
  downloadUrls?: { url: string; platform: string }[];
  demoUrl?: string;
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
    serviceUrl: 'https://glitchsnap.com/',
    downloadUrls: [
      { url: 'https://s3.ap-northeast-2.amazonaws.com/glitchsnap-releases/latest/Glitchsnap_macos_aarch64.dmg', platform: 'macOS' },
      { url: 'https://s3.ap-northeast-2.amazonaws.com/glitchsnap-releases/latest/Glitchsnap_windows.exe', platform: 'Windows' },
    ],
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
    downloadUrls: [
      { url: 'https://s3.ap-northeast-2.amazonaws.com/dasibogi-releases/latest/Dasibogi_macos_aarch64.dmg', platform: 'macOS ARM' },
      { url: 'https://s3.ap-northeast-2.amazonaws.com/dasibogi-releases/latest/Dasibogi_macos_x64.dmg', platform: 'macOS Intel' },
      { url: 'https://s3.ap-northeast-2.amazonaws.com/dasibogi-releases/latest/Dasibogi_windows.msi', platform: 'Win MSI' },
      { url: 'https://s3.ap-northeast-2.amazonaws.com/dasibogi-releases/latest/Dasibogi_windows.exe', platform: 'Win EXE' },
    ],
  },
  {
    title: 'copyNpaste',
    description:
      'SI 프로젝트 폴더 동기화 도구. 회사 ↔ 고객사 폴더 간 변경 파일 감지, Git 이력 조회, 인프라 파일 경고, 선택적 덮어쓰기.',
    techStack: ['Electron', 'React', 'TypeScript', 'Tailwind'],
    screenshot: '/images/copynpaste.png',
    githubUrl: 'https://github.com/kimchulyeon/copyNpaste',
    downloadUrls: [
      { url: 'https://github.com/kimchulyeon/copyNpaste/releases/latest', platform: 'macOS' },
    ],
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
