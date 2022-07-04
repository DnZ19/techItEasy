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

// const newStringArray = inventory.map(( newString ) => {
//
//     return inventory.brand + inventory.type + "-" + inventory.name;
//
// });
//
// function newString(){
//     return newStringArray.join("");
// }
//
// console.log(newStringArray);



function brandAndType( input )    {
    return inventory[input].brand + " " + inventory[input].type + " - " + inventory[input].name;
}

const tvBrandAndType = document.getElementById("brand-type");
tvBrandAndType.textContent = brandAndType(3)

// console.log(brandAndType( 1 ));

function tvPrice( input )   {
    const tvPriceFormat = inventory[input].price
    return "€ " + Math.round(tvPriceFormat) + ",-";
}

const tvPriceSet = document.getElementById("price");
tvPriceSet.textContent = tvPrice(3);

// console.log(tvPrice(0));

// function screenSizes( input )   {
//     const screenSize = inventory[input].availableSizes
//     for (let i = 0; i < inventory; i++) {
//
//     }
// }
// const outcome = inventory[0].availableSizes.map((screenSize) => {
//
//     return `Screen sizes are: ${screenSize} inches | In centimeters: ${screenSize * 2.54} cm`;
//
// })
//
// // console.log( outcome );
//
// const screenSizesTv = document.getElementById("tv-sizes");
// screenSizesTv.textContent = outcome;


function availableScreenSizes ( input ){
    let size = "";

    for (let i = 0; i < input.length; i++) {
        const sizeInInch = input[i];
        const sizeInCM = input[i] * 2.54;
        //const stringScreenSize = `Screen sizes are: ${sizeInInch} inch | In centimeters that is: ${sizeInCM} cm`;
        size = size + sizeInInch + ` inch | In centimeters that is: ${sizeInCM} cm \n`

    }   return size;

}

const screenSizesTv = document.getElementById("tv-sizes");
screenSizesTv.textContent = availableScreenSizes(inventory[3].availableSizes);

