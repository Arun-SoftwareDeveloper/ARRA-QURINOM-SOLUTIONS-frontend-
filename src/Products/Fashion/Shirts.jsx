import React from "react";

const Shirts = [
  {
    id: 1,
    name: "Snitch",
    price: 1499,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230706/8nlT/64a6c336eebac147fc58f5e0/-473Wx593H-466337675-purple-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230706/9rQs/64a6c336eebac147fc58f582/-1117Wx1400H-466337675-purple-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230706/7Xg7/64a6c336eebac147fc58f595/-1117Wx1400H-466337675-purple-MODEL5.jpg",
    ],
    gender: "Male",
    type: "Shirts",
  },

  {
    id: 11,
    name: "Netplay",
    price: 499,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230629/zpFZ/649ce963a9b42d15c91f434b/-1117Wx1400H-466063370-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230629/c7hc/649ce963a9b42d15c91f439d/-1117Wx1400H-466063370-black-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230629/MNyz/649ce963a9b42d15c91f438e/-1117Wx1400H-466063370-black-MODEL3.jpg",
    ],
    gender: "Male",
    category: "tshirts",
  },
  {
    name: "Netplay",
    price: 399,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230604/o7oU/647b949e42f9e729d721b5b0/-1117Wx1400H-466217940-cream-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230604/30ze/647b949e42f9e729d721b5f1/-1117Wx1400H-466217940-cream-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230604/kujf/647b949e42f9e729d721b5e5/-1117Wx1400H-466217940-cream-MODEL3.jpg",
    ],
    gender: "Male",
    category: "tshirts",
  },
  {
    name: "Netplay",
    price: 399,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221109/yiSd/636b91afaeb269659c7fdab4/-1117Wx1400H-441146752-brown-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221109/oqtL/636b983eaeb269659c803960/-1117Wx1400H-441146752-brown-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221109/Ffe4/636b9140aeb269659c7fcff2/-1117Wx1400H-441146752-brown-MODEL3.jpg",
    ],
    gender: "Male",
    category: "tshirts",
  },

  {
    name: "Netplay",
    price: 499,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220721/RrBh/62d96e36f997dd03e2e758c9/-1117Wx1400H-441143811-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220721/cmWH/62d96f27aeb26921af8c9ef9/-1117Wx1400H-441143811-black-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220721/kVOY/62d972e3f997dd03e2e77325/-1117Wx1400H-441143811-black-MODEL3.jpg",
    ],
    gender: "Male",
    category: "tshirts",
  },
  {
    name: "Ketch",
    price: 499,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220312/JQy1/622bc0cef997dd03e20f0929/-473Wx593H-469157903-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220312/47Y1/622b9f11f997dd03e20e69fb/-473Wx593H-469157903-black-MODEL7.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220312/47Y1/622b9f11f997dd03e20e69fb/-473Wx593H-469157903-black-MODEL7.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    name: "Addidas",
    price: 799,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230920/K50V/650adb82ddf7791519e98ac4/-1117Wx1400H-469550892-bblue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230920/G51p/650adb27ddf7791519e989d1/-1117Wx1400H-469550892-bblue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230920/jyVc/650ada35ddf7791519e9855b/-1117Wx1400H-469550892-bblue-MODEL3.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },

  {
    id: 3,
    name: "John Players",
    price: 1299,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231020/kewx/6532adf5afa4cf41f555ae18/-473Wx593H-443011545-red-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231020/jL9l/653297feddf77915194e8139/-473Wx593H-443011545-red-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231020/jL9l/653297feddf77915194e814c/-1117Wx1400H-443011545-red-MODEL5.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 4,

    name: "Crocodile",
    price: 2299,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230908/aoyY/64fb25a5ddf7791519c745fe/-473Wx593H-466551364-maroon-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/Ykf5/64fb25a5ddf7791519c745c5/-1117Wx1400H-466551364-maroon-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/5fbp/64fb25a5ddf7791519c745b1/-1117Wx1400H-466551364-maroon-MODEL6.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 4,

    name: "Netplay",
    price: 299,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230704/9icS/64a4331eeebac147fc4b47dc/-1117Wx1400H-443009934-olivegreen-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230704/VEaG/64a44746a9b42d15c9349b04/-1117Wx1400H-443009934-olivegreen-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230704/0utY/64a441a6eebac147fc4b9787/-1117Wx1400H-443009934-olivegreen-MODEL3.jpg",
    ],
    gender: "Male",
    category: "tshirts",
  },
  {
    id: 5,

    name: "Snitch",
    price: 799,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231127/ypK6/65647000ddf77915199f2b40/-473Wx593H-466828015-white-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231127/7k65/65647000ddf77915199f2af7/-1117Wx1400H-466828015-white-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231127/ypK6/65647000ddf77915199f2b40/-473Wx593H-466828015-white-MODEL.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 6,
    name: "Allen Solly",
    price: 1399,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230328/axvz/642314ba711cf97ba7f70117/-1117Wx1400H-441936146-navy-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230328/list/6422ffaf907deb497ab761f2/-1117Wx1400H-441936146-navy-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230328/p4ES/64231268907deb497ab7f842/-1117Wx1400H-441936146-navy-MODEL3.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 7,

    name: "Allen Solly",
    price: 2199,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230717/v8Gg/64b56e38a9b42d15c95b583f/-473Wx593H-442187551-maroon-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230717/OEUy/64b5740fa9b42d15c95bbea9/-1117Wx1400H-442187551-maroon-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230717/v8Gg/64b56e38a9b42d15c95b583f/-473Wx593H-442187551-maroon-MODEL.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 8,
    name: "John Players",
    price: 1799,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230921/URNH/650c6dbeddf7791519f085a9/-1117Wx1400H-443010706-rust-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230921/AjQ5/650c55e6afa4cf41f5f9b64d/-1117Wx1400H-443010706-rust-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230921/4Jnq/650c5cd6afa4cf41f5f9d68e/-1117Wx1400H-443010706-rust-MODEL3.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    name: "ADIDAS-ORIGINALS",
    price: 2800,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221028/4qoa/635beef0aeb269659c631ac8/-473Wx593H-469206637-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221028/KPiO/635c0f58aeb269659c64194d/-1117Wx1400H-469206637-blue-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221028/OicW/635bf41df997ddfdbd48c5a2/-1117Wx1400H-469206637-blue-MODEL5.jpg",
    ],
    gender: "Male",
    category: "shoes",
  },
  {
    name: "NIKE-AIRMAX",
    price: 3000,
    description:
      "Here's to new beginnings between you and the pavement. Lace up the 100% recycled laces.",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231030/VSLm/653f9817afa4cf41f56882c9/-473Wx593H-469551556-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231030/OC1K/653f9540afa4cf41f568705c/-1117Wx1400H-469551556-black-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231030/NpWH/653f9961afa4cf41f5688aa4/-473Wx593H-469551556-black-MODEL5.jpg",
    ],
    gender: "Female",
    category: "shoes",
  },

  {
    name: "BUCIK",
    price: 900,
    description:
      "Crafted with meticulous attention to detail, these shoes effortlessly blend classic aesthetics with innovative features",
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230908/Bovk/64fa26edafa4cf41f5d135a5/-1117Wx1400H-466545438-brown-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/0lCo/64fa2702afa4cf41f5d13681/-1117Wx1400H-466545438-brown-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230908/RuJK/64fa2702afa4cf41f5d1365b/-473Wx593H-466545438-brown-MODEL7.jpg",
    ],
    gender: "Male",
    category: "shoes",
  },

  {
    id: 9,
    name: "John Players",
    price: 1199,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220114/AY2U/61e19a51aeb2695cdd15bdbc/-1117Wx1400H-441129993-navy-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220114/6tYP/61e19441aeb2695cdd15aec0/-1117Wx1400H-441129993-navy-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220114/jNDS/61e19346f997dd66232210ed/-1117Wx1400H-441129993-navy-MODEL3.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 10,
    name: "John Players",
    price: 1199,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221122/bwUJ/637ced76f997ddfdbd8ef74a/-473Wx593H-441148523-white-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221122/i2Zt/637cf6b1aeb269659ca7180a/-1117Wx1400H-441148523-white-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221122/3pEf/637ce414aeb269659ca6bd9f/-1117Wx1400H-441148523-white-MODEL2.jpg",
    ],
    gender: "Male",
    category: "Shirts",
  },
  {
    id: 11,
    name: "DNMX",
    price: 799,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230519/axw8/6467b058d55b7d0c63ca29dd/-1117Wx1400H-443014940-wine-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230519/tdQN/6467ae7bd55b7d0c63ca2032/-1117Wx1400H-443014940-wine-MODEL3.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230519/fVkP/6467896c42f9e729d79ced42/-1117Wx1400H-443014940-wine-MODEL4.jpg",
    ],
    gender: "Female",
    category: "Shirts",
  },
  {
    name: "PUMA RUNNING SHOES",
    price: 500,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/h43/hc6/14289224073246/-1117Wx1400H-460484178-multi-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230612/6F6I/64869f6d42f9e729d736fa28/-473Wx593H-460484178-multi-MODEL9.jpg",
      "https://assets.ajio.com/medias/sys_master/root/h43/hc6/14289224073246/-1117Wx1400H-460484178-multi-MODEL.jpg",
    ],
    gender: "Female",
    category: "shoes",
  },
  {
    name: "ARBUNORE",
    price: 830,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20220927/TIOv/63332434f997dd1f8d207156/-1117Wx1400H-469049257-beige-MODEL6.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220927/TZ26/63332d87aeb269dbb3aaf137/-1117Wx1400H-469049257-beige-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20220927/XirR/63332ab5aeb269dbb3aae3ff/-473Wx593H-469049257-beige-MODEL8.jpg",
    ],
    gender: "Female",
    category: "shoes",
  },
  {
    name: "NEW BALANCE",
    price: 2300,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230215/fH5h/63ecf318f997dde6f4aa4e22/-1117Wx1400H-469224797-pink-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230215/9wz8/63ed01a8f997dde6f4aaaa1c/-1117Wx1400H-469224797-pink-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230215/u9WO/63ecfe3ff997dde6f4aa93b6/-473Wx593H-469224797-pink-MODEL5.jpg",
    ],
    gender: "Female",
    category: "shoes",
  },
  {
    name: "Jack & Jones",
    price: 1300,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20210316/quE9/6050cd63f997dd5c4013b8e3/-1117Wx1400H-460827893-blue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210211/TlOj/60242862f997dd5c40ed2dde/-1117Wx1400H-460827893-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20210211/nDr9/60242d19f997dd5c40ed3e53/-1117Wx1400H-460827893-blue-MODEL3.jpg",
    ],
    gender: "Male",
    category: "jeans",
  },
  {
    name: "John Players",
    price: 999,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20230916/ITkt/6504bf06afa4cf41f5ea55ec/-1117Wx1400H-466585759-blue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230916/BsE2/6504bf06afa4cf41f5ea5628/-1117Wx1400H-466585759-blue-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230916/ag1k/6504bf06afa4cf41f5ea5626/-1117Wx1400H-466585759-blue-MODEL3.jpg",
    ],
    gender: "Male",
    category: "jeans",
  },
  {
    name: "Jack & Jones",
    price: 1200,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20221216/sgqU/639c810df997ddfdbdd86e3c/-1117Wx1400H-441148466-white-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221216/5PWV/639c9807f997ddfdbdda8322/-1117Wx1400H-441148466-white-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20221216/aVeQ/639c8109aeb269659cee0804/-1117Wx1400H-441148466-white-MODEL3.jpg",
    ],
    gender: "Male",
    category: "jeans",
  },
  {
    id: 12,
    name: "DNMX",
    price: 1299,
    images: [
      "https://assets.ajio.com/medias/sys_master/root/20231016/wVjT/652d43e4afa4cf41f5486270/-1117Wx1400H-466714782-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231016/yHpi/652d43e4afa4cf41f54862b1/-1117Wx1400H-466714782-black-MODEL2.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20231016/v56J/652d43e4afa4cf41f54862b3/-1117Wx1400H-466714782-black-MODEL3.jpg",
    ],
    gender: "Female",
    category: "Shirts",
  },
];

export default Shirts;
