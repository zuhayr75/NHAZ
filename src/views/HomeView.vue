<template>
  <div class="website-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <p class="hero-subtitle">Welcome to the National Halaal Authority Zimbabwe</p>
            <h1 class="hero-title">
              NHAZ<br>
            </h1>
            <p class="hero-description">
              We are an international, non-profit organisation representing 
              the Muslim Ummah on all matters pertaining to the general 
              application of the term <em>Halaal</em>, with specific reference 
              to Islamic dietary laws.
            </p>
          </div>
          
          <div class="hero-visual">
            <div class="halaal-badge">
              <img src="/images/logo.png" alt="NHAZ Logo" class="logo-img">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- About Section -->
    <div class="about-section">
      <div class="about-container">
        <div class="about-content">
          <div class="about-left">
            <p class="about-subtitle">About Us</p>
            <h2 class="about-title">About NHAZ</h2>
            <p class="about-text">
              The <strong>National Halaal Authority Zimbabwe(NHAZ)</strong> is an international, 
              non-profit organisation, representing the Muslim Ummah on all matters 
              pertaining to the general application of the term <em>Halaal</em>, with 
              specific reference to Islamic dietary laws.
            </p>
          </div>
          
          <div class="about-right">
            <p class="about-text">
              NHAZ's membership comprises of leading Theological Bodies and renowned 
              Professional Organisations of global repute. It has been established as 
              a representative authority which promotes professionalism and excellence 
              in the certification of Halaal food and other related products.
            </p>
            <p class="about-text">
              This serves to confirm that our organisation is among the <strong>founder 
              members of the World Halaal Council</strong> and enjoys international 
              recognition from both Muslim countries and the broader global community.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFood = ref('')

const learnMore = () => {
  console.log('Learn More clicked')
  // Add your learn more functionality here
}

const makeInquiry = () => {
  console.log('Make Inquiry clicked')
  // Add your inquiry functionality here
}

const showFoodInfo = (foodType) => {
  selectedFood.value = foodType
  console.log(`Food item clicked: ${foodType}`)
  // Add your food info functionality here
}
</script>

<style scoped>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.website-container {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

/* Hero Section */
.hero-section {
  background: url('/images/background.png') center/cover no-repeat;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  z-index: 1;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-subtitle {
  color: #374151;
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #1f2937;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.hero-description {
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-primary {
  background: #4ade80;
  color: white;
}

.btn-primary:hover {
  background: #22c55e;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #15803d;
  color: white;
}

.btn-secondary:hover {
  background: #166534;
  transform: translateY(-2px);
}

/* Hero Visual */
.hero-visual {
  position: relative;
  height: 400px;
}

.halaal-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: #4ade80;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 10;
}

.logo-img {
  width: 128px;
  height: 128px;
  object-fit: contain;
}

.food-items {
  position: absolute;
  top: 80px;
  left: 0;
  right: 200px;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: center;
}

.food-item {
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.food-item:hover {
  transform: rotate(0deg) scale(1.1);
}

.food-meat {
  background: #ef4444;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  transform: rotate(12deg);
}

.food-beans {
  background: #d97706;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transform: rotate(-6deg);
  justify-self: center;
}

.food-spices {
  background: #eab308;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  transform: rotate(45deg);
  justify-self: end;
}

.food-fruits {
  background: #f97316;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transform: rotate(-12deg);
}

.food-vegetables {
  background: #16a34a;
  width: 75px;
  height: 75px;
  border-radius: 10px;
  transform: rotate(6deg);
  justify-self: center;
}

.food-dairy {
  background: #a855f7;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  transform: rotate(-45deg);
  justify-self: end;
}

/* About Section */
.about-section {
  background: #15803d;
  padding: 4rem 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.about-subtitle {
  color: #86efac;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.about-title {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.about-text {
  color: #d1fae5;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.about-text strong {
  font-weight: bold;
}

.about-text em {
  font-style: italic;
}

/* Footer */
.footer {
  background: #166534;
  padding: 2rem 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.footer p {
  color: #86efac;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .about-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }

  .food-items {
    right: 0;
    grid-template-columns: repeat(2, 1fr);
  }

  .halaal-badge {
    width: 150px;
    height: 150px;
  }

  .logo-img {
    width: 100px;
    height: 100px;
  }
}
</style>