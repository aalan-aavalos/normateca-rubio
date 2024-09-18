const navbarTemplate = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Normateca digital</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"
            >Aspectos eticos</a
          >
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Normativas
          </a>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="/content/pages/rules.html#data-protection"
                >Ley general de protección de datos personales</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="/content/pages/rules.html#industrial-property"
                >Ley de propiedad industrial</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="/content/pages/rules.html#copyright"
                >Ley federal de derechos de autor</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a
                class="dropdown-item"
                href="/content/pages/rules.html#criminal-code"
                >Codigo penal federal</a
              >
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="/content/pages/standards.html"
            >Estandares</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

document.getElementById("navbar-placeholder").innerHTML = navbarTemplate;
