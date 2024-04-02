import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Products from "../../components/products";

function Home() {
  return (
    <main>
      <section className={styles.homeHero}></section>
      <Products />
    </main>
  );
}

export default Home;
