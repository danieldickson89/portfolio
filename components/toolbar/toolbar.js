import styles from "./toolbar.module.css";
import Link from "next/link";
import utilStyles from "../../styles/utils.module.css";

const link1 = "MongoDB";
const link2 = "Postgres";
const link3 = "Redux";

export default function Toolbar() {
  return (
    <div className={`${styles.navbar}`}>
      <Link href={`/hockey`} className={styles.navbarItem}>
        {link1}
      </Link>
      <div className={styles.navbarItem}>{link2}</div>
      <div className={styles.navbarItem}>{link3}</div>
    </div>
  );
}
