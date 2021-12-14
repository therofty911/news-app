<template>
  <div class="container">
      <div class="row row-cols-1 row-cols-md-2 g-4 " >
        <div class="col-md-4 col-sm-12 mb-2" v-for="(article, index) in articles" :key="index" align="center">
          <div class="card border-0">
            <img :src="article.urlToImage" class="card-img-top" alt="r">
            <div class="card-body">
              <h5 class="card-title" v-html="article.title"></h5>
              <p class="card-text">{{ article.description }}.</p>
              <a v-bind:href="article.url" target="_blank" class="btn btn-primary">Read More ></a>
            </div>
          </div>
        </div>
      </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'apiKey'
  ],
  data: () => {
    return {
      apiUrl: '',
      isBusy: false,
      showloader: false,
      currentPage: 1,
      totalResults: 0,
      maxPerPage: 20,
      searchword: '',
      articles: [],
      country: 'us'
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.totalResults / this.maxPerPage)
    }
  },
  methods: {
    // navTo(url) {
    //   window.open(url);
    // },
    resetData () {
      this.currentPage = 1
      this.articles = []
    },
    fetchTopNews () {
      this.apiUrl = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=c459902cf3e340e5982f5801969ac509'
      this.isBusy = true
      this.resetData()
      this.fetchData()
    },
    fetchData () {
      let req = new Request(this.apiUrl + '&page=' + this.currentPage)
      fetch(req)
        .then((resp) => resp.json())
        .then((data) => {
          this.totalResults = data.totalResults
          data.articles.forEach(element => {
            this.articles.push(element)
          })
          this.isBusy = false
          this.showloader = false
        })
        .catch((error) => {
          console.log(error)
        })
    },
    scrollTrigger () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.currentPage < this.pageCount) {
            this.showloader = true
            this.currentPage += 1
            this.fetchData()
          }
        })
      })
      observer.observe(this.$refs.infinitescrolltrigger)
    }
  },
  created () {
    this.fetchTopNews()
  },
  mounted () {
    this.scrollTrigger()
  }
}
</script>
