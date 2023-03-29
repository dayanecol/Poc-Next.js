import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.banner}>
        <Image
          src="/images/game-banner.jpg"
          alt="Game banner"
          width={864}
          height={305}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.gameSection}>
          <div className={styles.gameImage}>
            <Image
              src="/images/xadrez.jpg"
              alt="Game image"
              width={200}
              height={286}
            />
          </div>
          <div className={styles.gameText}>
            <h2 className={styles.gameTitle}>Nossa História</h2>
            <p className={styles.gameDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum nibh eu orci dictum, ac laoreet ante sodales. Sed sit
              amet nisi libero. Sed lobortis dui eu purus elementum, vel dictum
              mi auctor. Etiam fringilla purus id risus congue, ut luctus dolor
              fringilla. Donec luctus elementum nulla, nec sagittis turpis
              pellentesque sed. Nulla facilisi. Nulla ultricies velit augue, ac
              molestie metus consectetur vel. In auctor augue sit amet nisl
              ullamcorper bibendum. Sed laoreet vehicula eros, non aliquet orci
              consequat a. Etiam sodales arcu quis massa efficitur, non
              dignissim libero sodales. Fusce ultricies enim a lacus lacinia, eu
              consectetur arcu finibus. Morbi accumsan odio in lacus dignissim
              mollis. Nullam malesuada tortor eget quam bibendum, sed tincidunt
              eros hendrerit. Duis ultrices sagittis euismod.
            </p>
            <p className={styles.gameDescription}>
              Curabitur bibendum massa eget nisi semper, at vestibulum ipsum
              finibus. Integer quis est vel est gravida scelerisque. Sed ut
              ipsum a elit rhoncus tempor at at mauris. Duis varius, ipsum
              rhoncus laoreet pharetra, mauris arcu euismod turpis, at suscipit
              velit lacus sit amet sem. In hac habitasse platea dictumst. Donec
              sit amet feugiat nibh. Sed consequat quam mi, nec pharetra nulla
              blandit vitae. Vivamus tincidunt, quam non dictum suscipit, erat
              augue mollis diam, id egestas tellus ante sit amet ex. Duis
              tincidunt purus eget tellus vehicula tristique.
            </p>
            <p className={styles.gameDescription}>
              Curabitur bibendum massa eget nisi semper, at vestibulum ipsum
              finibus. Integer quis est vel est gravida scelerisque. Sed ut
              ipsum a elit rhoncus tempor at at mauris. Duis varius, ipsum
              rhoncus laoreet pharetra, mauris arcu euismod turpis, at suscipit
              velit lacus sit amet sem. In hac habitasse platea dictumst. Donec
              sit amet feugiat nibh. Sed consequat quam mi, nec pharetra nulla
              blandit vitae. Vivamus tincidunt, quam non dictum suscipit, erat
              augue mollis diam, id egestas tellus ante sit amet ex. Duis
              tincidunt purus eget tellus vehicula tristique.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
