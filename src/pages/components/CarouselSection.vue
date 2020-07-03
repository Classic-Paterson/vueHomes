<template>
  <div class="carousel" id="carousel">
    <div>
      <div class="row justify-content-center">
        <div class="col-12">
          <el-carousel class="container" >
            <el-carousel-item>
              <img class="d-block" src="images/2.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="images/3.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="images/8.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="images/9.jpg">
            </el-carousel-item>
            <el-carousel-item>
              <img class="d-block" src="images/10.jpg">
              <div class="carousel-caption d-none d-md-block">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from 'element-ui';

export default {
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  }
};
</script>
<style></style>
