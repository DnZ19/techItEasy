// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];



// const soldTVArray = inventory.map(( soldTv ) => {
//     return soldTv.sold;
// });
//
// // console.log(soldTVArray);
//
// let soldTvs = 0;
// for (let i = 0; i < soldTVArray.length; i++) {
//     soldTvs += soldTVArray[i];
// }
//
// console.log(soldTvs);

// ................ amount of soled tv's:

const tvSales = (( tvSale ) =>   {
    let outcome = 0;
    for (let i = 0; i < tvSale.length; i++) {
        outcome += tvSale[i].sold;
    } return outcome;
});

const soldTvs = tvSales(inventory);

console.log( soldTvs );


const soldTvsInfo = document.getElementById("tv-sales");
soldTvsInfo.textContent = "Amount of sold tv's: " + soldTvs;


// ................. amount of purchased tv's

const purchasedTvs = (( purchasedTv ) => {

    let outcome = 0;
    for (let i = 0; i < purchasedTv.length; i++) {
        outcome += purchasedTv[i].originalStock;
    } return outcome;

});

const tvPurchases = purchasedTvs(inventory);

console.log( tvPurchases );

const purchasedTvInfo = document.getElementById("tv-purchases");
purchasedTvInfo.textContent = "Amount of tv's purchased for stock: " + tvPurchases;


// ..................total still to sell tv's

function realInventory() {
    return tvPurchases - soldTvs;
}

const tvsToSell = document.getElementById("tv-sales-to-make");
tvsToSell.textContent = "Tv's still to sell: " + realInventory();

// ..................

function createBrandElement ( inventory ) {
    const listOfTvBrands = document.getElementById("tv-brands");
    inventory.map(( inventory ) => {
        listOfTvBrands.innerHTML += `<li>${inventory.brand}</li>`
    });
}

createBrandElement( inventory );