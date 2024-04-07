import styles from "./About.module.css";

function AboutPage() {
  return (
    <>
      <main id={styles.aboutPage} className="container-fluid p-0 m-0">
        <div id={styles.aboutImg}>
          <img
            src="/images/model-catwalk.webp"
            alt="model on a catwalk"
            className="img-fluid"
          />
        </div>
        <section
          className="row p-5 d-flex flex-column gap-4 gap-lg-2 g-lg-4 mx-auto flex-lg-row flex-lg-wrap justify-content-lg-between"
          id={styles.aboutInfo}
        >
          <div className="col-lg-12">
            <h1>About Vendora</h1>
            <p>
              <span className="fw-bold">Welcome to Vendora,</span> where the
              pulse of digital commerce beats with the rhythm of contemporary
              trends. In a world constantly shaped by the flux of social media
              preferences, Vendora stands as a beacon for those seeking the most
              current and coveted products online.
            </p>
            <p>
              Founded on the belief that shopping should be an adventure, not a
              chore, Vendora harnesses the power of real-time social media
              analytics to curate a catalog that reflects what's trending,
              what's hot, and ultimately, what's next. Our platform is more than
              just an e-commerce site; it's a gateway to the products that shape
              our modern lives.
            </p>
          </div>
          <div className="col-lg-6">
            <h2>Why Vendora?</h2>
            <ul className="ps-0">
              <li>
                <span className="fw-bold">Curated With Care:</span> Every
                product in our catalog is selected based on current social media
                trends, ensuring you're always in style.
              </li>
              <li>
                <span className="fw-bold">Seamless Shopping Experience:</span>{" "}
                Our intuitive website design and streamlined checkout process
                mean you spend less time navigating and more time enjoying your
                purchases.
              </li>
              <li>
                <span className="fw-bold">Engagement Beyond Transactions:</span>{" "}
                We believe in building a community. Whether through our
                comprehensive Contact Page or the direct feedback options, we're
                always eager to hear from you.
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <h2>Our mission</h2>
            <p>
              At Vendora, our mission is clear: to bring the latest trends
              directly to your doorstep. We aim to simplify the shopping
              experience, offering an intuitive, user-friendly platform that not
              only keeps you in the loop with the latest products but also makes
              purchasing them as straightforward as possible. From the moment
              you land on our homepage to the instant you complete your
              purchase, we're with you every step of the way.
            </p>
          </div>
          <div className="col-lg-12">
            <h2>The People Behind Vendora</h2>
            <p>
              Vendora was born from a team of passionate innovators,
              trendsetters, and tech enthusiasts, each bringing their unique
              vision to the table. United by a shared commitment to delivering
              excellence, our team works tirelessly to ensure Vendora remains at
              the forefront of e-commerce innovation.
            </p>
            <p>
              Our journey is one of continuous improvement, fueled by feedback
              from our users and insights from the digital landscape. We're not
              just selling products; we're crafting experiences, fostering
              connections, and building a community that celebrates the dynamism
              of digital commerce.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
