"use client";

import {
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Cpu,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { OrgCard } from "@/components/cards/org-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import { resolveOrganizations } from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function EducationClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const orgs = resolveOrganizations(language);
  const refs = resolveReferences(language);

  const vassarCollege = orgs.find((o) => o.id === "vassar-college")!;
  const bardCollege = orgs.find((o) => o.id === "bard-college")!;
  const sunyNewPaltz = orgs.find((o) => o.id === "suny-new-paltz")!;
  const ibmQuantum = orgs.find((o) => o.id === "ibm-poughkeepsie")!;
  // suny-orange not in organizations.ts — rendered from content only;

  const educationRefs = refs.filter((ref) =>
    [
      "vassar-college",
      "bard-college",
      "suny-new-paltz",
      "ibm-poughkeepsie",
    ].includes(ref.id)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-indigo-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-purple-200">
            <GraduationCap className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-purple-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* Vassar College */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Award className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.vassarCollege.title}
            </h2>
            <Badge className="bg-purple-100 text-purple-800">
              {c.vassarCollege.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.vassarCollege.desc}</p>
            </div>
            <OrgCard
              name={vassarCollege.name}
              type={vassarCollege.type}
              address={vassarCollege.address}
              description={vassarCollege.description}
              website={vassarCollege.website}
              sourceUrl={vassarCollege.sourceUrl}
            />
          </div>
        </div>
      </section>

      {/* Bard College */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Building2 className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.bardCollege.title}
            </h2>
            <Badge className="bg-indigo-100 text-indigo-800">
              {c.bardCollege.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <OrgCard
              name={bardCollege.name}
              type={bardCollege.type}
              address={bardCollege.address}
              description={bardCollege.description}
              website={bardCollege.website}
              sourceUrl={bardCollege.sourceUrl}
            />
            <div>
              <p className="text-slate-600">{c.bardCollege.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUNY New Paltz */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.sunyNewPaltz.title}
            </h2>
            <Badge className="bg-sky-100 text-sky-800">
              {c.sunyNewPaltz.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.sunyNewPaltz.desc}</p>
            </div>
            <OrgCard
              name={sunyNewPaltz.name}
              type={sunyNewPaltz.type}
              address={sunyNewPaltz.address}
              description={sunyNewPaltz.description}
              website={sunyNewPaltz.website}
              sourceUrl={sunyNewPaltz.sourceUrl}
            />
          </div>
        </div>
      </section>

      {/* IBM Quantum Computation Center */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Cpu className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.ibmQuantum.title}
            </h2>
            <Badge className="bg-emerald-100 text-emerald-800">
              {c.ibmQuantum.badge}
            </Badge>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <OrgCard
              name={ibmQuantum.name}
              type={ibmQuantum.type}
              address={ibmQuantum.address}
              description={ibmQuantum.description}
              website={ibmQuantum.website}
              sourceUrl={ibmQuantum.sourceUrl}
            />
            <div>
              <p className="text-slate-600">{c.ibmQuantum.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUNY Orange */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <BookOpen className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.sunyOrange.title}
            </h2>
            <Badge className="bg-amber-100 text-amber-800">
              {c.sunyOrange.badge}
            </Badge>
          </div>
          <div className="max-w-3xl">
            <p className="text-slate-600">{c.sunyOrange.desc}</p>
          </div>
        </div>
      </section>

      {/* Regional Academic Connections */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <MapPin className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.regional.title}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {c.regional.cards.map((card, i) => (
              <Card key={i} className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={educationRefs} />

      {/* Education Map */}
      <MapSection
        title={c.header.title}
        description={vassarCollege.address}
        badgeLabel={c.header.badge}
        center={[41.75, -73.98]}
        zoom={10}
        markers={[
          {
            id: "vassar-college",
            position: [41.6898, -73.8978],
            title: vassarCollege.name,
            description: vassarCollege.address,
          },
          {
            id: "bard-college",
            position: [42.0268, -73.9068],
            title: bardCollege.name,
            description: bardCollege.address,
          },
          {
            id: "suny-new-paltz",
            position: [41.7484, -74.0858],
            title: sunyNewPaltz.name,
            description: sunyNewPaltz.address,
          },
          {
            id: "ibm-poughkeepsie",
            position: [41.6959, -73.9348],
            title: ibmQuantum.name,
            description: ibmQuantum.address,
          },
          {
            id: "suny-orange",
            position: [41.4413, -74.4244],
            title: "SUNY Orange",
            description: "115 South St, Middletown, NY 10940",
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
