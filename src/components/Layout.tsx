import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  banner?: ReactNode;
  gameImage?: ReactNode;
  gameTitle?: string;
  gameDescription?: string;
  children?: ReactNode;
}

const Layout = ({
  banner,
  gameImage,
  gameTitle,
  gameDescription,
  children,
}: LayoutProps) => {
  return (
    <>
      <Header />
      {banner && <div className={styles.banner}>{banner}</div>}
      <div className={styles.container}>
        <div className={styles.content}>
          {gameImage && (
            <div className={styles.gameSection}>
              <div className={styles.gameImage}>{gameImage}</div>
              <div className={styles.gameText}>
                <h2 className={styles.gameTitle}>{gameTitle}</h2>
                <p className={styles.gameDescription}>{gameDescription}</p>
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
