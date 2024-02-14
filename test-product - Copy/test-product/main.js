function addNewProduct() {
    const productIn = document.getElementById('product-input').value
    const productL = document.getElementById('product-list')
    const createDiv = document.createElement('div')
    const createP = document.createElement('p')
    const removeBt = document.createElement('button')
    createDiv.setAttribute('id', productIn)
    createDiv.setAttribute('class', 'product-item')
    createP.textContent = productIn
    createDiv.appendChild(createP)
    removeBt.textContent = 'remove'
    removeBt.addEventListener('click', () => {
        removeProduct(productIn);
    });
    createDiv.appendChild(removeBt)
    productL.appendChild(createDiv)
}
 
 
function removeProduct(productId) {
    const productElement = document.getElementById(productId);

    if (productElement) {
        const productListContainer = document.getElementById('product-list');
        productListContainer.removeChild(productElement);
    }
}
 
 
function removeAllProduct() {
    const productL = document.getElementById('product-list')
    productL.textContent = ''
}
 
function registerEvent() {
    const addBt = document.getElementById('add-button')
    const removeAllBt = document.getElementById('removeAll-button')
    addBt.addEventListener('click', addNewProduct)
    removeAllBt.addEventListener('click', removeAllProduct)
}
 
registerEvent()