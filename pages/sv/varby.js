import Layout from "../../components/layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";
import Anmal from "../../components/Anmal";
import Container from "../../components/Container";

export default function Källbrink() {
  return (
    <Layout>
      <Head>
        <title>Vårby</title>
      </Head>
      <Container>
        <Title title="Vårby" />
        <Anmal />
        <main>
          <MainText>
            <h3>HAIS friidrottsskola 2008-2015</h3>
            <p>
              Friidrottsskolan är ett läger på dagtid för barn och ungdomar
              födda år 2008-2015. Under veckorna 26, 27 och 33 i sommar får
              barnen prova på friidrottens olika grenar, till exempel längdhopp,
              höjdhopp, 60m och kulstötning.
            </p>
            <p>
              Huddinge AIS Friidrottsskola i Vårby är gratis för alla barn som
              bor i Vårby. Detta har gjorts möjligt med ett stort stöd från Huge
              bostäder och Huddinge kommun.
            </p>
            <Ingar />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
