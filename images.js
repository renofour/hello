// List of images/videos/GIFs
const images = [
  { 
    src: "https://lh3.googleusercontent.com/d/1KS_yxQ51nW9AnfmysBbYxzPaLG54wuYi=w1200", 
    alt: "Brown", 
    categories: ["print", "digital"],
    group: [
       "https://lh3.googleusercontent.com/d/1KS_yxQ51nW9AnfmysBbYxzPaLG54wuYi=w1200",
       "https://lh3.googleusercontent.com/d/1RyzMQq0e5dyYPf3EZDkVFuIYATfpSeDD=w1200",
       "https://lh3.googleusercontent.com/d/16yUb4m2XDdxHsWYjZnBiHKHBSlPrjEJA=w1200",
       "https://lh3.googleusercontent.com/d/1d9NwnWaF9-nbDloklOrrxuxOzZl6WUc9=w1200",
       "https://lh3.googleusercontent.com/d/1Gok3Xtfp5AlziPR1qrk6ymQ9Wst0lDpo=w1200",
       "https://lh3.googleusercontent.com/d/16Y4GYduVN7xhi7iRkzT084_pMzhi889A=w1200"
    ]
  },
  { src: "https://lh3.googleusercontent.com/d/1EC1pnEIS0HRcP8rUtYa0-SMFZFErVyv2=w1200", alt: "WThink Big", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/16K-hJ7YB3eKzZ0Fpc1QsKV0EnO8l8mUE=w1200", alt: "Mau", categories: ["digital", "3d"] },

  {src: "https://lh3.googleusercontent.com/d/15FTIUfeVcqKgX-D7WNouuUOAzcj-2VRC=w1200",
    alt: "30DII",
    categories: ["print"],
    group: [
      "https://lh3.googleusercontent.com/d/15FTIUfeVcqKgX-D7WNouuUOAzcj-2VRC=w1200",
      "https://lh3.googleusercontent.com/d/1kEALBwWjwUwCIXXtLOPIFRjghW6zi3gD=w1200",
      "https://lh3.googleusercontent.com/d/1eGDP41pcqUYDwj1IMc4LDK_IY5lMxOUj=w1200",
      "https://lh3.googleusercontent.com/d/1o9Yoe_mLvZtMifItUwLA02WHEtrz-oss=w1200",
      "https://lh3.googleusercontent.com/d/1FZkyoX1s0bDIRWeEHrgwfNtbylAyjZzS=w1200",
      "https://lh3.googleusercontent.com/d/1rbu6THSuW3DzBIBJXI0MmVY48Zpjsbjy=w1200",
      "https://lh3.googleusercontent.com/d/1ky8YgZzDVj4IVouvlf8YLbRjOJimsqn-=w1200",
      "https://lh3.googleusercontent.com/d/1hkt52J-1Ec2temdDGcoGBzZaicaoiO2n=w1200"
    ]
  },

  { src: "https://lh3.googleusercontent.com/d/1-IfFsOem4_uFoWHL7x0gUz-Nkk8s-Bu8=w1200", alt: "30DII-old", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1gaGdfaccHZWwBJw9yeNVh2mWeJ-VS3OE=w1200", alt: "Space", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1PXKgsT4wJTHYtTM6AEO2JrviddGzrMlH=w1200", alt: "Flags", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1lsUV17h-65keB9IKgg_cJvifitwEC6Vi=w1200", alt: "Plauat", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/1zUrGQs70B-vTUnw0fBHeXn4ocoe2qy5T=w1200", alt: "Ballsy", categories: ["product", "print"] },
  { src: "https://lh3.googleusercontent.com/d/1vtIkjFXJhFKwc6TsK93EaPMMNzMRsEwK=w1200", alt: "Time", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1ptX-VRuXA1tcAnu9SbpojjjCTAR7kPuT=w1200", alt: "Aventra Race", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1OOpjoJiNmzZxttfIBpQ43xWlXKiMoDHz=w1200", alt: "Kiiroo", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1F2-rWxNQC7JJAib07GLS7u2whIhXVWeZ=w1200", alt: "30DII-2", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1ImWqmE7xA0CBkEe3uJnudWVErv_zBnCP=w1200", alt: "Taste", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1I7S1LB7e2FaIMDz9Zz6Fm5Ipwug2uqmF=w1200", alt: "Kiiroo-2", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/1mqoGFLRHapYzaITMI1ysyVzlO1Rs0O1y=w1200", alt: "Omnigo", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1L1EO9xbx7G3MGovxKV7GPV8VB1ZzSNJO=w1200", alt: "Wrap", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1U4w5yifsei5eouYWFk2iwvpRSvDSUv1x=w1200", alt: "Cosmos", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1MoZUKu-mqukVAE8XCmRoRY_2zi8mCqNn=w1200", alt: "Time-2", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1F9qZLOnde9gnx-i-fl_xfBNaQA9K6P9G=w1200", alt: "Book", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1RECxWfONSoN3ZQBG19OEn8mksZ6THr0a=w1200", alt: "Nike", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/14D4vKLVvp7BkijAAU_t5MR6f4Ss1VciX=w1200", alt: "Snow", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/12yh7OmQPdnBEHswGDG6-6HqUXB12-zOM=w1200", alt: "Smile", categories: ["digital"] },
  { src: "https://lh3.googleusercontent.com/d/1dF2OYY3O2DvWhUsYtrjRgzcGCq4r60hr=w1200", alt: "Black", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1Fa31QBfqsmU_gxcJ1oLIUOMMoF7xZvbq=w1200", alt: "Mom", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1O9GBM8ofceocw_7FKUUNalePqpRBecEV=w1200", alt: "Kiiroo-3", categories: ["print", "digital"] },

  { 
    src: "https://lh3.googleusercontent.com/d/1jet7dWkYBvufxEfkwkkTrliGeVvoaqsx=w1200", 
    alt: "Paul", 
    categories: ["print"],
    group: [
      "https://lh3.googleusercontent.com/d/1koB1zcoezKIPbB28EczcRm_v7S9znZxz=w1200",
      "https://lh3.googleusercontent.com/d/1kZJG5wFO4JTpoOlDGO_xEtoGoI15lbeL=w1200",
      "https://lh3.googleusercontent.com/d/1454G-GZ77GPREoBRoTGywmF1jpAUKKtG=w1200"
    ]
  },

  { src: "https://lh3.googleusercontent.com/d/1xrQtbZopFhhVC6qTfrLz-QN-9UCrOS7c=w1200", alt: "Cards", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1GsOPy6yuFUl24n16hg7o_mZjd9kmH5kS=w1200", alt: "Galaxy", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1PJWWacnXxr_oMKHuyofx4jbUt8a1jRlx=w1200", alt: "Buddha", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1nUz7nIiWNDHeQMzinTPRCZbeWFe0jGxA=w1200", alt: "Kiiroo-4", categories: ["print"] },
  { src: "https://lh3.googleusercontent.com/d/1WTPglGAVDTdMfkLsa2VsoT73u28Jbjje=w1200", alt: "Ballsy-2", categories: ["product"] },
  { src: "https://lh3.googleusercontent.com/d/16sF-s__bcL3TnZBU397B4ANvLeHDyNml=w1200", alt: "Sine", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1tmNtf3fpuG35aQY_B20jX5zFuJYbZn9t=w1200", alt: "Cooex", categories: ["3d"] },
  { src: "https://lh3.googleusercontent.com/d/1citj8Zu7j3JEzF-B7kczQiYVg8n-PNqo=w1200", alt: "Stella", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/19cWGXdMQfO5tjz8Xz6IqKRf_e6U-Pk5L=w1200", alt: "Fall", categories: ["print", "digital"] },
  { src: "https://lh3.googleusercontent.com/d/1IwnEtTHPZukFOMrXLGbCvk3ag429jFEM=w1200", alt: "Alfa", categories: ["print"] },
];

// Function to filter images based on category
function getFilteredImages(filter) {
  return filter === 'all'
    ? images
    : images.filter(img => img.categories.includes(filter));
}
