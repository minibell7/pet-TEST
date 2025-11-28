# Pet-BTI PWA 디자인 가이드라인

## Design Approach

**Reference-Based Approach**: 이 프로젝트는 BuzzFeed Quiz, 16Personalities, 카카오톡 심리테스트 같은 인터랙티브 성격 테스트 앱들의 디자인 패턴을 참고합니다. 모바일 우선, 친근하고 귀여운 분위기, 높은 참여도를 유도하는 비주얼에 중점을 둡니다.

**핵심 디자인 원칙**:
- Playful & Approachable: 귀엽고 친근한 한국어 톤앤매너
- Mobile-First: 터치 친화적이고 단순한 인터페이스
- Progressive Disclosure: 한 번에 하나의 질문/정보만 표시
- Delightful Interactions: 미세한 애니메이션으로 참여도 향상

## Typography

**한국어 폰트 시스템**:
- Primary: Pretendard 또는 SUIT (Google Fonts/CDN)
- Fallback: -apple-system, 'Malgun Gothic', sans-serif

**타이포그래피 계층**:
- Hero Title: text-4xl md:text-5xl, font-bold (메인 질문, 결과 제목)
- Section Title: text-2xl md:text-3xl, font-bold (페이지 제목)
- Body Large: text-lg md:text-xl, font-medium (질문 텍스트)
- Body: text-base, font-normal (일반 설명)
- Caption: text-sm, font-medium (보조 정보)

## Layout System

**Spacing Units**: Tailwind의 4, 6, 8, 12, 16 유닛 사용
- 컴포넌트 내부 패딩: p-6 (모바일), p-8 (데스크탑)
- 섹션 간격: space-y-8 (모바일), space-y-12 (데스크탑)
- 버튼/카드 간격: gap-4

**Container System**:
- 모든 페이지: max-w-2xl mx-auto (퀴즈는 좁은 컬럼이 가독성 좋음)
- 모바일 패딩: px-4
- 데스크탑 패딩: px-6

**Grid System**:
- 단일 컬럼 레이아웃 (모바일 우선)
- 버튼 그리드: grid-cols-1 md:grid-cols-2 (선택지가 2개일 때)

## Component Library

### 1. Landing Page (index.html)
- **Hero Section**: 
  - 중앙 정렬, 풀 뷰포트 높이 (min-h-screen flex items-center)
  - 큰 타이틀 + 서브타이틀 + 이모지 (🐶🐱)
  - 2개의 큰 선택 버튼 (강아지/고양이)
- **버튼 스타일**: 
  - 크고 터치 친화적 (h-20 md:h-24)
  - rounded-2xl, shadow-lg
  - 각 버튼에 대표 이모지 포함 (텍스트 사이즈: text-4xl)

### 2. Pet Info Page (pet_info.html)
- **입력 폼**:
  - 중앙 정렬 카드 레이아웃
  - 큰 질문 텍스트 상단
  - 입력 필드: rounded-xl, text-lg, p-4, 포커스 시 ring 효과
  - 하단 고정 CTA 버튼

### 3. Quiz Pages (dog_quiz.html, cat_quiz.html, owner_quiz.html)
- **진행 표시기**:
  - 상단 고정 프로그레스 바 (h-2, rounded-full)
  - "10개 중 3번째 질문" 텍스트 표시
- **질문 카드**:
  - 중앙 카드 형태 (rounded-3xl, shadow-xl, p-8)
  - 질문 번호 + 질문 텍스트 (반려동물 이름 포함)
  - 선택지 버튼들 (space-y-4)
- **선택지 버튼**:
  - 전체 너비 (w-full)
  - 좌측 정렬 텍스트 (text-left)
  - 높이 auto, 패딩 넉넉히 (p-5 md:p-6)
  - rounded-xl
  - 호버 시 살짝 확대 (hover:scale-[1.02])

### 4. Pet Result Page (pet_result.html)
- **결과 카드**:
  - 큰 타입 이모지/아이콘 (text-8xl)
  - 타입 이름 (text-3xl, font-bold)
  - 타입 설명 (텍스트 박스, p-6, rounded-2xl)
  - 하단 CTA: "주인 궁합 확인하기" 버튼

### 5. Loading Page (loading.html)
- **로딩 애니메이션**:
  - 중앙 정렬 (min-h-screen flex items-center justify-center)
  - 스피너 또는 펄스 애니메이션
  - "궁합을 분석 중입니다..." 텍스트
  - 귀여운 이모지 애니메이션

### 6. Final Result Page (final_result.html)
- **2단 레이아웃**:
  - 상단: 반려동물 타입 카드 + 주인 타입 카드 (grid-cols-1 md:grid-cols-2)
  - 중앙: 큰 궁합 결과 섹션
    - 궁합 이모지 (text-6xl)
    - 궁합 제목 (text-3xl, font-bold)
    - 궁합 설명 (p-8, rounded-3xl)
- **공유 버튼**:
  - 하단 고정 또는 결과 아래
  - "결과 공유하기" (카카오톡, URL 복사 등)

### Navigation
- 뒤로 가기 버튼: 좌측 상단 (text-2xl, p-4)
- 홈 버튼: 필요시 우측 상단

### Buttons
- **Primary CTA**: 
  - 큰 크기 (h-14 md:h-16, text-lg)
  - rounded-xl, shadow-lg
  - w-full 또는 px-12
- **Secondary**: 
  - 아웃라인 스타일 (border-2)
  - rounded-xl
- **상태**: 호버/액티브 시 미세한 스케일 변화 (transition-transform)

### Cards
- rounded-2xl 또는 rounded-3xl
- shadow-xl 또는 shadow-2xl
- p-6 md:p-8
- 배경 블러 효과는 히어로 이미지 위 버튼에만 사용 (backdrop-blur-sm)

## Animations

**매우 제한적 사용**:
- 페이지 전환: 부드러운 페이드인 (fade-in 300ms)
- 버튼 인터랙션: scale 변화만 (hover:scale-[1.02])
- 로딩: 스피너 회전 또는 펄스 애니메이션
- 진행 바: 너비 증가 애니메이션 (transition-all)

## Icons & Assets

**아이콘**: 
- Heroicons CDN 사용
- 크기: w-6 h-6 (일반), w-8 h-8 (큰 버튼)
- 뒤로가기, 홈, 공유 아이콘 등

**이모지 사용**:
- 각 페이지와 타입별로 적절한 이모지 활용 (🐶🐱❤️🔥😅👑 등)
- 큰 사이즈로 표시 (text-6xl ~ text-8xl)

**이미지**: 
- 히어로 이미지 없음 (텍스트와 이모지 중심)
- 선택적: 결과 페이지에 타입별 일러스트레이션 추가 가능 (귀여운 강아지/고양이 그림)

## Responsive Behavior

- **모바일 (base)**: 단일 컬럼, 풀 너비 버튼, 작은 패딩
- **태블릿 (md: 768px)**: 약간 더 넓은 컨테이너, 2컬럼 그리드 (필요시)
- **데스크탑 (lg: 1024px)**: max-w-2xl 유지 (퀴즈는 너무 넓으면 안 좋음)

## Accessibility

- 모든 버튼: 충분한 터치 영역 (min-h-12)
- 입력 필드: label과 연결, placeholder 제공
- 포커스 상태: ring-2 ring-offset-2
- 적절한 ARIA 레이블 (진행 상태, 현재 페이지 등)
- 한국어 lang="ko" 속성

## PWA 특화 요소

- 홈 화면 아이콘: 512x512 PNG (귀여운 강아지/고양이 합성 아이콘)
- Splash Screen: 앱 제목 + 아이콘
- 상단 바: 앱 이름 표시 (필요시)
- 오프라인 페이지: 간단한 안내 메시지

## Page-Specific Notes

- **모든 페이지**: 배경은 단순하게, 콘텐츠에 집중
- **퀴즈 페이지**: 질문당 하나의 카드, 여백 충분히
- **결과 페이지**: 축하 분위기, 공유 유도
- **로딩 페이지**: 3초 대기 (광고 공간), 사용자가 지루하지 않게