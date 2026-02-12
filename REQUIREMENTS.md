아래는 **FreeConvertAll( freeconvertall.org / freeconvertall.org + freeconvertall.org )의 “상황(니즈) 기반 이미지 변환 경험 + SEO 랜딩”**을 구현하기 위한 **요구사항 정의서(PRD)** 초안이야.
Codex에 그대로 넣고 작업 분해(티켓화)하기 좋게 **기능/화면/데이터/비기능/수용기준**까지 넣었어.

---

## 1. 문서 개요

### 1.1 목적

현재의 “기능 나열형 변환 UI”를 **사용자 상황(업로드 실패/용량 초과/규격 미스/형식 미지원)** 중심으로 재구성하여:

* 검색 유입(SEO) 증가
* 전환율(변환 완료율) 증가
* 페이지뷰/체류시간 증가 → 광고 수익 증가

### 1.2 성공 지표(KPI)

* 이미지 변환 완료율(Upload → Download): +X%
* 세션당 페이지뷰: +X%
* 평균 체류시간: +X%
* SEO 유입(자연검색 세션): +X%
* 상위 니즈 페이지의 검색 유입(예: /compress-image, /heic-to-jpg): +X%
* 광고 수익(페이지 RPM): +X%

> X 값은 런칭 2주~4주 측정 후 목표 설정(초기엔 **추세 개선** 중심).

---

## 2. 사용자/니즈 정의

### 2.1 주요 유입 경로

* Google 검색: “사진 용량 줄이기”, “HEIC JPG 변환”, “인스타 사이즈”, “이메일 첨부 용량 초과” 등

### 2.2 주요 페르소나

1. **업로드 실패 해결러(업무/제출/메일)**

* 문제: 업로드 제한(파일 용량) 때문에 막힘
* 원하는 결과: 품질 크게 안 떨어지게 용량만 줄이기
* 참고: Gmail 첨부 제한 25MB가 널리 알려져 있고, Outlook(인터넷 이메일 계정)도 20MB 안내가 존재함. ([mailmeteor.com][1])

2. **SNS/플랫폼 규격 맞추는 사람**

* 문제: 플랫폼 권장 비율/픽셀 규격 미스
* 원하는 결과: 인스타/유튜브 등 “프리셋 선택 → 자동 리사이즈/크롭”

3. **형식 미지원(HEIC/WEBP) 해결러**

* 문제: Windows에서 HEIC가 안 열리거나, 특정 업로더가 WEBP를 거부
* 원하는 결과: “안 되는 이유”를 모르니, 업로드만 하면 자동으로 JPG/PNG 추천

### 2.3 니즈 Top 4 (이미지)

1. **용량 줄이기(압축)**
2. **픽셀/비율 맞추기(리사이즈/크롭/패딩)**
3. **형식 변환(HEIC/WEBP/PNG/JPG)**
4. **투명 배경/품질/메타데이터(부가)**

---

## 3. 제품 범위(Scope)

### 3.1 In Scope (이번 릴리즈)

A. **니즈 기반 홈/허브 UI**

* “무엇 때문에 변환이 필요하세요?” 선택형 진입

  * 업로드가 안 돼요(용량/형식)
  * 파일이 너무 커요(압축)
  * 사이즈가 안 맞아요(규격)
  * 파일이 안 열려요(HEIC/WEBP)

B. **SEO 랜딩 페이지(니즈 페이지) 최소 5개**

* /compress-image (이미지 용량 줄이기)
* /resize-image (이미지 크기/픽셀 변경)
* /heic-to-jpg
* /webp-to-jpg (또는 /webp-to-png)
* /instagram-image-size (SNS 규격 프리셋 페이지)

C. **변환 플로우 개선**

* 업로드 → 자동 감지(포맷/용량/픽셀/비율) → 추천 작업(기본값) → 결과 미리보기 → 다운로드
* 변환 후 추천(내부링크)로 페이지뷰 증가:

  * “용량도 줄일까요?”, “SNS 규격도 맞출까요?”, “JPG로 바꿀까요?”

D. **광고 친화 레이아웃**

* 변환 결과 전/후, 그리고 FAQ 중간에 광고 슬롯 배치(UX 해치지 않는 범위)

E. **분석/이벤트 로깅**

* 니즈 선택, 업로드 성공/실패, 변환 시작/완료, 다운로드, 추천 클릭 등

### 3.2 Out of Scope (추후)

* 로그인/계정/히스토리 저장
* 결제/프리미엄
* 서버 장기 저장(기본은 세션/짧은 TTL)

---

## 4. 정보구조(IA) / 라우팅

### 4.1 최상단 내비(간단)

* Home
* Image (니즈 허브)
* PDF
* Video
* Audio
* FAQ

### 4.2 니즈 기반 이미지 허브(/image)

* 카드 4개:

  1. 이미지 용량 줄이기 → /compress-image
  2. 이미지 크기/규격 맞추기 → /resize-image
  3. HEIC/JPG 변환 → /heic-to-jpg
  4. WEBP 변환 → /webp-to-jpg

---

## 5. 화면/기능 요구사항

### 5.1 공통 컴포넌트(모든 변환 페이지)

**[업로드 영역]**

* Drag & Drop + 파일 선택
* 허용 파일 타입 표시(페이지별)
* 멀티 업로드(배치) 지원 여부:

  * 1차: 이미지 배치는 지원(권장)
  * 단, 결과 다운로드는 zip 묶기 옵션 제공

**[자동 분석 결과]**

* 파일 포맷, 용량(KB/MB), 해상도(px), 비율, EXIF 존재 여부

**[추천 작업(기본값)]**

* 니즈별로 기본값이 다름(아래 상세)

**[미리보기]**

* Before/After 토글
* 예상 용량/해상도 표시

**[다운로드]**

* 단일 파일 다운로드
* 배치는 ZIP 다운로드

**[추천/다음 액션]**

* 내부링크 카드 3개(관련 니즈 페이지로)

**[FAQ 섹션]**

* SEO용 6~10개 Q&A(페이지별 맞춤)

**[신뢰/프라이버시]**

* “파일은 X분 후 삭제” / “브라우저 처리 여부” 명시(구현 방식에 따라 문구 확정)

---

### 5.2 페이지별 상세 요구사항

#### (1) /compress-image (용량 줄이기)

**목표:** 시각 품질 크게 해치지 않으면서 파일 용량 감소

* 입력: JPG/PNG/WebP (추가 포맷은 확장)
* 출력: 기본 JPG (옵션: WebP, PNG 유지)
* 옵션

  * 압축 강도: Low / Medium / High (또는 1~100 슬라이더)
  * “해상도 유지” 체크(기본 On)
  * “최대 용량 목표” 입력(예: 1MB 이하)
* 프리셋(원클릭)

  * “이메일 첨부용(<= 10MB / 20MB / 25MB)” (수치는 안내 근거 포함 가능: Gmail 25MB, Outlook 20MB 등) ([mailmeteor.com][1])
* 수용 기준(예)

  * 5MB JPG 입력 → Medium 압축 → 30~70% 용량 감소(이미지에 따라 다름) & 변환 성공
  * 목표 용량 지정 시: 가능한 한 목표 이하로 맞추되, 불가능하면 “최선 결과 + 안내” 출력

#### (2) /resize-image (크기/픽셀 맞추기)

**목표:** 픽셀/비율 문제 해결(자르기/패딩 포함)

* 입력: JPG/PNG/WebP
* 출력: JPG/PNG 선택
* 옵션

  * 목표 폭/높이(px) 입력
  * 비율 유지 토글
  * 채우기 방식:

    * Crop(잘라서 맞춤)
    * Pad(여백 추가)
    * Stretch(비율 무시)
* 프리셋

  * Instagram 프로필 320x320(저장 기준 가이드가 널리 안내됨) ([blog.hootsuite.com][2])
  * 기타 프리셋은 별 페이지(/instagram-image-size)에서 집중 제공

#### (3) /heic-to-jpg

**목표:** “안 열림/미지원”을 즉시 해결

* 입력: HEIC/HEIF
* 출력: JPG(기본) / PNG(옵션)
* 기능

  * 업로드 즉시: “HEIC는 Windows/일부 업로더에서 미지원일 수 있어요 → JPG로 변환하면 대부분 해결” 안내
* 배치 변환: 필수
* 수용 기준

  * HEIC 10장 업로드 → 10장 JPG 변환 → ZIP 다운로드 성공

#### (4) /webp-to-jpg (또는 /webp-to-png)

**목표:** 특정 서비스/툴의 WEBP 미지원 해결

* 입력: WEBP
* 출력: JPG 기본(또는 투명 유지 필요하면 PNG 추천)
* 로직

  * WEBP에 alpha(투명) 있으면: 기본 출력 PNG 권장(자동 안내)
  * 투명 없으면: 기본 출력 JPG

#### (5) /instagram-image-size (SNS 규격 페이지)

**목표:** “인스타 사이즈” 검색 유입을 니즈 해결로 연결

* 구성

  * 프리셋 카드:

    * 프로필(320x320)
    * 피드 정사각(1080x1080)
    * 피드 세로(1080x1350)
    * 스토리/릴스(1080x1920)
  * 각 프리셋 선택 → /resize-image?preset=instagram_story 형태로 이동(또는 같은 페이지에서 즉시 처리)
* 참고: 인스타 도움말엔 업로드 시 폭 320~1080px 범위를 언급하는 안내가 있음 ([인스타그램 도움말][3]) (프리셋 수치는 운영 정책 변동 가능하니 UI에는 “권장”으로 표기)

---

## 6. SEO 요구사항

### 6.1 원칙

* 페이지는 **사람에게 유용한 설명/FAQ/가이드**를 포함해야 함(검색엔진용 억지 페이지 지양) ([Google for Developers][4])

### 6.2 각 랜딩 페이지 SEO 요소(필수)

* title, meta description
* H1 1개, H2/H3 구조
* 본문 800~1500자(문제-해결-사용법-FAQ)
* FAQ schema(JSON-LD) (가능하면)
* Breadcrumb schema(가능하면)
* 내부 링크(관련 니즈 페이지 3개)
* canonical 지정
* OG 태그

### 6.3 URL/콘텐츠 정책

* 키워드 1페이지 1의도(압축/리사이즈/HEIC 등 분리)
* 중복 콘텐츠 금지(프리셋만 바꾼 얕은 페이지 남발 금지)

---

## 7. 광고(Ad) 요구사항

* 광고 슬롯 위치(초안)

  1. 업로드 영역 아래(1개)
  2. 변환 결과 아래(1개)
  3. FAQ 중간(1개)
* 광고 로딩이 변환 UX(업로드/다운로드)를 막지 않도록 **비동기 로딩**
* CLS 최소화(광고 영역 높이 고정)

---

## 8. 데이터/이벤트 로깅 요구사항

### 8.1 이벤트 목록(필수)

* view_page({page_type})
* select_intent({intent})  // 홈/허브에서 선택
* upload_start / upload_success / upload_fail({reason})
* analyze_complete({format, size_mb, width, height, has_alpha})
* convert_start({operation, preset, params})
* convert_success({output_format, output_size_mb, ms})
* convert_fail({reason})
* download_click({single_or_zip})
* recommend_click({target_page})

### 8.2 대시보드(필수 지표)

* 페이지별: 방문수, 업로드율, 변환완료율, 다운로드율, 추천클릭률
* 상위 실패 사유 Top N (파일 크기, 포맷, 타임아웃 등)

---

## 9. 비기능 요구사항(NFR)

### 9.1 성능

* 첫 로드 LCP 목표: < 2.5s (모바일 기준)
* 업로드 20MB 이미지 1장 변환: 평균 < 5~10s 목표(환경에 따라)
* 배치 변환: 진행률 표시 + 취소 가능

### 9.2 안정성/에러 처리

* 변환 실패 시: 원인/해결 안내(“다른 포맷으로 시도”, “해상도 줄이기” 등)
* 서버 과부하 시: 큐잉/재시도 안내(무한 로딩 금지)

### 9.3 보안/프라이버시

* 업로드 파일 저장 시:

  * 저장 위치/기간(TTL) 명시
  * 일정 시간 후 자동 삭제(예: 1시간)
* 개인정보/민감정보 업로드 경고(선택)
* HTTPS 강제, 기본 보안 헤더

---

## 10. 수용 기준(Acceptance Criteria) 요약

* 사용자는 홈에서 “상황 카드”를 통해 2클릭 이내로 목적 페이지 도달
* 각 니즈 페이지에서 업로드 후 **기본값만으로도** 변환→다운로드가 가능
* 변환 후 관련 니즈 추천 링크가 노출되고 클릭 시 해당 페이지로 이동
* 최소 5개 SEO 랜딩 페이지가 생성되고, title/H1/FAQ/schema가 적용
* 주요 이벤트 로깅이 동작하며 페이지별 퍼널 측정 가능
* 광고 슬롯이 UX를 방해하지 않고 CLS를 과도하게 유발하지 않음

---

## 11. 구현 작업 분해(코덱스용 체크리스트)

1. 라우팅/페이지 생성

* /image, /compress-image, /resize-image, /heic-to-jpg, /webp-to-jpg, /instagram-image-size

2. 공통 업로드/변환 위젯 컴포넌트

* 파일 업로드, 분석, 옵션 UI, 변환 요청, 결과 미리보기, 다운로드

3. 니즈별 기본값/프리셋 로직

* 압축 프리셋, 리사이즈 프리셋, alpha 감지 추천 등

4. 변환 엔진 연동(서버 또는 클라이언트)

* 배치/zip, 타임아웃, 진행률

5. SEO 메타/스키마/FAQ 템플릿

* 페이지별 고유 콘텐츠 주입

6. 로깅/분석

* 이벤트 스키마 + 전송(도구는 현재 사용 중인 것으로)

7. 광고 슬롯/레이아웃

* 비동기 로드, 높이 고정

---

원하면 다음도 바로 만들어줄게(코덱스가 좋아하는 형태로):

* **페이지별 와이어프레임(텍스트 기반)**
* **각 페이지의 SEO 본문/FAQ 초안(한국어/영어)**
* **이벤트 스키마 JSON 정의**
* **구현 방식(클라 변환 vs 서버 변환)별 요구사항 분기**

[1]: https://mailmeteor.com/blog/gmail-attachment-size-limit?utm_source=chatgpt.com "Gmail Attachment Size Limit: How to Send Files Larger ..."
[2]: https://blog.hootsuite.com/social-media-image-sizes-guide/?utm_source=chatgpt.com "Social media image sizes for all networks [February 2026]"
[3]: https://help.instagram.com/1631821640426723/?utm_source=chatgpt.com "Image resolution of photos you share on Instagram"
[4]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content?utm_source=chatgpt.com "Creating Helpful, Reliable, People-First Content"
