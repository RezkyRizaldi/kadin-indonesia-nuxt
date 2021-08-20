<template>
  <div>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand tag="span" id="navEmail">
        <b-icon-envelope-fill></b-icon-envelope-fill>
        kadin@kadinindonesia.or.id
      </b-navbar-brand>

      <b-navbar-brand to="/" class="mx-auto" id="navLogo">
        <img
          class="d-inline-block align-middle"
          src="https://placekitten.com/g/30/30"
          alt="Logo"
        />
        BootstrapVue
      </b-navbar-brand>

      <b-navbar-nav align="center" id="navSocials">
        <b-nav-item
          href="https://instagram.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <div class="h5 mb-0 icon_social">
            <b-icon-instagram></b-icon-instagram>
          </div>
        </b-nav-item>
        <b-nav-item
          href="https://twitter.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <div class="h5 mb-0 icon_social">
            <b-icon-twitter></b-icon-twitter>
          </div>
        </b-nav-item>
        <b-nav-item
          href="https://facebook.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <div class="h5 mb-0 icon_social">
            <b-icon-facebook></b-icon-facebook>
          </div>
        </b-nav-item>
        <b-nav-item
          href="https://github.com"
          target="_blank"
          rel="noopener norefferer"
        >
          <div class="h5 mb-0 icon_social">
            <b-icon-github></b-icon-github>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <b-navbar
      toggleable="lg"
      type="dark"
      id="navLinks"
      class="shadow bg_charcoal_blue"
    >
      <b-container fluid="lg" class="flex-wrap flex-lg-nowrap">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-lg-between" is-nav>
          <b-navbar-nav
            align="center"
            class="
              flex-row flex-wrap flex-md-nowrap flex-lg-wrap
              justify-content-md-center
            "
          >
            <b-nav-item to="/" class="col-6 col-md-auto mx-md-2 mx-lg-0" active
              >Beranda</b-nav-item
            >
            <b-nav-item-dropdown
              id="dropdown"
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              text="Tentang"
              lazy
            >
              <b-dropdown-item href="#">Tentang Kami</b-dropdown-item>
              <b-dropdown-item href="#">Sejarah</b-dropdown-item>
              <b-dropdown-item href="#">UU/AD/ART</b-dropdown-item>
              <b-dropdown-item href="#"
                >Peraturan dan Pedoman Organisasi</b-dropdown-item
              >
              <b-dropdown-item href="#"
                >Lambang, Mars, dan Hymne</b-dropdown-item
              >
              <b-dropdown-item href="#">Struktur Organisasi</b-dropdown-item>
              <b-dropdown-item href="#">Pengurus</b-dropdown-item>
              <b-dropdown-item href="#">Visi dan Misi</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Peristiwa</b-nav-item
            >
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Acara</b-nav-item
            >
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Sukarelawan</b-nav-item
            >
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Galeri</b-nav-item
            >
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Berita</b-nav-item
            >
            <b-nav-item href="#" class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Kontak</b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.stop.prevent="showAlert()">
              <b-input-group>
                <b-form-input
                  type="search"
                  autocomplete="off"
                  placeholder="Cari..."
                  class="border-0"
                ></b-form-input>
                <b-input-group-append>
                  <b-button id="btnSearch" type="submit" class="border-0">
                    <b-icon-search></b-icon-search>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style scoped>
#navEmail {
  font-size: 1rem;
}

#navLogo {
  font-size: 1.2rem;
}
.icon_social:hover {
  color: #0c0a83;
}

#navLinks {
  border-bottom: 0.35rem solid #0c0a83;
}

.col-md-auto {
  padding-left: 0px;
  padding-right: 0px;
}

#dropdown {
  color: hsla(0, 0%, 100%, 0.55);
  /* padding: 0.375rem 0.4rem; */
}

#dropdown.active {
  color: #fff;
}

#dropdownToggle::after {
  margin-left: 0.4em !important;
  vertical-align: 0.15em !important;
  transition: 0.3s ease;
}

#dropdownToggle[aria-expanded='true']::after {
  transform: rotate(180deg);
}

input[type='search'] {
  background-color: rgba(45, 55, 63, 0.5);
  color: #fff;
}

input[type='search']::placeholder {
  color: #fff;
}

input[type='search']:active,
input[type='search']:focus {
  outline: none;
  border: none;
  box-shadow: none;
}

input[type='search']:active::placeholder,
input[type='search']:focus::placeholder {
  color: #fff;
}

#btnSearch {
  background-color: rgba(45, 55, 63, 0.5);
}

/* Only at 768px */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
  #navLinks .navbar-nav {
    overflow-x: auto;
  }
}

/* Below 375px */
@media screen and (max-width: 375px) {
  #navLogo {
    font-size: 1rem;
  }
}

/* Below 320px */
@media screen and (max-width: 320px) {
  #navLogo {
    margin: 0 auto;
  }

  #navSocials {
    display: none;
  }
}
</style>

<script>
export default {
  methods: {
    showAlert: () => {
      alert('Hello, world!')
    },
  },
}
</script>
