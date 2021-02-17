import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function om() {
  return (
    <Layout en={true}>
      <Head>
        <title>About the camp</title>
      </Head>
      <Container>
        <Title title="About the camp" />
        <main>
          <MainText>
            <h2 style={{ marginBottom: 0 }}>HAIS friidrottsskola</h2>
            <h3>Kids born 2008-2015</h3>
            <p>
              Friidrottsskolan is a day camp for children and youths born in
              2008-2015. During a week, the participants get a unique chance to
              try out the different branches of track en field under the
              guidance of our committed leaders. In addition to track and field,
              we will be on several forest adventures. We are also careful to
              make room for community and to create new friendships in the
              groups. The last day at Friidrottsskolan we will have various
              athletics-inspired competitions and challenges as well as medal
              and diploma distribution to all participants.
            </p>
            <h2 style={{ marginBottom: 0 }}>Friidrottsveckor</h2>
            <h3>Kids born 2008-2010</h3>
            <p>
              During all weeks, 25, 26, 27, 32 and 33, this year we will offer
              young people who train track and field in HAIS (or another
              athletics association) and are born in 2008-2010 an opportunity to
              sign up for a new concept that we call HAIS Friidrottsvecka at
              Källbrink. The price, as well as everything that is included,
              remains the same, but the daily schedule will be more like a
              training camp where we focus on the branches of track and field on
              a deeper, and more individual, level.Participation in this
              supplement is NOT performance or performance based. Our leaders
              are there to help each individual develop, regardless of
              achievement level.
            </p>
            <p>
              Deltagande i detta tillägg är INTE resultat – eller
              prestationsbaserat. Våra ledare är där för att hjälpa varje
              individ att utvecklas, oavsett prestationsnivå.
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
            <h3>More information – What do we do at friidrottsskolan?</h3>
            <p>
              The first day of the week, the leaders meet the children at
              Visättra Sportcenter. There they tell which group the child should
              be in and who is the leader of the group.
            </p>
            <h2>Example of one day at Friidrottsskolan:</h2>
            <h4>Morning:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Meeting 09:00 with appeal and check-off
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Athletics - high jump or long jump
              </li>
            </ul>
            <h4>Förmiddag:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Snack</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Athletics - high jump or long jump
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Lunch</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Rest - free play about 30 minutes - 1 hour
              </li>
            </ul>
            <h4>Afternoon:</h4>
            <ul>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Play together with several groups, such as the game "Catch the
                flag”
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>Snack</li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Relay with all children together
              </li>
              <li style={{ marginTop: 0, marginBottom: 0 }}>
                Closing, time to go home
              </li>
            </ul>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
