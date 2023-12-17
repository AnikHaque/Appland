<script setup>
    import { hero } from '../data/data'
</script>

<template>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1" data-aos="fade-up">
                <div>
                    <h1>{{ hero.title}}</h1>
                    <h2>{{ hero.slogan }}</h2>
                    <a :href="store.link" class="download-btn" v-for="(store, index) in hero.stores" :key="index"><i :class="store.icon_class"></i> {{ store.name }}</a>
                </div>
                </div>
                <div class="col-lg-6 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img" data-aos="fade-up">
                <img :src="hero.image.src" :class="hero.image.class" :alt="hero.image.alt">
                </div>
            </div>
        </div>
    </section><!-- End Hero -->`
</template>

<style scoped></style>