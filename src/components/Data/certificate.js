import Certificate1 from "../Certificate/UserCertificate1.vue";
import Certificate2 from "../Certificate/UserCertificate2.vue";
import Certificate3 from "../Certificate/UserCertificate3.vue";

const certificate = [
  {
    tab: "OCP",
    content: Certificate1, // 컴포넌트 이름만 사용합니다.
  },
  {
    tab: "정보처리기사",
    content: Certificate2,
  },
  {
    tab: "네트워크 관리사",
    content: Certificate3,
  },
];

export default certificate;
