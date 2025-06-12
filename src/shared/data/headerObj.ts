import type { IHeader } from "../types";

const headerObj: Record<string, IHeader> = {
  home: {
    title: "Home",
    header: "GenAI 웹 서비스 개발 과정",
    expl: "헤더 설명 연습 문장",
  },
  study: {
    title: "Study",
    header: "수업 정리",
    expl: "헤더 설명 연습 문장",
  },
  report: {
    title: "Report",
    header: "과제 정리",
    expl: "헤더 설명 연습 문장",
  },
  toy: {
    title: "Toy",
    header: "토이 프로젝트 정리",
    expl: "헤더 설명 연습 문장",
  },
  extra: {
    title: "Extra",
    header: "그 외 필요한 정리",
    expl: "헤더 설명 연습 문장",
  },
};

export default headerObj;
