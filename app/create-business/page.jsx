"use client";

import { useState } from "react";

export default function CreateBusiness() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    website: "",
    category: "",
    description: "",
    services: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/business", {
        method: "POST",
        body: JSON.stringify({
          ...form,
          services: form.services.split(","),
        }),
      });

      const data = await res.json();

      if (data.slug) {
        window.location.href = `/${data.slug}`;
      } else {
        alert("Error creating business");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#468432]">
          Add Your Business
        </h1>
        <p className="text-gray-600 mt-2">
          Create your business page and reach more customers
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8">

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Business Name */}
          <input
            type="text"
            name="name"
            placeholder="Business Name *"
            required
            onChange={handleChange}
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Contact Email"
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Website */}
          <input
            type="text"
            name="website"
            placeholder="Website URL"
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Category */}
          <select
            name="category"
            onChange={handleChange}
            className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
          >
            <option value="">Select Category</option>
            <option>Gift Shop</option>
            <option>Restaurant</option>
            <option>Mobile Repair</option>
            <option>Salon</option>
          </select>

          {/* Services */}
          <input
            type="text"
            name="services"
            placeholder="Services (comma separated)"
            onChange={handleChange}
            className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Business Description"
            rows={4}
            onChange={handleChange}
            className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFA02E] text-white py-3 rounded-md font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Business Page"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}