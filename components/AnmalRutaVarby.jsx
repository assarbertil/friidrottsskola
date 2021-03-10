export default function AnmalRutaVarby(props) {
  return (
    <>
      {props.en ? (
        <div id="anmal" className="shadow-xl bg-semitransparent rounded-xl">
          <div className="p-1 m-2 sm:p-8 sm:m-16">
            <h3 className="text-center">You can sign up in two ways</h3>
            <ol className="mx-6 my-0 list-decimal">
              <li>
                By filling in the sign-up paper your child has received at
                school and hand it in to your mentor.
              </li>
              <li>
                By sending an email to&nbsp;
                <a href="mailto:friidrottsskolan@huddingeais.se">
                  friidrottsskolan@huddingeais.se{" "}
                </a>
                and write:
              </li>
              <ul className="ml-8 list-disc ">
                <li>First and last name of your child</li>
                <li>Social security number of your child</li>
                <li>Address, postcode and city</li>
                <li>If you live in Huge fastigheter</li>
                <li>Phone number to at least 1 parent or guardian </li>
                <li>Email address to at least 1 parent or guardian</li>
                <li>If your child has any allergies or special diet</li>
                <li>
                  If your child has any special needs, we need to know about{" "}
                </li>
                <li>
                  Which week you want to attend (26, 27 and 32 available, you
                  can choose 1-3 weeks)
                </li>
              </ul>
            </ol>
          </div>
        </div>
      ) : (
        <div id="anmal" className="shadow-xl bg-semitransparent rounded-xl">
          <div className="p-1 m-2 sm:p-8 sm:m-16">
            <h3 className="text-center">Anmälan kan göras på två sätt</h3>
            <ol className="mx-6 my-0 list-decimal">
              <li>
                Genom att fylla i och lämna in den anmälningslapp barnet fått i
                skolan till sin mentor.
              </li>
              <li>
                Genom att skicka ett mail till 
                <a
                  className="block text-blue-200 underline"
                  href="mailto:friidrottsskolan@huddingeais.se">
                  friidrottsskolan@huddingeais.se{" "}
                </a>
                 och skriva:
              </li>
              <ul className="ml-8 list-disc ">
                <li>
                  För- och efternamn på barnet som ska gå på friidrottsskolan
                </li>
                <li>Personnummer på barnet</li>
                <li>Adress, postnummer och ort</li>
                <li>Om ni bor i Huge fastigheter</li>
                <li>
                  Telefonnummer till minst 1 förälder eller vårdnadshavare
                </li>
                <li>Mailadress till minst 1 förälder eller vårdnadshavare</li>
                <li>
                  Om barnet får vara med på foton på vår hemsida och instagram
                </li>
                <li>Om barnet behöver specialkost</li>
                <li>
                  Om barnet har några speciella behov vi ska ta hänsyn till
                </li>
                <li>
                  Vilka veckor barnet ska gå (26, 27 och 32 finns, man kan välja
                  1-3st)
                </li>
              </ul>
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
