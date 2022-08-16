import Link from "next/link";
import styles from "../styles/Layout.module.css";
export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1>{props.title}</h1>
        <Link href="/">Back</Link>
      </div>
      <div className={styles.body}>{props.children}</div>
    </div>
  );
}
