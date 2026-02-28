"use client";

import {
  Heart,
  Stethoscope,
  ShieldCheck,
  Users,
  Hospital,
  Phone,
  ExternalLink,
  MapPin,
  Activity,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { OrgCard } from "@/components/cards/org-card";
import { ReferenceLinks } from "@/components/reference-links";
import { CTASection } from "@/components/sections/cta-section";
import { MapSection } from "@/components/sections/map-section";
import {
  resolveOrganizations,
} from "@/lib/data/organizations";
import { resolveReferences } from "@/lib/data/references";
import { useLanguage } from "@/lib/i18n/language-context";
import { content } from "./content";

export function HealthcareClient() {
  const { language } = useLanguage();
  const c = content[language] ?? content.en;

  const orgs = resolveOrganizations(language);
  const refs = resolveReferences(language);

  const wmchealth = orgs.find((org) => org.id === "wmchealth")!;
  const vassar = orgs.find((org) => org.id === "vassar-brothers")!;

  const healthcareRefs = refs.filter((ref) =>
    ["wmchealth", "northwell-vassar"].includes(ref.id)
  );

  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 size-96 rounded-full bg-teal-400 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-emerald-200">
            <Heart className="size-4" />
            {c.header.badge}
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            {c.header.title}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-emerald-200">
            {c.header.desc}
          </p>
        </div>
      </section>

      {/* WMCHealth — Tabbed */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Stethoscope className="size-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.wmchealth.title}
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-slate-600">{c.wmchealth.desc}</p>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">
                {c.wmchealth.tabs.overview}
              </TabsTrigger>
              <TabsTrigger value="services">
                {c.wmchealth.tabs.services}
              </TabsTrigger>
              <TabsTrigger value="coverage">
                {c.wmchealth.tabs.coverage}
              </TabsTrigger>
              <TabsTrigger value="contact">
                {c.wmchealth.tabs.contact}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.wmchealth.overviewLabels.address}
                      </p>
                      <p className="text-slate-900">{wmchealth.address}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.wmchealth.overviewLabels.phone}
                      </p>
                      <p className="text-slate-900">{wmchealth.phone}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.wmchealth.overviewLabels.level}
                      </p>
                      <Badge className="bg-red-100 text-red-800">
                        Level I Trauma Center
                      </Badge>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium text-slate-500">
                        {c.wmchealth.overviewLabels.description}
                      </p>
                      <p className="text-slate-700">{wmchealth.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {c.wmchealth.keyStats.map((stat, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-2">
                        <Activity className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                        <p className="text-sm font-medium text-slate-900">
                          {stat}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="coverage" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 text-sm text-slate-600">
                    {c.wmchealth.coverageIntro}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.wmchealth.coverageAreas.map((area) => (
                      <Badge
                        key={area}
                        variant="outline"
                        className="text-sm"
                      >
                        <MapPin className="mr-1 size-3" />
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="size-5 text-emerald-600" />
                    {c.wmchealth.contactTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {wmchealth.phone && (
                    <p className="text-sm text-slate-700">
                      <span className="font-medium">
                        {c.wmchealth.overviewLabels.phone}:
                      </span>{" "}
                      {wmchealth.phone}
                    </p>
                  )}
                  {wmchealth.website && (
                    <a
                      href={wmchealth.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 hover:text-emerald-900"
                    >
                      {c.wmchealth.patientPortalLabel}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vassar Brothers / Northwell */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Users className="size-5 text-purple-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.vassar.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-slate-600">{c.vassar.p1}</p>
              <p className="text-slate-600">{c.vassar.p2}</p>
            </div>
            <OrgCard
              name={vassar.name}
              type={vassar.type}
              address={vassar.address}
              description={vassar.description}
              website={vassar.website}
              sourceUrl={vassar.sourceUrl}
            />
          </div>
        </div>
      </section>

      {/* Garnet Health & Regional Healthcare */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Hospital className="size-5 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              {c.garnet.title}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-lg">
                  {c.garnet.communityHealth.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 text-sm text-slate-700">
                  {c.garnet.communityHealth.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="size-5 text-emerald-600" />
                  Garnet Health Medical Center
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-medium">Location:</span> Middletown, Orange County, NY
                </p>
                <p>
                  <span className="font-medium">Beds:</span> 383
                </p>
                <p>
                  <span className="font-medium">Service area:</span> Orange and Sullivan counties
                </p>
                <a
                  href="https://www.garnethealth.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-emerald-700 hover:text-emerald-900"
                >
                  garnethealth.org
                  <ExternalLink className="size-3" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* References */}
      <ReferenceLinks references={healthcareRefs} />

      {/* Healthcare Map */}
      <MapSection
        title={c.header.title}
        description={wmchealth.address ?? ""}
        badgeLabel={c.header.badge}
        center={[41.55, -73.95]}
        zoom={9}
        markers={[
          {
            id: "wmchealth",
            position: [41.082, -73.764],
            title: wmchealth.name,
            description: wmchealth.address ?? "",
          },
          {
            id: "vassar-brothers",
            position: [41.7063, -73.9267],
            title: vassar.name,
            description: vassar.address ?? "",
          },
          {
            id: "garnet-health",
            position: [41.4427, -74.3669],
            title: "Garnet Health Medical Center",
            description: "Middletown, Orange County, NY",
          },
        ]}
      />

      {/* CTA */}
      <CTASection />
    </>
  );
}
