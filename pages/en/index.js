import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";

import Container from "../../components/Container";

import Hero from "../../components/Hero";
import MainText from "../../components/MainText";
import LogoCloud from "../../components/LogoCloud";

export default function Index() {
  return (
    <Layout en={true}>
      <Head>
        <title>HAIS Friidrottsskola</title>
      </Head>
      <Container>
        <Hero />
        <main>
          <MainText>
            <h2 className="text-center">
              Do you want to take part in this summer's most fun adventure?
            </h2>
            <p>
              Huddinge AIS is arranging our popular Friidrottsskola in 2021 for
              five weeks of the summer holidays. Friidrottsskolan 2020 was a
              great success with several hundred participants at both Visättra
              and Källbrink. In the summer of 2021, we will also open
              Friidrottsskolan in Vårby!
            </p>
            <p>
              We welcome all children born in 2008-2015 to participate in our
              Friidrottsskola where you, together with our talented leaders,
              will have an unforgettable experience. Our trained leaders with a
              track and field background promise broad knowledge in all sports
              but also commitment and focus on making everyone have as fun a
              week as possible.
            </p>
            <p>
              {/*               More info in English will be presented here soon, but for more
              information you can contact our camp manager Emelie at
              <a
                className="block text-blue-200 underline"
                href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a> */}
              To read more about our three different Friidrottsskolor, you can
              click on the camp you are interested in below for more
              information!
            </p>
          </MainText>

          <div className="flex flex-col justify-center mt-20 text-xl md:space-x-12 md:flex-row">
            <Link href="/en/kallbrink">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Källbrink
              </a>
            </Link>
            <Link href="/en/visattra">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Visättra
              </a>
            </Link>
            <Link href="/en/varby">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center text-gray-900 bg-yellow-400 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-yellow-500">
                Vårby
              </a>
            </Link>
          </div>

          <div className="flex flex-col justify-center mt-20 text-xl md:space-x-12 md:flex-row">
            <Link href="/en/work">
              <a className="flex-none w-full px-10 py-4 mb-4 text-center bg-green-600 rounded-lg shadow-lg md:w-64 md:flex-none hover:bg-green-700 text-gray-50">
                Work with us
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
                  Like us on facebook <br />
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
