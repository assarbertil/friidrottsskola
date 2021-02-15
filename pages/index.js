import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";

import Container from "../components/Container";

import Hero from "../components/Hero";
import MainText from "../components/MainText";
import LogoCloud from "../components/LogoCloud";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>HAIS Friidrottsskola</title>
      </Head>
      <Container>
        <Hero />
        <main>
          <MainText>
            <h2>Vill du vara med på sommarens roligaste äventyr?</h2>
            <p>
              Huddinge AIS arrangerar 2021 vår populära friidrottsskola under
              fem veckor av sommarlovet. Friidrottsskolan 2020 var en stor succé
              med flera hundra deltagare både på Visättra och Källbrink.
              Sommaren 2021 öppnar vi även friidrottsskolan i Vårby!
            </p>
            <p>
              Vi välkomnar alla barn födda 2008-2015 till att delta på vår
              friidrottsskola där ni tillsammans med våra duktiga ledare kommer
              få en oförglömlig upplevelse. Våra utbildade ledare med
              friidrottsbakgrund utlovar bred kunskap i alla friidrottsgrenar
              men också engagemang och fokus på att alla ska ha en så rolig
              vecka som möjligt.
            </p>
            <p>
              För att läsa mer om våra tre olika friidrottsskolor kan ni klicka
              på den plats ni är intresserad av nedan för mer information!
            </p>
          </MainText>

          <div className="flex flex-col justify-center mt-20 text-xl md:space-x-12 md:flex-row">
            <Link href="/sv/kallbrink">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Källbrink
              </a>
            </Link>
            <Link href="/sv/visattra">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Visättra
              </a>
            </Link>
            <Link href="/sv/varby">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Vårby
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-center mt-20 text-xl md:space-x-12 md:flex-row">
            <Link href="/sv/jobba">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center bg-green-600 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
                Jobba på lägret
              </a>
            </Link>
          </div>

          <div className="w-full pt-8 pb-24 ">
            <div className="text-center ">
              <p className="mb-2 text-lg">
                <a
                  href="https://www.facebook.com/huddingefriidrottsskola/"
                  target="_blank"
                  className="">
                  Gilla oss på facebook <br />
                  <img
                    src="logos/FB-f-Logo__blue_50.png"
                    alt="FB-logga"
                    width={50}
                    className="mx-auto"
                  />
                </a>
              </p>
            </div>
          </div>
          <LogoCloud />
        </main>
      </Container>
    </Layout>
  );
}
