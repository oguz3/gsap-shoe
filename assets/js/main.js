const init = () => {
  new hoverEffect({
    parent: document.querySelector('.shoe-image'),
    intensity: 0.2,
    image1: 'assets/img/air_jordan.png',
    image2: 'assets/img/air_jordan.png',
    displacementImage: 'assets/img/diss.png',
    imagesRatio: 1 / 1,
  })

  gsap.from('.shoe-image', {
    opacity: 0,
    duration: 3,
    delay: 3,
  })

  gsap.from('.title', { opacity: 0, duration: 1, delay: 1.5, y: 50 })
  gsap.from('.subtitle', {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: -50,
  })

  gsap.from('.bubble-1', { opacity: 0, duration: 1.5, delay: 2 })
  gsap.from('.bubble-2', { opacity: 0, duration: 1.75, delay: 2 })
  gsap.from('.bubble-3', { opacity: 0, duration: 2, delay: 2 })
  gsap.from('.bubble-4', { opacity: 0, duration: 1.5, delay: 2 })
  gsap.from('.bubble-5', { opacity: 0, duration: 1.75, delay: 2 })
  gsap.from('.bubble-6', { opacity: 0, duration: 2, delay: 2 })
}

window.addEventListener('load', (event) => {
  init()
})
