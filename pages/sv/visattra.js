import { useState } from "react";

import Layout from "../../components/Layout";
import Head from "next/head";
import Modal from "react-modal";

import Title from "../../components/Title";
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
    <Layout>
      <Head>
        <title>Visättra</title>
      </Head>
      <Container>
        <Title title="Visättra" />
        <div className="flex flex-col my-6 text-xl md:space-x-12 md:flex-row">
          <button
            onClick={openModal}
            className="flex-none w-full px-10 py-4 text-center bg-green-600 rounded-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
            Anmälan
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Anmälan"
          className="">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl" ref={_subtitle => (subtitle = _subtitle)}>
              Anmälan till Visättra
            </h2>
            <button className="underline" onClick={closeModal}>
              Stäng
            </button>
          </div>
          <h3>Anmälan kan göras på två sätt:</h3>
          <ol className="mx-6 my-0 list-decimal">
            <li>
              Genom att fylla i och lämna in den anmälningslapp barnet fått i
              skolan till sin mentor.
            </li>
            <li>
              Genom att skicka ett mail till friidrottsskolan@huddingeais.se och
              skriva:
            </li>
            <ul className="ml-8 list-disc ">
              <li>
                För- och efternamn på barnet som ska gå på friidrottsskolan
              </li>
              <li>Personnummer på barnet</li>
              <li>Adress, postnummer och ort</li>
              <li>Om ni bor i Huge fastigheter</li>
              <li>Telefonnummer till minst 1 förälder eller vårdnadshavare</li>
              <li>Mailadress till minst 1 förälder eller vårdnadshavare</li>
              <li>
                Om barnet får vara med på foton på vår hemsida och instagram
              </li>
              <li>Om barnet behöver specialkost</li>
              <li>Om barnet har några speciella behov vi ska ta hänsyn till</li>
              <li>
                Vilka veckor barnet ska gå (26, 27 och 33 finns, man kan välja
                1-3st)
              </li>
            </ul>
          </ol>
        </Modal>
        <main>
          <MainText>
            <a
              className="underline"
              href="https://goo.gl/maps/RaK7sns6wKvxuT4t7"
              target="_blank"
              rel="noopener noreferrer">
              Visättra sportcenter
            </a>
            <h2>HAIS friidrottsskola</h2>
            <h3>Ungdomar födda 2008-2015</h3>
            <p>
              Friidrottsskolan är ett läger på dagtid för barn och ungdomar
              födda år 2007-2015. Under veckorna 25, 26 och 33 i sommar får
              barnen prova på friidrottens olika grenar, till exempel längdhopp,
              höjdhopp, 60m och kulstötning.
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
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
