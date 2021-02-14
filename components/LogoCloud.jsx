export default function LogoCloud() {
  const styles = {};

  return (
    <div className={styles.container}>
      <div class="parent bg-gray-200 py-6">
        <a href="https://www.svenskfast.se/" class="div1">
          <img
            src="/logos/svensk-fastighetsformedling_logo.svg"
            alt="Svensk fastighets förmdeling"
            class="cloud-logo"
          />
        </a>
        <a href="https://www.huddingecentrum.se/" class="div2">
          <img
            src="/logos/huddinge.png"
            alt="Huddinge centrum"
            class="cloud-logo"
          />
        </a>
        <a href="https://www.huge.se/" class="div3">
          <img src="/logos/huge.svg" alt="Huge" class="cloud-logo" />
        </a>
        <a href="https://www.lannasport.se/" class="div4">
          <img
            src="/logos/LannaSport-Logo.svg"
            alt="Länna Sport"
            class="cloud-logo"
          />
        </a>
        <a href="https://www.svenskakyrkan.se/" class="div5">
          <img
            src="/logos/svenska kyrkan.svg"
            alt="Svenska kyrkan"
            class="cloud-logo"
          />
        </a>
      </div>
    </div>
  );
}
