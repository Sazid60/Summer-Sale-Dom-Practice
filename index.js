// console.log(alert('PukOff'))

//common Functions
let titleCount = 1;
let totalPrice = 0;

function getElementTextById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldInnerText = elementField.innerText;
    return elementFieldInnerText;
}

const allCards = document.getElementsByClassName('card');

// console.log(allCards);

for (card of allCards) {
    // console.log(card)
    card.addEventListener('click', function (event) {
        const target = event.target.parentNode.childNodes[3].childNodes[3];
        const title = target.innerText;
        // console.log(title)
        const target2 = event.target.parentNode.childNodes[3].childNodes[5];
        // console.log(target2.innerText)
        const prePrice = target2.innerText.split(' ')[1]
        const price = parseFloat(prePrice)
        console.log(price, title)

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + '.' + title;
        titleContainer.appendChild(p)
        titleCount++;

        // calculate Price
        totalPrice += price;
        console.log(totalPrice)
        document.getElementById('totalPrice').innerText = totalPrice;
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    // console.log('tepo')
    const couponElement = document.getElementById('input-field').value;
    console.log(couponElement)
    const couponCode = couponElement.split(' ').join('').toUpperCase();
    console.log(couponCode)
    if (totalPrice >= 200) {
        // console.log('discount paisso mama')
        if (couponCode === 'SELL200') {
            const discountField = document.getElementById('discountPrice')
            const discountAmount = totalPrice * 0.2;
            discountField.innerText = discountAmount.toFixed(2);

            const restTotal = document.getElementById('total')
            restTotal.innerText = totalPrice - discountAmount ;
            document.getElementById('input-field').value = '';
        }
        else {
        alert('Invalid Coupon Code')
        }
    }
    else {
        console.log('tui eto kipta kn?')
    }
})

function blur(){
    var makeBlur = document.getElementById('blur');
    makeBlur.style.filter = 'blur(20px)';
}