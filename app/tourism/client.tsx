"use client";

import {
  MapPin,
  Mountain,
  Waves,
  Bike,
  Camera,
  ExternalLink,
  Calendar,
  Palette,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { CTASection } from "@/components/sections/cta-section";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function TourismClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const activityIcons: Record<string, React.ElementType> = {
    Mountain, Waves, Bike, MapPin,
  };

  const seasonColors: Record<string, string> = {
    Spring: "bg-green-50 border-green-200",
    Summer: "bg-yellow-50 border-yellow-200",
    Fall: "bg-orange-50 border-orange-200",
    Winter: "bg-blue-50 border-blue-200",
    "\u6625": "bg-green-50 border-green-200",
    "\u590f": "bg-yellow-50 border-yellow-200",
    "\u79cb": "bg-orange-50 border-orange-200",
    "\u51ac": "bg-blue-50 border-blue-200",
    Primavera: "bg-green-50 border-green-200",
    Verano: "bg-yellow-50 border-yellow-200",
    Otono: "bg-orange-50 border-orange-200",
    Invierno: "bg-blue-50 border-blue-200",
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-teal-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-teal-200">
            <Camera className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {c.header.title}
          </h1>
          <p className="text-lg text-teal-100">{c.header.desc}</p>
        </div>
      </section>

      {/* Iconic Destinations */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{c.highlightsSection.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.highlightsSection.destinations.map((dest, i) => (
              <Card key={i} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="flex-1">
                  <div className="mb-2 inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs text-teal-700">
                    {dest.highlight}
                  </div>
                  <CardTitle className="text-lg">{dest.name}</CardTitle>
                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="size-3" />{dest.location}
                  </p>
                  <CardDescription className="mt-2">{dest.desc}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a href={dest.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-teal-600 hover:underline">
                    Learn More <ExternalLink className="size-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Natural Activities */}
      <section className="bg-teal-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{c.naturalSection.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.naturalSection.activities.map((act, i) => {
              const Icon = activityIcons[act.icon] ?? MapPin;
              return (
                <Card key={i}>
                  <CardHeader>
                    <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-teal-100">
                      <Icon className="size-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-base">{act.title}</CardTitle>
                    <CardDescription>{act.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Items */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{c.culturalSection.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.culturalSection.items.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Palette className="mt-1 size-5 shrink-0 text-teal-600" />
                    <div>
                      <CardTitle className="text-sm font-semibold">{item.title}</CardTitle>
                      <CardDescription className="mt-1">{item.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{c.seasonalSection.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {c.seasonalSection.seasons.map((s, i) => (
              <Card key={i} className={`border ${seasonColors[s.season] ?? "bg-white"}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-slate-600" />
                    <CardTitle className="text-base">{s.season}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {s.events.map((ev, j) => (
                      <li key={j} className="text-xs text-slate-600">• {ev}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
