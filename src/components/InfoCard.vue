<template>
  <div class="card-layout">
    <!-- Left image -->
    <img class="card-image" :src="imageSrc" alt="Business image" />

    <!-- Right details -->
    <div class="card-details">
      <div>
        <h4>{{ info.name }}</h4>
        <p><strong>Phone:</strong> {{ info.phone }}</p>
        <p><strong>Email:</strong> {{ info.email }}</p>
        <p><strong>Address:</strong> {{ info.address }}</p>
        <button 
          class="certification-btn"
          @click="openCertification"
        >
          View Validity
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    info: Object,
  },
  computed: {
    imageSrc() {
      const baseUrl = 'https://localhost:7245';
      return this.info.imagePath
        ? `${baseUrl}${this.info.imagePath}`
        : `${baseUrl}/images/flier.png`;
    },
  },
  methods: {
    openCertification() {
      if (this.info.link) {
        window.open(this.info.link, '_blank');
      }
    }
  }
};
</script>

<style scoped>
.card-layout {
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  max-width: 3000px;
}

.card-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 0%;
  margin-right: 1.5rem;
}

.card-details {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card-details > div {
  flex: 1;
}

.certification-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.certification-btn:hover {
  background-color: #0056b3;
}

.certification-btn:active {
  transform: translateY(1px);
}
</style>