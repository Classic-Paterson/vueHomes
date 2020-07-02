<template>
  <div class="starter-page">
    <div class="section text-center">
      <img class="main_image" src="images/1.jpg">

          <div class="address">87 Conway Road, Paengaroa</div>
          <div class="price_tag">Offers Over $795,000</div>
          <div class="icon-details-container">
            <img class="icon-detail" src="images/Bedrooms.svg"><span class="details-value">3</span>
            <img class="icon-detail" src="images/Bathrooms.svg"><span class="details-value">1</span>
            <img class="icon-detail" src="images/Car-spaces.svg"><span class="details-value">4</span>
            <img class="icon-detail" src="images/Floor-area.svg"><span class="details-value">140m2</span>
            <img class="icon-detail" src="images/Land-area.svg"><span class="details-value">884m2</span>
          </div>
          
          <p>
          Desirable in design with plenty of space and style, here is a spectacular near-new family home bursting with modern features and built for entertaining.
          <br/><br/>
          Spacious and light-filled with stunning vaulted ceilings, the open planned kitchen dining and living lead to sizeable outdoor decking and a private back yard. The separate media room offers handy space for a spot of sport or a family movie, and the office grants a perfect work-from-home option.
          <br/><br/>
          The home provides four double bedrooms with a walk-in-robe and ensuite in the master, and stylish main bathroom facilities include a separate shower with dual head-piece and deep-bottom bathtub.
          <br/><br/>
          Internal access dual-car garaging is reached through the separate laundry room extra storage space can be found in the above-garage attic via drop-down stairs.
          <br/><br/>
          Fully fenced the large freehold site provides an easily-managed space in a semi-rural and private setting at the end of a quiet cul-de-sac location.
          <br/><br/>
          To download the full Property Information Pack copy and paste the following link into your web browser and register your details: bit.ly/3dj5VKo
          </p>


    </div>
  </div>
</template>
<script>
export default {
  name: 'starter'
};
</script>
<style>

.icon-details-container {
    padding-bottom: 16px;
}

.starter-page {
  min-height: calc(100vh - 66px);
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.starter-page p {
  padding:16px;
  max-width: 60em;  
  text-align: left;
}

.main_image{
padding:40px
}

.address {
    font-size: 28px;
    color: rgb(49, 57, 68);
    font-weight: 900;
    display: block;
    font-size: 1.5em;
}

.price_tag {
    font-size: 46px;
    color: rgb(49, 57, 68);
    font-weight: 800;
    margin-bottom: 10px;
}

.section{
  text-align:center;
  }
  
.icon-detail{
        height: 26px;
          width: 26px;
          max-height: 26px;
          max-width: 26px;
  }
</style>
