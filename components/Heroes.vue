<template>
  <div>
    <b-carousel
      :interval="3000"
      fade
      controls
      label-indicators
      label-next
      label-prev
      label-goto-slide
      indicators
      background="#ababab"
      img-width="100%"
    >
      <b-carousel-slide
        v-for="(slider, index) in sliders"
        :key="index"
        :img-src="slider.imgSrc"
        :img-alt="`Slider ${index++}`"
      >
        <b-jumbotron
          header="Berita Terbaru"
          :lead="slider.lead"
          lead-tag="mark"
          bg-variant="transparent"
          class="float-left text-left"
          style="text-shadow: 1px 1px 2px #333"
        >
          <p class="text">{{ slider.text }}</p>
          <b-button
            pill
            class="btn-sm py-md-2 px-md-4 btn_primary_blue"
            href="#"
            title="Lihat Selengkapnya"
            >Lihat Selengkapnya</b-button
          >
        </b-jumbotron>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      sliders: [
        {
          lead: 'Covid-19 Update',
          text: 'Sepekan terakhit kasus Covid-19 di Indonesia melonjak naik Sepekan terakhit kasus Covid-19 di Indonesia melonjak naik Sepekan terakhit kasus Covid-19 di Indonesia melonjak naik...',
          imgSrc: require('../assets/images/slider1.jpg'),
        },
        {
          lead: 'KADIN News',
          text: 'Pengukuhan Dan Dewan Pengurus Kadin Indonesia Masa Bakti 2020–2025 Pengukuhan Dan Dewan Pengurus Kadin Indonesia Masa Bakti 2020–2025 Pengukuhan Dan Dewan...',
          imgSrc: require('../assets/images/slider2.jpg'),
        },
      ],
    }
  },
}
</script>
