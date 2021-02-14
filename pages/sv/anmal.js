import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function anmal() {
  return (
    <Layout>
      <Head>
        <title>Anmälan</title>
      </Head>
      <Container>
        <Title title="Anmälan" />
        <main>
          <MainText>
            <h3>Anmälan kan göras på två sätt</h3>
            <ol className="my-0 list-decimal">
              <li>
                Genom att fylla i och lämna in den anmälningslapp barnet fått i
                skolan till sin mentor.
              </li>
              <li style={{ margin: 0 }}>
                Genom att skicka ett mail
                till friidrottsskolan@huddingeais.se och skriva:
              </li>
              <ul className="ml-8 list-disc ">
                <li style={{ margin: 0 }}>
                  För- och efternamn på barnet som ska gå på friidrottsskolan
                </li>
                <li style={{ margin: 0 }}>Personnummer på barnet</li>
                <li style={{ margin: 0 }}>Adress, postnummer och ort</li>
                <li style={{ margin: 0 }}>Om ni bor i Huge fastigheter</li>
                <li style={{ margin: 0 }}>
                  Telefonnummer till minst 1 förälder eller vårdnadshavare
                </li>
                <li style={{ margin: 0 }}>
                  Mailadress till minst 1 förälder eller vårdnadshavare
                </li>
                <li style={{ margin: 0 }}>
                  Om barnet får vara med på foton på vår hemsida och instagram
                </li>
                <li style={{ margin: 0 }}>Om barnet behöver specialkost</li>
                <li style={{ margin: 0 }}>
                  Om barnet har några speciella behov vi ska ta hänsyn till
                </li>
                <li style={{ margin: 0 }}>
                  Vilka veckor barnet ska gå (26, 27 och 33 finns, man kan välja
                  1-3st)
                </li>
              </ul>
            </ol>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
