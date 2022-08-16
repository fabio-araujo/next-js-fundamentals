import styles from "../styles/Stylish.module.css";
import Layout from "../components/Layout";
export default function Stylish() {
  return (
    <div className={styles.roxo}>
      <Layout title='CSS module example'>
        <h1>Styling using CSS modules</h1>
      </Layout>
    </div>
  );
}
