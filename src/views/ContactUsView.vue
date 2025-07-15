<template>
  <section class="contact-us container py-5">
    <div class="text-center mb-4">
      <h1 class="display-5 fw-bold text-success">Contact Us</h1>
      <hr class="w-25 mx-auto" />
    </div>

    <div class="info-box px-md-5">
      <p class="mb-3">
        <strong>Office:</strong><br />
        Suite 1, Office Complex, Avondale Shopping Centre, Harare<br />
        <em>(Above Nando's)</em>
      </p>

      <p class="mb-3">
        <strong>Mobile:</strong><br />
        <a href="tel:+263772500007" class="contact-link">0772 500 007</a>
      </p>

      <p class="mb-3">
        <strong>National Halaal Inspector:</strong><br />
        <a href="tel:+263773277664" class="contact-link">0773 277 664</a>
      </p>

      <p class="mb-3">
        <strong>Email:</strong><br />
        <a href="mailto:info@nhaz.org" class="contact-link">info@nhaz.org</a>
      </p>
    </div>
  </section>
</template>

<script setup>
// No interactivity needed for now
</script>

<style scoped>
.contact-us {
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #2f7a1c;
}

.info-box {
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
}

.contact-link {
  color: #2f7a1c;
  text-decoration: none;
}

.contact-link:hover {
  text-decoration: underline;
}
</style>
