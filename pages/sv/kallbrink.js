import { useState } from "react";

import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Modal from "react-modal";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#111",
    color: "#fff",
    padding: "2rem",
  },
};

export default function Kallbrink() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout>
      <Head>
        <title>Källbrink</title>
      </Head>
      <Container>
        <Title title="Källbrink" />
        <div className="flex flex-col my-6 text-xl md:space-x-12 md:flex-row">
          <a
            href="https://sportadmin.se/book/?F=d123110b-27e0-4bbf-bc51-bcdbb12f91ab"
            className="flex-none w-full px-10 py-4 text-center bg-green-600 rounded-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
            Anmälan
          </a>
        </div>
        <main>
          <MainText>
            <a
              className="underline"
              href="https://goo.gl/maps/hcPkYke9D4NJjgnH7"
              target="_blank"
              rel="noopener noreferrer">
              Källbrinks IP
            </a>
            <h2>HAIS friidrottsskola</h2>
            <h3>Ungdomar födda 2008-2015</h3>
            <p>
              Friidrottsskolan på Källbrink arrangeras vecka 25, 26, 27, 32 och
              33, dagarna är mellan klockan 09.30-15.00. Det finns möjlighet
              till tillval ”barnpassning” se info på{" "}
              <Link href="/sv/priser">
                <a className="text-blue-900 underline">Priser</a>
              </Link>
              .
            </p>
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

            <h2>Friidrottsveckor</h2>
            <h3>Ungdomar födda 2008-2010</h3>
            <p>
              Under samtliga veckor, 25, 26, 27, 32 och 33, kommer vi i år att
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
            <p>Frågor tas gärna emot på friidrottsskolan@huddingeais.se</p>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
