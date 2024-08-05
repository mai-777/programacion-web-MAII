import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes implementar la lógica para enviar el formulario, por ejemplo, usando una API
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Mensaje:", message);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
