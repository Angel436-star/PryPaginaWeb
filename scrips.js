    document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const btnSubir = document.getElementById('btnSubir');

window.addEventListener('scroll', () => {
  btnSubir.style.display = window.scrollY > 200 ? 'block' : 'none';
});

btnSubir.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const lightbox = document.createElement('div');
lightbox.id = 'lightbox-overlay';
document.body.appendChild(lightbox);

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightbox.innerHTML = '';
});

const imagenes = document.querySelectorAll('.img-lightbox');
imagenes.forEach(img => {
  img.addEventListener('click', e => {
    lightbox.style.display = 'flex';
    const imgAmplificada = document.createElement('img');
    imgAmplificada.src = img.src;
    imgAmplificada.alt = img.alt;
    lightbox.innerHTML = '';
    lightbox.appendChild(imgAmplificada);
  });
});

 document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.scroll-anim');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});

document.querySelectorAll('.VideoItem video').forEach(video => {
    video.addEventListener('click', () => {
      const lightbox = document.getElementById('video-lightbox');
      const ampliado = document.getElementById('video-ampliado');
      ampliado.src = video.querySelector('source').src;
      lightbox.style.display = 'flex';
    });
  });

  document.getElementById('cerrar-lightbox').addEventListener('click', () => {
    const lightbox = document.getElementById('video-lightbox');
    const ampliado = document.getElementById('video-ampliado');
    ampliado.pause();
    ampliado.src = '';
    lightbox.style.display = 'none';
  });

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  if (audio) {
    audio.volume = 0.1;
  }
});
