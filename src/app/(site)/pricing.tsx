"use client";

import { Check } from "lucide-react";
import type React from "react";

export default function PricingSection() {
  return (
    <div
      id="pricing"
      className="min-h-screen bg-[#0F0F0F] text-white px-4 py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FFBE18] font-medium mb-4">Precios</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ahorra horas de código repetitivo,
            <br />
            ¡envía rápido y sé rentable!
          </h2>
          <p className="text-green-500 flex items-center justify-center gap-2">
            <span className="inline-block">🎉</span>
            ¡100% Gratis Para Siempre!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Gratis */}
          <div className="rounded-xl bg-zinc-900 p-6 border border-green-500/50 relative">
            <div className="absolute -top-3 right-6 bg-green-500 text-black text-sm font-semibold px-3 py-1 rounded-full">
              GRATIS
            </div>
            <h3 className="text-xl font-semibold mb-4">Plan Básico</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-zinc-500">CLP</span>
              </div>
              <p className="text-green-500 text-sm mt-2">
                Gratis para siempre, sin tarjeta requerida
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <Feature>Gestión ilimitada de tareas</Feature>
              <Feature>Logros y medallas básicas</Feature>
              <Feature>Temporizador Pomodoro</Feature>
              <Feature>Estadísticas semanales</Feature>
              <Feature>Acceso a comunidad</Feature>
            </div>
            <button className="w-full bg-green-500 hover:bg-green-400 transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
              <span>🚀</span> Empezar gratis
            </button>
          </div>

          {/* Plan Pro */}
          <div className="rounded-xl bg-zinc-900 p-6 border border-yellow-400/50 relative">
            <div className="absolute -top-3 right-6 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-full">
              PRO
            </div>
            <h3 className="text-xl font-semibold mb-4">Plan Pro</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$3.990</span>
                <span className="text-zinc-500">CLP/mes</span>
              </div>
              <p className="text-yellow-400 text-sm mt-2">
                7 días de prueba gratis
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <Feature>Todo lo del Básico</Feature>
              <Feature>Retos diarios y semanales</Feature>
              <Feature>Personalización de avatar</Feature>
              <Feature>Integración con Google Calendar</Feature>
              <Feature>Recompensas avanzadas</Feature>
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
              <span>⭐</span> Probar Pro
            </button>
          </div>

          {/* Plan Élite */}
          <div className="rounded-xl bg-zinc-900 p-6 border border-purple-500/50 relative">
            <div className="absolute -top-3 right-6 bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              ÉLITE
            </div>
            <h3 className="text-xl font-semibold mb-4">Plan Élite</h3>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$7.990</span>
                <span className="text-zinc-500">CLP/mes</span>
              </div>
              <p className="text-purple-400 text-sm mt-2">
                Funcionalidades exclusivas
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <Feature>Todo lo del Pro</Feature>
              <Feature>Ranking global y local</Feature>
              <Feature>Desafíos entre amigos</Feature>
              <Feature>Temas y fondos exclusivos</Feature>
              <Feature>Soporte prioritario</Feature>
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-400 transition-colors text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2">
              <span>👑</span> Ser Élite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
      <span className="text-zinc-300">{children}</span>
    </div>
  );
}
