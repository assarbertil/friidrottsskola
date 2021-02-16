import { useState } from "react";

import Layout from "../../components/Layout";
import Head from "next/head";
import Modal from "react-modal";

import Title from "../../components/Title";
import AnmalRutaVarby from "../../components/AnmalRutaVarby";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";
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

export default function Källbrink() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Layout nav="English">
      <Head>
        <title>Vårby</title>
      </Head>
      <Container>
        <Title title="Vårby" />
        <div className="flex flex-col my-6 text-xl md:space-x-12 md:flex-row">
          <a
            href="#anmal"
            className="flex-none w-full px-10 py-4 text-center bg-green-600 rounded-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
            Anmälan
          </a>
        </div>
        <main>
          <MainText>
            <p className="underline">Platsinformation kommer</p>
            <h2>HAIS friidrottsskola</h2>
            <h3>Ungdomar födda 2008-2015</h3>
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
            <AnmalRutaVarby />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
