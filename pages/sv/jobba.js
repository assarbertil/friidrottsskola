import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function jobba() {
  return (
    <Layout lang="English">
      <Head>
        <title>Jobba på lägret</title>
      </Head>
      <Container>
        <Title title="Jobba på lägret" />
        <main>
          <MainText>
            <h2>
              Vill du jobba på sommarens mest lärorika och roliga sommarjobb?
            </h2>
            <a
              target="_blank"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=6SZn45RNd0q-YdRZf0rNAtrClEBS15hMgjv-2iCSrWdUODQ4UDQ2MDVBWTI3TlRTM1gwTkI4NFQ4OC4u"
              className="flex-none w-full px-10 py-4 text-center bg-green-600 rounded-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
              Ansök till ledare
            </a>
            <p>
              På Huddinge AIS friidrottsskola får du som ledare utrymme för att
              göra din jobbupplevelse till den bästa. Under dina jobbveckor
              kommer du ha möjlighet att växa som person och göra skillnad. Din
              insats påverkar de barn du jobbar med och kommer spela en stor
              roll i deras utveckling. Genom ett starkt och aktivt ledarskap ska
              du använda dina kunskaper för att göra allt du kan så att barnen
              på friidrottsskolan får sitt livsäventyr.
            </p>
            <h2>Att jobba som ledare på friidrottsskolan:</h2>
            <p>
              Som ledare kommer du inför friidrottsskolan gå på flera möten och
              utbildningstillfällen för att utveckla ditt ledarskap. Du kommer
              bland annat att delta på en SISU-utbildning och ta del av dina
              kollegors jobberfarenheter. Alla utbildningar är obligatoriska och
              ett krav för att få jobba på friidrottsskolan. Preliminära
              antagnings- och lönebesked kommer under vecka 14. Du kommer sedan
              få ett avtal med vad som förväntas av dig som ledare på
              friidrottsskolan. Vad som förväntas av dig som ledare går att läsa
              nedan. Det slutgiltiga antagningsbeskedet får du senare då vi inte
              vet exakt hur många ledare som behövs. Det kan till exempel vara
              så att du får jobba på någon annan av våra tre friidrottsskolor än
              den du tilldelades vecka 14. Har du några frågor om jobbet på
              friidrottsskolan hör gärna av dig via knappen ovan!
            </p>

            <h2> Hur ansöker jag?</h2>
            <p>
              Du kan trycka på knappen ovan för att komma till anmälningsformuläret. För att anmäla sig ska man
              fylla i allt från tidigare jobberfarenheter till önskemål och varför just du passar som ledare på
              Huddinge AIS friidrottsskola. Formuläret består av totalt 34 frågor du ska svara utförligt på.
            </p>
            <a
              className="block mt-4 text-blue-200 underline"
              href="/AvtalLedare.pdf">
              Avtal för ledare
            </a>
            <a
              className="block mt-4 text-blue-200 underline"
              href="mailto:friidrottsskolan@huddingeais.se">
              friidrottsskolan@huddingeais.se
            </a>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
