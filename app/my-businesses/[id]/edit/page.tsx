"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBusinessPage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    logoUrl: "",
    shopFrontImageUrl: "",
    address: "",
    city: "",
    category: "",
    services: "",
    description: "",
  });

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const res = await fetch(`/api/my-businesses/${id}`);

        if (!res.ok) {
          throw new Error("Business not found");
        }

        const data = await res.json();

        setForm({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          website: data.website || "",
          logoUrl: data.logoUrl || "",
          shopFrontImageUrl: data.shopFrontImageUrl || "",
          address: data.address || "",
          city: data.city || "",
          category: data.category || "",
          services: (data.services || []).join(", "),
          description: data.description || "",
        });
      } catch (err) {
        setError("Business not found or you do not have permission.");
      } finally {
        setLoading(false);
      }
    }

    fetchBusiness();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/my-businesses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          services: form.services
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to update business");
      }

      router.push("/my-businesses");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading business...</p>
      </div>
    );
  }

  if (error && !form.name) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow">
          <h1 className="text-4xl font-bold text-red-600">
            Business Not Found
          </h1>

          <p className="mt-4 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow">
        <h1 className="mb-8 text-3xl font-bold text-[#468432]">
          Edit Business
        </h1>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <input
            type="text"
            name="name"
            placeholder="Business Name"
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="url"
            name="website"
            placeholder="Website URL"
            value={form.website}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="url"
            name="logoUrl"
            placeholder="Logo Image URL"
            value={form.logoUrl}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="url"
            name="shopFrontImageUrl"
            placeholder="Shop Front Image URL"
            value={form.shopFrontImageUrl}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="rounded-lg border p-3"
            required
          >
            <option value="">Select Category</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Salon">Salon</option>
            <option value="Mobile Repair">Mobile Repair</option>
            <option value="Gift Shop">Gift Shop</option>
          </select>

          <input
            type="text"
            name="services"
            placeholder="Services (comma separated)"
            value={form.services}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
            required
          />

          <textarea
            name="description"
            placeholder="Business Description"
            value={form.description}
            onChange={handleChange}
            className="rounded-lg border p-3 md:col-span-2"
            rows={5}
            required
          />

          <div className="md:col-span-2 flex gap-4 pt-4">
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#468432] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Update Business"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/my-businesses")}
              className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}