<script setup>
import {faqs } from '../data/data'</script>
<template>
    <!-- ======= Frequently Asked Questions Section ======= -->
    <section id="faq" class="faq section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="accordion-list">
                    <ul>
                        <li data-aos="fade-up" v-for="faq in faqs" :key="faq.id">
                            <i class="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" class="collapse" :data-bs-target="'#accordion-list-'+faq.id">{{ faq.question }} <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div :id="'accordion-list-' + faq.id" class="collapse show" data-bs-parent=".accordion-list">
                            <p>{{ faq.answer }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section><!-- End Frequently Asked Questions Section -->
</template>