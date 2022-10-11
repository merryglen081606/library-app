<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#"><span>Lou Geh</span></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          <span id="title">{{ title }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>
<script>
export default {
  name: "HeaderCom",
  props: {
    title: {
      type: String,
    },
  },
};
</script>
<style scoped>
nav {
  width: 83%;
  height: 58px;
  background-color: #020202;
  float: rigt;
  justify-content: space-between;
  position: sticky;
  margin-right: 20px;
  /* padding-left: 3%;
    padding-top: 5px;
    padding-bottom: 5px; */
  padding: 10px 25px 10px 25px;
  margin-top: 5px;
  border-radius: 5px;
}
.breadcrumb-item {
  font-family: montserrat;
  text-decoration: none;
  font-size: 25px;
  font-weight: bolder;
}
span {
  color: #eeb34b;
  text-emphasis: none;
  text-decoration: none;
}
#title {
  color: white;
}
</style>
