<template>
  <div class="search-page">
    <div class="container">
      <!-- Search Header -->
      <div class="search-header">
        <h1 class="search-title">Search Results</h1>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p class="loading-text">Searching...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-container">
        <div class="error-icon">⚠️</div>
        <p class="error-text">{{ error }}</p>
        <button @click="performSearch" class="retry-button">Try Again</button>
      </div>

      <!-- No Results -->
      <div v-else-if="!loading && filteredBusinesses.length === 0 && searchQuery" class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3 class="no-results-title">No results found</h3>
        <p class="no-results-text">
          We couldn't find any businesses matching "{{ searchQuery }}". 
          Try different keywords or check the spelling.
        </p>
      </div>

      <!-- Search Results -->
      <div v-else-if="filteredBusinesses.length > 0" class="search-results">
        <div class="results-count">
          Found {{ filteredBusinesses.length }} result{{ filteredBusinesses.length === 1 ? '' : 's' }}
        </div>
        
        <div class="results-grid">
          <InfoCard
            v-for="business in filteredBusinesses"
            :key="business.id"
            :info="business"
          />
        </div>
      </div>

      <!-- Initial State (no search performed) -->
      <div v-else class="initial-state">
        <div class="initial-icon">🔍</div>
        <h3 class="initial-title">Search for businesses</h3>
        <p class="initial-text">
          Use the search bar above to find certified businesses by name, type, or location.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoCard from '../components/InfoCard.vue'

export default {
  name: 'SearchPage',
  components: { InfoCard },
  data() {
    return {
      businesses: [],
      filteredBusinesses: [],
      searchQuery: '',
      loading: false,
      error: null
    }
  },
  watch: {
    '$route.query.query': {
      handler(newQuery) {
        this.searchQuery = newQuery || ''
        if (this.searchQuery) {
          this.performSearch()
        } else {
          this.filteredBusinesses = []
        }
      },
      immediate: true
    }
  },
  methods: {
    async fetchBusinesses() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://217.154.124.75:5270/api/CertifiedBusiness')
        this.businesses = response.data
        this.filterBusinesses()
      } catch (e) {
        this.error = 'Failed to load businesses. Please try again.'
        console.error('Error fetching businesses:', e)
      } finally {
        this.loading = false
      }
    },
    
    performSearch() {
      if (this.businesses.length === 0) {
        this.fetchBusinesses()
      } else {
        this.filterBusinesses()
      }
    },
    
    filterBusinesses() {
      if (!this.searchQuery) {
        this.filteredBusinesses = []
        return
      }
      
      const query = this.searchQuery.toLowerCase().trim()
      
      this.filteredBusinesses = this.businesses.filter(business => {
        // Search in business name
        const nameMatch = business.name && business.name.toLowerCase().includes(query)
        
        // Search in business type
        const typeMatch = business.type && business.type.toLowerCase().includes(query)
        
        // Search in business description (if available)
        const descriptionMatch = business.description && business.description.toLowerCase().includes(query)
        
        // Search in business location/address (if available)
        const locationMatch = business.location && business.location.toLowerCase().includes(query)
        
        // Search in business address (if available)
        const addressMatch = business.address && business.address.toLowerCase().includes(query)
        
        return nameMatch || typeMatch || descriptionMatch || locationMatch || addressMatch
      })
    }
  },
  
  mounted() {
    // Get search query from URL parameters
    this.searchQuery = this.$route.query.query || ''
    if (this.searchQuery) {
      this.performSearch()
    }
  }
}
</script>

<style scoped>
.search-page {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.search-header {
  text-align: center;
  margin-bottom: 3rem;
}

.search-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.search-query {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 0;
}

.query-text {
  font-weight: 600;
  color: #495057;
  background: rgba(102, 126, 234, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
}

.loading-container {
  text-align: center;
  padding: 4rem 0;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 1.1rem;
  color: #6c757d;
  margin: 0;
}

.error-container {
  text-align: center;
  padding: 4rem 0;
}

.error-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.error-text {
  font-size: 1.1rem;
  color: #dc3545;
  margin-bottom: 2rem;
}

.retry-button {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
}

.no-results, .initial-state {
  text-align: center;
  padding: 4rem 0;
}

.no-results-icon, .initial-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.no-results-title, .initial-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
}

.no-results-text, .initial-text {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
}

.search-results {
  margin-top: 2rem;
}

.results-count {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .search-title {
    font-size: 2rem;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .container {
    padding: 0 0.5rem;
  }
}

@media (max-width: 480px) {
  .search-title {
    font-size: 1.8rem;
  }
  
  .search-page {
    padding: 1rem 0;
  }
  
  .search-header {
    margin-bottom: 2rem;
  }
}
</style>