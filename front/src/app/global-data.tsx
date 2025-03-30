const recruitmentMenuList: any = {
  all: {
    value: "all",
    title: "직군 전체",
    list: [],
  },
  dev: {
    value: "dev",
    title: "개발",
    list: [
      "소프트웨어 엔지니어",
      "서버 개발자",
      "프론트엔드 개발자",
      "웹 개발자",
      "자바 개발자",
      "파이썬 개발자",
      "머신러닝 엔지니어",
      "C,C++ 개발자",
      "데이터 엔지니어",
      "DevOps / 시스템 관리자",
      "Node.js 개발자",
      "안드로이드 개발자",
      "임베디드 개발자",
      "시스템,네트워크 관리자",
      "QA,테스트 엔지니어",
      "개발 매니저",
      "보안 엔지니어",
      "iOS 개발자",
      "데이터 사이언티스트",
      "기술지원",
      "하드웨어 엔지니어",
      "프로덕트 매니저",
      "빅데이터 엔지니어",
      "웹 퍼블리셔",
      ".NET 개발자",
      "크로스플랫폼 앱 개발자",
      "PHP 개발자",
      "블록체인 플랫폼 엔지니어",
      "영상,음성 엔지니어",
      "DBA",
      "ERP전문가",
      "그래픽스 엔지니어",
      "CTO,Chief Technology Officer",
      "루비온레일즈 개발자",
      "BI 엔지니어",
      "VR 엔지니어",
      "CIO,Chief Information Officer",
      "RPA 엔지니어",
      "테크니컬 라이터",
    ],
    salaryList: [
      3586, 3736, 3974, 4295, 4600, 4852, 5250, 5455, 5791, 6215, 7013,
    ],
  },
  gamedev: {
    value: "gamedev",
    title: "게임 제작",
    list: [
      "게임 기획자",
      "게임 클라이언트 개발자",
      "게임 그래픽 디자이너",
      "게임 아티스트",
      "게임 서버 개발자",
      "모바일 게임 개발자",
      "유니티 개발자",
      "언리얼 개발자",
      "게임운영자(GM)",
    ],
    salaryList: [
      3162, 3267, 3595, 3785, 3933, 4081, 4229, 4676, 5351, 5351, 6423,
    ],
  },
  design: {
    value: "design",
    title: "디자인",
    list: [
      "UX 디자이너",
      "그래픽 디자이너",
      "UI,GUI 디자이너",
      "웹 디자이너",
      "BI/BX 디자이너",
      "제품 디자이너",
      "모바일 디자이너",
      "광고 디자이너",
      "3D 디자이너",
      "공간 디자이너",
      "패션 디자이너",
      "영상,모션 디자이너",
      "인테리어 디자이너",
      "패키지 디자이너",
      "아트 디렉터",
      "2D 디자이너",
      "산업 디자이너",
      "출판, 편집 디자이너",
      "일러스트레이터",
      "캐릭터 디자이너",
      "전시 디자이너",
      "VMD",
      "패브릭 디자이너",
      "조경 디자이너",
      "가구 디자이너",
      "UX 리서처",
      "콘텐츠 디자이너",
    ],
    salaryList: [
      2886, 3036, 3237, 3448, 3685, 3852, 4036, 4206, 4465, 4721, 5195,
    ],
  },
};

const postDataList = [
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `이전 회사에서 추구하던 핵심 가치 중 하나가 integrity라는 것이었습니다. integrity를 한국어로 직역하면 진실되게 행동한다는 의미입니다. 그리고 integrity 한 사람이 되자는 그 회사의 선언도 한국어 뜻과 맥락이 같습니다. 누가 보지 않더라도, 누가 통제하지 않더라도 자율적으로 행동하자는 것입니다.

누가 보지 않더라도 바르게 행동한다는 것이 인간에게 매우 어려운 과제입니다. 편리하게 살고 싶고, 이기적으로 행동하고 싶은 것이 사람 마음이기 때문입니다. 그래서 사람들 사이에 있을 땐, 친절하고 양보도 잘 합니다. 그러나 혼자 있을 때나 주변에 아는 사람이 거의 없을 때, 이기적인 행동이 자연스럽게 출연합니다.

저도 그렇습니다. 회사에서는 동료들에게 가능한 많이 웃고, 친절하게 행동하며, 물건이나 차례를 양보하려고 노력합니다. 그러나 공동체 밖으로 나오면 행동이 달라집니다. 얼굴에 미소가 옅어지고, 내 차례를 악착같이 챙기려고 노력합니다. 그러다가 누가 조금만 불편하게 만들면 어김없이 눈살을 찌푸립니다.`,
    commentCount: 3,
    likeCount: 4,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `[데이터 분석 팀프로젝트] 모든 직종에서 필수역량입니다. 
  
  안녕하세요 : > COCOCO 코딩클럽입니다. 반갑습니다 !
  이제 GA4나 SQL은 단순히 개발자나 IT 전문가만 필요한 기술이 아닙니다. 
  
  마케팅, 기획, 운영, 컨설팅 등 다양한 분야에서 강력한 경쟁력을 가질 수 있습니다.`,
    commentCount: 3,
    likeCount: 4,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Foneid-user%2FPgzE5LNYMfHfkrEZ5jchMF%2Fb809b65b84b80a4c0536d6ee8f1a1532d6395669c9571a47922e578231799aeb&w=60&q=90",
    name: "사악한 루피",
    category: "디자인",
    date: "2025.02.02", // text부분은 HTML로 처리해서 붙여야 할 듯 하다.
    text: `[데이터 분석 팀프로젝트] 모든 직종에서 필수역량입니다. 
  
  안녕하세요 : > COCOCO 코딩클럽입니다. 반갑습니다 !
  이제 GA4나 SQL은 단순히 개발자나 IT 전문가만 필요한 기술이 아닙니다. 
  
  마케팅, 기획, 운영, 컨설팅 등 다양한 분야에서 강력한 경쟁력을 가질 수 있습니다.`,
    commentCount: 3,
    likeCount: 4,
  },
];

const profileData = [
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족1",
    isFollowing: false,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족2",
    isFollowing: false,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족3",
    isFollowing: false,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족4",
    isFollowing: false,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족5",
    isFollowing: false,
  },
  {
    imageSrc:
      "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fteam%2Ftemp%2F2db635d71689d67bb382671e71c5ecbfbcaa076cadb87e8ab1a08631250e8d46&w=60&q=90",
    title: "심슨가족6",
    isFollowing: false,
  },
];

const activityList = [
  {
    name: "활동 1",
    followerCnt: 500,
    memberCnt: 500,
    desc: "3개월 간 30개의 글쓰기에 도전하는 우리들의 이야기✨",
    imageSrc: "/linkedin.png",
  },
  {
    name: "활동 2",
    followerCnt: 500,
    memberCnt: 500,
    desc: "3개월 간 30개의 글쓰기에 도전하는 우리들의 이야기✨",
    imageSrc: "/linkedin.png",
  },
  {
    name: "활동 3",
    followerCnt: 500,
    memberCnt: 500,
    desc: "3개월 간 30개의 글쓰기에 도전하는 우리들의 이야기✨",
    imageSrc: "/linkedin.png",
  },
];

const careerList = [
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
  {
    name: "(주)디벨로퍼랩",
    desc: "모바일 개발팀, Flutter Tech Lead",
    date: "2024.01 - 2025.01 · 1년",
    src: "/developer_logo.png",
  },
];

const schoolList = [
  {
    name: "한세사이버보안고등학교",
    desc: "해킹보안과",
    date: "2018.01 - 2021.01 · 3년",
    src: "/developer_logo.png",
  },
];

const peopleList = ["/google.png", "/apple.png", "/facebook.png"];

const plusMenuList = [
  {
    title: "취업 ・ 이직",
    list: [
      "경력 정보 불러오기",
      "면접 코칭받기",
      "내 커리어 리포트 보기",
      "추천사 작성/요청하기",
      "챗봇으로 포지션 찾기",
    ],
  },
  {
    title: "혜택 ・ 정보",
    list: [
      "디벨로퍼 포인트",
      "직군별 연봉",
      "최신 채용 트렌드",
      "최신 기술 트렌드",
    ],
  },
  { title: "인사 담당자", list: ["HR 커뮤니티 인살롱", "HR 솔루션"] },
  { title: "교육 담당자", list: ["디벨로퍼 취업지원시스템"] },
];

const applicationData = {
  applied: [
    {
      company: "안전집사",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "applied",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
      applyer: "김유민",
    },
  ],
  pass: [
    {
      company: "안전집사 2",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "pass",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
      applyer: "김유민",
    },
  ],
  hire: [
    {
      company: "안전집사 3",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "hire",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
      applyer: "김유민",
    },
  ],
  reject: [],

  write: [
    {
      company: "안전집사 3",
      title: "flutter 개발자",
      date: "2025.03.18",
      status: "hire",
      recommender: null,
      isRewarded: false,
      isViewed: false,
      imgSrc: "https://static.wanted.co.kr/images/wdes/0_4.b1efd342.png",
      applyer: "김유민",
    },
  ],
};

const graphData = {
  dev: {
    min: 2520,
    max: 12000,
  },
  gamedev: {
    min: 2640,
    max: 8000,
  },
  design: {
    min: 2300,
    max: 8300,
  },
};

const salaryData = {
  dev: [
    {
      min: 2520,
      max: 6000,
      avgForSixMonths: 3747,
    },
    {
      min: 3000,
      max: 6500,
      avgForSixMonths: 4160,
    },
    {
      min: 2520,
      max: 8000,
      avgForSixMonths: 4808,
    },
    {
      min: 2880,
      max: 8900,
      avgForSixMonths: 5690,
    },
    {
      min: 3000,
      max: 11000,
      avgForSixMonths: 6651,
    },
    {
      min: 4300,
      max: 10000,
      avgForSixMonths: 7383,
    },
    {
      min: 3800,
      max: 12000,
      avgForSixMonths: 7688,
    },
  ],

  // 데이터가 없어서 영업직 데이터로 처리
  gamedev: [
    {
      min: 2800,
      max: 3600,
      avgForSixMonths: 2950,
    },
    {
      min: 2800,
      max: 4500,
      avgForSixMonths: 3362,
    },
    {
      min: 2800,
      max: 6200,
      avgForSixMonths: 4158,
    },
    {
      min: 3000,
      max: 6079,
      avgForSixMonths: 4535,
    },
    {
      min: 2640,
      max: 7500,
      avgForSixMonths: 5018,
    },
    {
      min: 2640,
      max: 7700,
      avgForSixMonths: 5239,
    },
    {
      min: 3300,
      max: 8000,
      avgForSixMonths: 5875,
    },
  ],

  design: [
    {
      min: 2300,
      max: 3860,
      avgForSixMonths: 3117,
    },
    {
      min: 2800,
      max: 5500,
      avgForSixMonths: 3636,
    },
    {
      min: 2400,
      max: 7000,
      avgForSixMonths: 3910,
    },
    {
      min: 2900,
      max: 6000,
      avgForSixMonths: 4426,
    },
    {
      min: 3600,
      max: 6600,
      avgForSixMonths: 4822,
    },
    {
      min: 3650,
      max: 6500,
      avgForSixMonths: 5177,
    },
    {
      min: 5000,
      max: 8300,
      avgForSixMonths: 6841,
    },
  ],
};

export {
  recruitmentMenuList,
  postDataList,
  profileData,
  activityList,
  careerList,
  schoolList,
  peopleList,
  plusMenuList,
  applicationData,
  graphData,
  salaryData,
};
