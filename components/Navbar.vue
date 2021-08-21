<template>
  <div>
    <b-navbar variant="faded" type="light" class="d-none d-lg-flex">
      <b-container>
        <b-navbar-brand to="/">
          <b-img-lazy
            src="~assets/images/kadin_indonesia_logo.png"
            alt="Logo Kadin"
            width="70"
            title="Kadin Indonesia"
          ></b-img-lazy>
        </b-navbar-brand>

        <b-navbar-nav align="center" class="flex-row mb-0">
          <b-nav-item
            href="https://instagram.com"
            target="_blank"
            class="ml-3"
            rel="noopener norefferer"
          >
            <div class="h5 mb-0 icon_social">
              <b-icon-instagram></b-icon-instagram>
            </div>
          </b-nav-item>
          <b-nav-item
            href="https://twitter.com"
            target="_blank"
            class="ml-3"
            rel="noopener norefferer"
          >
            <div class="h5 mb-0 icon_social">
              <b-icon-twitter></b-icon-twitter>
            </div>
          </b-nav-item>
          <b-nav-item
            href="https://facebook.com"
            target="_blank"
            class="ml-3"
            rel="noopener norefferer"
          >
            <div class="h5 mb-0 icon_social">
              <b-icon-facebook></b-icon-facebook>
            </div>
          </b-nav-item>
          <b-nav-item
            href="https://github.com"
            target="_blank"
            class="ml-3"
            rel="noopener norefferer"
          >
            <div class="h5 mb-0 icon_social">
              <b-icon-github></b-icon-github>
            </div>
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>

    <b-navbar
      toggleable="lg"
      type="dark"
      id="navLinks"
      class="shadow bg_charcoal_blue"
    >
      <b-container fluid="xl" class="flex-wrap flex-lg-nowrap">
        <b-navbar-brand to="/" class="p-0 font-weight-bold d-lg-none">
          <b-img-lazy
            src="~assets/images/kadin_indonesia_logo.png"
            alt="Logo Kadin"
            width="40"
            class="d-inline-block align-middle pr-1"
            title="Kadin Indonesia"
          ></b-img-lazy>
          KADIN Indonesia
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="justify-content-lg-between" is-nav>
          <b-navbar-nav
            class="
              flex-row flex-wrap flex-md-nowrap
              justify-content-md-center justify-content-lg-start
              py-3 py-lg-0
            "
          >
            <b-nav-item
              to="/"
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              active
              title="Beranda"
              >Beranda</b-nav-item
            >
            <b-nav-item
              href="#"
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              title="Berita"
              >Berita</b-nav-item
            >

            <li
              class="
                nav-item
                col-6 col-md-auto
                mx-md-2 mx-lg-0
                d-block d-lg-none
              "
            >
              <a
                class="nav-link dropdown-toggle"
                v-b-toggle
                href="#aboutCollapse"
                @click.prevent
                target="_self"
              >
                Tentang
              </a>
              <b-collapse id="aboutCollapse" is-nav>
                <b-navbar-nav id="aboutNav" class="p-2 rounded-lg">
                  <b-nav-item href="#" title="Tentang Kami"
                    >Tentang Kami</b-nav-item
                  >
                  <b-nav-item href="#" title="Sejarah">Sejarah</b-nav-item>
                  <b-nav-item href="#" title="UU/AD/ART">UU/AD/ART</b-nav-item>
                  <b-nav-item href="#" title="Peraturan dan Pedoman Organisasi"
                    >Peraturan dan Pedoman Organisasi</b-nav-item
                  >
                  <b-nav-item href="#" title="Lambang, Mars, dan Hymne"
                    >Lambang, Mars, dan Hymne</b-nav-item
                  >
                  <b-nav-item href="#" title="Struktur Organisasi"
                    >Struktur Organisasi</b-nav-item
                  >
                  <b-nav-item href="#" title="Pengurus">Pengurus</b-nav-item>
                  <b-nav-item href="#" title="Visi dan Misi"
                    >Visi dan Misi</b-nav-item
                  >
                </b-navbar-nav>
              </b-collapse>
            </li>

            <b-nav-item-dropdown
              id="dropdown"
              class="
                col-6 col-md-auto
                mx-md-2 mx-lg-0
                d-none d-lg-block
                dropdown_dark
              "
              text="Tentang"
              lazy
            >
              <b-dropdown-item href="#" title="Tentang Kami"
                >Tentang Kami</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Sejarah"
                >Sejarah</b-dropdown-item
              >
              <b-dropdown-item href="#" title="UU/AD/ART"
                >UU/AD/ART</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Peraturan dan Pedoman Organisasi"
                >Peraturan dan Pedoman Organisasi</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Lambang, Mars, dan Hymne"
                >Lambang, Mars, dan Hymne</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Struktur Organisasi"
                >Struktur Organisasi</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Pengurus"
                >Pengurus</b-dropdown-item
              >
              <b-dropdown-item href="#" title="Visi dan Misi"
                >Visi dan Misi</b-dropdown-item
              >
            </b-nav-item-dropdown>

            <li
              class="
                nav-item
                col-6 col-md-auto
                mx-md-2 mx-lg-0
                d-block d-lg-none
              "
            >
              <a
                class="nav-link dropdown-toggle"
                v-b-toggle
                href="#membershipCollapse"
                @click.prevent
                target="_self"
              >
                Keanggotaan
              </a>
              <b-collapse id="membershipCollapse" is-nav>
                <b-navbar-nav id="membershipNav" class="p-2 rounded-lg">
                  <b-dropdown-header id="membershipDropdownHeaderLabel">
                    Keanggotaan
                  </b-dropdown-header>
                  <b-nav-item
                    href="#"
                    title="Syarat dan Prosedur"
                    aria-labelledby="membershipDropdownHeaderLabel"
                    >Syarat dan Prosedur</b-nav-item
                  >
                  <b-nav-item
                    href="#"
                    title="Pengecekan"
                    aria-labelledby="membershipDropdownHeaderLabel"
                    >Pengecekan</b-nav-item
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-header id="registryDropdownHeaderLabel">
                    Registrasi
                  </b-dropdown-header>
                  <b-nav-item
                    href="https://kadinsystem.lasuarindo.co.id/keanggotaan/pendaftaran_anggota_biasa"
                    target="_blank"
                    rel="noopener norefferer"
                    title="Anggota Biasa"
                    aria-labelledby="registryDropdownHeaderLabel"
                    >Anggota Biasa</b-nav-item
                  >
                  <b-nav-item
                    href="https://kadinsystem.lasuarindo.co.id/keanggotaan/pendaftaran_anggota_luar_biasa"
                    target="_blank"
                    rel="noopener norefferer"
                    title="Anggota Luar Biasa"
                    aria-labelledby="registryDropdownHeaderLabel"
                    >Anggota Luar Biasa</b-nav-item
                  >
                </b-navbar-nav>
              </b-collapse>
            </li>
            <b-nav-item-dropdown
              id="dropdown"
              class="
                col-6 col-md-auto
                mx-md-2 mx-lg-0
                d-none d-lg-block
                dropdown_dark
              "
              text="Keanggotaan"
              lazy
            >
              <b-dropdown-group header="Keanggotaan">
                <b-dropdown-item href="#" title="Syarat dan Prosedur"
                  >Syarat dan Prosedur</b-dropdown-item
                >
                <b-dropdown-item href="#" title="Pengecekan"
                  >Pengecekan</b-dropdown-item
                >
              </b-dropdown-group>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-group header="Registrasi">
                <b-dropdown-item
                  href="https://kadinsystem.lasuarindo.co.id/keanggotaan/pendaftaran_anggota_biasa"
                  target="_blank"
                  rel="noopener norefferer"
                  title="Anggota Biasa"
                  >Anggota Biasa</b-dropdown-item
                >
                <b-dropdown-item
                  href="https://kadinsystem.lasuarindo.co.id/keanggotaan/pendaftaran_anggota_luar_biasa"
                  target="_blank"
                  rel="noopener norefferer"
                  title="Anggota Luar Biasa"
                  >Anggota Luar Biasa</b-dropdown-item
                >
              </b-dropdown-group>
            </b-nav-item-dropdown>

            <b-nav-item
              href="#"
              title="Sinergi dan Kolaborasi"
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Sinergi dan Kolaborasi</b-nav-item
            >
            <b-nav-item
              href="#"
              title="Cek Merek"
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Cek Merek</b-nav-item
            >
            <b-nav-item
              href="#"
              title=""
              class="col-6 col-md-auto mx-md-2 mx-lg-0"
              >Kontak</b-nav-item
            >
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <div class="my-2 my-lg-0 ml-lg-3 ml-xl-0">
              <b-form
                @submit.stop.prevent="showAlert()"
                id="formSearch"
                class="float-right"
              >
                <b-input-group class="py-2">
                  <b-form-input
                    v-model="form.search"
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
              </b-form>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<style scoped>
.icon_social {
  transition: color 0.1s ease !important;
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

#formSearch {
  width: 100%;
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

#aboutNav,
#membershipNav,
#btnSearch {
  background-color: rgba(45, 55, 63, 0.5);
}

/* Only at 768px */
@media screen and (min-width: 768px) and (max-width: 991.98px) {
  #navLinks .navbar-nav {
    overflow-x: auto;
  }
}

/* 1200px and up */
@media screen and (min-width: 1200px) {
  #formSearch {
    width: 100% !important;
  }
}

/* Only at 992px - 1024px */
@media screen and (min-width: 992px) and (max-width: 1024px) {
  #formSearch {
    width: 90% !important;
  }
}

/* 576px and up */
@media screen and (min-width: 576px) {
  #formSearch {
    width: 100%;
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
  data() {
    return {
      form: {
        search: '',
      },
    }
  },
  methods: {
    showAlert() {
      if (this.form.search == '') {
        alert('Please input a text.')
      } else {
        alert(this.form.search)
      }
    },
  },
}
</script>
