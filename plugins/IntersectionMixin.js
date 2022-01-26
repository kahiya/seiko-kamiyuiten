import Vue from "vue";

Vue.mixin({
  methods: {
    intersectionHandler(entries) {
      entries.forEach(function (entry, i) {
        const target = entry.target;
        if (entry.isIntersecting && !target.classList.contains("active")) {
          const delay = i * 100;
          setTimeout(function () {
            target.classList.add("active");
          }, delay);
        }
      });
    },
    observeIntersection(refName) {
      let observer = new IntersectionObserver(this.intersectionHandler, {
        root: null,
        threshold: 0.2,
      });
      observer.observe(this.$refs[refName]);
    },
  },
});
