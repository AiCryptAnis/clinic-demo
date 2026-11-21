// Clinic WhatsApp number (international format, no '+' or spaces)
const CLINIC_PHONE = "213550000000";

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const service = document.getElementById("serviceSelect").value;
    const slot = document.getElementById("slotSelect").value;

    const lines = ["Bonjour Docteur, je souhaite prendre un rendez-vous."];
    if (name) lines.push(`- Nom : ${name}`);
    lines.push(`- Motif : ${service}`);
    lines.push(`- Créneau : ${slot}`);

    const url = `https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
