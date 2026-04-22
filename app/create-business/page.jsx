"use client";

import { useState } from "react";

const businessCategories = [
  "Restaurant",
  "Salon",
  "Gift Shop",
  "Mobile Repair",
  "Home Services",
  "Plumber",
  "Electrician",
  "Painter",
  "Carpenter",
  "HVAC Service",
  "Automotive",
  "Car Repair",
  "Car Wash",
  "Tyre Shop",
  "Health & Medical",
  "Doctor",
  "Dentist",
  "Clinic",
  "Pharmacy",
  "Hospital",
  "Education",
  "School",
  "College",
  "Coaching Center",
  "Tutor",
  "Fitness",
  "Gym",
  "Yoga Studio",
  "Personal Trainer",
  "Professional Services",
  "Lawyer",
  "Accountant",
  "Consultant",
  "Real Estate",
  "Shopping",
  "Clothing Store",
  "Shoe Store",
  "Jewelry Store",
  "Furniture Store",
  "Repair Services",
  "Appliance Repair",
  "Computer Repair",
  "AC Repair",
  "Beauty & Spa",
  "Spa",
  "Nail Salon",
  "Barber Shop",
  "Pet Services",
  "Pet Shop",
  "Veterinary Clinic",
  "Pet Grooming",
  "Travel Agency",
  "Hotel",
  "Taxi Service",
  "Photography",
  "Event Planner",
  "Wedding Services",
  "Catering",
  "Bakery",
  "Coffee Shop",
  "Grocery Store",
  "Supermarket",
  "Book Store",
  "Toy Store",
  "Electronics Store",
  "Mobile Shop",
  "Courier Service",
  "Laundry",
  "Dry Cleaning",
  "Security Services",
  "Internet Provider",
  "Marketing Agency",
  "Web Design",
  "Digital Marketing",
  "Other",
];



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
    logoUrl: "",
    shopFrontImageUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // remove old error while typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  // prevent blank / spaces-only values
  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.phone.trim() ||
    !form.website.trim() ||
    !form.logoUrl.trim() ||
    !form.shopFrontImageUrl.trim() ||
    !form.address.trim() ||
    !form.city.trim() ||
    !form.category.trim() ||
    !form.services.trim() ||
    !form.description.trim()
  ) {
    setError("Please fill in all fields.");
    return;
  }

  setLoading(true);

  try {
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      website: form.website.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      logoUrl: form.logoUrl.trim(),
      shopFrontImageUrl: form.shopFrontImageUrl.trim(),
      services: form.services
        .split(",")
        .map((service) => service.trim())
        .filter(Boolean),
    };

    const res = await fetch("/api/business", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong");
      setLoading(false);
      return;
    }

    window.location.href = `/${data.slug}`;
  } catch (err) {
    console.error(err);
    setError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#468432]">
          Add Your Business
        </h1>

        <p className="mt-2 text-gray-600">
          Create your business page and reach more customers
        </p>
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-lg md:p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {/* Business Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Business Name *"
            required
            onChange={handleChange}
            className="rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={form.email}
            required
            placeholder="Contact Email"
            onChange={handleChange}
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Website */}
          <input
            type="url"
            name="website"
            value={form.website}
            placeholder="Website URL"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Logo URL */}
          <input
            type="url"
            name="logoUrl"
            value={form.logoUrl}
            placeholder="Logo Image URL"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Shop Front Image URL */}
          <input
            type="url"
            name="shopFrontImageUrl"
            value={form.shopFrontImageUrl}
            placeholder="Shop Front Image URL"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            value={form.address}
            placeholder="Address"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872] md:col-span-2"
          />

          {/* City */}
          <input
            type="text"
            name="city"
            value={form.city}
            placeholder="City"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
          />

          {/* Category */}
         
         <select
  name="category"
  value={form.category}
  onChange={handleChange}
  required
  className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872]"
>
  <option value="">Select Category</option>

  {businessCategories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>

          {/* Services */}
          <input
            type="text"
            name="services"
            value={form.services}
            placeholder="Services (comma separated)"
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872] md:col-span-2"
          />

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            placeholder="Business Description"
            rows={4}
            onChange={handleChange}
            required
            className="rounded-md border p-3 focus:ring-2 focus:ring-[#9AD872] md:col-span-2"
          />

          {/* Error Message */}
          {error && (
            <div className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-[#FFA02E] py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Business Page"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


// "use client";

// import { useState } from "react";

// export default function CreateBusiness() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     website: "",
//     category: "",
//     description: "",
//     services: "",
//     logoUrl: "",
//   shopFrontImageUrl: "",
//   });

//   const [loading, setLoading] = useState(false);
//    const [error, setError] = useState("");


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("/api/business", {
//         method: "POST",
//         body: JSON.stringify({
//           ...form,
//           services: form.services.split(","),
//         }),
//       });

//       const data = await res.json();

//       if (data.slug) {
//         window.location.href = `/${data.slug}`;
//       } else {
//         alert("Error creating business");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
      
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-[#468432]">
//           Add Your Business
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Create your business page and reach more customers
//         </p>
//       </div>

//       {/* Form Card */}
//       <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-8">

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

//           {/* Business Name */}
//           <input
//             type="text"
//             name="name"
//             placeholder="Business Name *"
//             required
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Contact Email"
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Phone */}
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Website */}
//           <input
//             type="text"
//             name="website"
//             placeholder="Website URL"
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Logo URL */}
// <input
//   type="url"
//   name="logoUrl"
//   placeholder="Logo Image URL"
//   onChange={handleChange}
//   className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
// />

// {/* Shop Front Image URL */}
// <input
//   type="url"
//   name="shopFrontImageUrl"
//   placeholder="Shop Front Image URL"
//   onChange={handleChange}
//   className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
// />


//           {/* Address */}
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             onChange={handleChange}
//             className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* City */}
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Category */}
//           <select
//             name="category"
//             onChange={handleChange}
//             className="border p-3 rounded-md focus:ring-2 focus:ring-[#9AD872]"
//           >
//             <option value="">Select Category</option>
//             <option>Gift Shop</option>
//             <option>Restaurant</option>
//             <option>Mobile Repair</option>
//             <option>Salon</option>
//           </select>

//           {/* Services */}
//           <input
//             type="text"
//             name="services"
//             placeholder="Services (comma separated)"
//             onChange={handleChange}
//             className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Description */}
//           <textarea
//             name="description"
//             placeholder="Business Description"
//             rows={4}
//             onChange={handleChange}
//             className="border p-3 rounded-md md:col-span-2 focus:ring-2 focus:ring-[#9AD872]"
//           />

//           {/* Submit Button */}
//           <div className="md:col-span-2">
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#FFA02E] text-white py-3 rounded-md font-semibold hover:opacity-90 disabled:opacity-50"
//             >
//               {loading ? "Creating..." : "Create Business Page"}
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }