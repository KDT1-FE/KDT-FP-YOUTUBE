import React from "react";
import { useNavigate } from "react-router-dom";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import styles from "./NotFound.module.css";

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <>
    <SearchHeader/>
    <div className={styles.container}>
      <img className={styles.image} src="/images/NotFound.png" alt="NotFound" />
      <div className={styles.mainDiv}>인터넷 연결</div>
      <div className={styles.subDiv}>오프라인 상태입니다. 연결 상태를 확인하세요.</div>
      <div className={styles.refreshBtn} onClick={()=>navigate('/')}>다시 시도</div>
    </div>
    </>
  );
}
