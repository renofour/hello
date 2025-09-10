// List of images/videos/GIFs
const images = [
  { 
    src: "https://drive.google.com/thumbnail?id=1KS_yxQ51nW9AnfmysBbYxzPaLG54wuYi&sz=w1200", 
    alt: "Work Image 1", 
    categories: ["print", "digital"],
    group: [
      "https://drive.google.com/thumbnail?id=1tmNtf3fpuG35aQY_B20jX5zFuJYbZn9t&sz=w1200",
      "https://drive.google.com/thumbnail?id=1citj8Zu7j3JEzF-B7kczQiYVg8n-PNqo&sz=w1200",
      "https://drive.google.com/thumbnail?id=19cWGXdMQfO5tjz8Xz6IqKRf_e6U-Pk5L&sz=w1200",
      "https://drive.google.com/thumbnail?id=1IwnEtTHPZukFOMrXLGbCvk3ag429jFEM&sz=w1200"
    ]
  },
  { src: "https://drive.google.com/thumbnail?id=1EC1pnEIS0HRcP8rUtYa0-SMFZFErVyv2&sz=w1200", alt: "Work Image 59", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=16K-hJ7YB3eKzZ0Fpc1QsKV0EnO8l8mUE&sz=w1200", alt: "Work Image 3", categories: ["digital", "3d"] },
  { src: "https://drive.google.com/thumbnail?id=1-IfFsOem4_uFoWHL7x0gUz-Nkk8s-Bu8&sz=w1200", alt: "Work Image 4", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1gaGdfaccHZWwBJw9yeNVh2mWeJ-VS3OE&sz=w1200", alt: "Work Image 5", categories: ["digital"] },
  { src: "https://drive.google.com/thumbnail?id=1PXKgsT4wJTHYtTM6AEO2JrviddGzrMlH&sz=w1200", alt: "Work Image 6", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1lsUV17h-65keB9IKgg_cJvifitwEC6Vi&sz=w1200", alt: "Work Image 7", categories: ["product"] },
  { src: "https://drive.google.com/thumbnail?id=1zUrGQs70B-vTUnw0fBHeXn4ocoe2qy5T&sz=w1200", alt: "Work Image 8", categories: ["product", "print"] },
  { src: "https://drive.google.com/thumbnail?id=1vtIkjFXJhFKwc6TsK93EaPMMNzMRsEwK&sz=w1200", alt: "Work Image 50", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1ptX-VRuXA1tcAnu9SbpojjjCTAR7kPuT&sz=w1200", alt: "Work Image 10", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1OOpjoJiNmzZxttfIBpQ43xWlXKiMoDHz&sz=w1200", alt: "Work Image 13", categories: ["digital"] },
  { src: "https://drive.google.com/thumbnail?id=1F2-rWxNQC7JJAib07GLS7u2whIhXVWeZ&sz=w1200", alt: "Work Image 14", categories: ["digital"] },
  { src: "https://drive.google.com/thumbnail?id=1ImWqmE7xA0CBkEe3uJnudWVErv_zBnCP&sz=w1200", alt: "Work Image 46", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1I7S1LB7e2FaIMDz9Zz6Fm5Ipwug2uqmF&sz=w1200", alt: "Work Image 17", categories: ["product"] },
  { src: "https://drive.google.com/thumbnail?id=1mqoGFLRHapYzaITMI1ysyVzlO1Rs0O1y&sz=w1200", alt: "Work Image 18", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1L1EO9xbx7G3MGovxKV7GPV8VB1ZzSNJO&sz=w1200", alt: "Work Image 60", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1U4w5yifsei5eouYWFk2iwvpRSvDSUv1x&sz=w1200", alt: "Work Image 19", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1MoZUKu-mqukVAE8XCmRoRY_2zi8mCqNn&sz=w1200", alt: "Work Image 63", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1F9qZLOnde9gnx-i-fl_xfBNaQA9K6P9G&sz=w1200", alt: "Work Image 20", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1RECxWfONSoN3ZQBG19OEn8mksZ6THr0a&sz=w1200", alt: "Work Image 61", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=14D4vKLVvp7BkijAAU_t5MR6f4Ss1VciX&sz=w1200", alt: "Work Image 26", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=12yh7OmQPdnBEHswGDG6-6HqUXB12-zOM&sz=w1200", alt: "Work Image 12", categories: ["digital"] },
  { src: "https://drive.google.com/thumbnail?id=1dF2OYY3O2DvWhUsYtrjRgzcGCq4r60hr&sz=w1200", alt: "Work Image 58", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1Fa31QBfqsmU_gxcJ1oLIUOMMoF7xZvbq&sz=w1200", alt: "Work Image 30", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1O9GBM8ofceocw_7FKUUNalePqpRBecEV&sz=w1200", alt: "Work Image 31", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1jet7dWkYBvufxEfkwkkTrliGeVvoaqsx&sz=w1200", alt: "Work Image 32", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1xrQtbZopFhhVC6qTfrLz-QN-9UCrOS7c&sz=w1200", alt: "Work Image 33", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1GsOPy6yuFUl24n16hg7o_mZjd9kmH5kS&sz=w1200", alt: "Work Image 34", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1PJWWacnXxr_oMKHuyofx4jbUt8a1jRlx&sz=w1200", alt: "Work Image 37", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1nUz7nIiWNDHeQMzinTPRCZbeWFe0jGxA&sz=w1200", alt: "Work Image 39", categories: ["print"] },
  { src: "https://drive.google.com/thumbnail?id=1WTPglGAVDTdMfkLsa2VsoT73u28Jbjje&sz=w1200", alt: "Work Image 38", categories: ["product"] },
  { src: "https://drive.google.com/thumbnail?id=16sF-s__bcL3TnZBU397B4ANvLeHDyNml&sz=w1200", alt: "Work Image 59", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1tmNtf3fpuG35aQY_B20jX5zFuJYbZn9t&sz=w1200", alt: "Work Image 22", categories: ["3d"] },
  { src: "https://drive.google.com/thumbnail?id=1citj8Zu7j3JEzF-B7kczQiYVg8n-PNqo&sz=w1200", alt: "Work Image 51", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=19cWGXdMQfO5tjz8Xz6IqKRf_e6U-Pk5L&sz=w1200", alt: "Work Image 52", categories: ["print", "digital"] },
  { src: "https://drive.google.com/thumbnail?id=1IwnEtTHPZukFOMrXLGbCvk3ag429jFEM&sz=w1200", alt: "Work Image 9", categories: ["print"] },
];

// Function to filter images based on category
function getFilteredImages(filter) {
  return filter === 'all'
    ? images
    : images.filter(img => img.categories.includes(filter));
}
