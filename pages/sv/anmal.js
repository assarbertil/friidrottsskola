import Layout from "../../components/layout";
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
            <ol className="list-decimal">
              <li>
                Genom att fylla i och lämna in den anmälningslapp barnet fått i
                skolan till sin mentor.
              </li>
              <li>
                Genom att skicka ett mail
                till friidrottsskolan@huddingeais.se och skriva:
              </li>
              <ul className="ml-8 list-disc">
                <li>
                  För- och efternamn på barnet som ska gå på friidrottsskolan
                </li>
                <li>Personnummer på barnet</li>
                <li>Adress, postnummer och ort</li>
                <li>Om ni bor i Huge fastigheter</li>
                <li>
                  Telefonnummer till minst 1 förälder eller vårdnadshavare
                </li>
                <li>Mailadress till minst 1 förälder eller vårdnadshavare</li>
                <li>
                  Om barnet får vara med på foton på vår hemsida och instagram
                </li>
                <li>Om barnet behöver specialkost</li>
                <li>
                  Om barnet har några speciella behov vi ska ta hänsyn till
                </li>
                <li>
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
