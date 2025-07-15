<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <!-- Logo on the left -->
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <div class="logo-container">
          <div class="logo-glow"></div>
          <img
            src="/images/logo.png"
            alt="Logo"
            class="nav-logo me-2"
            style="width: 110px; height: 120px"
          />
        </div>
        <!-- Optional: <span>YourBrand</span> -->
      </RouterLink>

      <!-- Toggler for mobile view -->
      <button
        class="navbar-toggler modern-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- Navbar items and search -->
      <div class="collapse navbar-collapse" id="navbarColor01">
        <!-- Navigation links aligned right -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link modern-link" active-class="active" to="/">
              <span class="link-text">Home</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link modern-link" active-class="active" to="/restraunts">
              <span class="link-text">Certified Outlets</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link modern-link" active-class="active" to="/aboutus">
              <span class="link-text">About Us</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link modern-link" active-class="active" to="/contactus">
              <span class="link-text">Contact Us</span>
            </RouterLink>
          </li>
        </ul>

        <!-- Search bar -->
        <form class="d-flex ms-3" @submit.prevent="onSearch">
          <div class="search-wrapper">
            <div class="search-container">
              <input
                v-model="searchInput"
                class="form-control search-input"
                type="search"
                placeholder="Search anything..."
                aria-label="Search"
              />
              <button class="search-btn" type="submit">
                <div class="search-icon">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const searchInput = ref('')
const router = useRouter()

const onSearch = () => {
  if (searchInput.value.trim()) {
    router.push(`/search?query=${encodeURIComponent(searchInput.value.trim())}`)
  }
}
</script>

<style scoped>
.navbar {
  height: 100px !important;
  background: linear-gradient(135deg, #a6e99c 0%, #7dd87a 25%, #5bcc5b 50%, #68d668 75%, #6ee6b7 100%) !important;
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: visible;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.logo-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.logo-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: logoRotate 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.logo-container:hover .logo-glow {
  opacity: 1;
}

.logo-container:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 8px 25px rgba(166, 233, 156, 0.4));
}

@keyframes logoRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.nav-logo {
  height: 50px;
  width: auto;
  margin-right: 10px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

.modern-link {
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.5rem;
  margin: 0 0.3rem;
  border-radius: 0px;
  position: relative;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.95) !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

.modern-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.modern-link:hover::before {
  left: 100%;
}

.modern-link:hover,
.modern-link.active {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));
  color: white !important;
  transform: translateY(-3px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(166, 233, 156, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-color: rgba(0, 0, 0, 0.4);
}

.link-text {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.search-wrapper {
  position: relative;
}

.search-container {
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  border-radius: 50px;
  padding: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.search-container:hover {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.2),
    0 0 40px rgba(166, 233, 156, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.search-input {
  background: transparent !important;
  border: none !important;
  color: white !important;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  min-width: 220px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.1) !important;
  color: white !important;
  box-shadow: none !important;
  outline: none !important;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7) !important;
  font-weight: 400;
}

.search-btn {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
  border: none !important;
  border-radius: 50% !important;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 6px;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.search-btn:hover {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)) !important;
  transform: scale(1.1) rotate(360deg);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.3),
    0 0 25px rgba(166, 233, 156, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.modern-toggler {
  border: none !important;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;
  border-radius: 12px !important;
  padding: 0.6rem !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.modern-toggler:hover {
  background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)) !important;
  transform: scale(1.05);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(166, 233, 156, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hamburger span {
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .nav-logo {
    height: 60px;
    width: auto;
  }

  .logo-container {
    /* No additional styling needed */
  }

  .navbar-nav {
    margin-top: 1.5rem;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.15));
    border-radius: 20px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 
      0 8px 32px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .modern-link {
    margin: 0.3rem 0;
    padding: 0.8rem 1.5rem;
    width: 100%;
  }

  .search-wrapper {
    margin-top: 1rem;
  }

  .search-input {
    min-width: 200px;
  }
}

@media (max-width: 768px) {
  .search-input {
    min-width: 160px;
  }
  
  .logo-container {
    /* No additional styling needed */
  }
  
  .nav-logo {
    height: 45px;
    width: auto;
  }
}
</style>

<!-- Global style: must NOT be scoped -->
<style>
body {
  padding-top: 80px;
  margin: 0;
  background: #ffffff;
  min-height: 100vh;
}
</style>