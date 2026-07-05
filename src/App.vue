<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSlider from './components/HeroSlider.vue'
import CompanyIntro from './components/CompanyIntro.vue'
import ProductsSection from './components/ProductsSection.vue'
import ContactModal from './components/ContactModal.vue'
</script>

<template>
  <SiteHeader />
  <main class="page-sections">
    <HeroSlider />
    <CompanyIntro />
    <ProductsSection />
  </main>
  <ContactModal />
</template>

<style scoped>
.page-sections {
  width: 100%;
}
</style>
