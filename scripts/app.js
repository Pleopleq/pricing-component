function check(){
    const switchPrice = document.getElementById('price').checked;
    const lowPrice = document.querySelector('.lowPrice');
    const highPrice = document.querySelector('.highPrice');
    const lowPriceP = document.querySelector('.lowPriceP');
    const highPriceP = document.querySelector('.highPriceP');
    const lowPriceM = document.querySelector('.lowPriceM');
    const highPriceM = document.querySelector('.highPriceM');
    
    if (switchPrice){
        highPrice.style.display = 'none';
        lowPrice.style.display = 'block'
        highPriceP.style.display = 'none';
        lowPriceP.style.display = 'block'
        highPriceM.style.display = 'none';
        lowPriceM.style.display = 'block'
    } else {
        lowPrice.style.display = 'none'
        highPrice.style.display = 'block';
        lowPriceP.style.display = 'none'
        highPriceP.style.display = 'block';
        lowPriceM.style.display = 'none'
        highPriceM.style.display = 'block';
    }

}
