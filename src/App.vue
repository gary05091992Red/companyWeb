<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSlider from './components/HeroSlider.vue'
import CompanyIntro from './components/CompanyIntro.vue'
import ProductsSection from './components/ProductsSection.vue'
import ContactModal from './components/ContactModal.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSlider />
    <CompanyIntro />
    <ProductsSection />
  </main>
  <SiteFooter />
  <ContactModal />
</template>
