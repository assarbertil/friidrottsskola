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
              try out the different branches of track and field under the
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
              a deeper, and more individual, level. 
            </p>
            <p>
              Participation is not performance-based. Our leaders are there to
              help every person develop, no matter their skill level.
            </p>
            <h2 style={{ marginBottom: 0 }}>Covid-19</h2>
            <p style={{ marginTop: 0 }}>
              Summer is approaching and for many of us it will be different
              again. We at Huddinge AIS want to keep one thing the same; the
              possibility of participating in our appreciated friidrottsskola.
            </p>
            <p style={{ marginTop: 0 }}>
              {" "}
              Recommendations and guidlines from the public health authority
              (Folkhälsomyndigheten) is of course our highest priority and we as
              an organisation want to keep encouraging the joy of movement in a
              time it is needed the more than ever. We are optimistic to offer
              friidrottsskola and we will take the precautions necessary to
              offer it in a safe way. We are adapting the camp to the best of
              our abilities to be able to create an unforgettable summer for all
              excited participants with us at Huddinge AIS Friidrottsskola.
            </p>
            <p style={{ marginTop: 0 }}>
              Some of last year´s successful adjustments:
              <ul
                className="ml-4 list-disc"
                style={{ marginTop: 0, marginLeft: 20 }}>
                <li style={{ margin: 0 }}>
                  Smaller groups – The sense of community inside the groups grew
                  and gave the leaders more time to get to know the groups. That
                  allowed for more adaptation within activities during the days
                  which in turn made the groups have a more fun week.
                </li>
                <li style={{ margin: 0 }}>
                  Routines – To avoid line-ups, the groups hade set times for
                  food, water and toilet breaks. That decreased unnecessary time
                  wasted so everyone could be more involved and make more time
                  for fun.
                </li>
              </ul>
            </p>

            <p>
              Questions are welcome at
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
