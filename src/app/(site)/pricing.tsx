"use client";

import { PlanFeatures } from "@/types/PlanFeatures";
import { Plans } from "@/types/Plans";
import { Check } from "lucide-react";
import type React from "react";

export default function PricingSection({
  plans,
  planFeatures,
}: {
  plans: Plans;
  planFeatures: PlanFeatures;
}) {
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
            Organiza tu vida de forma divertida,
            <br />
            LEVEL UP YOURSELF
          </h2>
          <p className="text-green-500 flex items-center justify-center gap-2">
            <span className="inline-block">🎉</span>
            ¡Elige el plan que más te acomode!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.status === 200 &&
            plans.data.sort(plan => plan.priority).map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl bg-zinc-900 p-6 border border-${plan.plan_color}/50 relative`}
              >
                <div className={`absolute -top-3 right-6 bg-${plan.plan_color} text-black text-sm font-semibold px-3 py-1 rounded-full`}>
                  {plan.short_name.toUpperCase()}
                </div>
                <h3 className="text-xl font-semibold mb-4">{plan.long_name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      ${plan.monthly_cost}
                    </span>
                    <span className="text-zinc-500">{plan.currency}/mes</span>
                  </div>
                  <p className={`text-${plan.plan_color} text-sm mt-2`}>
                    {plan.short_description}
                  </p>
                </div>
                <div className="space-y-4 mb-8">
                  {planFeatures.status === 200 &&
                    planFeatures.data
                      .filter((feature) => feature.plan_id === plan.id)
                      .map((feature, index) => <Feature key={index+feature.plan_id}>{feature.value}</Feature>)}
                </div>
                <button className={`w-full bg-${plan.plan_color} hover:bg-green-400 transition-colors text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2`}>
                  <span>{plan.button_icon}</span> {plan.button_text}
                </button>
              </div>
            ))}
         
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
