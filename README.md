# ✈️ PopPop Seoul React

서울 관광 앱 `PopPop Seoul`의 소개 및 다운로드를 위한 React 기반 랜딩 페이지 프로젝트입니다.

이 프로젝트는 앱의 핵심 메시지를 전달하고, 접속 디바이스에 따라 App Store 이동, APK 다운로드, QR 안내를 제공하는 단일 페이지 웹 애플리케이션(SPA)입니다.

<img src="image/poppop_seoul_info.png" alt="PopPop Seoul 소개 이미지" />

### 👉 [PopPop Seoul 웹 페이지 이동](https://poppop-seoul.developer-chanq.xyz/)

## ✨ 프로젝트 개요

- `React + TypeScript + Vite` 기반의 프론트엔드 프로젝트입니다.
- 메인 화면은 랜딩 페이지 1개로 구성되어 있습니다.
- 모바일/PC 환경을 구분하여 다운로드 동작을 다르게 처리합니다.
- 빌드 전 QR 코드를 자동 생성하여 iOS 앱 다운로드 안내에 사용합니다.
- Docker + Nginx 기반으로 정적 배포가 가능하도록 구성되어 있습니다.

## 🗂️ 전체 프로젝트 구조

```text
poppop-seoul-react/
├─ public/                # 정적 리소스
├─ scripts/               # 빌드 전 실행되는 유틸 스크립트
├─ src/
│  ├─ assets/             # 랜딩 페이지 이미지 및 배지/버튼 리소스
│  ├─ components/         # UI 컴포넌트
│  ├─ hooks/              # 디바이스 판별 커스텀 훅
│  ├─ utils/              # 외부 링크 등 설정값
│  ├─ App.tsx             # 메인 페이지 구성 및 다운로드 분기 처리
│  ├─ index.css           # 전역 스타일 및 Tailwind import
│  └─ main.tsx            # React 앱 진입점
├─ Dockerfile             # 프로덕션 이미지 빌드 설정
├─ nginx.conf             # SPA 대응 Nginx 설정
├─ eslint.config.js       # ESLint 설정
├─ postcss.config.js      # PostCSS 설정
├─ tailwind.config.js     # Tailwind CSS 설정
├─ tsconfig*.json         # TypeScript 설정
├─ vite.config.ts         # Vite 설정
└─ package.json           # 의존성 및 실행 스크립트
```

## 🧩 주요 코드 구성

### ⚫️ `src/App.tsx`

- 전체 랜딩 페이지 레이아웃을 구성합니다.
- Hero 영역, 앱 소개 섹션, 다운로드 팝업을 렌더링합니다.
- 디바이스 종류에 따라 아래와 같이 다운로드 동작을 분기합니다.
  - 모바일 + iOS: App Store로 즉시 이동
  - 모바일 + Android: APK 파일 다운로드
  - PC: 다운로드 팝업 노출

### ⚫️ `src/components/HeroInfoSection.tsx`

- 메인 메시지와 스토어 다운로드 버튼 영역입니다.
- 버튼 클릭 시 상위 컴포넌트에 디바이스 상태를 전달합니다.

### ⚫️ `src/components/DownloadPopup.tsx`

- PC 환경에서 노출되는 다운로드 안내 팝업입니다.
- iOS는 QR 코드 이미지를 노출합니다.
- Android는 APK 직접 다운로드 링크를 제공합니다.

### ⚫️ `src/components/FadeInSection.tsx`

- `IntersectionObserver`를 사용해 스크롤 진입 시 페이드 인 애니메이션을 적용합니다.

### ⚫️ `src/hooks/useDeviceType.ts`

- User-Agent 기반으로 `mobile` / `desktop`을 구분합니다.
- 모바일인 경우 `iOS` / `Android` 운영체제도 판별할 수 있도록 구성되어 있습니다.

### ⚫️ `scripts/make-qr.js`

- 빌드 전에 App Store URL을 QR 이미지(`public/qr.png`)로 생성합니다.
- `prebuild` 스크립트에서 자동 실행됩니다.

## 🛠️ 사용된 개발 스킬 / 기술 스택

### 프론트엔드

- `React`
- `TypeScript`
- `Vite`

### 스타일링

- `Tailwind CSS v4`
- `PostCSS`
- `Autoprefixer`

### 코드 품질

- `ESLint`
- `typescript-eslint`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

### 사용자 경험 구현

- `IntersectionObserver` 기반 스크롤 애니메이션
- User-Agent 기반 디바이스/OS 판별
- 조건부 다운로드 플로우 처리

### 빌드 / 배포

- `qrcode` 패키지를 이용한 QR 자동 생성
- `Docker` 멀티스테이지 빌드
- `Nginx` 정적 파일 서빙 및 SPA 라우팅 대응

## 🔄 동작 흐름

1. 사용자가 랜딩 페이지에 접속합니다.
2. Hero 영역에서 App Store 또는 Google Play 버튼을 클릭합니다.
3. 현재 접속 디바이스를 판별합니다.
4. 환경에 따라 다음 중 하나를 수행합니다.
   - iPhone/iPad: App Store 링크 오픈
   - Android 모바일: APK 파일 다운로드
   - 데스크톱: 팝업으로 QR 또는 APK 다운로드 안내 제공


## 🐳 배포 방식

이 프로젝트는 Docker 빌드를 사용합니다. (Docker/Nginx)


## ✅ 요약

- 단일 랜딩 페이지 중심의 간결한 구조
- 앱 다운로드 전환에 집중된 UX
- 모바일/데스크톱 분기 처리 구현
- QR 자동 생성으로 운영 편의성 확보
- 정적 배포에 적합한 Docker/Nginx 구성

