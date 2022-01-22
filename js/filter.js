function app() {
  const buttons = document.querySelectorAll('.filter__btn')
  const cards = document.querySelectorAll('.portfolio__card')

  function filter(category, items) {
    items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category)
      const isShowAll = category.toLowerCase() === 'all'
      if (isItemFiltered && !isShowAll) {
        item.classList.add('card-hidden')
      } else {
        item.classList.remove('card-hidden')
      }
    })
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter
      const target = event.target
      filter(currentCategory, cards)

      buttons.forEach(button => button.classList.remove('is-active'))
      target.classList.add('is-active')
    })
  })
}

app()
