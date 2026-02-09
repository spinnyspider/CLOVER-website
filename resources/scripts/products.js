// basically fetches products from a JSON file and i dont have to cry over it all the time (i think)
async function loadProducts() {
  try {
    // Fetch the JSON file
    const response = await fetch("../resources/products.json");
    const products = await response.json();
    
    // find container
    const container = document.querySelector('.products');
    container.innerHTML = '';
    // create a card for each product
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <p class="title">${product.title}</p>
        <p>${product.description}</p>
        <div class="footer">
          <span class="price">${product.price}</span>
          <a href="mailto:cloverfirma@gmail.com?subject=Objednávka: ${encodeURIComponent(product.title)}&body=Ahoj! Chcel/a by som objednať ${encodeURIComponent(product.title)} (${encodeURIComponent(product.price)})!" class="order">Objednať</a>
        </div>
      `;
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error("Oops! Couldn't load products:", error);
    // Show error message to user
    const container = document.querySelector('.products');
    container.innerHTML = '<div class="error">Products loading... please refresh! This may also be an issue on our end.</div>';
  }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadProducts);