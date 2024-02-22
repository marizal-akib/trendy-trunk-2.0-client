const getToCart = () =>{
    const cartProduct = localStorage.getItem('cart')

    if (cartProduct) {

       return JSON.parse(cartProduct)
    }return [];
}








const saveTOCart = cart => {

    const cartProduct = getToCart();

    cartProduct.push(cart);
    localStorage.setItem('cart', JSON.stringify(cartProduct) )
}

export {getToCart, saveTOCart}