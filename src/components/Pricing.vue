<script setup>
import { pricing_plans } from '../data/data'
</script>
<template>
    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing">
            <div class="container">
                <div class="section-title">
                    <h2>Pricing</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row no-gutters">
                    <div class="col-lg-4 box" data-aos="fade-right" v-for="(plan, index) in pricing_plans" :key="index">
                        <h3>{{ plan.name }}</h3>
                        <h4>{{ plan.price }}<span>per month</span></h4>
                        <ul>
                            <li v-for="(feature,index) in plan.features" :key="index"><i class="bx bx-check"></i> {{ feature }}</li>                   
                        </ul>
                        <a :href="plan.link" class="get-started-btn">Get Started</a>
                    </div>
                </div>
            </div>
        </section><!-- End Pricing Section -->
</template>