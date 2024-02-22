{{!-- Navbar con Bootstrap --}}

<header class="container-fluid navContainer">
  <nav class="container navbar navbar-expand-md justify-content-around nav">
    <a class="navbar-brand" href="/products">
      <img class="logo" src="/img/logo.png" alt="Logo Isla de marea, guías para Path of Exile" width="224">
    </a>

    <button class="navbar-toggler hamburguerContainer" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon hamburguer"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav menu text-center">

        <li class="nav-item">
          <a class="nav-link link" href="/products">Productos</a>
        </li>

        <li class="nav-item">
          <a class="nav-link link" href="/chat">Chat</a>
        </li>

        <li class="nav-item">
          <a class="nav-link link" href="/cart"><i class="bi bi-cart"></i></a>
        </li>

        <li class="nav-item">
          <a class="nav-link link" href="/logout"><i class="bi bi-box-arrow-right"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>