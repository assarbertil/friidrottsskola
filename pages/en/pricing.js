import Layout from "../../components/Layout";
import Head from "next/head";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Ingar from "../../components/Ingar";

import Container from "../../components/Container";

export default function priser() {
  return (
    <Layout en={true}>
      <Head>
        <title>Pricing</title>
      </Head>
      <Container>
        <Title title="Pricing" />
        <main>
          <MainText>
            <h2>Källbrink</h2>
            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Week 25 (mon-thu): </td>
                  <td style={{ padding: 0 }}>1245 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 26 (mon-fri):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 27 (mon-fri):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 31 (mon-fri):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 32 (mon-fri):  </td>
                  <td style={{ padding: 0 }}>1445 kr</td>
                </tr>
              </tbody>
            </table>
            <h3>Options</h3>
            <p>
              Childcare 350 kr (Limited amount!) (Leave/ pick up your child at
              08.00-09.30 + 15.00-16.00)
            </p>
            <p>
              NOTE: If you don’t choose childcare as addition you aren't allowed
              to leave your child before kl.09:30. You can do a late sign up but
              then it costs 450kr.
            </p>
            <h3>
              Huge Bostäder offers a generous discount for their tenants week{" "}
              <span className="text-red-600">25, 26 och 32</span> for you who
              live in a Huge Bosäter you only pay:
            </h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Week 25: </td>
                  <td style={{ padding: 0 }}>550 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 26:  </td>
                  <td style={{ padding: 0 }}> 685 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 32:  </td>
                  <td style={{ padding: 0 }}>685 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Childcare:  </td>
                  <td style={{ padding: 0 }}>350 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />

            <h2>Visättra</h2>
            <p>All weeks (25, 26 och 32): 0kr</p>
            <p>
              Huddinge AIS Friidrottsskola in Visättra is free for all children
              living in Visättra/Flemingsberg. This has been made possible with
              great support from Huge bostäder and Huddinge kommun.
            </p>
            <p>
              To sign up a child who does
              <span className="text-red-600"> NOT</span> live in
              Visättra/Flemingsberg, contact us at
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
            <p>
              Regular prices for those who don't live in Huge bostäder and/or
              Visättra/Flemingsberg:
            </p>

            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Week 25:</td>
                  <td style={{ padding: 0 }}>900 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 26:</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 32:</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />
            <h2>Vårby</h2>
            <p>All weeks (26, 27 och 32): 0kr</p>
            <p>
              Huddinge AIS Friidrottsskola in Vårby is free for all children
              living in Vårby. This has been made possible with great support
              from Huge bostäder and Huddinge kommun.
            </p>
            <p>
              To sign up a child who does
              <span className="text-red-600"> NOT </span>
              live in Vårby, contact us at
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a>
            </p>
            <p>
              Regular prices for those who don't live in Huge bostäder and/or
              Vårby:
            </p>

            <table>
              <tbody>
                <tr>
                  <td style={{ padding: 0 }}>Week 26:</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 27:</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
                <tr>
                  <td style={{ padding: 0 }}>Week 32:</td>
                  <td style={{ padding: 0 }}>1045 kr</td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-black" />

            <Ingar en={true} />
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
