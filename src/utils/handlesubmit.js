const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submit triggered");

  const formData = new FormData(e.target);
  const payload = {
    name: formData.get("name")?.trim(),
    phone: formData.get("phone")?.trim(),
    email: formData.get("email")?.trim(),
  };

  console.log("📦 Payload before sending:", payload);

  // --- Validation ---
  if (!payload.name) {
    alert("Please enter your name");
    return;
  }

  if (!/^[0-9]{10}$/.test(payload.phone)) {
    alert("Please enter a valid 10-digit phone number");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    alert("Please enter a valid email address");
    return;
  }

  // --- Submit if valid ---
  try {
    const response = await fetch("https://stoneandacres.in/sendmail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.text();
    console.log("📨 Server response:", result);
    alert("Form submitted successfully!");
    e.target.reset(); // clear form
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Something went wrong, please try again.");
  }
};
