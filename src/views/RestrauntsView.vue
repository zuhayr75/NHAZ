<template>
  <div class="container">
    <!-- Specialties Grid -->
    <div v-if="!selectedSpecialty" class="specialties-grid">
      <div
        v-for="specialty in specialties"
        :key="specialty"
        class="specialty-card"
        @click="selectSpecialty(specialty)"
      >
        {{ pluralize(specialty) }}
      </div>
    </div>

    <!-- Businesses List -->
    <div v-else class="business-list">
      <button class="back-button" @click="selectedSpecialty = null">Back</button>
      <div class="info-cards-grid">
        <InfoCard
          v-for="biz in filteredBusinesses"
          :key="biz.id"
          :info="biz"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoCard from '../components/InfoCard.vue'

export default {
  components: { InfoCard },
  data() {
    return {
      businesses: [],
      specialties: [],
      selectedSpecialty: null,
      loading: false,
      error: null,
    }
  },
  computed: {
    filteredBusinesses() {
      if (!this.selectedSpecialty) return []
      return this.businesses.filter(
        (b) =>
          b.type &&
          b.type.toLowerCase() === this.selectedSpecialty.toLowerCase()
      )
    },
  },
  methods: {
    async fetchBusinesses() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(
          'http://217.154.124.75:5270/api/CertifiedBusiness'
        )
        this.businesses = response.data

        // Extract unique specialties from businesses
        const uniqueTypes = new Set()
        this.businesses.forEach((b) => {
          if (b.type) uniqueTypes.add(b.type)
        })
        this.specialties = Array.from(uniqueTypes)
      } catch (e) {
        this.error = 'Failed to load businesses'
        console.error(e)
      } finally {
        this.loading = false
      }
    },
    selectSpecialty(specialty) {
      this.selectedSpecialty = specialty
    },
    pluralize(word) {
      // Convert to lowercase for processing
      const lowerWord = word.toLowerCase()
      
      // Special cases
      const specialCases = {
        'butchery': 'butcheries',
        'bakery': 'bakeries',
        'pharmacy': 'pharmacies',
        'grocery': 'groceries',
        'laundry': 'laundries',
        'factory': 'factories',
        'company': 'companies',
        'agency': 'agencies',
        'gallery': 'galleries',
        'library': 'libraries'
      }
      
      // Check special cases first
      if (specialCases[lowerWord]) {
        return this.capitalizeFirst(specialCases[lowerWord])
      }
      
      // General pluralization rules
      if (lowerWord.endsWith('s') || lowerWord.endsWith('sh') || 
          lowerWord.endsWith('ch') || lowerWord.endsWith('x') || 
          lowerWord.endsWith('z')) {
        return this.capitalizeFirst(lowerWord + 'es')
      } else if (lowerWord.endsWith('y') && !this.isVowel(lowerWord[lowerWord.length - 2])) {
        return this.capitalizeFirst(lowerWord.slice(0, -1) + 'ies')
      } else if (lowerWord.endsWith('f')) {
        return this.capitalizeFirst(lowerWord.slice(0, -1) + 'ves')
      } else if (lowerWord.endsWith('fe')) {
        return this.capitalizeFirst(lowerWord.slice(0, -2) + 'ves')
      } else {
        return this.capitalizeFirst(lowerWord + 's')
      }
    },
    capitalizeFirst(word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    },
    isVowel(char) {
      return 'aeiou'.includes(char)
    }
  },
  mounted() {
    this.fetchBusinesses()
    // Test the pluralize method
    console.log('Testing pluralize:', this.pluralize('butchery'))
    console.log('Testing pluralize:', this.pluralize('restaurant'))
  },
}
</script>

<style scoped>
.container {
  padding: 2rem;
  width: 80vw;
  box-sizing: border-box;
}

/* Specialties Grid - 3 per row */
.specialties-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Info Cards Grid - 3 per row */
.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Specialty Cards */
.specialty-card {
  height: 180px;
  background: rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.3);
  color: #1e1e1e;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.specialty-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.specialty-card:hover::before {
  transform: translateX(100%);
}

.specialty-card:hover {
  background: rgba(102, 126, 234, 0.3);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 16px 40px rgba(102, 126, 234, 0.3);
}

/* Back Button */
.back-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button::before {
  content: '←';
  font-size: 1.1rem;
}

.back-button:hover {
  background: linear-gradient(135deg, #ff5252, #d32f2f);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
}

.back-button:active {
  transform: translateY(0);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .specialties-grid,
  .info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .specialty-card {
    height: 140px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .specialties-grid,
  .info-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 1rem;
  }
}
</style>