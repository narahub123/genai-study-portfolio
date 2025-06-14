import styles from "./VonNeumannArchitecture.module.css";
import { joinClassNames } from "../../../../shared";

interface VonNeumannArchitectureProps {}

const VonNeumannArchitecture = ({}: VonNeumannArchitectureProps) => {
  const classNames = joinClassNames([styles["wrapper"]]);

  return (
    <div className={classNames}>
      <header className={styles.header}>
        <h1 className={styles.h1}>폰 노이만 아키텍처 동작 원리</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.h2}>폰노이만 구조란?</h2>
        <p className={styles.p}>
          폰노이만이 <strong>‘전자계산기의 이론 설계 서론’</strong>이라는
          논문에서 제안한 최초의 <strong>프로그램 내장 방식 컴퓨터</strong>를
          구현할 수 있는 구조
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            CPU와 메모리를 분리하여 명령어를 따로 저장하는 방식
          </li>
          <li className={styles.li}>
            컴퓨터 <strong>에드삭(EDSAC)</strong> 제작의 바탕이 됨
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>폰노이만 구조의 특징</h2>
        <p className={styles.p}>
          연산 수행과 관련된 명령어와 데이터를 메모리에 저장하고, 순차적으로
          명령어를 꺼내어 지시에 따라 연산을 수행하는 방식입니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>명령어 실행 사이클</h2>
        <ol className={styles.ol}>
          <li className={styles.li}>
            <strong>명령어 가져오기 (IF, Instruction Fetch)</strong>: 기억
            장치(메모리)로부터 명령어를 가져오는 과정
          </li>
          <li className={styles.li}>
            <strong>명령어 해석 (ID, Instruction Decode)</strong>: 가져온
            명령어가 어떤 명령어인지 해석하는 과정
          </li>
          <li className={styles.li}>
            <strong>피연산자 인출 (OF, Operands Fetch)</strong>: 실행에 필요한
            정보를 메모리에서 가져오는 과정
          </li>
          <li className={styles.li}>
            <strong>명령어 실행 (EX, Instruction Execution)</strong>: 연산을
            수행하고 결과를 저장
          </li>
          <li className={styles.li}>
            <strong>인터럽트 체크</strong>
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>구성 요소</h2>
        <img
          className={styles.img}
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbupjTX%2FbtrgnsgHKf9%2FAFF5V4IRsX8qE7c4Tzj7J1%2Fimg.png"
          alt="폰 노이만 구조"
        />
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>CPU(중앙 처리 장치)</strong>: 연산과 제어를 담당
          </li>
          <li className={styles.li}>
            <strong>메모리</strong>: 데이터와 프로그램 저장
          </li>
          <li className={styles.li}>
            <strong>제어 장치</strong>: 명령어를 하나씩 읽고 실행
          </li>
          <li className={styles.li}>
            <strong>연산 장치</strong>: 사칙 및 논리 연산 수행
          </li>
          <li className={styles.li}>
            <strong>입출력 장치</strong>: 외부와의 정보 교환 (예: 키보드,
            마우스, 화면, 프린터)
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>폰노이만 구조의 장점</h2>
        <p className={styles.p}>
          <strong>프로그램 내장 방식 컴퓨터</strong>로 하드웨어는 고정한 채
          소프트웨어만 바꾸면 되기 때문에 편의성이 뛰어납니다.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>폰 노이만 구조의 단점</h2>

        <h3 className={styles.h3}>1. 폰 노이만 병목 현상</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>원인</strong>: 명령어와 데이터가 동일한 버스를 공유하여
            동시에 접근이 불가능
          </li>
          <li className={styles.li}>
            <strong>결과</strong>: 메모리 접근 속도가 전체 시스템의 성능을
            저하시킴
          </li>
          <li className={styles.li}>
            <strong>해결 방법</strong>: <strong>하버드 구조</strong> - 명령용
            버스와 데이터용 버스를 물리적으로 분리
          </li>
        </ul>

        <h3 className={styles.h3}>2. CPU의 비효율적인 활용</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>원인</strong>: 순차적 처리로 인해 CPU 활용률이 낮음
          </li>
          <li className={styles.li}>
            <strong>해결 방법</strong>: <strong>병렬 처리 방식</strong> - 여러
            프로세서가 동시에 작업을 분담 수행
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <h2 className={styles.h2}>출처</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="https://m.blog.naver.com/with_msip/221981730449"
              target="_blank"
            >
              컴퓨터의 구조는 어떻게 생겼을까? 폰 노이만 구조
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="https://adeuran.tistory.com/20"
              target="_blank"
            >
              폰 노이만 구조의 개념과 동작
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="https://jiwondev.tistory.com/109"
              target="_blank"
            >
              컴퓨터 구조 #2 (컴퓨터의 탄생, 폰노이만 구조)
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default VonNeumannArchitecture;
