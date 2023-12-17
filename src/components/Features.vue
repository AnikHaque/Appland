<script setup>
import { features } from '../data/data'
</script>
<template>
    <!-- ======= App Features Section ======= -->
    <section id="features" class="features">
            <div class="container">

                <div class="section-title">
                    <h2>App Features</h2>
                    <p>{{ features.description }}</p>
                </div>

                <div class="row no-gutters">
                    <div class="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                    <div class="content d-flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-md-6 icon-box" data-aos="fade-up" v-for="(feature,index) in features.list" :key="index">
                                <i :class="feature.icon_class"></i>
                                <h4>{{ feature.title }}</h4>
                                <p>{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                    <img :src="features.image.src" :class="features.image.class" :alt="features.image.alt">
                    </div>
                </div>

            </div>
        </section><!-- End App Features Section -->
</template>