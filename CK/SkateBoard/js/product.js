function createProducts() {
   if (localStorage.getItem('product') == null) {
      let product= [
         {
            id: 1,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Best sale',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 2,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/bones.png",
            category: 'Protective',
            price: 460000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 3,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/choc.png",
            category: 'Best sale',
            price: 550000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 4,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/dgk.png",
            category: 'Protective',
            price: 890000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 5,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/girl.png",
            category: 'Best sale',
            price: 950000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 6,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/heroin.png",
            category: 'Skateboard decks',
            price: 650000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 7,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/jage.png",
            category: 'Skateboard decks',
            price: 440000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 8,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/rock.png",
            category: 'Protective',
            price: 300000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 9,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/speed.png",
            category: 'Skateboard decks',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 10,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/there.png",
            category: 'Skateboard decks',
            price: 789000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 11,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/speed.png",
            category: 'Best sale',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 13,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/speed1.png",
            category: 'Best sale',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 14,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/toyoda.png",
            category: 'Best sale',
            price: 490000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 15,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Longboard Decks',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 16,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Longboard Decks',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 17,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Longboard Decks',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 18,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Longboard Decks',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 19,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Skateboard Wheels',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
         {
            id: 20,
            status: 1,
            title:'Santa Croz',
            img: "/img/products/antihero.png",
            category: 'Skateboard Wheels',
            price: 450000,
            desc: 'JACUZZI BERRY PEPPER GRINDER DECK-8.25 ORANGE.'
         },
      
      ]
      localStorage.getItem('product', JSON.stringify(product));
   }
}

window.onload = createProducts();