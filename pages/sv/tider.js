import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function tider() {
  return (
    <Layout>
      <Head>
        <title>Tider</title>
      </Head>
      <Container>
        <Title title="Tider" />
        <main>
          <MainText>
            <h3>Källbrink</h3>
            <table>
              <tbody>
                <tr>
                  <td>Vecka 25</td>
                  <td>Måndag - Torsdag</td>
                  <td>09:30-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 25</td>
                  <td>Måndag - Fredag</td>
                  <td>09:30-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 27</td>
                  <td>Måndag - Fredag</td>
                  <td>09:30-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 32</td>
                  <td>Måndag - Fredag</td>
                  <td>09:30-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 33</td>
                  <td>Måndag - Fredag</td>
                  <td>09:30-15:00</td>
                </tr>
              </tbody>
            </table>
            <h3>Tillval</h3>
            <p>
              Barnpassning (Begränsat antal!) (Lämna/hämta någon gång mellan kl.
              08.00-09.30 + 15.00-16.00)
            </p>
            <p>
              OBS: Om barnpassning INTE görs som tillval får barnet inte lämnas
              tidigare än i anslutning till utsatt starttid 09.30.
            </p>
            <p>Efteranmälan kan göras i mån av plats och kostar då extra.</p>
            <Link href="/sv/priser">
              <a>Se priser för barnpassningen HÄR </a>
            </Link>
            <h3>Visättra</h3>
            <table>
              <tbody>
                <tr>
                  <td>Vecka 25</td>
                  <td>Måndag - Torsdag</td>
                  <td>09:00-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 25</td>
                  <td>Måndag - Fredag</td>
                  <td>09:00-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 33</td>
                  <td>Måndag - Fredag</td>
                  <td>09:00-15:00</td>
                </tr>
              </tbody>
            </table>
            <h3>Visättra</h3>
            <table>
              <tbody>
                <tr>
                  <td>Vecka 26</td>
                  <td>Måndag - Fredag</td>
                  <td>09:00-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 27</td>
                  <td>Måndag - Fredag</td>
                  <td>09:00-15:00</td>
                </tr>
                <tr>
                  <td>Vecka 33</td>
                  <td>Måndag - Fredag</td>
                  <td>09:00-15:00</td>
                </tr>
              </tbody>
            </table>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
