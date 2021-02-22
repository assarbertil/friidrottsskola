import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";

import Title from "../../components/Title";
import MainText from "../../components/MainText";
import Container from "../../components/Container";

export default function tider() {
  return (
    <Layout en={true}>
      <Head>
        <title>Schedule</title>
      </Head>
      <Container>
        <Title title="Schedule" />
        <main>
          <MainText>
            <h3>Källbrink</h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 25</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Thursday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:30-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 26</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:30-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 27</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:30-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 31</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:30-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 32</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:30-15:00
                  </td>
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
              to leave your child before kl.09:30. 
            </p>
            <p>Late sign up for childcare is subject to availability and costs 450kr.</p>
            <Link href="/en/pricing/">
              <a className="block text-blue-200 underline" >See pricing for childcare here.</a>
            </Link>
            <hr className="border-b-2 border-white" />

            <h3>Visättra</h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 25</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Thursday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 26</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 32</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="border-b-2 border-white" />

            <h3>Vårby</h3>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 26</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 27</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>Week 32</td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    Monday- Friday
                  </td>
                  <td style={{ paddingTop: 0, paddingBottom: 0 }}>
                    09:00-15:00
                  </td>
                </tr>
              </tbody>
            </table>
          </MainText>
        </main>
      </Container>
    </Layout>
  );
}
