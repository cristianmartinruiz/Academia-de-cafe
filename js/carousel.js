document.addEventListener('DOMContentLoaded', function() {
    const reseñasContainer = document.querySelector('.reseñas-container');
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');
    let autoScrollInterval;
  
    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        const maxScrollLeft = reseñasContainer.scrollWidth - reseñasContainer.clientWidth;
        if (reseñasContainer.scrollLeft >= maxScrollLeft) {
          reseñasContainer.scrollLeft = 0;
        } else {
          reseñasContainer.scrollLeft += reseñasContainer.clientWidth / 4; // Ajusta este valor para cambiar la cantidad de desplazamiento
        }
      }, 4000); // Ajusta la velocidad del desplazamiento automático
    };
  
    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };
  
    nxtBtn.addEventListener('click', () => {
      stopAutoScroll();
      const maxScrollLeft = reseñasContainer.scrollWidth - reseñasContainer.clientWidth;
      if (reseñasContainer.scrollLeft >= maxScrollLeft) {
        reseñasContainer.scrollLeft = 0;
      } else {
        reseñasContainer.scrollLeft += reseñasContainer.clientWidth / 1; // Ajusta este valor para cambiar la cantidad de desplazamiento
      }
      startAutoScroll();
    });
  
    preBtn.addEventListener('click', () => {
      stopAutoScroll();
      if (reseñasContainer.scrollLeft <= 0) {
        reseñasContainer.scrollLeft = reseñasContainer.scrollWidth - reseñasContainer.clientWidth;
      } else {
        reseñasContainer.scrollLeft -= reseñasContainer.clientWidth / 1; // Ajusta este valor para cambiar la cantidad de desplazamiento
      }
      startAutoScroll();
    });
  
    reseñasContainer.addEventListener('mouseenter', stopAutoScroll);
    reseñasContainer.addEventListener('mouseleave', startAutoScroll);
  
    startAutoScroll();
  });