import Layout from "../../components/layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";

import Container from "../../components/Container";

export default function priser() {
  return (
    <Layout>
      <Head>
        <title>Priser</title>
      </Head>
      <Container>
        <Title title="Priser" />
        <main>
          <MainText>
            <h2>Källbrink</h2>
            <table>
              <tbody>
                <tr>
                  <td>Vecka 25 (mån-tor): </td>
                  <td>1245 kr</td>
                </tr>
                <tr>
                  <td>Vecka 26 (mån-fre):  </td>
                  <td>1445 kr</td>
                </tr>
                <tr>
                  <td>Vecka 27 (mån-fre):  </td>
                  <td>1445 kr</td>
                </tr>
                <tr>
                  <td>Vecka 32 (mån-fre):  </td>
                  <td>1445 kr</td>
                </tr>
                <tr>
                  <td>Vecka 33 (mån-fre):  </td>
                  <td>1445 kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Tillval</h3>
            <p>
              Barnpassning 350 kr (Begränsat antal!) (Lämna/hämta någon gång
              mellan kl. 08.00-09.30 + 15.00-16.00)
            </p>
            <p>
              OBS: Om barnpassning INTE görs som tillval får barnet inte lämnas
              tidigare än i anslutning till utsatt starttid 09.30. Efteranmälan
              kan göras i mån av plats och kostar då 450kr.
            </p>
            <h3>
              Huge Bostäder erbjuder sina hyresgäster en generös rabatt för
              veckorna&nbsp;
              <span className="text-red-600">25, 26 och 33</span> och som boende
              betalar du endast:
            </h3>
            <table>
              <tbody>
                <tr>
                  <td>Vecka 25: </td>
                  <td>550 kr</td>
                </tr>
                <tr>
                  <td>Vecka 26:  </td>
                  <td>685 kr</td>
                </tr>
                <tr>
                  <td>Vecka 33:  </td>
                  <td>685 kr</td>
                </tr>
                <tr>
                  <td>Barnpassning:  </td>
                  <td>350 kr</td>
                </tr>
              </tbody>
            </table>
            <h2>Visättra</h2>
            <p>Alla veckor (25, 26 och 33): 0kr</p>
            <p>
              Tack vare Huddinge kommun och vår generösa samarbetspartner Huge
              kan vi erbjuda friidrottsskolan gratis för alla barn och ungdomar
              som bor i Visättra och Flemingsberg.
            </p>
            <p>
              För att anmäla ett barn som INTE bor i Visättra kontaktar ni oss
              på 
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
            <h2>Vårby</h2>
            <p>Alla veckor (25, 26 och 33): 0kr</p>
            <p>
              Tack vare Huddinge kommun och vår generösa samarbetspartner Huge
              kan vi erbjuda friidrottsskolan gratis för alla barn och ungdomar
              som bor i Vårby.
            </p>
            <p>
              För att anmäla ett barn som INTE bor i Vårby kontaktar ni oss på 
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
            <p>
              Ordinarie priser för dig som inte bor i Huge-fastighet och/eller
              Vårby:
            </p>

            <table>
              <tbody>
                <tr>
                  <td>Vecka 26 (mån-fre):</td>
                  <td>1045 kr</td>
                </tr>
                <tr>
                  <td>Vecka 27 (mån-fre):</td>
                  <td>1045 kr</td>
                </tr>
                <tr>
                  <td>Vecka 33 (mån-fre):</td>
                  <td>1045 kr</td>
                </tr>
              </tbody>
            </table>
            <Ingar />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
