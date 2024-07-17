document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Adiciona a classe de animação
          observer.unobserve(entry.target); // Para de observar o elemento
        }
      });
    }, { threshold: 0.1 }); // Ativa a animação quando 10% do elemento estiver visível
  
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  });
  