export default function LogoCloud() {
  const styles = {};

  return (
    <div className={styles.container}>
      <div className="py-6 bg-gray-200 parent">
        <a href="https://www.svenskfast.se/" className="div1">
          <img
            src="/logos/svensk-fastighetsformedling_logo.svg"
            alt="Svensk fastighets förmdeling"
            class="cloud-logo"
          />
        </a>
        <a href="https://www.huddingecentrum.se/" className="div2">
          <img
            src="/logos/huddinge.png"
            alt="Huddinge centrum"
            className="cloud-logo"
          />
        </a>
        <a href="https://www.huge.se/" class="div3">
          <img src="/logos/huge.svg" alt="Huge" className="cloud-logo" />
        </a>
        <a href="https://www.lannasport.se/" className="div4">
          <img
            src="/logos/LannaSport-Logo.svg"
            alt="Länna Sport"
            className="cloud-logo"
          />
        </a>
        <a href="https://www.svenskakyrkan.se/" className="div5">
          <img
            src="/logos/svenska kyrkan.svg"
            alt="Svenska kyrkan"
            className="cloud-logo"
          />
        </a>
      </div>
    </div>
  );
}
