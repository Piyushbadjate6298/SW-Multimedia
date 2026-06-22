function Form({ button, dark = false }) {

  // Store form values
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  // Function runs when form is submitted
  const handleSubmit = async (e) => {

    // Prevent page refresh
    e.preventDefault();

    try {

      // Send data to backend API
      const response = await fetch(
        "http://localhost:5000/api/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },

          // Data sent to MongoDB
          body: JSON.stringify({
            name,
            mobile,
            email,
            course
          })
        }
      );

      const data = await response.json();

      console.log("Saved Data:", data);

      alert("Form Submitted Successfully!");

      // Clear form after submit
      setName("");
      setMobile("");
      setEmail("");
      setCourse("");

    } catch (error) {

      console.error("Error:", error);

      alert("Error submitting form");

    }
  };

  return (

    <form
      className={dark ? "form darkForm" : "form"}
      onSubmit={handleSubmit}
    >

      {/* Full Name */}
      <input
        type="text"
        placeholder="Enter your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Mobile Number */}
      <input
        type="text"
        placeholder="Enter your mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Course Selection */}
      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      >
        <option value="">Select Course Target Domain</option>

        {categories.map((c, index) => (
          <option key={index} value={c.title}>
            {c.title}
          </option>
        ))}
      </select>

      {/* Career Goal */}
      <textarea
        placeholder="Tell us about your educational background or career goals"
      ></textarea>

      {/* Submit Button */}
      <button type="submit">
        {button}
      </button>

    </form>

  );
}

export default Form;