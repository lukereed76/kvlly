<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>&nbsp;|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Kelly Vaughn | I am on the internet",
    meta: [
      {
        name: "description",
        content: "Take in the beauty of this really complex website."
      },
      {
        property: "og:title",
        content: "Kelly Vaughn | I am on the internet"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:description",
        content: "Take in the beauty of this really complex website."
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:site",
        content: "@kvlly"
      },
      {
        name: "og:url",
        content: "https://kvlly.com"
      },
      { name: "twitter:title", content: "Kelly Vaughn | I am on the internet" },
      {
        name: "twitter:description",
        content: "I have things here on my website."
      },
      { name: "twitter:creator", content: "@kvlly" },
      {
        name: "twitter:image:src",
        content: "https://kvlly.com/share-image.png"
      },
      {
        name: "og:image",
        content: "https://kvlly.com/share-image.png"
      }
    ]
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
