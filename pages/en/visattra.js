import { useState } from "react";

import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import AnmalRuta from "../../components/AnmalRuta";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";
import Container from "../../components/Container";

export default function Källbrink() {
  return (
    <Layout en={true}>
      <Head>
        <title>Visättra</title>
      </Head>
      <Container>
        <Title title="Visättra" />
        <div className="flex flex-col my-6 text-xl md:space-x-12 md:flex-row">
          <a
            href="#anmal"
            className="flex-none w-full px-10 py-4 text-center bg-green-600 rounded-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
            Sign up
          </a>
        </div>
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
            <h3>Kids born 2008-2015</h3>
            <p>
              Friidrottsskolan är ett läger på dagtid för barn och ungdomar
              födda år 2008-2015. Under veckorna 25, 26 och 33 i sommar får
              barnen prova på friidrottens olika grenar, till exempel längdhopp,
              höjdhopp, 60m och kulstötning.
            </p>
            <p>
              Huddinge AIS Friidrottsskola i Visättra är gratis för alla barn
              som bor i Visättra och Flemingsberg. Detta har gjorts möjligt med
              ett stort stöd från Huge bostäder och Huddinge kommun.
            </p>
            <Ingar en={true} />
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
            <AnmalRuta en={true} />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
