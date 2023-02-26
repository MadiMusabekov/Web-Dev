export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    link: string;
    likes: number;
    category: string;
}

export const products = [
    {
        id: 1,
        name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
        price: 200,
        description: 'A large phone',
        rating: 10,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
        likes: 0,
        category: 'Phones'
    },

    {
        id: 2,
        name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
        price: 233,
        description: 'A great phone with one of the best cameras',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
        likes: 0,
        category: 'Phones'
    },

    {
        id: 3,
        name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
        price: 311,
        description: 'A great phone with one of the best cameras',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg",
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
        likes: 0,
        category: 'Phones'
    },

    {
        id: 4,
        name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
        price: 656,
        description: 'A great phone with one of the best cameras',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
        link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
        likes: 0,
        category: 'Phones'
    },
    {
        id: 5,
        name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
        price: 161,
        description: 'A great phone with one of the best cameras',
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg",
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
        likes : 0,
        category: 'Phones'
    },

    {
        id: 6,
        name: 'Decathlon Kalenji Run 100 8351755',
        price: 9400,
        description: 'Good shoes',
        rating: 10,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9e/h06/44866526314526/decathlon-kalenji-run-100-8351755-102135789-1.jpg',
        link: 'https://kaspi.kz/shop/p/decathlon-kalenji-run-100-8351755-serye-ru-48-100191954/?c=750000000#!/item',
        likes: 0,
        category: 'Shoes'
    },
  {
    id: 7,
    name: 'TimeJump M5251174 черный 42',
    price: 12990,
    description: 'Good shoes for running',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h27/62716097036318/timejump-m5251174-cernyj-106587920-1.jpg',
    link: 'https://kaspi.kz/shop/p/timejump-m5251174-chernyi-42-106587928/?c=750000000#!/item',
    likes: 0,
    category: 'Shoes'
  },
  {
    id: 8,
    name: 'T.TACCARDI M0351000 синий RU 41',
    price: 3990,
    description: 'Slippers',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h99/48189316038686/t-taccardi-m0351000-103398122-1jpg.jpg',
    link: 'https://kaspi.kz/shop/p/t-taccardi-m0351000-sinii-ru-41-103279807/?c=750000000#!/item',
    likes: 0,
    category:'Shoes'
  },
  {
    id: 9,
    name: 'Кроссовки Easy cross-fly-black209 черный 42',
    price: 5000,
    description: 'Good shoes black',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h11/67224483954718/easy-cross-fly-black209-41-chernyi-108189826-1.jpg',
    link: 'https://kaspi.kz/shop/p/easy-cross-fly-black209-chernyi-42-108189828/?c=750000000#!/item',
    likes: 0,
    category: 'Shoes'
  },
  {
    id: 10,
    name: 'Easy FZ2D черный 39',
    price: 13900,
    description: 'Good running shoes',
    rating: 9,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/hc4/62171354431518/easy-fz-2d-cernyj-106302817-1.jpg',
    link: 'https://kaspi.kz/shop/p/easy-fz-2d-chernyi-39-106302821/?c=750000000#!/item',
    likes: 0,
    category: 'Shoes'
  },
  {
    id: 11,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239000,
    description: 'Good laptop',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    link: 'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    likes: 0,
    category: 'Laptops'
  },
  {
    id: 12,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: 'Good gaming laptop',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    likes: 0,
    category: 'Laptops'
  },
  {
    id: 13,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169900,
    description: 'Good budget laptop',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    likes: 0,
    category: 'Laptops'
  },
  {
    id: 14,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480500,
    description: 'Good Apple laptop',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    likes: 0,
    category: 'Laptops'
  },
  {
    id: 15,
    name: 'Наборы игрушек Лесная мастерская Набор Маленький доктор SDD0195',
    price: 5954,
    description: 'Toy collection',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf6/h97/48047563997214/lesnaa-masterskaa-nabor-malenkij-doktor-103336486-1.jpg',
    link: 'https://kaspi.kz/shop/p/lesnaja-masterskaja-nabor-malen-kii-doktor-sdd0195-103336486/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },
  {
    id: 16,
    name: 'Наборы игрушек HOLA Кинетический песок с бассейном GD279G145',
    price: 2650,
    description: 'Toy sand',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/ha0/49528586305566/hola-kineticheskii-pesok-1-kg-s-basseinom-6-formochek-gd279g145-104208314-1.jpg',
    link: 'https://kaspi.kz/shop/p/hola-kineticheskii-pesok-s-basseinom-gd279g145-104208314/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },
  {
    id: 17,
    name: 'Наборы игрушек Marvel Человек паук 00308\n',
    price: 2711,
    description: 'Spider man toy mask',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/hdd/49858973401118/marvel-chelovek-pauk-maska-perchatki-00308-104381456-1.jpg',
    link: 'https://kaspi.kz/shop/p/marvel-chelovek-pauk-00308-104381456/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },
  {
    id: 18,
    name: 'Наборы игрушек Wooden Play Kitchen Кухня японская 123422021Store4kids',
    price: 34495,
    description: 'Toy kitchen',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h30/50319131672606/wooden-play-kitchen-kukhnya-yaponskaya-72-cm-101454965-1.jpg',
    link: 'https://kaspi.kz/shop/p/wooden-play-kitchen-kuhnja-japonskaja-123422021store4kids-101454965/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },
  {
    id: 19,
    name: 'Наборы игрушек Talented Chef Кухня 889-187',
    price: 19999,
    description: 'Toy collection kitchen',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h26/67112491745310/talented-chef-mogern-kitchen-889-187-102937458-1.jpg',
    link: 'https://kaspi.kz/shop/p/talented-chef-kuhnja-889-187-102937458/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },
  {
    id: 20,
    name: 'Наборы игрушек HAIWEGO Деревянная кухня 01122021_21',
    price: 57491,
    description: 'Toy kitchen',
    rating: 10,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc7/h1c/47604878540830/haiwego-derevannaa-kuhna-01122021-21-103085485-1.jpg',
    link: 'https://kaspi.kz/shop/p/haiwego-derevjannaja-kuhnja-01122021-21-103085485/?c=750000000#!/item',
    likes: 0,
    category: 'Toys'
  },

];
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/