document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-container');
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');
    let autoScrollInterval;
  
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        const maxScrollLeft = productContainer.scrollWidth - productContainer.clientWidth;
        if (productContainer.scrollLeft >= maxScrollLeft) {
          productContainer.scrollLeft = 0;
        } else {
          productContainer.scrollLeft += productContainer.clientWidth / 4; // Ajusta este valor para cambiar la cantidad de desplazamiento
        }
      }, 4000); // Ajusta la velocidad del desplazamiento automático
    };
  
    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };
  
    nxtBtn.addEventListener('click', () => {
      stopAutoScroll();
      const maxScrollLeft = productContainer.scrollWidth - productContainer.clientWidth;
      if (productContainer.scrollLeft >= maxScrollLeft) {
        productContainer.scrollLeft = 0;
      } else {
        productContainer.scrollLeft += productContainer.clientWidth / 1; // Ajusta este valor para cambiar la cantidad de desplazamiento
      }
      startAutoScroll();
    });
  
    preBtn.addEventListener('click', () => {
      stopAutoScroll();
      if (productContainer.scrollLeft <= 0) {
        productContainer.scrollLeft = productContainer.scrollWidth - productContainer.clientWidth;
      } else {
        productContainer.scrollLeft -= productContainer.clientWidth / 1; // Ajusta este valor para cambiar la cantidad de desplazamiento
      }
      startAutoScroll();
    });
  
    productContainer.addEventListener('mouseenter', stopAutoScroll);
    productContainer.addEventListener('mouseleave', startAutoScroll);
  
    startAutoScroll();
  });