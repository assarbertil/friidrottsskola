import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function om() {
  return (
    <Layout en={false}>
      <Head>
        <title>Om lägret</title>
      </Head>
      <Container>
        <Title title="Om lägret" />
        <main>
          <MainText>
            <h2 style={{ marginBottom: 0 }}>HAIS friidrottsskola</h2>
            <h3>Ungdomar födda 2008-2015</h3>
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
            <h2 style={{ marginBottom: 0 }}>Friidrottsveckor</h2>
            <h3>Ungdomar födda 2008-2010</h3>
            <p>
              Under samtliga veckor, 25, 26, 27, 31 och 32, kommer vi i år att
              erbjuda ungdomar som tränar friidrott i HAIS (eller annan
              friidrottsförening) och är födda 2008-2010 en möjlighet att anmäla
              sig till ett nytt koncept som vi kallar HAIS Friidrottsvecka.
              Priset, samt allt som ingår, förblir detsamma men dagsupplägget
              kommer mer att likna ett träningsläger där vi fokuserar på
              friidrottens grenar på en djupare, och mer individuell, nivå.
            </p>
            <p>
              Deltagande i detta tillägg är INTE resultat – eller
              prestationsbaserat. Våra ledare är där för att hjälpa varje
              individ att utvecklas, oavsett prestationsnivå.
            </p>
            <h3>Anmälan till HAIS friidrottsvecka </h3>
            <p>
              För att anmäla sig till HAIS friidrottsveckor gör du en anmälan till 
              den "vanliga friidrottsskolan" via hemsidan. Några veckor innan start 
              kontaktar vi alla anmälda medlemmar födda år 2008–2010 med en förfrågan 
              om man önskar gå vanliga upplägget eller "HAIS Friidrottsvecka". 
            </p>
            <h2 style={{ marginBottom: 0 }}>Covid-19</h2>
            <p style={{ marginTop: 0 }}>
              Sommaren närmar sig och för många blir den på många sätt
              annorlunda i år igen. Vi på Huddinge AIS vill att en sak ska vara
              sig lik denna sommar och det är möjligheten att gå på vår
              uppskattade friidrottsskola.
            </p>
            <p style={{ marginTop: 0 }}>
              {" "}
              Rekommendationer och riktlinjer från bland annat
              Folkhälsomyndigheten är självklart vår högsta prioritet och vi som
              förening vill också fortsätta att uppmuntra till rörelseglädje i
              en tid då detta behövs mer än någonsin. Vi är optimistiska inför
              att kunna erbjuda friidrottsskolan och vi kommer att vidta de
              åtgärder som krävs för att kunna genomföra verksamheten på ett
              säkert sätt. Vi kommer anpassa och göra vårt bästa för att alla
              friidrottssugna ungdomar ska få en oförglömlig sommar med oss på
              Huddinge AIS friidrottsskola.
            </p>
            <p style={{ marginTop: 0 }}>
              Några av förra årets lyckade anpassningar:
              <ul
                className="ml-4 list-disc"
                style={{ marginTop: 0, marginLeft: 20 }}>
                <li style={{ margin: 0 }}>
                  Mindre grupper – Det blev större gemenskap i grupperna samt
                  gav mer tid för ledarna att lära känna gruppen lite extra. Det
                  möjliggjorde viss anpassning i aktiviteter under dagarna
                  vilket i sin tur gjorde så att gruppen kunde ha en roligare
                  vecka!
                </li>
                <li style={{ margin: 0 }}>
                  Rutiner – För att undvika köer hade grupperna i den mån som
                  gick fasta mat, vatten och toa pauser. Det minskade onödigt
                  spring, alla kunde vara mer delaktiga och gav mer tid för
                  annat roligt!
                </li>
              </ul>
            </p>

            <p>
              Frågor tas gärna emot på 
              <a
                className="block text-blue-200 underline"
                href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se{" "}
              </a>
            </p>

            <h2>Exempel på hur en dag kan se ut:</h2>
            <h4>Morgon:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Samling 09.00 med upprop och avprickning
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Friidrott – höjdhopp eller längdhopp
              </li>
            </ul>
            <h4>Förmiddag:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Mellanmål</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Friidrott – höjdhopp eller längdhopp
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Lunch</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Rast – fri lek ca 30minuter - 1 timme
              </li>
            </ul>
            <h4>Eftermiddag:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Lek tillsammans med flera grupper, tex leken ”Flaggan”
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Mellanmål</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Stafett med alla barn tillsammans
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Avslutning, dags att gå hem
              </li>
            </ul>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
