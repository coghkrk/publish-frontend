# 퍼블리싱 가이드 정의 

> # 이력
* v0.0.1
    * 2021.02.01
        * 1차 완료
    
    * 2021.06.21 ~ 
        * 업데이트 중
      &nbsp;
      &nbsp;  
      &nbsp;  
      &nbsp;

> # 프로젝트 환경
* 문서 및 버전 : HTML5 , CSS3
* Web 유형 : PC , Mobile , Responsive
* PC 웹 호환성 :
* Mobile 웹 호환성 :
* 해상도
    * Mobile : 360px - 767px
    * Tablet : 768px - 1023px
    * Desktop : 1024px - 1920px (소형 : 1069px)
<!-- * 에디터 : Webstorm  
    * [codespace 세팅]
    * preferences > Editor > Code style
    * HTML > Tabs and Indents > Tab Size
        * Tab Size : 2
        * Indent : 2
        * Continuation Indent : 4 -->
  &nbsp;
  &nbsp;  
  &nbsp;  
  &nbsp;
> # 파일 / 폴더 구조
* 개발과 기획에서 정의된 디렉토리 구조도 및 화면 아이디가 정의 되어 있다면 그에 준한 규칙에 따라 파일 및 폴더의 이름을 사용한다.
* 원페이지 작업시 sub 파일 생략 가능 , depth3 sub 폴더에 내용이 없다면 생략 가능
<table>
  <colgroup> 
    <col width="10%"/>
    <col width="10%"/>
    <col width="10%"/>
    <col width="10%"/>
    <col width="30%"/>
    <col width="40%"/>
  </colgroup>
  <thead>
    <th>분류 폴더</th>
    <th>depth01</th>
    <th>depth02</th>
    <th>depth03</th>
    <th>파일 이름</th>
    <th>파일 설명</th>
  </thead>
  <tbody>
    <tr>
      <td rowspan="5">commons</td> 
      <td rowspan="2">css</td> 
      <td colspan="2">libs</td>
      <td>animate.css</td> 
      <td>css - 라이브러리</td> 
    </tr>
    <tr>
      <td colspan="2">ui</td>
      <td>reset.min.css</td> 
      <td>css - 스타일 선언</td> 
    </tr>
    <tr>
      <td rowspan="2">font</td>
      <td colspan="2"></td>
      <td>*.ttf/*.woff/.svg/.otp</td> 
      <td>폰트파일</td> 
    </tr>
    <tr>
      <td rowspan="2">js</td>
      <td colspan="2">libs</td>
      <td>common.js</td> 
      <td>js 공통</td> 
    </tr>
     <tr>
      <td colspan="2">ui</td>
      <td>common.js</td> 
      <td>js 공통</td> 
    </tr>
    <tr>
      <td rowspan="3">sass</td>
       <td></td>
      <td>.woff/.eot/.svg/.otp/.ttp</td> 
      <td>폰트 파일</td> 
    </tr>
    <tr>
      <td rowspan="19">project01</td> 
      <td rowspan="4" colspan="3">css</td>
      <td>index.css</td> 
      <td>스타일 - 가져오기</td> 
    </tr>
    <tr>
      <td>main.css</td> 
      <td>스타일 - 메인 컨텐츠</td> 
    </tr>
    <tr>
      <td>sub.css</td> 
      <td>스타일 - 서브 컨텐츠</td> 
    </tr>
    <tr>
      <td>responsive.css</td> 
      <td>스타일 - 반응형 작업</td> 
    </tr>
    <tr>
      <td rowspan="2" colspan="3">js</td>
      <td>common.js</td> 
      <td>스크립트 - 해당 프로젝트 공통</td> 
    </tr>
    <tr>
      <td>main.js</td> 
      <td>스크립트 - 퍼블리싱</td> 
    </tr>
    <tr>
      <td colspan="3">font</td>
      <td>.woff/.eot/.otp/.ttp</td> 
      <td>폰트파일 - 해당 프로젝트</td> 
    </tr>
    <tr>
      <td rowspan="5">images</td> 
      <td colspan="2">common</td>
      <td></td> 
      <td>이미지 - 공통 이미지</td> 
    </tr>
    <tr>
      <td colspan="2">main</td>
      <td></td> 
      <td>이미지 - 메인 이미지</td> 
    </tr>
    <tr>
      <td colspan="2">sub</td>
      <td></td> 
      <td>이미지 - 서브 이미지</td> 
    </tr>
    <tr>
      <td colspan="2">icon</td>
      <td></td> 
      <td>이미지 - 아이콘</td> 
    </tr>
    <tr>
      <td colspan="2">@dummy</td>
      <td></td> 
      <td>이미지 - 임시 이미지</td> 
    </tr>
    <tr>
      <td rowspan="7">components</td> 
      <td rowspan="2" colspan="2">include</td>                              
      <td>header.html</td> 
      <td>html - 인클루드</td> 
    </tr>
    <tr>
      <td>footer.html</td> 
      <td>html - 인클루드</td> 
    </tr>
    <tr>
      <td rowspan="5">sub</td> 
      <td>sub01</td> 
      <td>greeting.html</td> 
      <td>html - 서브 페이지</td> 
    </tr>
    <tr>
      <td>sub02</td> 
      <td>event.html</td> 
      <td>html - 서브 페이지</td>
    </tr>
      <td rowspan="3">sub03</td> 
      <td>board.html</td> 
      <td>html - 서브 페이지</td>
    </tr>
    <tr>
      <td>gallery</td> 
      <td>html - 서브 페이지</td>
    </tr>
    <tr>
      <td>way-to-come.html</td> 
      <td>html - 서브 페이지</td>
    </tr>
  </tbody>
</table>

&nbsp;   
&nbsp;  
&nbsp;    
&nbsp;
> # 네이밍 규칙
* 개발과 기획에서 정의된 디렉토리 구조도 및 화면 아이디가 정의가 되어있다면 그에 준한 규칙에 따라 파일 및 폴더의 이름을 사용한다.
  
| 종류 | 구분 | 번호 | 비고 | 잘못된 예 | 올바른 예 |  
| ------ | ------ | ------ | ------ | ------ | ------ |  
| id | camelCase | 두자리 수 (01,02,03) | - 영문 대문자, 숫자, 특수문자로 시작할 수 없다.| id="Section-Contents01"<br/>id="01-section-Contents"<br/>id="SectionContents01" | id="sectionContents01" |
| class | kebab-case | 두자리 수 (01,02,03) | - 영문 대문자, 숫자, 특수문자로 시작할 수 없다. | class="Box-Contents1"<br/>class="01-box-Contents"<br/>class="*-box-Contents-01" | class="box-contents-01" |
| file | kebab-case | 두자리 수 (01,02,03) | - 영문 대문자, 숫자 , 특수문자로 시작할 수 없다. | Sub3Event.html<br/>sub03Event.html<br/>sub03-Event.html | sub-03-event.html |
| folder | kebab-case | 두자리 수 (01,02,03) | - 영문 대문자, 숫자로 시작할 수 없다. | 01Html-Common<br/>Html-common-01<br/>html-Common-01 | html-common-01 |
| images<br/>input(name)<br/>form(name)| under_score | 두자리 수 (01,02,03) | - 영문 대문자, 숫자, 특수문자로 시작할 수 없다.<br/>- 네이밍의 조합은 '형태_의미_(순서)_상태'를 기본 순서로 사용한다. | cancel_btn_off_01.jpg<br/>Btn_cancel_01_off.jpg<br/>01_btn_cancel_off.jpg | btn_cancel_01_off.jpg |  
  
&nbsp;  
&nbsp;

## 아이디 [ id ]
* ### 예약어  
    * 네이밍을 임의로 축약하지 않는다.
    * 지정된 레이아웃 및 폼 객체를 제외한 스타일 지정을 위해 id를 사용하지 않는다.
    * UI 동작을 위한 DOM 선택자로서의 id 지정은 가능하다.
  
  | 예약어 | 설명 |   
  |------|------|
  | #wrapper | 페이지 전체 영역 그룹핑 |
  | #header | 헤더 영역 |
  | #nav | 네비 영역 |
  | #visual | 비주얼 영역 |
  | #main | 컨텐츠 영역 |
  | #footer | 푸터 영역 |  
&nbsp;  

## 클래스 [ class ]
* ### 예약어  
    * 네이밍을 임의로 축약하지 않는다.
    * 이하의 클래스명은 사이트 전역에서 반복하여 사용되는 이름이므로 부모 요소 없이 단독으로 스타일을 선언하지 않는다.  
      &nbsp;  
      &nbsp;  
  * ##### 영역
  | 구분 | 예약어 |  예 |  
  | ------ | ------ |  ------ |  
  | 헤더 영역 | .header- |  .header-foot |  
  | 네비 영역 | .nav- | .nav-all |  
  | 비주얼 영역 | .visual- | .visual-left |  
  | 컨텐츠 영역 분할 | .section- / -section | .section01 / .notice-section |  
  | 푸터 영역 | .footer- | .footer-head |
  
  &nbsp;  
  &nbsp;  
  
  * ##### 일반 구조
  | 구분 | 예약어 | 설명  | 예 | 
  |------|------|------|------|
  | 머리글 | -head | 영역의 머리글 | .notice-head |
  | 본문 영역 | -body | 영역의 본문 | .notice-body |
  | 바닥글 | -foot | 영역의 바닥글 | .notice-foot |
  | 내용 영역 | -cont | 영역 중 일부 | .notice-cont |
  | 제목 영역 | -title | 영역 일부의 제목 | .notice-title |
  | 네비게이션 | -nav | 탐색 역할을 갖는 범위의 메뉴 | .notice-tab-nav |
  | 메뉴 | -menu | 탐색 역할이 없는 선택목록 메뉴 | .notice-drop-menu |
  | 목록 | -list | ul , ol 에 해당하는 반복되는 목록 그룹 | .notice-list |
  | 항목 | -item | 리스트의 항목 | .notice-item |
  | 링크 | -link | 링크 항목 | .notice-link |
  | 텍스트 | -text | 텍스트만 별도로 마크업하는 경우 | .notice-text |
  | 버튼 | .btn- |  | .btn-open |
  | 토글 버튼 | -toggle | 토글 기능을 가지는 버튼 | .btn-notice-toggle |
  | 열기 버튼 | -open | 열기 기능을 가지는 버튼 | .btn-pop-open |
  | 닫기 버튼 | -close | 닫기 기능을 가지는 버튼 | .btn-pop-close |
  | 보이기 | .show | display 의 상태, 이중 클래스로 사용 |  |
  | 숨기기 | .hide | display 의 상태, 이중 클래스로 사용 |  |
  | 활성화 | .active / -active / .on | css 활성화 |  |
  | 아이콘 | -icon |  | .notice-icon |
  | 체크박스 | .check- |  |  |
  | 셀렉트박스 | .select- |  |  |
  | 라디오 | .radio- |  |  | 
  
  &nbsp;  
  &nbsp; 
  
  * ##### ui 모듈
  | 구분 | 예약어 | 설명 |  
  | ------ | ------ | ------ |
  | Tabs | .tab- | 탭 |
  | Accordions | .acco- | 아코디언 |
  | Popup | .popup- | 팝업 |
  | Youtube API | .youtube- | 유튜브 |
  | map API | .map- | 맵 |  
  
  &nbsp;  
  &nbsp;  
  
  * ##### 성격 의미
  | 정의 | 예약어 | 설명 |
  | ------ | ------ | ------ |
  | 성공 | -success |  |
  | 실패 | -fail |  |
  | 주의 | -warning |  |
  | 위험 | -danger |  |
  | 오류 | -error |  |
  | 경고 | -alert |  |
  | 안내 | -info |  | 
  
  &nbsp;    
  &nbsp;  
  
&nbsp;  
## 이미지 [ images ]
* ### 예약어
  * 이미지 예약어에 숫자, 영문 소문자, 언더 스코어(_)를 조합하여 사용할 수 있다.  
  * 네이밍의 조합은 '형태_의미_(순서)_상태'를 기본 순서로 한다.  
    
  | 분류 | 파일명 | 설명 | 예 |
  |------|------|------|------|
  | 버튼 | btn_ | 버튼 이미지 | btn_cancel_01_off.jpg |
  | 아이콘 | icon_ | 아이콘 이미지 | icon_kakao_pc.jpg |
  | 화살표 | arr_ | 화살표 이미지 | arr_visual_right.jpg |
  | 배경 | bg_ | 백그라운드 이미지 | bg_notice_02.jpg |
  | 비주얼 | visual_ | 비주얼 이미지 | visual_sub_03.jpg |
  | 더미 이미지 | @ | 임시 이미지 | @dummy.jpg |
    
&nbsp;  
&nbsp;
> # 코드 작성 규칙

## html 작성 규칙  
### 태그 정의
| 종류 | 구분 | 태그 | 비고 |  
  |------|------|------|------|  
| 그룹 | 블록 타입 | div |  |  
| - | 인라인 타입 | span |  |  
| 시멘틱 태그 | 헤더 영역 | header |  |  
| - | 네비 영역 | nav |  |
| - | 컨텐츠 전체 영역 감싸기 | main |  |  
| - | 컨텐츠 영역 구분 | section |  |  
| - | 푸터 영역 | footer |  |
| - | 주소 | address |  |
| 목차 | 1 레벨 | h1 |  |  
| - | 2 레벨 | h2 |  |  
| - | 3 레벨 | h3 | 팝업 헤더 |  
| - | 4 레벨 | h4 |  |  
| - | 5 레벨 | h5 |  |
| - | 6 레벨 | h6 |  |
| 컨텐츠<br/>(inline Type) | 링크 | a | href="javascript:void(0)"을 적용한다. (임시 값) |
| - | 버튼 | button |  |
| - | 중요한 제목 | strong |  |
| - | 의미 있는 강조 | em |  |
| - | 의미 없는 강조 | b |  |
| - | 그래픽 요소 | i | 아이콘 , 배지 , 라인 ui 표현 |
| 컨텐츠<br/>(block Type) | 순서 없는 리스트 | ul > li |  |
| - | 순서 있는 리스트 | ol > li |  |
| - | 설명 리스트 | dl > dt + dd | - dt를 생략할 수 없다.<br/>- dl이 반복 될 경우 아래와 같이 대체한다.<br/>&nbsp;&nbsp;&nbsp;* dl -> li<br/>&nbsp;&nbsp;&nbsp;* dt -> strong<br/>&nbsp;&nbsp;&nbsp;* dd -> p|
| - | 단락 | p |  |
| 서식 | 서식 그룹 | fieldset |  |
| - | 서식 제목 | legend |  |
| - | 라벨 | label |  |
| - | 입력 , 선택 컨트롤 | input,textarea,select |  |
| 표 | 표 | table | 레이아웃을 표현하기 위하여 표를 사용하지 않는다. |
| - | 표 제목 | caption |  |
| - | 표 열 그룹 | colgroup |  |
| - | 표 열 | col | style="width:value" 형태로 적용한다. |
| - | 표 헤더 | thead |  |
| - | 표 본문 | tbody |  |
| - | 표 행 | tr |  |
| - | 표 제목 셀 | th |  |
| - | 표 내용 셀 | td |  |  

  &nbsp;     
  &nbsp;

<h3>기본 규칙</h3>  

* #### head 영역의 파일 링크  
    * meta , title , link , script 순서로 요소를 선언한다.  
    * 웹 문서 전송 속도를 높이기 위하여 최소한의 파일을 사용한다.    
    * CDN 사용은 지양한다.    
      &nbsp;    
      &nbsp;  
* #### 문자셋(charset)지정  
    * UTF-8 인코딩을 기본으로 한다.  
    * UTF-8은 다국어 지원이 가능하며 EUC-KR 보다 표현 가능한 한글이 많다.  
      &nbsp;  
      &nbsp;  
* #### 표준 문법의 사용  
    * DTD 를 제외한 모든 요소와 속성은 소문자로 작성한다.  
    * 속성의 값은 큰따옴표("")로 묶는다.  
    * 종료 태그를 반드시 선언한다.    
    * 특수 기호는 Entity name 을 사용하여 Entity 코드로 변환한다.   
      * 참고 ( https://dev.w3.org/html5/html-author/charref ){: target="_blank"    
      &nbsp;    
      &nbsp;  
    * **자주쓰는 특수문자**  
       
   | 특수 문자 | 문자 표현  |    
   | ------ | ------ |  
   | < | & l t ; |
   | &gt; | & g t ; |
   | $ | & a m p ; |  
   | " | & q u o t ; |  
   | # | & n u m ; |  
   | ; | & s e m i ; |  
   | ^ | & H a t ; |  
   | ' | & a p o s ; |  
   | space(띄어쓰기) | & n b s p ; |  
  
   &nbsp;    
   &nbsp;  
* #### 코드 들여쓰기    
    * 들여쓰기   
        * tab 으로 들여쓰기   
        &nbsp;  
    * 들여쓰기를 하지 않는 경우   
        * html 의 자식 요소인 head, body    
        * body 의 첫번째 자식 요소    
          &nbsp;  
        ```html
        <!doctype html>
        <html>
        <head>
           
        </head>
        <body>
        <div id="wrapper">
          <header id="header">
             
          </header>
        </div>
        </body>
        </html>
        ```  
        &nbsp;  
        &nbsp;
* #### 주석
    * 주석 기호와 주석 내용 사이에는 반드시 공백이 한 칸 있어야 한다.
    * 시작과 종료 주석의 내용은 동일해야 한다. 
    * 그룹을 감싸고 있는 객체를 구분하기 위한 코드 그룹 간 1줄의 공백을 허용한다.  
      &nbsp;
    ```html
    <div id="wrapper">
      <!-- header -->
      <header id="header">
        <!-- nav -->
        <nav id="nav">
           
        </nav>
        <!-- //nav -->
      </header>
      <!-- //header -->
  
      <!-- main -->
      <main id="main">
         
      </main>
      <!-- //main -->
  
      <!-- footer -->
      <footer id="footer">
         
      </footer>
      <!-- //footer -->
    </div>
    ```
    &nbsp;  
    &nbsp;
## css 작성 규칙
   ### 기본 규칙

* 문서의 첫 줄에 인코딩을 선언하며 인코딩은 html 과 동일한 인코딩을 지정한다.  
  &nbsp;
```css
@charset "UTF-8";        /* 유효 */
@charset 'UTF-8';        /* 유효하지않음, double quotation만이 유효합니다.("") */
@charset  "UTF-8";       /* 유효하지않음, 스페이스가 두번 들어감 */
 @charset "UTF-8";       /* 유효하지않음, 앞에 스페이스가 들어감 */
@charset UTF-8;          /* 유효하지않음, quotation이 없어서 css string으로 인식되지 않음 */
```  
&nbsp;
&nbsp;

* css 스타일 작성은 nested(들여쓰기) 방식으로 한다.
* 속성과 값 사이에 한칸 공백을 사용한다.
* 마지막 선언된 속성에도 세미콜론(;)을 사용한다.  
  &nbsp;
```css
@charset "UTF-8";
/* 잘못된 예 */
.css-style { display: block ;width:100%; height: 100%; position: absolute; left: 0; top: 0; margin: 0; padding: 0; background: #fff; font: 1rem/1.2 'Noto Sans','sans-serif'; text-align: center; cursor: pointer;}

/* 올바른 예 */
.css-style {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    background: #fff;
    font: 1rem/1.2 'Noto Sans','sans-serif';
    text-align: center;
    cursor: pointer;
}
```
&nbsp;  
&nbsp;  
* 모든 속성은 영문 소문자로만 작성한다.  
  &nbsp;
```css
/* 잘못된 예 */
.css-style {
    color: #FFF;
}

/* 올바른 예 */ 
.css-style {
    color: #fff;
}
```  
&nbsp;   
&nbsp;  
* 작은 따옴표 ('')의 사용범위 : 폰트의 선언, content 외의 경우는 사용하지 않는다.  
  &nbsp;
```css
.css-style {
    font-family: 'Noto Sans', 'sans-serif';
}

.css-style:after {
    content: '';
}
``` 
&nbsp;
&nbsp;
   * #### 속성의 선언 순서  
        * 속성의 선언 순서는 다음과 같다.
            * (1) 형태 : display / visibility
            * (2) 크기 : width / height / overflow 
            * (3) 흐름 : float / clear
            * (4) 위치 : position / left / right / top / bottom / z-index
            * (5) 박스 : margin / padding / border
            * (6) 배경 : background
            * (7) 글자 : text / font / color
            * (8) 기타 : cursor
            &nbsp;  
            &nbsp;  
        * 전체 속성의 선언 순서는 시계방향으로 명시한다. 
            * top -> right -> bottom -> left  
              &nbsp;
            ```css
            /* 시계 방향 */
            .css-style {
                margin-top: 10px;
                margin-right: 20px;
                margin-bottom: 30px;
                margin-left: 40px;
            }
            ``` 
            &nbsp; 
            &nbsp;
        * **선언 순서**
    
            | 순서 | 속성 | 속성 값 |   
            | ------ | ------ | ------ | 
            | 1 | display | none , block , inline , inline-block |
            | 2 | visibility | visible , hidden , scroll , auto |
            | 3 | width | auto , length(px,rem) , % | 
            | - | min-width | - | 
            | - | max-width | - | 
            | 4 | height | auto , length(px,rem) , % | 
            | - | min-height | - | 
            | - | max-height | - | 
            | 5 | overflow | visible , hidden , collapse |
            | 6 | float | left , right , none | 
            | 7 | clear | left , right , both | 
            | 8 | position | absolute , relative , fixed , static | 
            | - | left |  | 
            | - | right |  | 
            | - | top |  | 
            | - | bottom |  |
            | - | z-index | - 인라인 : 우선순위 1씩 증가 , 기본요소 0<br/>- 그룹 : 우선순위 1씩 증가 , 기본요소 10<br/>- 구조 : 우선순위 1씩 증가 , 기본요소 100<br/>- 팝업 : 우선순위 1씩 증가 , 기본요소 1000 |
            | 9 | margin | auto , length(px,rem) , % |
            | 10 | padding | auto , length(px,rem) , % | 
            | 11 | border | border-width , border-style , border-color | 
            | 12 | background | background-color , background-images , background-repeat , background-attachment , background-position | 
            | 13 | font | font-style , font-variant , font-weight , font-size , font-family |
            | 14 | line-height | length , % | 
            | 15 | color | hex_number | 
            | - | letter-spacing | normal , length | 
            | - | text-decoration | none , underline , overline , line-through , blink |
            | - | text-align | left , right , center , justify | 
            | - | white-spacing | normal , nowrap , pre , pre-line , pre-wrap | 
            | - | word-spacing | normal , length |
            | - | 기타 | 언급하지 않은 나머지 속성들은 line-height 속성 이후에 선언하며, 선언 순서는 무관하다. | 
          
            &nbsp;   
            &nbsp;    
   * #### 약식 속성 & 선언  
        * background 약식 속성
            * background 4가지 (color, url , repeat , position) 속성은 약식 선언한다.
            * 4가지 외의 속성은 개별 선언한다.
            * 이후 속성이 변경되어 재 선언 할 경우 개별 선언한다. 순서는 아래와 같다.  
              &nbsp;
            ```css
            /* background 약식 선언 */
            .css-style {
                background: #fff url(images/bg-main.jpg) no-repeat center center;
                background-size: 100%;
                background-attachment: attachment;
                background-clip: border-box;
                background-origin: border-box;
            }
            /* 재 선언 (순서는 아래와 같다.) */
            .css-style {
                background-color: #000;
                background-image: url(images/bg-notice.jpg);
                background-position: center right;
                background-attachment: fixed;
                background-clip: padding-box;
                background-origin: inherit;
             }
            ```
            &nbsp;  
            &nbsp;
        * margin , padding 속성 축약 
            * css 최적화를 위해 속성값을 축약한다.  
              &nbsp;
            ```css
            /* 잘못된 예 */
            .css-style {
                margin: 0 auto 0 auto;
                padding-top: 10px;
                padding-right: 20px;
                padding-bottom: 30px;
                padding-left: 40px;
            }  
            /* 올바른 예 */
            .css-style {
                margin: 0 auto;
                padding: 10px 20px 30px 40px;
            }
            ```
            &nbsp;  
            &nbsp;
       * border 약식 속성
           * 테두리의 스타일이 동일할 경우 단일 속성을 사용 약식 선언한다.
           * 동일하지 않을 경우 부분적 속성을 사용할 수 있다.
               * 속성의 순서는 다음과 같다.
               * width -> style -> color  
                 &nbsp;
           ```css
           /* 단일 속성 */
           .css-style {
               border: 1px solid #fff;
               border-right: 1px solid #fff;
           }  
           /* 부분적 속성 */
           .css-style {
               border-width-right: 1px
               border-style-right: solid;
               border-color-right: #fff;
           }
           ```
           &nbsp;  
           &nbsp;
       * font 약식 속성
           * 폰트의 크기와 라인의 높이를 동시에 제어를 하는 경우에 한하여 사용한다.
           * 속성의 선언 순서는 다음과 같다.
                * style -> variant -> weight -> size -> line-height -> family
                * style, variant, weight 는 생략 가능하지만 size, line-height, family 는 필수 입력 사항이다.  
                  &nbsp;  
           ```css
           .css-style {
               font: 1rem/1.2 'Noto Sans','sans-serif';
           }
           ```
           &nbsp;  
           &nbsp;
   * #### 미디어 타입
       * 미디어 타입은 (responsive.css)에 작성한다.
       * 미디어 타입 참고 
           * ( https://developer.mozilla.org/ko/docs/Web/Guide/CSS/Media_queries ){:target="_blank"}
           * [미디어쿼리 초보자 안내서](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/%EB%AF%B8%EB%94%94%EC%96%B4_%EC%BF%BC%EB%A6%AC_%EC%B4%88%EB%B3%B4%EC%9E%90_%EC%95%88%EB%82%B4%EC%84%9C) {:target="_blank"}   
             &nbsp;
             
       ```css
       /* responsive.css */
       @media all and (max-width: 1024px) {
          /* css here */
       }
       @media all and (max-width: 768px) {
          /* css here */
       }
       @media all and (max-width: 360px) {
          /* css here */
       }
       ```
       &nbsp;  
       &nbsp; 
   * #### 주석
       * 주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.
       * css 주석 처리는 시작 주석을 작성하며 종료 주석은 작성하지 않는다.
       * 종료 코드 이후에 오는 요소에 한 줄 띄어 쓰기를 허용한다. (단 빈줄은 1줄을 초과하지 않는다.)  
          &nbsp;  
        ```css
        [파일 주석]
        /* -----------------------------------------------------
          파일 : 
          정의 :
          작성자 :
          분류 순서 :
        -------------------------------------------------------- */
        
        [분류 주석]
        /* ------------------------------------------------------
        @Fonts
        --------------------------------------------------------- */
        
        [구분 주석]
        /* Default */
        ```
        ```css
        @charset "UTF-8";
        /* -------------------------------------------------------
            파일 : reset.css
            정의 : 초기화
            작성자 : joy
            분류 순서 : @웹폰트 , @초기화
        ---------------------------------------------------------- */
         
        /* -------------------------------------------------------
          @웹폰트
        --------------------------------------------------------- */
        @font-face {
            font-family: "NotoSans";
            font-weight: 100;
                src: url('../../common/fonts/NotoSans-Thin.eot');
                src: local('※'),
                url('../../common/fonts/NotoSans-Thin.eot?#iefix') format('embedded-opentype'),
                url('../../common/fonts/NotoSans-Thin.woff') format('woff');
       }
       @font-face {
           font-family: "NotoSans";
           font-weight: 100;
           src: url('../../common/fonts/NotoSans-Thin.eot');
           src: local('※'),
           url('../../common/fonts/NotoSans-Thin.eot?#iefix') format('embedded-opentype'),
           url('../../common/fonts/NotoSans-Thin.woff') format('woff');
       }
    
       /* -------------------------------------------------------
           @초기화
        --------------------------------------------------------- */
       html, body, div, span, applet, object, iframe,
       h1, h2, h3, h4, h5, h6, p, blockquote, pre,
       a, abbr, acronym, address, big, cite, code,
       del, dfn, em, img, ins, kbd, q, s, samp,
       small, strike, strong, sub, sup, tt, var,
       b, u, i, center,
       dl, dt, dd, ol, ul, li,
       fieldset, form, label, legend,
       table, caption, tbody, tfoot, thead, tr, th, td,
       article, aside, canvas, details, embed,
       figure, figcaption, footer, header, hgroup,
       menu, nav, output, ruby, section, summary,
       time, mark, audio, video {
           margin: 0;
           padding: 0;
           border: 0;
           font-size: 10px;
           font: inherit;
           vertical-align: baseline;
       }
       /* HTML5 display-role reset for older browsers */
       article, aside, details, figcaption, figure,
       footer, header, hgroup, menu, nav, section {
           display: block;
       }
       body {
           line-height: 1;
       }
       ol, ul {
           list-style: none;
       }
       blockquote, q {
           quotes: none;
       }
       blockquote:before, blockquote:after,
       q:before, q:after {
            content: '';
            content: none;
       }
       table {
           border-collapse: collapse;
           border-spacing: 0;
       }
       /* default color */
       .css-style {
           background: #fff;
       }
       ```
       &nbsp;
       &nbsp;  
         
## js 작성 규칙
   * #### 주석
        * 주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다.
        * js 주석 처리는 시작 주석을 작성하며 종료 주석은 작성하지 않는다.
        * 종료 코드 이후에 오는 요소에 한 줄 띄어 쓰기를 허용한다. (단 빈줄은 1줄을 초과하지 않는다.)  
          &nbsp;  
        ```js
        [파일 주석]
          /* -----------------------------------------------------
              파일 : 
              정의 :
              작성자 :
              분류 순서 :
          -------------------------------------------------------- */
        
         [분류 주석]
          /* ------------------------------------------------------
              @Variables
          --------------------------------------------------------- */
        
         [구분 주석]
          /* 엘리먼트 설정 */
         
         [설명 주석]
         //스와이프 적용 클래스
        ```
        ```js
        /* -----------------------------------------------------
             파일 : common.js
             정의 : 공통 스크립트
             작성자 : joy
             분류 순서 
              - @Variables : 전역변수
              - @Init : 초기실행 
              - @Setting : 기본설정
              - @Layout : 레이아웃
        -------------------------------------------------------- */
        
         /* ------------------------------------------------------
             @Variables
         --------------------------------------------------------- */
        /* 종류 */
        var name = null //설명 주석
        
        var ui = {
            /* ------------------------------------------------------
                 @Init
             --------------------------------------------------------- */
            /* 초기실행 */
            function init () {};
     
            /* 재실행 */
            
            /* ------------------------------------------------------
                 @Setting
             --------------------------------------------------------- */
            /* 이름 */ 
            
            /* ------------------------------------------------------
                 @Layout
             --------------------------------------------------------- */
            /* 이름 */
        
        }
     
        $(function() {
            ui.init();
        });
        ```