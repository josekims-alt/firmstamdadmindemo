import * as React from "react";
import Navbar from "@/components/app/navbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto max-w-screen-2xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}
