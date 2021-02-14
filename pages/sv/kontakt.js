import Layout from "../../components/layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function kontakt() {
  return (
    <Layout>
      <Head>
        <title>Kontakt</title>
      </Head>
      <Container>
        <Title title="Kontakt" />
        <main>
          <MainText>
            <h2>Huddinge AIS Friidrott</h2>
            <p>Emelie Schlyter</p>
            <a href="mailto:Emelie@huddingeais.se">Emelie@huddingeais.se</a>
            <a href="mailto:friidrottsskolan@huddingeais.se">
              friidrottsskolan@huddingeais.se
            </a>
            <p>Projektledare Huddinge AIS friidrottsskola</p>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
