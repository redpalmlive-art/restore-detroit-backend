import { useState } from "react";
import { CreditCard, Banknote, Lock, Home, Heart, Check, ArrowRight, FileText, Copy, X, BarChart3, ShieldCheck } from "lucide-react";

type OptionId = "credit" | "grant" | "freeze" | "generational";

interface CompensationOption {
  id: OptionId;
  title: string;
  subtitle: string;
  amount: string;
  amountDetail: string;
  badge?: string;
  icon: React.ReactNode;
  bestFor?: string;
  howItWorks: string[];
  cityCost: string;
  familyBenefit: string;
  calculation: { label: string; value: string }[];
  timeline: string;
}

const options: CompensationOption[] = [
  {
    id: "credit",
    title: "Future Tax Credit",
    subtitle: "$1,405/yr for 3 years",
    amount: "$4,217",
    amountDetail: "Total value preserved",
    badge: "No application needed",
    bestFor: "Best for city",
    icon: <CreditCard className="w-5 h-5" />,
    howItWorks: [
      "Credit auto-applied to your winter tax bill for 3 consecutive years",
      "No application, no interview — lien remains clear, credit is memo on roll",
      "If you sell, unused credit transfers to new owner-occupant",
    ],
    cityCost: "$0 cash outlay — accounting offset",
    familyBenefit: "$1,405 annual relief, keeps home current",
    calculation: [
      { label: "Year 1 credit", value: "$1,405.66" },
      { label: "Year 2 credit", value: "$1,405.66" },
      { label: "Year 3 credit", value: "$1,405.68" },
      { label: "Total", value: "$4,217.00" },
    ],
    timeline: "Starts next tax cycle",
  },
  {
    id: "grant",
    title: "Direct Grant",
    subtitle: "$4,217 one-time check",
    amount: "$4,217",
    amountDetail: "Immediate restitution",
    icon: <Banknote className="w-5 h-5" />,
    howItWorks: [
      "One-time direct payment issued via City Treasurer ACH or check",
      "Verified ownership + affidavit, no repayment required",
      "Does not affect current taxable value or future assessments",
    ],
    cityCost: "$4,217 cash + $82 processing",
    familyBenefit: "$4,217 immediate liquidity for repairs/taxes",
    calculation: [
      { label: "Overpayment verified", value: "$4,217.00" },
      { label: "Processing fee (city)", value: "$0 to family" },
      { label: "Net to household", value: "$4,217.00" },
    ],
    timeline: "30-60 days",
  },
  {
    id: "freeze",
    title: "Tax Freeze",
    subtitle: "Lock value 5 years, prevents spike",
    amount: "5-Year Lock",
    amountDetail: "Prevents assessment jump",
    icon: <Lock className="w-5 h-5" />,
    howItWorks: [
      "Taxable value frozen at current $42,100 for 5 years — no increase cap",
      "Protects against market spike in Boston-Edison / Atkinson corridor",
      "Remains with property while owner-occupied; resets on non-owner sale",
    ],
    cityCost: "$2,100 est. deferred revenue over 5 yrs",
    familyBenefit: "~$3,800 est. savings vs projected increases",
    calculation: [
      { label: "Current taxable", value: "$42,100" },
      { label: "Projected yr5 w/o freeze", value: "$58,400" },
      { label: "Savings (est.)", value: "$3,800+" },
      { label: "+ Overpayment credit", value: "$1,405" },
    ],
    timeline: "Applied next Board of Review",
  },
  {
    id: "generational",
    title: "Generational Grant",
    subtitle: "Transfer to heir as down payment / repair grant",
    amount: "$4,217+",
    amountDetail: "Heirloom equity tool",
    icon: (
      <span className="relative flex">
        <Home className="w-5 h-5" />
        <Heart className="w-3 h-3 absolute -top-1 -right-1.5 fill-current" />
      </span>
    ),
    howItWorks: [
      "Converts overpayment into restricted deed grant for designated heir",
      "Usable as down payment within Detroit or qualified repair grant",
      "Preserves family tenure — heir search already complete for this parcel",
    ],
    cityCost: "$4,217 held in escrow + title support",
    familyBenefit: "Intergenerational wealth, prevents heir loss",
    calculation: [
      { label: "Base grant", value: "$4,217.00" },
      { label: "Heir title cure value", value: "$1,200 incl." },
      { label: "Total family value", value: "$5,417.00" },
    ],
    timeline: "60-90 days + heir counseling",
  },
];

export default function App() {
  const [selected, setSelected] = useState<OptionId>("credit");
  const [compareMode, setCompareMode] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedOption = options.find((o) => o.id === selected)!;

  const letterText = `Restore Detroit — Property Tax Remedy Engine
Parcel: 1456 Atkinson St, Detroit, MI 48206
Parcel ID: 06-01456-ATK | Verified Overpayment: $4,217.00

RE: Election of Remedy — ${selectedOption.title}

To Detroit Office of the Assessor and City Treasurer:

I am the verified owner-occupant of 1456 Atkinson Street. My parcel has been inventoried and overpayment of $4,217.00 confirmed for tax years 2019-2022 due to unconstitutional over-assessment.

I elect: ${selectedOption.title} — ${selectedOption.subtitle}

Understanding:
${selectedOption.howItWorks.map((b) => `• ${b}`).join("\n")}

Requested Timeline: ${selectedOption.timeline}
Safeguard Active: No collection action during remedy processing.

Signature: ________________________________
Date: ____________________________________

Attachment: Affidavit of Occupancy, Verification Report RD-1456-ATK`;

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-[#fdf8ed] selection:bg-[#e6c07a]/30">
      {/* Top Nav Accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#e6c07a] via-[#e6c07a]/60 to-transparent" />
      
      <div className="max-w-[1120px] mx-auto px-5 md:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#e6c07a] text-[#0a1f1a] flex items-center justify-center font-black tracking-tighter text-[13px]">RD</div>
            <div>
              <div className="text-[11px] tracking-[0.22em] uppercase text-[#e6c07a]/80 font-medium">Restore Detroit • Remedy Engine</div>
              <div className="text-[13px] text-[#fdf8ed]/60 -mt-0.5">Compensation Options Module • v1.4 Verified</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`h-9 px-4 rounded-full text-[12.5px] font-medium tracking-wide border transition-all flex items-center gap-2 ${compareMode ? "bg-[#fdf8ed] text-[#0a1f1a] border-[#fdf8ed]" : "bg-transparent border-[#fdf8ed]/20 text-[#fdf8ed]/80 hover:border-[#e6c07a]/50 hover:text-[#fdf8ed]"}`}
            >
              <BarChart3 className="w-4 h-4" /> {compareMode ? "Exit comparison" : "Compare all 4"}
            </button>
          </div>
        </div>

        {/* Parcel Header Card */}
        <div className="rounded-[20px] bg-[#fdf8ed] text-[#0a1f1a] p-5 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] mb-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-[240px] h-full bg-gradient-to-l from-[#e6c07a]/20 to-transparent pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-[22px] md:text-[26px] font-semibold tracking-tight leading-none">1456 Atkinson Street, Detroit, MI</h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0a1f1a] text-[#e6c07a] px-3 py-1 text-[11px] font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified • Safeguard Active
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-[13.5px]">
              <span className="text-[#0a1f1a]/60">Parcel 06-01456-ATK • Boston-Edison Historic</span>
              <span className="hidden md:inline w-px h-4 bg-black/10" />
              <span className="font-medium">Owner-occupied • Heir chain clear</span>
            </div>
          </div>
          <div className="relative flex items-baseline gap-6 md:gap-8">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#0a1f1a]/50 font-semibold">Overpaid</div>
              <div className="text-[30px] font-bold tracking-tight leading-none mt-1">$4,217</div>
              <div className="text-[12px] text-[#0a1f1a]/60 mt-1">2019-2022 audit • Confirmed</div>
            </div>
            <div className="w-px h-14 bg-black/10 hidden md:block" />
            <div className="hidden md:block">
              <div className="text-[11px] uppercase tracking-widest text-[#0a1f1a]/50 font-semibold">Status</div>
              <div className="flex items-center gap-1.5 mt-1.5 text-[13px] font-medium"><span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" /> Ready to elect</div>
            </div>
          </div>
        </div>

        {/* Comparison Mode */}
        {compareMode ? (
          <div className="rounded-[20px] bg-[#142a22] border border-[#e6c07a]/15 p-5 md:p-7 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[15px] font-semibold tracking-wide">Side-by-side — Total value comparison</h2>
              <span className="text-[11px] tracking-widest uppercase text-[#e6c07a]/70">City cost vs Family benefit</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {options.map((o) => (
                <div key={o.id} className="rounded-[14px] bg-[#0a1f1a] border border-white/5 p-4">
                  <div className="flex items-center gap-2 text-[#e6c07a] mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#e6c07a]/15 flex items-center justify-center">{o.icon}</div>
                    <div className="text-[12px] font-semibold tracking-wide uppercase text-[#fdf8ed]">{o.title}</div>
                  </div>
                  <div className="text-[20px] font-bold tracking-tight">{o.amount}</div>
                  <div className="text-[11px] text-[#fdf8ed]/50 mt-0.5">{o.amountDetail}</div>
                  <div className="mt-4 space-y-2">
                    <div className="text-[11px] uppercase tracking-widest text-[#fdf8ed]/40">City cost</div>
                    <div className="text-[12.5px] leading-snug text-[#fdf8ed]/80">{o.cityCost}</div>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="text-[11px] uppercase tracking-widest text-[#fdf8ed]/40">Family benefit</div>
                    <div className="text-[12.5px] leading-snug text-[#fdf8ed]">{o.familyBenefit}</div>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-white/10 rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#e6c07a]" style={{ width: o.id === "credit" ? "72%" : o.id === "grant" ? "100%" : o.id === "freeze" ? "88%" : "95%" }} />
                  </div>
                  <div className="mt-2 text-[10px] text-[#fdf8ed]/40">Relative total value</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-[#fdf8ed]/50">
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Future Credit = lowest cash impact</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Direct Grant = fastest</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Freeze = long-term protection</span>
              <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Generational = prevents heir loss</span>
            </div>
          </div>
        ) : null}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {options.map((opt) => {
            const active = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`text-left rounded-[18px] p-5 md:p-6 border transition-all duration-200 relative overflow-hidden group ${active ? "bg-[#fdf8ed] border-[#e6c07a] text-[#0a1f1a] shadow-[0_12px_40px_rgba(230,192,122,0.18)]" : "bg-[#142a22] border-white/10 text-[#fdf8ed] hover:border-[#e6c07a]/30 hover:bg-[#1a332a]"}`}
              >
                {/* subtle gold glow when active */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity ${active ? "opacity-100" : "opacity-0"}`} style={{ background: "radial-gradient(500px 200px at 90% -20%, rgba(230,192,122,0.18), transparent)" }} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex gap-3.5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${active ? "bg-[#0a1f1a] text-[#e6c07a]" : "bg-[#e6c07a]/15 text-[#e6c07a]"}`}>
                      {opt.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-[16px] font-semibold tracking-tight leading-tight">{opt.title}</div>
                        {opt.badge && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase border ${active ? "bg-[#0a1f1a] text-[#e6c07a] border-[#0a1f1a]" : "bg-[#e6c07a]/15 text-[#e6c07a] border-[#e6c07a]/20"}`}>{opt.badge}</span>
                        )}
                        {opt.bestFor && (
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase ${active ? "bg-[#e6c07a] text-[#0a1f1a]" : "bg-white/10 text-[#fdf8ed]/70"}`}>{opt.bestFor}</span>
                        )}
                      </div>
                      <div className={`text-[13px] mt-1 ${active ? "text-[#0a1f1a]/60" : "text-[#fdf8ed]/60"}`}>{opt.subtitle}</div>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-[22px] font-bold tracking-tight">{opt.amount}</span>
                        <span className={`text-[11px] ${active ? "text-[#0a1f1a]/50" : "text-[#fdf8ed]/50"}`}>• {opt.timeline}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${active ? "bg-[#0a1f1a] border-[#0a1f1a] text-[#e6c07a]" : "border-white/15 text-transparent"}`}>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* bottom accent line */}
                <div className={`mt-5 h-px w-full ${active ? "bg-[#0a1f1a]/10" : "bg-white/10"}`} />
                <div className={`mt-3 flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold ${active ? "text-[#0a1f1a]/40" : "text-[#fdf8ed]/40"}`}>
                  <span>{opt.amountDetail}</span>
                  <span className="flex items-center gap-1 normal-case tracking-normal font-medium text-[12px]">{active ? "Selected" : "Select option"} <ArrowRight className={`w-3.5 h-3.5 transition-transform ${active ? "translate-x-0" : "group-hover:translate-x-0.5"}`} /></span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Breakdown Panel */}
        <div className="mt-6 rounded-[20px] bg-[#142a22] border border-[#e6c07a]/15 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#e6c07a] text-[#0a1f1a] flex items-center justify-center">{selectedOption.icon}</div>
                  <div>
                    <h3 className="text-[18px] font-semibold tracking-tight">{selectedOption.title} — Breakdown</h3>
                    <div className="text-[12px] text-[#fdf8ed]/60 mt-0.5">{selectedOption.subtitle} • {selectedOption.timeline}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6">
                  {/* How it works */}
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#e6c07a]/80 mb-3">How it works</div>
                    <ul className="space-y-2.5">
                      {selectedOption.howItWorks.map((t, i) => (
                        <li key={i} className="flex gap-3 text-[13.5px] leading-[1.5] text-[#fdf8ed]/85">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#e6c07a] shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="rounded-[12px] bg-[#0a1f1a] border border-white/5 p-4">
                        <div className="text-[10px] uppercase tracking-widest text-[#fdf8ed]/40 font-semibold">City cost</div>
                        <div className="mt-1.5 text-[13px] leading-snug text-[#fdf8ed]/80">{selectedOption.cityCost}</div>
                      </div>
                      <div className="rounded-[12px] bg-[#e6c07a]/10 border border-[#e6c07a]/20 p-4">
                        <div className="text-[10px] uppercase tracking-widest text-[#e6c07a]/80 font-semibold">Family benefit</div>
                        <div className="mt-1.5 text-[13px] leading-snug text-[#fdf8ed]">{selectedOption.familyBenefit}</div>
                      </div>
                    </div>
                  </div>

                  {/* Live calculation */}
                  <div className="rounded-[14px] bg-[#0a1f1a] border border-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#fdf8ed]/50">Live calculation preview</div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 font-medium">Verified • $4,217</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {selectedOption.calculation.map((c, i) => (
                        <div key={i} className="flex items-center justify-between text-[13px] pb-3 border-b border-white/5 last:border-0 last:pb-0">
                          <span className="text-[#fdf8ed]/60">{c.label}</span>
                          <span className={`font-medium tabular-nums ${i === selectedOption.calculation.length - 1 ? "text-[#e6c07a] font-semibold" : "text-[#fdf8ed]"}`}>{c.value}</span>
                        </div>
                      ))}
                    </div>
                    {/* Mini visual */}
                    <div className="mt-5">
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden flex">
                        <div className="h-full bg-[#e6c07a] rounded-full" style={{ width: selectedOption.id === "grant" ? "100%" : selectedOption.id === "credit" ? "100%" : selectedOption.id === "freeze" ? "85%" : "95%" }} />
                      </div>
                      <div className="mt-2 flex justify-between text-[10px] text-[#fdf8ed]/40">
                        <span>Parcel inventory</span><span>Remedy elected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Column */}
              <div className="md:w-[260px] shrink-0 flex flex-col gap-3">
                <button
                  onClick={() => setLetterOpen(true)}
                  className="w-full h-[52px] rounded-full bg-[#e6c07a] text-[#0a1f1a] font-semibold text-[13.5px] tracking-wide flex items-center justify-center gap-2 hover:bg-[#f0d29a] transition-colors shadow-[0_8px_24px_rgba(230,192,122,0.25)]"
                >
                  <FileText className="w-4 h-4" /> Generate Letter
                </button>
                <div className="rounded-[12px] bg-[#0a1f1a] border border-white/5 p-3.5 text-[11px] leading-[1.5] text-[#fdf8ed]/60">
                  Letter is pre-filled with parcel verification, affidavit language, and Board of Review formatting. No filing fee.
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-[#fdf8ed]/40">
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center"><ShieldCheck className="w-3 h-3" /></div>
                  Safeguard: collection paused during remedy
                </div>
              </div>
            </div>
          </div>
          {/* bottom stripe */}
          <div className="h-px w-full bg-gradient-to-r from-[#e6c07a]/40 via-white/10 to-transparent" />
          <div className="px-6 md:px-8 py-3 flex flex-wrap items-center gap-3 text-[11px] text-[#fdf8ed]/40">
            <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#e6c07a]" /> Audit ID: RD-1456-ATK-2024</span>
            <span className="hidden md:inline w-px h-3 bg-white/10" />
            <span>Attorney-reviewed template • Detroit Law Dept. compliant</span>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-8 rounded-[16px] bg-[#0a1f1a] border border-[#e6c07a]/10 p-4 md:p-5 flex flex-wrap gap-6 md:gap-0 md:grid md:grid-cols-4">
          {[
            { label: "parcels inventoried", value: "380,214" },
            { label: "owner records", value: "173,104" },
            { label: "heir searches", value: "41,827" },
            { label: "discarded", value: "0", highlight: true },
          ].map((s) => (
            <div key={s.label} className="flex-1 min-w-[140px] md:min-w-0 md:border-r last:border-0 border-white/10 md:px-6 first:pl-0">
              <div className={`text-[22px] md:text-[26px] font-bold tracking-tight tabular-nums leading-none ${s.highlight ? "text-[#e6c07a]" : "text-[#fdf8ed]"}`}>{s.value}</div>
              <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.18em] text-[#fdf8ed]/40 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-[11px] text-[#fdf8ed]/25 tracking-wide">
          Restore Detroit • Property Tax Remedy Engine • Data verified against Wayne County Register • No parcel discarded
        </div>
      </div>

      {/* Letter Modal */}
      {letterOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
          <div className="absolute inset-0 bg-[#0a1f1a]/85 backdrop-blur-[6px]" onClick={() => setLetterOpen(false)} />
          <div className="relative w-full md:max-w-[640px] bg-[#fdf8ed] text-[#0a1f1a] rounded-t-[20px] md:rounded-[20px] shadow-[0_24px_80px_rgba(0,0,0,0.5)] overflow-hidden max-h-[92vh] md:max-h-[85vh] flex flex-col animate-[in_0.25s_ease]">
            <div className="p-5 md:p-6 flex items-start justify-between border-b border-black/10">
              <div>
                <div className="text-[12px] uppercase tracking-widest font-semibold text-[#0a1f1a]/50">Generated letter — {selectedOption.title}</div>
                <div className="text-[16px] font-semibold mt-1 tracking-tight">1456 Atkinson — Remedy Election</div>
              </div>
              <button onClick={() => setLetterOpen(false)} className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 md:p-6 overflow-auto">
              <pre className="whitespace-pre-wrap text-[13px] leading-[1.6] font-[ui-monospace,Menlo,Monaco] bg-[#0a1f1a]/5 rounded-[12px] p-4 border border-black/10">{letterText}</pre>
            </div>
            <div className="p-4 md:p-5 border-t border-black/10 flex gap-3 bg-[#fdf8ed]">
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(letterText);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1800);
                }}
                className="flex-1 h-11 rounded-full bg-[#0a1f1a] text-[#fdf8ed] text-[13px] font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy letter"}
              </button>
              <button
                onClick={() => setLetterOpen(false)}
                className="h-11 px-6 rounded-full bg-[#e6c07a] text-[#0a1f1a] text-[13px] font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes in{from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}}`}</style>
    </div>
  );
}
