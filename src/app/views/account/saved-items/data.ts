const course01 = 'assets/img/portfolio/courses/01.jpg'
const course07 = 'assets/img/portfolio/courses/07.jpg'
const course09 = 'assets/img/portfolio/courses/09.jpg'

export type WishlistCourseType = {
  title: string
  instructor: string
  price: string
  duration: string
  rating: string
  image: string
  imageAlt: string
  badge?: string
}

export const wishlistCoursesData: WishlistCourseType[] = [
  {
    title: 'Blender Character Creator v2.0 for Video Games Design',
    instructor: 'Ralph Edwards',
    price: '$25.00',
    duration: '160 hours',
    rating: '93% (4.5K)',
    image: course07,
    imageAlt: 'Blender Character Creator',
  },
  {
    title: 'Fullstack Web Developer Course from Scratch',
    instructor: 'Albert Flores',
    price: '$25.00',
    duration: '210 hours',
    rating: '94% (4.2K)',
    image: course01,
    imageAlt: 'Fullstack Web Developer',
    badge: 'Best Seller',
  },
  {
    title: 'Learn JMETER from Scratch on Live Apps-Performance Testing',
    instructor: 'Jenny Wilson',
    price: '$14.50',
    duration: '120 hours',
    rating: '92% (3.8K)',
    image: course09,
    imageAlt: 'JMETER Course',
  },
]