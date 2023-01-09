import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

const name = "Daniel Dickson";
export const siteTitle = "My Portfolio";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        }
      </header>
      <main>{children}</main>
    </div>
  );
}
