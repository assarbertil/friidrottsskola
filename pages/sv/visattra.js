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
        <title>Visättra</title>
      </Head>
      <Container>
        <Title title="Visättra" />
        <Anmal />
        <main>
          <MainText>
            <a
              className="underline"
              href="https://goo.gl/maps/RaK7sns6wKvxuT4t7"
              target="_blank"
              rel="noopener noreferrer">
              Visättra sportcenter
            </a>
            <h3>HAIS friidrottsskola 2007-2015</h3>
            <p>
              Friidrottsskolan är ett läger på dagtid för barn och ungdomar
              födda år 2007-2015. Under veckorna 25, 26 och 33 i sommar får
              barnen prova på friidrottens olika grenar, till exempel längdhopp,
              höjdhopp, 60m och kulstötning.
            </p>
            <p>
              Huddinge AIS Friidrottsskola i Visättra är gratis för alla barn
              som bor i Visättra och Flemingsberg. Detta har gjorts möjligt med
              ett stort stöd från Huge bostäder och Huddinge kommun.
            </p>

            <Ingar />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
