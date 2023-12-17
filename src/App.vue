<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Features from './components/Features.vue';
import Details from './components/Details.vue';
import Gallery from './components/Gallery.vue';
import Testimonial from './components/Testimonial.vue';
import Pricing from './components/Pricing.vue';
import FAQ from './components/FAQ.vue';
import Contact from './components/Contact.vue';
</script>

<template>
    <Header></Header>
    <Hero></Hero>
    <main id="main">
        <Features></Features>
        <Details></Details>
        <Gallery></Gallery>
        <Testimonial></Testimonial>
        <Pricing></Pricing>
        <FAQ></FAQ>
        <Contact></Contact>
    </main>
    <Footer></Footer>
</template>