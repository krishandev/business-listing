"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type DeleteBusinessButtonProps = {
  id: string;
};

export default function DeleteBusinessButton({
  id,
}: DeleteBusinessButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this business listing?"
    );

    if (!confirmed) return;

    try {
      setLoading(true);

      const res = await fetch(`/api/my-businesses/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to delete business.");
        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while deleting.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}