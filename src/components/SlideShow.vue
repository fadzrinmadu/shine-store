<template>
  <div id="slideShow" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner bg-light">
      <div class="carousel-item active">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 pr-md-5 ml-5">
              <h1 class="display-4 text-uppercase font-weight-bold mb-3 pr-md-5">Be A Cherry On Pie In Any Situation</h1>
              <p class="mb-4 pr-md-5">Experiment, mix and showcase colors, textures and styles! Be yourself and impress others!</p>
              <button class="btn btn-lg btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 pr-md-5 ml-5">
              <h1 class="display-4 text-uppercase font-weight-bold mb-3 pr-md-5">Supersize Your Wardrobe</h1>
              <p class="mb-4 pr-md-5">Select clothes from the best designers to create your own fresh looks this season!</p>
              <button class="btn btn-lg btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7 pr-md-5 ml-5">
              <h1 class="display-4 text-uppercase font-weight-bold mb-3 pr-md-5">Add Some Chic To Your Look</h1>
              <p class="mb-4 pr-md-5">Let yourself try some extraordinary details and accessories to highlight your identity!</p>
              <button class="btn btn-lg btn-primary">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev bg-dark" href="#slideShow" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next bg-dark" href="#slideShow" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SlideShow',
  props: {

  },
};
</script>

<style scoped lang="scss">
.carousel {
  margin-top: 70px;
}

.carousel-inner {
  position: relative;
}

.carousel-item {
  .container .row {
    height: 540px;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &:nth-child(1) .container .row {
    background-image: url(/images/slider/slider1.jpg);
  }

  &:nth-child(2) .container .row {
    background-image: url(/images/slider/slider2.jpg);
  }

  &:nth-child(3) .container .row {
    background-image: url(/images/slider/slider3.jpg);
  }
}

.carousel-control-prev,
.carousel-control-next {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 4%;
}

.carousel-control-next {
  right: 4%;
}
</style>
