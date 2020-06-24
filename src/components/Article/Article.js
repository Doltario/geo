import Navigation from '@components/Navigation/Navigation.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      sliderWidth: 0,
      sliderTranslation: 0,
      progressBarWidth: 0,
      lightMenu: false,
      article: {
        tags: ['Environnement'],
        title: 'Les tortues marines mangent du plastique car elles sont attirées par son odeur',
        author: 'AFP',
        publicationDate: 1592402940,
        bgUrl: 'http://localhost:8080/images/articles/bg-article-2.png',
        content: {
          image1: 'http://localhost:8080/images/articles/article-content-2-1.png',
          title1: 'Peuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia id deserunt mollit anim id est laborum.',
          image2: 'http://localhost:8080/images/articles/article-content-2-2.png',
          image3: 'http://localhost:8080/images/articles/article-content-2-3.png',
        },
      },
    };
  },
  mounted: function() {
    this.computeSliderWidth();

    document.addEventListener('wheel', this.scrollListener);

    gsap.from('.image-left', {
      scrollTrigger: '.image-left',
      y: -500,
      duration: 5,
      horizontal: true,
    });
  },
  methods: {
    scrollToContent: function() {
      window.clearInterval();

      const interval = setInterval(() => {
        if (this.sliderTranslation > -window.innerWidth - window.innerWidth * 0.15) {
          this.sliderTranslation = this.sliderTranslation - 5 * 5;
          this.lightMenu = true;
          this.computeProgressBarWidth();
        } else {
          window.clearInterval(interval);
        }
      }, 10);
    },
    computeSliderWidth: function() {
      this.sliderWidth = 0;
      const sliderItems = document.querySelectorAll('.slider-content > *');
      let newWidth = 0;
      sliderItems.forEach((sliderItem) => {
        newWidth += sliderItem.getBoundingClientRect().width;
      });

      this.sliderWidth = Math.ceil(newWidth);
    },
    scrollListener: function(event) {
      // Compute Translations
      let newSliderTranslation = this.sliderTranslation - event.deltaY;

      if (newSliderTranslation && newSliderTranslation > 0) {
        // Prevent scroll at the beginning
        this.sliderTranslation = 0;
      } else {
        if (newSliderTranslation * -1 >= this.sliderWidth - window.innerWidth) {
          // Prevent scroll at the end
          newSliderTranslation = window.innerWidth - this.sliderWidth;
        }
        this.sliderTranslation = newSliderTranslation;
      }

      // Trigger dark/light menu on scroll
      // if (this.sliderTranslation * -1 > document.querySelector('.slider-content').firstElementChild.getBoundingClientRect().width) {
      if (this.sliderTranslation < 0) {
        this.lightMenu = true;
      } else {
        this.lightMenu = false;
      }

      //Progress bar width
      this.computeProgressBarWidth();
    },
    computeProgressBarWidth: function() {
      const progressBarWidth = (window.innerWidth / (this.sliderWidth - window.innerWidth)) * this.sliderTranslation;

      this.progressBarWidth = progressBarWidth * -1;
    },
  },
};
