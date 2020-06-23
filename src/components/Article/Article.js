import Navigation from '@components/Navigation/Navigation.vue';

export default {
  components: {
    Navigation,
  },
  data() {
    return {
      sliderWidth: 0,
      sliderTranslation: 0,
      article: {
        tags: ['Environnement', 'Protection'],
        title: 'Les tortues marines mangent du plastique car elles sont attirées par son odeur',
        author: 'AFP',
        publicationDate: 1592402940,
        bgUrl: 'http://localhost:8080/images/articles/bg-article-2.png',
      },
    };
  },
  mounted: function() {
    this.computeSliderWidth();

    document.addEventListener('wheel', this.computeTranslation);
  },
  methods: {
    computeSliderWidth: function() {
      this.sliderWidth = 0;
      const sliderItems = document.querySelectorAll('.slider-content > *');
      sliderItems.forEach((sliderItem) => {
        this.sliderWidth += sliderItem.getBoundingClientRect().width;
      });
    },
    computeTranslation: function(event) {
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
    },
  },
};
