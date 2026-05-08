import Swiper from 'swiper'
import type { SwiperOptions } from 'swiper/types'

export const initBindSwiper = (
  element: HTMLElement,
  options: SwiperOptions
): Swiper => {
  // Ensure the required structure is present
  if (!element.querySelector('.swiper-wrapper')) {
    throw new Error('Swiper element is missing a `.swiper-wrapper` child.')
  }

  const swiperInstance = new Swiper(element, options)

  swiperInstance.on('activeIndexChange', (e) => {
    const targetItem = document.querySelector(
      e.slides[e.activeIndex].dataset['swiperTab'] ?? ''
    )
    const previousItem = document.querySelector(
      e.slides[e.previousIndex].dataset['swiperTab'] ?? ''
    )
    previousItem?.classList.remove('active')
    targetItem?.classList.add('active')
  })

  return swiperInstance
}
  