export default function Avboka(props) {
  return (
    <>
      {props.en ? (
        <>
          <h2>Cancelling:</h2>
          <p>
            To cancel a booked week, send an email to&nbsp;
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se
              </a> . If the Friidrottsskola is canceled, the
             full fee will be refunded to all registered. In case of cancellation no later than 14
             days before start date, full refund except an
             administrative fee of SEK 195. If canceled no later than 3 days before
             start, 50% of the registration fee will be refunded in addition to one
             administrative fee of SEK 195. In case of cancellation due to illness 
             full fee will be refunded in addition to an administrative fee of SEK 195.
             Fee for booked childcare is non-refundable.
          </p>
          <p>
          If you book a week now and later want to change weeks, it's completely
             free of charge as long as the fee for the weeks is the same. If you change
             from week 25 to another week, an invoice of SEK 200 will come as
             other weeks cost SEK 200 more.
          </p>
        </>
      ) : (
        <>
          <h2>Avbokning:</h2>
          <p>
            För att avboka en lägervecka skickar man ett mail till&nbsp;
              <a href="mailto:friidrottsskolan@huddingeais.se">
                friidrottsskolan@huddingeais.se</a>. Om friidrottsskolan ställs in
            återbetalas full avgift till alla anmälda. Vid avbokning senast 14
            dagar innan start återbetalas full avgift förutom en
            administrationsavgift på 195kr. Vid avbokning senast 3 dagar innan
            start återbetalas 50% av anmälningsavgiften förutom en
            administrationsavgift på 195kr. Vid avbokning p.g.a. sjukdom
            återbetalas full avgift förutom en administrationsavgift på 195kr.
            Avgift för bokad barnpassning återbetalas ej.
          </p>
          <p>
            Om man bokar en vecka nu och därefter vill byta vecka är det helt
            kostnadsfritt så länge avgiften för veckorna är samma. Byter man
            från vecka 25 till en annan vecka kommer en faktura på 200kr då
            övriga veckor är 200kr dyrare.
          </p>
        </>
      )}
    </>
  );
}
