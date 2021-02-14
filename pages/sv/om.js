import Layout from "../../components/layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function om() {
  return (
    <Layout>
      <Head>
        <title>Om lägret</title>
      </Head>
      <Container>
        <Title title="Om lägret" />
        <main>
          <MainText>
            <h2>HAIS friidrottsskola 2008-2015</h2>
            <p>
              Friidrottsskolan är ett dagläger för barn och ungdomar födda år
              2008-2015. Under en vecka får deltagarna en unik chans att prova
              på friidrottens olika grenar under ledning av våra engagerade
              ledare. Utöver friidrotten kommer vi vara på flera skogsäventyr.
              Vi är också noga med att göra plats för gemenskap och att skapa
              nya vänskapsrelationer i grupperna. Sista dagen på
              friidrottsskolan fyller vi med olika friidrottsinspirerade
              tävlingar och utmaningar samt medalj- och diplomutdelning till
              alla deltagare.
            </p>
            <h2>HAIS friidrottsveckor 2008-2010</h2>
            <p>
              Under samtliga veckor, 25, 26, 27, 32 och 33, kommer vi i år att
              erbjuda ungdomar som tränar friidrott i HAIS (eller annan
              friidrottsförening) och är födda 2008-2010 en möjlighet att anmäla
              sig till ett nytt koncept som vi kallar HAIS Friidrottsvecka.
              Priset, samt allt som ingår, förblir detsamma men dagsupplägget
              kommer mer att likna ett träningsläger där vi fokuserar på
              friidrottens grenar på en djupare, och mer individuell, nivå.
            </p>
            <ul className="list-disc">
              <li>
                Deltagande i detta tillägg är INTE resultat – eller
                prestationsbaserat. Våra ledare är där för att hjälpa varje
                individ att utvecklas, oavsett prestationsnivå.
              </li>
              <li>Frågor tas gärna emot på friidrottsskolan@huddingeais.se</li>
            </ul>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
