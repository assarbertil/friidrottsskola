import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";

import Container from "../../components/Container";

export default function priser() {
  return (
    <Layout en={false}>
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
                  <td style={{ padding: 0 }}>Vecka 25 (mån-tor): </td>
                  <td style={{ padding: 0 }}>1245 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 26 (mån-fre):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 27 (mån-fre):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 31 (mån-fre):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 32 (mån-fre):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
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
              <span className="text-red-600">25, 26 och 32</span> och som boende
              betalar du endast:
            </h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 25: </td>
                  <td style={{ padding: 0 }}>550 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 26:  </td>
                  <td style={{ padding: 0 }}> 685 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 32:  </td>
                  <td style={{ padding: 0 }}>685 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Barnpassning:  </td>
                  <td style={{ padding: 0 }}>350 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />

            <h2>Visättra</h2>
            <p>Alla veckor (25, 26 och 32): 0kr</p>
            <p>
              Tack vare Huddinge kommun och vår generösa samarbetspartner Huge
              kan vi erbjuda friidrottsskolan gratis för alla barn och ungdomar
              som bor i Visättra och Flemingsberg.
            </p>
            <p>
              För att anmäla ett barn{" "}
              <span className="text-red-600"> INTE</span> bor i Visättra
              kontaktar ni oss på 
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
            <p>
              Ordinarie priser för dig som inte bor i Huge-fastighet och/eller
              Visättra/Flemingsberg:
            </p>

            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 25 (mån-fre):</td>
                  <td style={{ padding: 0 }}>900 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 26 (mån-fre):</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 32 (mån-fre):</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />
            <h2>Vårby</h2>
            <p>Alla veckor (26, 27 och 32): 0kr</p>
            <p>
              Tack vare Huddinge kommun och vår generösa samarbetspartner Huge
              kan vi erbjuda friidrottsskolan gratis för alla barn och ungdomar
              som bor i Vårby.
            </p>
            <p>
              För att anmäla ett barn som
              <span className="text-red-600"> INTE</span>
               bor i Vårby kontaktar ni oss på 
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
                  <td style={{ padding: 0 }}>Vecka 26 (mån-fre):</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 27 (mån-fre):</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Vecka 32 (mån-fre):</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />

            <Ingar />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
