export default function Ingar(props) {
  return (
    <>
      {props.en ? (
        <>
          <h2>Every day at Friidrottsskolan the participants get:</h2>
          <ul className="ml-4 list-disc">
            <li style={{ margin: 0 }}>
              Hot lunch and snacks in the morning and afternoon.
            </li>
          </ul>
          <h2>The participants also get:</h2>
          <ul className="ml-4 list-disc">
            <li style={{ margin: 0 }}>
              Friidrottsskola T-shirt, water bottle, gym bag
            </li>
            <li style={{ margin: 0 }}>Medal and diploma</li>
            <li style={{ margin: 0 }}>
              Free starting place in the Huddingeloppet
            </li>
          </ul>
        </>
      ) : (
        <>
          <h2>I friidrottsskolan ingår:</h2>
          <ul className="ml-4 list-disc">
            <li style={{ margin: 0 }}>
              Lunch och ett mellanmål på förmiddag och ett på eftermiddag.
            </li>
            <li style={{ margin: 0 }}>Vattenflaska, T-shirt, gympapåse</li>
            <li style={{ margin: 0 }}>Medalj och diplom till alla deltagare</li>
            <li style={{ margin: 0 }}>Gratis startplats i Huddingeloppet</li>
          </ul>
        </>
      )}
    </>
  );
}
