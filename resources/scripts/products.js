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
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <div class="footer">
          <span class="price">${product.price}</span>
          <button class="order">Request</button>
        </div>
      `;
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error("Oops! Couldn't load products:", error);
    // Optional: Show error message to user
    const container = document.querySelector('.products');
    container.innerHTML = '<div class="error">Products loading... please refresh! This may also be an issue on our end.</div>';
  }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadProducts);