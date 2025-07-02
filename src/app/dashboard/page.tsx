// pages/dashboard.tsx
'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getToken, clearToken } from "../../utils/auth";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace("/");
    }
  }, [router]);

  const handleLogout = () => {
    clearToken();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-green-700">Bienvenue dans le Dashboard !</h1>
        <p className="text-gray-600">Vous êtes connecté avec succès.</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
