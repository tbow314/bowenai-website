"use client";

import { useState } from "react";
import {
  BarChart, Bar,
  LineChart, Line,
  AreaChart, Area,
  XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import { TrendingUp } from "lucide-react";

const TABS = ["Prospecting", "Lead Pipeline", "Customer Insights"] as const;
type Tab = typeof TABS[number];

const DATA: Record<Tab, { name: string; value: number }[]> = {
  Prospecting: [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 180 },
    { name: "Wed", value: 90 },
    { name: "Thu", value: 210 },
    { name: "Fri", value: 160 },
  ],
  "Lead Pipeline": [
    { name: "Week 1", value: 40 },
    { name: "Week 2", value: 80 },
    { name: "Week 3", value: 60 },
    { name: "Week 4", value: 120 },
  ],
  "Customer Insights": [
    { name: "Jan", value: 200 },
    { name: "Feb", value: 350 },
    { name: "Mar", value: 280 },
    { name: "Apr", value: 420 },
  ],
};

const KPIS: Record<Tab, [string, string, string, string]> = {
  Prospecting: ["Total Leads", "2,847", "Qualified", "68%"],
  "Lead Pipeline": ["Pipeline Value", "$1.2M", "Win Rate", "34%"],
  "Customer Insights": ["Active Clients", "142", "Retention", "94%"],
};

const accent = "#2bcdee";

function Chart({ tab, data }: { tab: Tab; data: { name: string; value: number }[] }) {
  const common = { margin: { top: 5, right: 10, left: -20, bottom: 0 } };
  const tooltipStyle = { backgroundColor: "#0d1f24", border: `1px solid ${accent}20`, borderRadius: 8, color: "#fff", fontSize: 12 };

  if (tab === "Prospecting") {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} {...common}>
          <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: `${accent}10` }} />
          <Bar dataKey="value" fill={accent} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
  if (tab === "Lead Pipeline") {
    return (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} {...common}>
          <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="value" stroke={accent} strokeWidth={2} dot={{ fill: accent, r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} {...common}>
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={accent} stopOpacity={0.3} />
            <stop offset="95%" stopColor={accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        <Area type="monotone" dataKey="value" stroke={accent} strokeWidth={2} fill="url(#areaGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default function RevenueDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("Prospecting");
  const kpis = KPIS[activeTab];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <h2 className="text-2xl font-bold text-white">Sales &amp; Revenue Intelligence</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        <div className="md:w-52 flex md:flex-col border-b md:border-b-0 md:border-r border-white/10">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-5 py-4 text-sm font-medium transition-all border-b md:border-b-0 border-white/5 ${
                activeTab === tab
                  ? "bg-[#2bcdee]/10 text-[#2bcdee] border-l-2 border-l-[#2bcdee]"
                  : "text-slate-400 hover:text-white hover:bg-white/5 border-l-2 border-l-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {([[kpis[0], kpis[1]], [kpis[2], kpis[3]]] as [string, string][]).map(([label, value], i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs text-slate-400 mb-1">{label}</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">{value}</span>
                  <TrendingUp size={14} className="text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
          <Chart tab={activeTab} data={DATA[activeTab]} />
        </div>
      </div>
    </section>
  );
}
