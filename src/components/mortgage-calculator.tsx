"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const paymentFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function toNumber(value: string) {
  return Number(value.replace(/[^0-9.]/g, "")) || 0;
}

function calculatePrincipalAndInterest(loanAmount: number, annualRate: number, years: number) {
  if (loanAmount <= 0 || years <= 0) {
    return 0;
  }

  const months = years * 12;
  const monthlyRate = annualRate / 100 / 12;

  if (monthlyRate === 0) {
    return loanAmount / months;
  }

  const factor = (monthlyRate * (1 + monthlyRate) ** months) / ((1 + monthlyRate) ** months - 1);

  return loanAmount * factor;
}

type CalculatorFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
};

function CalculatorField({ label, value, onChange, prefix, suffix, step = "1" }: CalculatorFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-navy">
      {label}
      <span className="flex min-h-[3.1rem] items-center rounded-sm border border-slate-300 bg-white focus-within:border-gold focus-within:shadow-[0_0_0_3px_rgba(212,175,55,0.14)]">
        {prefix ? <span className="pl-4 text-slate-500">{prefix}</span> : null}
        <input
          className="w-full border-0 bg-transparent px-3 py-3 text-navy outline-none"
          inputMode="decimal"
          type="number"
          min="0"
          step={step}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        {suffix ? <span className="pr-4 text-slate-500">{suffix}</span> : null}
      </span>
    </label>
  );
}

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("450000");
  const [downPayment, setDownPayment] = useState("90000");
  const [interestRate, setInterestRate] = useState("6.75");
  const [loanTerm, setLoanTerm] = useState("30");
  const [propertyTaxes, setPropertyTaxes] = useState("7200");
  const [insurance, setInsurance] = useState("2400");
  const [hoa, setHoa] = useState("0");
  const [pmi, setPmi] = useState("0");

  const results = useMemo(() => {
    const homePriceValue = toNumber(homePrice);
    const downPaymentValue = Math.min(toNumber(downPayment), homePriceValue);
    const loanAmount = Math.max(homePriceValue - downPaymentValue, 0);
    const principalAndInterest = calculatePrincipalAndInterest(loanAmount, toNumber(interestRate), toNumber(loanTerm));
    const monthlyTaxes = toNumber(propertyTaxes) / 12;
    const monthlyInsurance = toNumber(insurance) / 12;
    const monthlyHoa = toNumber(hoa);
    const monthlyPmi = toNumber(pmi);
    const totalPayment = principalAndInterest + monthlyTaxes + monthlyInsurance + monthlyHoa + monthlyPmi;

    return {
      loanAmount,
      principalAndInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyHoa,
      monthlyPmi,
      totalPayment,
    };
  }, [downPayment, hoa, homePrice, insurance, interestRate, loanTerm, pmi, propertyTaxes]);

  const rows = [
    ["Principal & Interest", results.principalAndInterest],
    ["Monthly Taxes", results.monthlyTaxes],
    ["Monthly Insurance", results.monthlyInsurance],
    ["Monthly HOA", results.monthlyHoa],
    ["Monthly PMI", results.monthlyPmi],
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-sm bg-white p-6 shadow-[0_18px_50px_rgba(13,27,42,0.08)] md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <CalculatorField label="Home Price" value={homePrice} onChange={setHomePrice} prefix="$" />
          <CalculatorField label="Down Payment" value={downPayment} onChange={setDownPayment} prefix="$" />
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Loan Amount
            <span className="flex min-h-[3.1rem] items-center rounded-sm border border-navy/10 bg-light-gray px-4 text-slate-700">
              {currencyFormatter.format(results.loanAmount)}
            </span>
          </label>
          <CalculatorField label="Interest Rate" value={interestRate} onChange={setInterestRate} suffix="%" step="0.01" />
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Loan Term
            <select className="form-field" value={loanTerm} onChange={(event) => setLoanTerm(event.target.value)}>
              <option value="15">15 years</option>
              <option value="20">20 years</option>
              <option value="30">30 years</option>
            </select>
          </label>
          <CalculatorField label="Property Taxes Annual" value={propertyTaxes} onChange={setPropertyTaxes} prefix="$" />
          <CalculatorField label="Homeowners Insurance Annual" value={insurance} onChange={setInsurance} prefix="$" />
          <CalculatorField label="HOA Monthly" value={hoa} onChange={setHoa} prefix="$" />
          <CalculatorField label="PMI Monthly Optional" value={pmi} onChange={setPmi} prefix="$" />
        </div>
      </div>

      <aside className="rounded-sm border border-gold/40 bg-navy p-6 text-white shadow-[0_24px_70px_rgba(13,27,42,0.2)] md:p-8">
        <p className="eyebrow text-gold">Estimated Payment</p>
        <h2 className="mt-4 text-4xl font-semibold">{paymentFormatter.format(results.totalPayment)}</h2>
        <p className="mt-2 text-sm text-white/60">Estimated total monthly payment</p>
        <div className="mt-8 grid gap-4">
          {rows.map(([label, value]) => (
            <div key={label as string} className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 text-sm">
              <span className="text-white/70">{label as string}</span>
              <strong className="text-white">{paymentFormatter.format(value as number)}</strong>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-sm bg-gold p-5 text-navy">
          <p className="text-sm font-bold uppercase tracking-[0.16em]">Want a more accurate estimate?</p>
          <p className="mt-3 text-sm leading-7">
            A personalized review can account for loan program, credit profile, taxes, insurance, and property details.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <Link href="/contact#lead-form" className="button-navy" data-analytics-event="get_prequalified_click">
              Get Pre-Qualified
            </Link>
            <Link href="/contact#lead-form" className="button-navy" data-analytics-event="schedule_consultation_click">
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
