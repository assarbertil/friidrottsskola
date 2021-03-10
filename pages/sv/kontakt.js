import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function kontakt() {
  return (
    <Layout en={false}>
      <Head>
        <title>Kontakt</title>
      </Head>
      <Container>
        <Title title="Kontakt" />
        <main>
          <MainText>
            <h2>Huddinge AIS Friidrott</h2>
            <p>Emelie Schlyter</p>
            <p>Projektledare Huddinge AIS friidrottsskola</p>
            <a
              
              href="mailto:friidrottsskolan@huddingeais.se">
              friidrottsskolan@huddingeais.se
            </a>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
