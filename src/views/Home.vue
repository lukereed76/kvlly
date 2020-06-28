<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  metaInfo: {
    title: "Kelly Vaughn | I am on the internet",
    meta: [
      {
        name: "description",
        content: "Take in the beauty of this really complex website.",
      },
      {
        property: "og:description",
        content: "Take in the beauty of this really complex website.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:site",
        content: "https://kvlly.com",
      },
      { name: "twitter:title", content: "Kelly Vaughn | I am on the internet" },
      {
        name: "twitter:description",
        content: "I have things here on my website.",
      },
      { name: "twitter:creator", content: "@kvlly" },
      {
        name: "twitter:image",
        content: "https://kvlly.com/share-image.png",
      },
    ],
  },
};
</script>
