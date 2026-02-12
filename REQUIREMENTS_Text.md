1. 목표

기존 기능 나열 UI를
문제 해결형 허브 구조로 재구성하여

SEO 트래픽 증가

체류시간 증가

광고 수익 상승

2. 제품 원칙

모든 처리 브라우저 로컬

입력 텍스트 서버 전송 없음

입력 내용 저장 없음

복사/다운로드만 제공

3. 정보 구조 (IA)
/text (허브 페이지)

상단 질문형 UI:

텍스트를 왜 바꾸려 하시나요?

카드 6개:

텍스트 정리하기

개발용 변환

글자 수 확인

대소문자/형식 변환

리스트/정렬

특수 문자 처리

4. 니즈별 상세 요구사항
📌 A. 텍스트 정리 (/text-clean)
목적

복붙 깨짐 / 불필요 문자 제거

기능

중복 공백 제거

줄바꿈 정리

줄바꿈 제거

HTML 태그 제거

특수문자 제거

앞뒤 공백 제거

UI

체크박스 방식 (다중 선택 가능)

실시간 미리보기

결과 복사 버튼

📌 B. 개발자 변환 (/text-dev)
기능 그룹
JSON

Pretty print

Minify

JSON 유효성 검사

Encoding

Base64 encode/decode

URL encode/decode

HTML escape/unescape

기타

Unicode escape

Hash 생성 (옵션)

📌 C. 글자 수 계산 (/text-counter)
기능

총 글자 수

공백 포함/제외

줄 수

단어 수

바이트 수 (UTF-8 기준)

UX

입력 즉시 실시간 계산

📌 D. 대소문자/케이스 변환 (/text-case)
기능

UPPERCASE

lowercase

Title Case

camelCase

snake_case

kebab-case

📌 E. 리스트/구조 변환 (/text-structure)
기능

줄마다 번호 붙이기

줄마다 불릿 추가

쉼표 기준 줄 나누기

줄 기준 쉼표로 합치기

중복 제거

정렬 (A-Z)

📌 F. 특수 변환 (/text-special)
기능

이모지 제거

숫자만 추출

한글만 추출

영어만 추출

특수문자 제거

5. 공통 UI 요구사항
입력 영역

textarea (자동 확장)

최대 입력 크기 제한(예: 1MB 텍스트)

Clear 버튼

결과 영역

실시간 결과

복사 버튼

다운로드(.txt) 버튼

프라이버시 표시

“텍스트는 서버로 전송되지 않습니다.”

“모든 처리는 브라우저에서 수행됩니다.”

6. SEO 전략

각 니즈별 페이지 생성:

/remove-line-breaks

/json-pretty-print

/text-counter

/uppercase-converter

/remove-duplicate-lines

/base64-encode

각 페이지에:

설명 800~1200자

사용 예시

FAQ 6개

내부 링크

7. 이벤트 로깅 (익명)

수집 가능:

view_page

operation_selected

text_length_bucket (<500, <2000, <10000)

convert_success

copy_click

수집 금지:

텍스트 내용

입력 문장

클립보드 내용

8. 비기능 요구사항

실시간 처리 지연 < 100ms (일반 텍스트)

JSON 1MB 처리 가능

모바일 대응

클라이언트 메모리 초과 시 경고

9. 성공 지표

text 영역 체류시간 +X%

text 영역 페이지뷰 +X%

json/글자수 SEO 유입 증가

🔥 전략 핵심

Text는 이미지보다 훨씬 SEO가 잘 붙음.

왜냐면:

“JSON pretty print”

“줄바꿈 제거”

“글자수 세기”

이건 검색 의도가 명확함.