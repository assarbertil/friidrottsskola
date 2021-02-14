import { useState } from "react";

import Layout from "../../components/layout";
import Head from "next/head";
import Modal from "react-modal";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";
import Anmal from "../../components/Anmal";
import Container from "../../components/Container";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
            Open Modal
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Anmälan"
          className="">
          <div className="flex justify-between mb-4">
            <h2
              className="mr-24 text-lg"
              ref={_subtitle => (subtitle = _subtitle)}>
              Anmälan till Visättra
            </h2>
            <button className="underline" onClick={closeModal}>
              Stäng
            </button>
          </div>
          <h3>Anmälan kan göras på två sätt</h3>
          <ol className="my-0 list-decimal">
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
            <h3>HAIS friidrottsskola 2007-2015</h3>
            <p>
              Friidrottsskolan är ett läger på dagtid för barn och ungdommar
              födda år 2007-2015. Under veckorna 25, 26 och 33 i sommar får
              barnen prova på friidrottens olika grenar, till exempel längdhopp,
              höjdhopp, 60m och kulstötning.
            </p>
            <p>
              Huddinge AIS Friidrottsskola i Visättra är gratis för alla barn
              som bor i Visättra och Flemingsberg. Detta har gjorts möjligt med
              ett stort stöd från Huge bostäder och Huddinge kommun.
            </p>

            <Ingar />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
