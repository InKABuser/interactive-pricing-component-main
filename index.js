const rangeSlider = document.getElementById('slider');
const rangeValue = document.querySelector('#views');
const yearlyToggle= document.getElementById('toggle');
const rangeCash = document.getElementById('price');


let prices = ['8', '12', '16', '24', '36']


rangeSlider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
    slider.style.background = color;
    updatePrice();
})

rangeSlider.addEventListener("touchmove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
    slider.style.background = color;
    updatePrice();
})

yearlyToggle.addEventListener('click', (e) => {
    if (e.target.checked) {
        const yearlyPrices = prices.map(x => x*0.75);
        prices = yearlyPrices
    } else {
        prices = ['8', '12', '16', '24', '36']
    }
    updatePrice();
})

const updatePrice = () => {
    switch(rangeSlider.value) {
        case '0':
            rangeValue.innerHTML = '10K'
            rangeCash.innerHTML = `$${prices[0]}.00`;
            break;
        case '1':
            rangeValue.innerHTML = '50K'
            rangeCash.innerHTML = `$${prices[1]}.00`;
            break;
        case '2': 
            rangeValue.innerHTML = '100K'
            rangeCash.innerHTML = `$${prices[2]}.00`;
            break;
        case '3':
            rangeValue.innerHTML = '500K'
            rangeCash.innerHTML = `$${prices[3]}.00`;
            break;
        case '4':
            rangeValue.innerHTML = '1M';
            rangeCash.innerHTML = `$${prices[4]}.00`;
            break;
    }    
    
}
 updatePrice();

rangeSlider.oninput = updatePrice();
