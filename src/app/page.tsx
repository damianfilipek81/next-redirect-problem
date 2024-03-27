"use client"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async() => await fetch("http://localhost:3000/api/getExample"))()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      mainPage
    </main>
  );
}
