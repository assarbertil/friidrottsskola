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
              Friidrottsskolan is a day camp for children and youths born in
              2007-2015. During weeks 25, 26 and 33 this summer, the children
              get to try out the different branches of track and field, such as
              long jump, high jump, 60m and shot put.
            </p>
            <p>
              Huddinge AIS Friidrottsskola in Visättra is free for all children
              living in Visättra and Flemingsberg.This has been made possible
              with great support from Huge bostäder and Huddinge Kommun.
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
