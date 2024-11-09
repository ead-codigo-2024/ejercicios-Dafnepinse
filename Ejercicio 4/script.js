document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Validación de campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Muestra el mensaje de éxito
    document.getElementById("successMessage").style.display = "block";
    
    // Limpia el formulario después del envío
    document.getElementById("contactForm").reset();

    // Oculta el mensaje de éxito después de unos segundos
    setTimeout(() => {
        document.getElementById("successMessage").style.display = "none";
    }, 3000); // Oculta el mensaje después de 3 segundos
});
