import Pagination from "/src/component/Pagination.vue"
import Carousel from "/src/component/Carousel.vue"
import HomeCarousel from "/src/component/HomeCarousel.vue"
import TopNavBar from "/src/component/TopNavBar.vue"
import Utils from "/src/component/Utils.vue"

const components = {
    Pagination,
    TopNavBar,
    HomeCarousel,
    Carousel,
    Utils,
   
}

const GlobalComponents = (app) => {
  Object.keys(components).forEach((key) => {
    app.component(`${key}`, components[key])
  })
}

export default GlobalComponents
