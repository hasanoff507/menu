export interface CategoryType {
    id: number;
    name: string;
    category: string;
}

export const Category: CategoryType[] = [
    {
        id: 1,
        name: 'одежда',
        category: 'одежда'
    },
    {
        id: 2,
        name: 'Обувь',
        category: 'Обувь'
    },
    {
        id: 3,
        name: 'Аксессуары',
        category: 'Аксессуары'
    },
    {
        id: 4,
        name: 'Женская',
        category: 'Женская'
    },
    {
        id: 5,
        name: 'Мужская',
        category: 'Мужская'
    },
    {
        id: 6,
        name: 'Детская',
        category: 'Детская'
    },
    {
        id: 7,
        name: 'Красота',
        category: 'Красота'
    },
    {
        id: 8,
        name: `Гигиена`,
        category: `Гигиена`
    },
    {
        id: 9,
        name: `Электроника`,
        category: `Электроника`
    },
    {
        id: 10,
        name: `Спорт`,
        category: `Спорт`
    },
    {
        id: 11,
        name: `Автомобили`,
        category: `Автомобили`
    },
    {
        id: 12,
        name: `Автотовары`,
        category: `Автотовары`
    },
    {
        id: 13,
        name: `Строительство`,
        category: `Строительство`
    },
    {
        id: 14,
        name: `Для дома`,
        category: `Для дома`
    },
    {
        id: 15,
        name: `Дети`,
        category: `Дети`
    },
    {
        id: 16,
        name: `Продукты`,
        category: `Продукты`
    },
    {
        id: 17,
        name: `Книги`,
        category: `Книги`
    },
    {
        id: 18,
        name: `Мебель`,
        category: `Мебель`
    },
    {
        id: 19,
        name: `Продукты`,
        category: `Продукты`
    },
    {
        id: 20,
        name: `Спорт`,
        category: `Спорт`
    },
    {
        id: 21,
        name: `Канцтовары`,
        category: `Канцтовары`
    },
    {
        id: 22,
        name: `Антиквариат`,
        category: `Антиквариат`
    },
    {
        id: 23,
        name: `Туризм`,
        category: `Туризм`
    },
    {
        id: 24,
        name: `Игры`,
        category: `Игры`
    },
    {
        id: 25,
        name: `Для животных`,
        category: `Для животных`
    },
    {
        id: 26,
        name: `Цветы`,
        category: `Цветы`
    },



]








//Clothes
export interface ClothesType {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const Clothes: ClothesType[] = [
    {
        id: 1,
        title: 'T-Shirt',
        price: 150,
        image: 'https://i.pinimg.com/564x/ab/e7/52/abe7524caa3d81f50160559ef7a5d2b2.jpg',
    },
    {
        id: 2,
        title: 'T-Shirt',
        price: 110,
        image: 'https://i.pinimg.com/564x/27/4b/7c/274b7cc965a84f1d2ca7aac5ae1cd4fe.jpg',
    },
    {
        id: 3,
        title: 'T-Shirt',
        price: 180,
        image: 'https://i.pinimg.com/564x/ab/e7/52/abe7524caa3d81f50160559ef7a5d2b2.jpg',
    },
    {
        id: 4,
        title: 'T-Shirt',
        price: 160,
        image: 'https://i.pinimg.com/564x/20/92/90/20929014ff2e5363ef738fa1ad16a482.jpg',
    },
    {
        id: 5,
        title: 'T-Shirt',
        price: 90,
        image: 'https://i.pinimg.com/564x/4b/fe/f2/4bfef25b1ae666b90b2d198c894fb4a3.jpg',
    },
    {
        id: 6,
        title: 'Shirt',
        price: 190,
        image: 'https://i.pinimg.com/564x/1f/ed/b2/1fedb2185b0882bf4c54bb292546668e.jpg',
    },
    // {
    //     id: 7,
    //     title: 'Shirt',
    //     price: 140,
    //     image: 'https://i.pinimg.com/564x/ee/e7/dc/eee7dcea9189e933d17aeedb7c8f64bd.jpg',
    // },
    {
        id: 8,
        title: 'Shirt',
        price: 140,
        image: 'https://i.pinimg.com/564x/06/b5/4f/06b54fe9526407981052a6226078dea6.jpg',
    },
    {
        id: 9,
        title: 'shirt',
        price: 200,
        image: 'https://i.pinimg.com/564x/b4/28/45/b42845f72d5c8d5bd103e825f59a4aa5.jpg',
    },
    {
        id: 10,
        title: 'shirt',
        price: 180,
        image: 'https://i.pinimg.com/564x/ad/3e/35/ad3e357deb01285864d79a8e61f85b6e.jpg',
    },
    {
        id: 11,
        title: 'T-shirt',
        price: 150,
        image: 'https://i.pinimg.com/564x/74/c1/19/74c11943b875a4d84a453aacfc16b8aa.jpg',
    },
]
export interface PercentType {
    id: number;
    title: string;
    price: number;
    image: string;
}

export const Percent: PercentType[] = [
    {
        id: 1,
        title: 'T-Shirt',
        price: 150,
        image: 'https://i.pinimg.com/564x/27/4b/7c/274b7cc965a84f1d2ca7aac5ae1cd4fe.jpg',

    },
    {
        id: 2,
        title: 'T-Shirt',
        price: 110,
        image: 'https://i.pinimg.com/564x/ab/e7/52/abe7524caa3d81f50160559ef7a5d2b2.jpg',

    },
    {
        id: 3,
        title: 'T-Shirt',
        price: 180,
        image: 'https://i.pinimg.com/564x/20/92/90/20929014ff2e5363ef738fa1ad16a482.jpg',

    },
    {
        id: 4,
        title: 'T-Shirt',
        price: 160,
        image: 'https://i.pinimg.com/564x/4b/fe/f2/4bfef25b1ae666b90b2d198c894fb4a3.jpg',


    },
    {
        id: 5,
        title: 'T-Shirt',
        price: 90,
        image: 'https://i.pinimg.com/564x/ab/e7/52/abe7524caa3d81f50160559ef7a5d2b2.jpg',

    },
    {
        id: 6,
        title: 'Shirt',
        price: 190,
        image: 'https://i.pinimg.com/564x/06/b5/4f/06b54fe9526407981052a6226078dea6.jpg',

    },
    // {
    //     id: 7,
    //     title: 'Shirt',
    //     price: 140,
    //     image: 'https://i.pinimg.com/564x/ee/e7/dc/eee7dcea9189e933d17aeedb7c8f64bd.jpg',
    // },
    {
        id: 8,
        title: 'Shirt',
        price: 140,
        image: 'https://i.pinimg.com/564x/b4/28/45/b42845f72d5c8d5bd103e825f59a4aa5.jpg',


    },
    {
        id: 9,
        title: 'shirt',
        price: 200,
        image: 'https://i.pinimg.com/564x/1f/ed/b2/1fedb2185b0882bf4c54bb292546668e.jpg',

    },
    {
        id: 10,
        title: 'shirt',
        price: 180,
        image: 'https://i.pinimg.com/564x/74/c1/19/74c11943b875a4d84a453aacfc16b8aa.jpg',

    },
    {
        id: 11,
        title: 'T-shirt',
        price: 150,
        image: 'https://i.pinimg.com/564x/ad/3e/35/ad3e357deb01285864d79a8e61f85b6e.jpg',

    },
]


//Region
export interface RegionType {
    id: number;
    name: string;
    category: string;
}

export const Region: RegionType[] = [
    {
        id: 1,
        name: 'Андижан',
        category: 'Андижан'
    },
    {
        id: 2,
        name: 'Бухара',
        category: 'Бухара'
    },
    {
        id: 3,
        name: 'Гулистан',
        category: 'Гулистан'
    },
    {
        id: 4,
        name: 'Джиззак',
        category: 'Джиззак'
    },
    {
        id: 5,
        name: 'Наманган',
        category: 'Наманган'
    },
    {
        id: 6,
        name: 'Нукус',
        category: 'Нукус'
    },
    {
        id: 7,
        name: 'Самарканд',
        category: 'Самарканд'
    },
    {
        id: 8,
        name: 'Ташкент',
        category: 'Ташкент'
    },
    {
        id: 9,
        name: 'Термез',
        category: 'Термез'
    },
    {
        id: 10,
        name: 'Ургенч',
        category: 'Ургенч'
    },
    {
        id: 11,
        name: 'Фергана',
        category: 'Фергана'
    },
]


export interface TimeType {
    id: number;
    name: string;
    category: string;
}

export const Time: TimeType[] = [
    {
        id: 1,
        name: 'В любое время',
        category: 'В любое время'
    },
    {
        id: 2,
        name: 'С утра',
        category: 'С утра'
    },
    {
        id: 3,
        name: 'До обеда',
        category: 'До обеда'
    },
    {
        id: 4,
        name: 'Во время обеда',
        category: 'Во время обеда'
    },
    {
        id: 5,
        name: 'После обеда',
        category: 'После обеда'
    },
    {
        id: 6,
        name: 'Во время ужина',
        category: 'Во время ужина'
    },
    {
        id: 7,
        name: 'После ужина',
        category: 'После ужина'
    },
    {
        id: 8,
        name: 'Перед сном',
        category: 'Перед сном'
    },
    {
        id: 9,
        name: 'Ночью',
        category: 'Ночью'
    },
]

export interface AgeType {
    id: number;
    min: number;
    max: number
}

export const Age: AgeType[] = [
    {
        id: 1,
        min: 0,
        max: 10,
    },
    {
        id: 2,
        min: 10,
        max: 20,
    },
    {
        id: 3,
        min: 20,
        max: 30,
    },
    {
        id: 4,
        min: 30,
        max: 40,
    },
    {
        id: 5,
        min: 40,
        max: 50,
    },
    {
        id: 6,
        min: 50,
        max: 60,
    },
    {
        id: 7,
        min: 60,
        max: 70,
    },
    {
        id: 8,
        min: 70,
        max: 80,
    },

]