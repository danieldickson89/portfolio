import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import utilStyles from "../styles/utils.module.css";
import FormatDate from "../components/dateHelpers/date";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <FormatDate dateString="2023-01-02" />
      </section>
      <br />
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Daniel</b>. I'm a software engineer that enjoys problem
          solving. This is my portfolio.
        </p>
      </section>
    </Layout>
  );
}
