 export const CardData = [
        {
            id: 1,
            date:"2021-4-2",
            title: 'Pizza ai funghi',
            text: 'Funghi is a variety of Italian pizza that is traditionally topped with tomato sauce, mozzarella cheese, mushrooms, oil, and parsley the cheeses should be mozzarella.',
            cost:  "$12",
            amount: 1,
            imgUrl: 'https://media.gettyimages.com/photos/slices-of-pizza-on-cooling-rack-on-white-background-picture-id1222248232?s=2048x2048',
        },
         {
            id: 2,
            date:"2021-3-5",
            title: 'Pizzette',
            text: "The dish is usually served as an appetizer, a quick snack, or a light meal. In Rome's bakeries,pizzette are often sold by weight  Hailing from 18th century Naples",
            cost: "$15",
            amount: 2,
            imgUrl: 'https://media.gettyimages.com/photos/pepperoni-pizza-picture-id1209036460?k=6&m=1209036460&s=612x612&w=0&h=4LFNNqiPiDG8fBWNbuA7VXctD7lwhpkUhnjMbmu5yBU='
        },
         {
            date:"2021-4-3",
            id: 3,
            title: 'Calzone Pizza',
            text: 'The name of this pizza literally translates to capricious, and seems quite appropriate, considering that the toppings tend to vary from one region to another. ',
            cost: "$9",
            amount: 3,
            imgUrl: 'https://media.gettyimages.com/photos/homemade-pizza-with-beer-picture-id1223648854?k=6&m=1223648854&s=612x612&w=0&h=Q0YdLL9Qtkfjap-05fiXdzZxOBEOVJAdnsCC9XaeuYo='
        },
         {
            id: 4,
            date:"2021-3-5",
            title: 'Pizza quattro',
            text: 'Quattro formaggi is a variety of Italian pizza topped with a combination of four kinds of cheese, as the name suggests. Traditionally, the cheeses should be mozzarella and three other tomato sauce, mozzarella cheese',
            cost: "$13",
            amount: 4,
            imgUrl: 'https://media.gettyimages.com/photos/homemade-pizza-with-artichoke-and-olives-picture-id521957926?k=6&m=521957926&s=612x612&w=0&h=9K0_ci39IGjmwaO_q3b4bQuXhc3fMZJPHWQLASneI68='
        },
        {
            id: 5,
            date:"2021-7-3",
            title: 'Caprese Pizza',
            text: 'This is a variety of Italian pizza that is traditionally topped with cherry tomatoes, mozzarella di bufala, olive oil, and fresh basil leaves  Hailing from 18th century Naples, calzone literally means pant leg.',
             cost: "$6",
            amount: 2,
            imgUrl: 'https://media.gettyimages.com/photos/top-view-of-mix-pizza-with-mozzarella-cheese-sausage-and-kind-of-on-picture-id1293807517?k=6&m=1293807517&s=612x612&w=0&h=uj6JoHm3cp1b2VgqoQQnRD8H2xyUXn-tUbgNZQygAOI='
        },
        {
            id: 6,
            date:"2021-8-9",
            title: 'Pizza marinara',
            text: 'Marinara is a Neapolitan pizza with a topping of tomatoes, oregano, garlic, extra virgin olive oil, and sometimes fresh basil alzones gained in popularity after being the central theme of an episode of the hit TV.',
             cost: "$16",
            amount: 5,
            imgUrl: 'https://media.gettyimages.com/photos/pizza-with-tomatoes-on-black-background-picture-id1293807473?k=6&m=1293807473&s=612x612&w=0&h=TWD8XrJOGsVxV_gVcvNVg51sDqLpVnqkcKhxqw8k8hM='
        },
    ];

    export const filterData =(title) => {
       return CardData.filter(data => data.title === title)
    }

    export const filterByDate =(date) => {
       return CardData.filter((data) => data.date === date)
    }

    export const filterByCost =(cost) => {
       return CardData.filter((data) => data.date === cost)
    }

    // const text = CardData.filter((item) => item.cost === 155);
    // text.length ? 1 && text.map((item) => {
    //     return item.cost
    // })