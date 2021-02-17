import { useState } from "react";

import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function Kallbrink() {
  return (
    <Layout en={true}>
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
            <h3>Kids born 2008-2015</h3>
            <p>
              Friidrottsskolan at Källbrink is arranged week 25, 26, 27, 32 and
              33, the days are between 09.30-15.00. There is optional
              "childcare" see info below.{" "}
              <Link href="/en/pricing">
                <a className="text-blue-200 underline">Priser</a>
              </Link>
              .
            </p>
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

            <h2>Friidrottsveckor</h2>
            <h3>Kids born 2008-2010</h3>
            <p>
              During all weeks, 25, 26, 27, 32 and 33, this year we will offer
              young people who train track and field in HAIS (or another
              athletics association) and are born in 2008-2010 an opportunity to
              sign up for a new concept that we call HAIS Athletics Week. The
              price, as well as everything that is included, remains the same,
              but the daily schedule will be more like a training camp where we
              focus on the branches of track and field on a deeper, and more
              individual, level.Participation in this supplement is NOT
              performance or performance based. Our leaders are there to help
              each individual develop, regardless of achievement level.
            </p>
            <p>
              Participation is not performance-based. Our leaders are there to
              help every person develop, no matter their skill level.
            </p>
            <p>
              Questions are welcome at
              <a
                className="block text-blue-200 underline"
                href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
