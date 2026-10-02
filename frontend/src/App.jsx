
import { useState } from "react";
import toast from "react-hot-toast";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
       console.log("data: ",data)
      if (!response.ok) {
        // toast.error(data.message)
        throw new Error(data.message || "Something went wrong");
      }
       toast.success("User registered successfully!")
      // setMessage("User registered successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setMessage(error.message);
      toast.error(error.message)
    }
  };

  return (
  
   
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
  >
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
      Create Account
    </h1>

    <div className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg
                   outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500 transition"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg
                   font-semibold hover:bg-blue-700
                   active:scale-[0.98] transition"
      >
        Register
      </button>
    </div>

  
  </form>
</div>


  );
}

export default App;


