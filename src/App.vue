<template>
<div>
  <div class="main-div">
    <div class="grid-container">
      <div class="left-image">
          <img class="image-1" src="./assets/illustration-woman-online-desktop.svg" alt="">
          <img class="image-box" src="./assets/illustration-box-desktop.svg" alt="">
      </div>
      <div class="questions">
        <h1>FAQ</h1>
        <h3 @click="open = !open">How many team members can I invite?</h3>
        <p v-if="open">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa doloribus in illo, qui</p>
        <div class="grey-line"></div>
        <h3 @click="opentwo = !opentwo">What is the maximum file upload size?</h3>
        <p v-if="opentwo">No more than 2GB. All files in your account must fit your allotted storage space.</p>
        <div class="grey-line"></div>
        <h3 @click="openthird = !openthird">How do I reset my password?</h3>
        <p v-if="openthird">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa doloribus in illo, qui</p>
        <div class="grey-line"></div>
        <h3 @click="openfour = !openfour">Can I cancel my subscription?</h3>
        <p v-if="openfour">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa doloribus in illo, qui</p>
        <div class="grey-line"></div>
        <h3 @click="openfive = !openfive">Do you provide additional support?</h3>
        <p v-if="openfive">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa doloribus in illo, qui</p>
        <div class="grey-line"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      open:false,
      opentwo:false,
      openthird:false,
      openfour:false,
      openfive:false
     
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-top: 150px;
}
body {
  background: linear-gradient( #B068E9 0%, #6463E7 100%);
  text-align: center;
  justify-content: center;
  display: grid;
}
.main-div {
  background-color: white;
  width: 1000px;
  height: 609px;
  border-radius: 23px;
}
.left-image .image-1{
  width: 350.69px;
  height: 277.97px;
  transform: translate(-50px,100px);
}
.image-box {
  width: 150px;
  transform: translate(-50px,-70px);
}
.left-image {
  text-align: center;
  justify-content: center;
  display: grid;
  width: 350.69px;
}
.grid-container {
  display: flex;
}
.questions {
  justify-content: center;
  text-align: center;
  width: 800px;
  margin-top: 5%;
  margin-left: -200px;
}
.questions h3 {
  color: black;
  cursor: pointer;
}

.questions p {
  width: 600px;
  transform: translateX(200px);
  color: black;
}
.grey-line {
  width: 400px;
  height: 1px;
  background-color: grey;
  transform: translateX(50%);
}
@media only screen and (max-width:1105px) {
  .grid-container {
  display: grid;
}
.main-div {
  width: 327px;
  height: 535px;
  border-radius: 23px;
}
.left-image .image-1 {
  width: 236px;
  height: 180px;
  position: absolute;
  top: 10px;
  margin-top: -50px;
  margin-left: 100px;
}
.left-image .image-box {
  width: 44px;
  height: 40px;
}
.questions {
  z-index: 999;
  justify-content: center;
  text-align: center;
  width: 280px;
  margin-top: 20%;
transform: translateX(230px);
}
.grey-line {
  display: none;
}
.questions h3 {
  font-size: 15px;
  line-height: 30px;
}
.questions p {
  width: 280px;
  transform: translateX(100px);
  font-size: 12px;
display: grid;
text-align: center;
}
}
</style>
