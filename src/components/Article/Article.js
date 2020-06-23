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
        title: 'Protection des abeilles, une ONG dépose un recours contre la commission européenne',
        author: 'AFP',
        publicationDate: 1592402940,
        bgUrl: 'http://localhost:8080/images/bg-article-2.jpg',
      },
    };
  },
  mounted: function() {
    this.computeSliderWidth();

    document.addEventListener('wheel', this.computeTranslation);
  },
  methods: {
    computeSliderWidth: function() {
      this.sliderWidth = window.innerWidth * document.querySelectorAll('.slider-section').length;
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
