import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiVideoPlus } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";
import { AiOutlineBell } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiSun, HiMoon } from "react-icons/hi";
import styles from "./SearchHeader.module.css";
import { useDarkMode } from "../../context/DarkModeContext"; 

export default function SearchHeader() {
  const [value, setValue] = useState("");
  const { keyword } = useParams();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${value}`);
  };

  useEffect(() => {
    setValue(keyword || "");
  }, [keyword]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.toggle}>
          <RxHamburgerMenu />
        </div>
        <Link className={styles.a} to="/">
          <img
            className={styles.logo}
            src={`/images/${darkMode ? "dark" : "light"}logo.png`}
            alt="youtube"
          />
        </Link>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <input
              id="input"
              className={styles.input}
              type="text"
              placeholder="검색"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className={styles.button}
              type="submit"
              onClick={handleSubmit}
            >
              <SlMagnifier style={{ width: "1rem", height: "1rem" }} />
            </button>
            <div className={styles.mic}>
              <IoMdMic />
            </div>
          </form>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.responsiveBtn}>
            <SlMagnifier className={styles.responsiveBtnImg} />
          </div>
          <button className={styles.modeChange} onClick={toggleDarkMode}>
            {!darkMode && <HiMoon />}
            {darkMode && <HiSun />}
          </button>
          <div className={styles.videoImg}>
            <BiVideoPlus className={styles.img} />
          </div>
          <div className={styles.bellImg}>
            <AiOutlineBell className={styles.img} />
          </div>
          <div className={styles.profileImg}>
            <img src="/images/profileImg.jpg" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
