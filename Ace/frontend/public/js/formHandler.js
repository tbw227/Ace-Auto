export function handleForm() {
    const form = document.querySelector('#contactForm');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = form.email.value;
  
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
      } else {
        console.log('Form submitted:', { email });
        form.reset(); // Clear the form after submission
      }
    });
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }