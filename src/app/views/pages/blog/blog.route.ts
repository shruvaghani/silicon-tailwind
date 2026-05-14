import { Route } from '@angular/router'
import { ListWithSidebar } from './list-with-sidebar/list-with-sidebar'
import { GridWithSidebar } from './grid-with-sidebar/grid-with-sidebar'
import { GridNoSidebar } from './grid-no-sidebar/grid-no-sidebar'
import { ListNoSidebar } from './list-no-sidebar/list-no-sidebar'
import { SimpleFeed } from './simple-feed/simple-feed'
import { SinglePost } from './single-post/single-post'
import { Podcast } from './podcast/podcast'


export const BLOG_ROUTES: Route[] = [
  {
    path: 'list-with-sidebar',
    component: ListWithSidebar,
    data: { title: 'Blog List With Sidebar' },
  },
  {
    path: 'grid-with-sidebar',
    component: GridWithSidebar,
    data: { title: 'Blog Grid With Sidebar' },
  },
  {
    path: 'grid-no-sidebar',
    component: GridNoSidebar,
    data: { title: 'Blog List No Sidebar' },
  },
  {
    path: 'list-no-sidebar',
    component: ListNoSidebar,
    data: { title: 'Blog List No Sidebar' },
  },
  {
    path: 'simple-feed',
    component: SimpleFeed,
    data: { title: 'Blog Simple Feed' },
  },
  {
    path: 'single',
    component: SinglePost,
    data: { title: 'Blog Simple Post' },
  },
  {
    path: 'podcast',
    component: Podcast,
    data: { title: 'Blog Podcast' },
  },
]
