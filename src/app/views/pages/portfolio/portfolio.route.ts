import { Route } from '@angular/router'
import { GridView } from './grid-view/grid-view'
import { ListView } from './list-view/list-view'
import { SingleCourse } from './single-course/single-course'
import { SingleProject } from './single-project/single-project'
import { SliderView } from './slider-view/slider-view'
import { Courses } from './courses/courses'

export const PORTFOLIO_ROUTES: Route[] = [
  {
    path: 'grid',
    component: GridView,
    data: { title: 'Portfolio Grid View' },
  },
  {
    path: 'list',
    component: ListView,
    data: { title: 'Portfolio List View' },
  },
  {
    path: 'slider',
    component: SliderView,
    data: { title: 'Portfolio Slider View' },
  },
  {
    path: 'courses',
    component: Courses,
    data: { title: 'Courses' },
  },
  {
    path: 'single-project',
    component: SingleProject,
    data: { title: 'Portfolio Single Project' },
  },
  {
    path: 'single-course',
    component: SingleCourse,
    data: { title: 'Portfolio Single Course' },
  },
]
