import Link from "next/link";
import styles from "../styles/Navigation.module.css";
export default function Nav(props) {
  return (
    <div className={styles.nav} style={{
        backgroundColor: props.color ?? 'dodgerblue'
    }}>
      <Link href={props.link}>{props.text}</Link>
    </div>
  );
}
