<template>
  <div class="starter-page">
    <div class="page-header clear-filter" style="width:100%" filter-color="orange">
      <parallax class="page-header-image" style="background-image:url('images/1.jpg')"></parallax>
      <div class="container">
        <div class="content-center brand">
          <h1 class="h1-seo">87 Conway Road, Paengaroa</h1>
          <h3>The Good Life.</h3>
        </div>
      </div>
    </div>

    <div class="container text-center">
      <div class="row justify-content-md-center">
        <div class="col-md-12 col-lg-8">
          <carousel-section></carousel-section>
          <h2 class="title">Offers Over $795,000</h2>
          <h5>
            <img _ngcontent-homes-app-c67 class="icon-detail" src="images/Bedrooms.svg" />
            <span class="details-value">3</span>
            <img _ngcontent-homes-app-c67 class="icon-detail" src="images/Bathrooms.svg" />
            <span class="details-value">1</span>
            <img _ngcontent-homes-app-c67 class="icon-detail" src="images/Car-spaces.svg" />
            <span class="details-value">4</span>
            <img _ngcontent-homes-app-c67 class="icon-detail" src="images/Floor-area.svg" />
            <span class="details-value">140m2</span>
            <img _ngcontent-homes-app-c67 class="icon-detail" src="images/Land-area.svg" />
            <span class="details-value">884m2</span>
          </h5>
          <h5 class="description">
            Desirable in design with plenty of space and style, here is a spectacular near-new family home bursting with modern features and built for entertaining.
            <br />
            <br />Spacious and light-filled with stunning vaulted ceilings, the open planned kitchen dining and living lead to sizeable outdoor decking and a private back yard. The separate media room offers handy space for a spot of sport or a family movie, and the office grants a perfect work-from-home option.
            <br />
            <br />The home provides four double bedrooms with a walk-in-robe and ensuite in the master, and stylish main bathroom facilities include a separate shower with dual head-piece and deep-bottom bathtub.
            <br />
            <br />Internal access dual-car garaging is reached through the separate laundry room extra storage space can be found in the above-garage attic via drop-down stairs.
            <br />
            <br />Fully fenced the large freehold site provides an easily-managed space in a semi-rural and private setting at the end of a quiet cul-de-sac location.
            <br />
            <br />To download the full Property Information Pack copy and paste the following link into your web browser and register your details: bit.ly/3dj5VKo
          </h5>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
  </div>
</template>
<script>
import { Parallax } from "@/components";
import CarouselSection from "./components/CarouselSection";
import SignupForm from "./components/SignupForm";

export default {
  name: "index",
  bodyClass: "index-page",
  components: {
    CarouselSection,
    SignupForm
  }
};
</script>
<style>
.starter-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section {
  text-align: center;
}

.icon-detail {
  height: 26px;
  width: 26px;
  max-height: 26px;
  max-width: 26px;
}
</style>
