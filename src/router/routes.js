import Home from '@components/Home/Home.vue';
import Article from '@components/Article/Article.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/article/:id', name: 'Articles', component: Article },
];

export { routes };
