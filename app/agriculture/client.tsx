"use client";

import {
  Sprout,
  Apple,
  GlassWater,
  TrendingUp,
  ExternalLink,
  Lightbulb,
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

export function AgricultureClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const categoryIcons: Record<string, React.ElementType> = {
    Apple,
    Beef: Sprout,
    Sprout,
    GlassWater,
  };

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-green-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-green-200">
            <Sprout className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl" style={{ fontFamily: 'var(--font-noto-serif-tc)' }}>
            {c.header.title}
          </h1>
          <p className="text-lg text-green-100">{c.header.desc}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">{c.statsSection.title}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {c.statsSection.stats.map((stat, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-mono font-bold text-green-700 tabular-nums">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-slate-700">{stat.label}</div>
                  <div className="mt-1 text-xs text-slate-500">{stat.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farming Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">{c.farmingSection.title}</h2>
          <p className="mb-8 text-slate-600">{c.farmingSection.desc}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.farmingSection.categories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon] ?? Sprout;
              return (
                <Card key={i} className="border-green-100 hover:border-green-300 transition-colors">
                  <CardHeader>
                    <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-green-50">
                      <Icon className="size-6 text-green-600" />
                    </div>
                    <CardTitle className="text-base">{cat.title}</CardTitle>
                    <CardDescription>{cat.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agri-Tourism */}
      <section className="bg-green-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">{c.agriTourismSection.title}</h2>
          <p className="mb-8 text-slate-600">{c.agriTourismSection.desc}</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.agriTourismSection.experiences.map((exp, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="mt-1 size-5 shrink-0 text-green-600" />
                    <div>
                      <CardTitle className="text-base">{exp.title}</CardTitle>
                      <CardDescription className="mt-1">{exp.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Orgs */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-slate-900">{c.supportSection.title}</h2>
          <p className="mb-8 text-slate-600">{c.supportSection.desc}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.supportSection.orgs.map((org, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="text-base">{org.name}</CardTitle>
                  <CardDescription>{org.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <a href={org.website} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-green-600 hover:underline">
                    Visit Website <ExternalLink className="size-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Opportunities */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{c.challengesSection.title}</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-red-700">Challenges</h3>
              <div className="space-y-4">
                {c.challengesSection.challenges.map((item, i) => (
                  <Card key={i} className="border-red-100">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-red-800">{item.title}</CardTitle>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-green-700">Opportunities</h3>
              <div className="space-y-4">
                {c.challengesSection.opportunities.map((item, i) => (
                  <Card key={i} className="border-green-100">
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-green-600" />
                        <div>
                          <CardTitle className="text-sm text-green-800">{item.title}</CardTitle>
                          <CardDescription className="mt-1">{item.desc}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
