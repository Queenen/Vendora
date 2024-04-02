import styles from "./Home.module.css";
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
