import styles from "./SemanticAccessibilityDOM.module.css";
import { joinClassNames } from "../../../../shared";

interface SemanticAccessibilityDOMProps {}

const SemanticAccessibilityDOM = ({}: SemanticAccessibilityDOMProps) => {
  const classNames = joinClassNames([styles["wrapper"]]);

  return (
    <div className={classNames}>
      <article className={styles.article}>
        <section className={styles.section}>
          <h2 className={styles.h2}>시맨틱 태그</h2>
          <h3 className={styles.h3}>시맨틱 태그란?</h3>
          <p className={styles.p}>
            콘텐츠의 의미와 목적을 명확하게 표현하는 HTML 태그
            <br />
            태그 자체에 의미를 부여함으로써, 웹사이트의 구조와 콘텐츠의 역할을
            보다 쉽게 이해할 수 있도록 도와줌
            <br />
            개발자, 검색 엔진, 보조 기술(스크린 리더 등)이 콘텐트를 보다
            정확하게 해석하고 처리하는 데 유리함
          </p>
          <h3 className={styles.h3}>기본 규칙</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              콘텐츠의 의미와 기능에 따라 콘텐츠의 각 부분에 적합한 요소들을
              선택해야 함
            </li>
            <li className={styles.li}>
              요소가 명확한 계층 구조와 구조를 형성하도록 요소들을 올바르게
              중첩해야 함
            </li>
            <li className={styles.li}>
              의미 없는 요소나 속성의 사용을 최소화해야 함
            </li>
          </ul>
          <h3 className={styles.h3}>주요 시맨틱 태그</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>header</li>
            <li className={styles.li}>nav</li>
            <li className={styles.li}>main</li>
            <li className={styles.li}>aside</li>
            <li className={styles.li}>footer</li>
            <li className={styles.li}>article</li>
            <li className={styles.li}>section</li>
          </ul>
          <p className={styles.p}>
            출처: 시맨틱 태그란? - 태그 요소의 종류와 이점
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>접근성 향상 방법</h2>
          <h3 className={styles.h3}>접근성(accessibility)이란?</h3>
          <p className={styles.p}>
            가능한 한 많은 사람의 웹사이트를 제약 없이 사용할 수 있도록 하는
            방법
            <br />
            특히 장애가 있거나 다양한 환경(화면 낭독기, 키보드 전용 사용자
            등)에서 웹을 이용하는 사람들도 동등하게 콘텐츠에 접근할 수 있도록
            설계하는 것을 의미
          </p>
          <h3 className={styles.h3}>접근성 향상의 목적</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              SEO 개선: 검색 엔진이 콘텐츠를 더 잘 이해하고 색인할 수 있어
              사이트 검색 노출 증가
            </li>
            <li className={styles.li}>
              브랜드 이미지 향상: 윤리적이고 포용적인 서비스로 인식되어 대중적인
              이미지 개선
            </li>
            <li className={styles.li}>
              이용자 확대: 다양한 사용자(고령자, 장애인, 키보드 사용자 등)의
              접근성을 보장함으로써 사용층 증가
            </li>
            <li className={styles.li}>
              법률 준수: 국가 및 지역의 웹 접근성 관련 법률이나 표준(WCAG 등)에
              대응
            </li>
          </ul>
          <h3 className={styles.h3}>접근성 향상 방법</h3>
          <h4 className={styles.h4}>HTML</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>시맨틱 태그 사용 : 구조와 의미 표현</li>
            <li className={styles.li}>
              의미 있는 라벨 : 이해 가능한 텍스트 라벨 제공
            </li>
            <li className={styles.li}>
              대체 텍스트 제공 : 이미지에 alt 속성 활용
            </li>
            <li className={styles.li}>
              키보드 접근성 보장 : Tab, 방향키로 모든 요소에 접근이 가능하도록
              설계
            </li>
          </ul>
          <h4 className={styles.h4}>CSS</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              명확한 시각적 피드백: 포커스 상태 표시, 색상 대비 확보
            </li>
            <li className={styles.li}>
              의미 있는 디자인: 시맨틱 구조를 해치지 않는 스타일링
            </li>
          </ul>
          <h4 className={styles.h4}>JavaScript + WAI-ARIA</h4>
          <ul className={styles.ul}>
            <li className={styles.li}>
              동적 콘텐츠에 의미 부여: aria-label, aria-expanded 등 사용
            </li>
            <li className={styles.li}>
              포커스 제어 및 키보드 이벤트 처리 시 접근성 고려
            </li>
          </ul>
          <p className={styles.p}>출처 : What is accessibility?</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>DOM</h2>
          <h3 className={styles.h3}>DOM이란?</h3>
          <p className={styles.p}>
            웹 페이지의 HTML이나 XML 문서를 객체로 표현한 구조화된 모델
            <br />
            자바스크립트 같은 프로그래밍 언어가 문서의 구조, 스타일, 내용에
            접근하고 조작할 수 있도록 도와줌
          </p>
          <h3 className={styles.h3}>DOM의 기능</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>HTML 문서 전체를 객체 모델로 구성</li>
            <li className={styles.li}>
              문서 내 각 요소에 접근하고 수정할 수 있는 프로퍼티와 메서드 제공
            </li>
          </ul>
          <h3 className={styles.h3}>DOM의 구조 : DOM tree</h3>
          <img
            className={styles.img}
            src="https://cheonmro.github.io/images/dom-tree.png"
            alt="DOM의 구조"
          />
          <a
            className={styles.a}
            href="https://cheonmro.github.io/2018/09/13/what-is-dom/"
          >
            출처
          </a>
          <h3 className={styles.h3}>DOM을 구성하는 주요 노드</h3>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>문서 노드 (Document Node)</strong>
              <br />
              DOM Tree의 최상위 루트 노드
              <br />
              document 객체로 접근 가능
              <br />
              DOM에 접근하기 위한 시작점
            </li>
            <li className={styles.li}>
              <strong>요소 노드 (Element Node)</strong>
              <br />
              html, body, div 등 HTML 요소
              <br />
              서로 부모-자식 관계를 가지며 문서 구조를 구성
            </li>
            <li className={styles.li}>
              <strong>어트리뷰트 노드 (Attribute Node)</strong>
              <br />
              HTML 요소의 class, id, href 등 속성(attribute) 값<br />
              요소 노드의 일부이지 자식 노드는 아님
            </li>
            <li className={styles.li}>
              <strong>텍스트 노드 (Text Node)</strong>
              <br />
              HTML 요소 내 텍스트 내용을 포함하는 노드
              <br />
              항상 요소 노드의 자식으로 존재
              <br />
              자식 노드를 가질 수 없음
            </li>
          </ul>
          <p className={styles.p}>출처</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                href="https://cheonmro.github.io/2018/09/13/what-is-dom/"
                className={styles.a}
                target="_blank"
              >
                DOM이란 무엇인가?
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="https://www.tcpschool.com/javascript/js_dom_concept"
                className={styles.a}
                target="_blank"
              >
                DOM의 개념
              </a>
            </li>
            <li className={styles.li}>
              <a
                href="https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction"
                className={styles.a}
                target="_blank"
              >
                DOM 소개
              </a>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default SemanticAccessibilityDOM;
