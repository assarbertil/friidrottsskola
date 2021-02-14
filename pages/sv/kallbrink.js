import Layout from "../../components/layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Anmal from "../../components/Anmal";
import Container from "../../components/Container";

export default function Kallbrink() {
  return (
    <Layout>
      <Head>
        <title>Källbrink</title>
      </Head>
      <Container>
        <Title title="Källbrink" />
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
              Anmälan till Källbrink
            </h2>
            <button className="underline" onClick={closeModal}>
              Stäng
            </button>
          </div>
          <h3>Kommer snart på Huddinge AIS hemsida</h3>
        </Modal>
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
              till tillval ”barnpassning” se info nedan.
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

            <h2>Friidrottsveckor </h2>
            <h3>Ungdommar födda 2008-2010</h3>
            <p>
              Under samtliga veckor, 25, 26, 27, 32 och 33, kommer vi i år att
              erbjuda ungdomar som tränar friidrott i HAIS (eller annan
              friidrottsförening) och är födda 2008-2010 en möjlighet att anmäla
              sig till ett nytt koncept som vi kallar HAIS Friidrottsvecka.
              Priset, samt allt som ingår, förblir detsamma men dagsupplägget
              kommer mer att likna ett träningsläger där vi fokuserar på
              friidrottens grenar på en djupare, och mer individuell, nivå.
            </p>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
