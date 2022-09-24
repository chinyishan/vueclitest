<template>
    <div class="about">
        <h1>這是商品頁面</h1>
        <h2>Product: {{$route.params.productID}}</h2>
        <!-- <ImageItem/>
        <Card/> -->
    </div>
</template>

<script>
import ImageItem from '@/components/ImageItem.vue';
import Card from '@/components/Card.vue';
export default {
    components: {
        ImageItem,
        Card
    }
}
</script>