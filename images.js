// List of images/videos/GIFs
const images = [
  { 
    src: "https://lh3.googleusercontent.com/d/1KS_yxQ51nW9AnfmysBbYxzPaLG54wuYi=w1200", 
    alt: "Work Image 1", 
    categories: ["print", "digital"],
    group: [
      "https://lh3.googleusercontent.com/d/1tmNtf3fpuG35aQY_B20jX5zFuJYbZn9t=w1200",
      "https://lh3.googleusercontent.com/d/1citj8Zu7j3JEzF-B7kczQiYVg8n-PNqo=w1200",
      "https://lh3.googleusercontent.com/d/19cWGXdMQfO5tjz8Xz6IqKRf_e6U-Pk5L=w1200",
      "https://lh3.googleusercontent.com/d/1IwnEtTHPZukFOMrXLGbCvk3ag429jFEM=w1200"
    ]
  },
  { src: "https://lh3.googleusercontent.com/d/1EC1pnEIS0HRcP8rUtYa0-SMFZFErVyv2=w1200", alt: "Work Image 59", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/16K-hJ7YB3eKzZ0Fpc1QsKV0EnO8l8mUE=w1200", alt: "Work Image 3", categories: ["digital", "3d"] },
  { src: "https://lh3.googleusercontent.com/d/1-IfFsOem4_uFoWHL7x0gUz-Nkk8s-Bu8=w1200", alt: "Work Image 4", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1gaGdfaccHZWwBJw9yeNVh2mWeJ-VS3OE=w1200", alt: "Work Image 5", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1PXKgsT4wJTHYtTM6AEO2JrviddGzrMlH=w1200", alt: "Work Image 6", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1lsUV17h-65keB9IKgg_cJvifitwEC6Vi=w1200", alt: "Work Image 7", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/1zUrGQs70B-vTUnw0fBHeXn4ocoe2qy5T=w1200", alt: "Work Image 8", categories: ["product", "print"] },
  { src: "https://lh3.googleusercontent.com/d/1vtIkjFXJhFKwc6TsK93EaPMMNzMRsEwK=w1200", alt: "Work Image 50", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1ptX-VRuXA1tcAnu9SbpojjjCTAR7kPuT=w1200", alt: "Work Image 10", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1OOpjoJiNmzZxttfIBpQ43xWlXKiMoDHz=w1200", alt: "Work Image 13", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1F2-rWxNQC7JJAib07GLS7u2whIhXVWeZ=w1200", alt: "Work Image 14", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1ImWqmE7xA0CBkEe3uJnudWVErv_zBnCP=w1200", alt: "Work Image 46", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1I7S1LB7e2FaIMDz9Zz6Fm5Ipwug2uqmF=w1200", alt: "Work Image 17", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/1mqoGFLRHapYzaITMI1ysyVzlO1Rs0O1y=w1200", alt: "Work Image 18", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1L1EO9xbx7G3MGovxKV7GPV8VB1ZzSNJO=w1200", alt: "Work Image 60", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1U4w5yifsei5eouYWFk2iwvpRSvDSUv1x=w1200", alt: "Work Image 19", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1MoZUKu-mqukVAE8XCmRoRY_2zi8mCqNn=w1200", alt: "Work Image 63", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1F9qZLOnde9gnx-i-fl_xfBNaQA9K6P9G=w1200", alt: "Work Image 20", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1RECxWfONSoN3ZQBG19OEn8mksZ6THr0a=w1200", alt: "Work Image 61", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/14D4vKLVvp7BkijAAU_t5MR6f4Ss1VciX=w1200", alt: "Work Image 26", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/12yh7OmQPdnBEHswGDG6-6HqUXB12-zOM=w1200", alt: "Work Image 12", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1dF2OYY3O2DvWhUsYtrjRgzcGCq4r60hr=w1200", alt: "Work Image 58", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1Fa31QBfqsmU_gxcJ1oLIUOMMoF7xZvbq=w1200", alt: "Work Image 30", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1O9GBM8ofceocw_7FKUUNalePqpRBecEV=w1200", alt: "Work Image 31", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1jet7dWkYBvufxEfkwkkTrliGeVvoaqsx=w1200", alt: "Work Image 32", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1xrQtbZopFhhVC6qTfrLz-QN-9UCrOS7c=w1200", alt: "Work Image 33", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1GsOPy6yuFUl24n16hg7o_mZjd9kmH5kS=w1200", alt: "Work Image 34", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1PJWWacnXxr_oMKHuyofx4jbUt8a1jRlx=w1200", alt: "Work Image 37", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1nUz7nIiWNDHeQMzinTPRCZbeWFe0jGxA=w1200", alt: "Work Image 39", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1WTPglGAVDTdMfkLsa2VsoT73u28Jbjje=w1200", alt: "Work Image 38", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/16sF-s__bcL3TnZBU397B4ANvLeHDyNml=w1200", alt: "Work Image 59", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1tmNtf3fpuG35aQY_B20jX5zFuJYbZn9t=w1200", alt: "Work Image 22", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1citj8Zu7j3JEzF-B7kczQiYVg8n-PNqo=w1200", alt: "Work Image 51", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/19cWGXdMQfO5tjz8Xz6IqKRf_e6U-Pk5L=w1200", alt: "Work Image 52", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1IwnEtTHPZukFOMrXLGbCvk3ag429jFEM=w1200", alt: "Work Image 9", categories: ["print"] },
];

// Function to filter images based on category
function getFilteredImages(filter) {
  return filter === 'all'
    ? images
    : images.filter(img => img.categories.includes(filter));
}
