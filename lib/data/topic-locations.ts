// Hudson Valley Reviving Plan - Topic-Location Mapping Data

import type { MapMarker } from "@/components/ui/map";

export interface TopicLocation {
  topicId: string;
  titleKey: string;
  descKey: string;
  icon: string;
  color: string;
  bgColor: string;
  href: string;
  center: [number, number];
  zoom: number;
  markerIds: string[];
}

export const topicLocations: TopicLocation[] = [
  {
    topicId: "campus",
    titleKey: "mapExplorer.topics.campus.title",
    descKey: "mapExplorer.topics.campus.desc",
    icon: "Building",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    href: "/campus",
    center: [41.7484, -74.0858],
    zoom: 10,
    markerIds: ["suny-new-paltz", "vassar-college", "bard-college"],
  },
  {
    topicId: "healthcare",
    titleKey: "mapExplorer.topics.healthcare.title",
    descKey: "mapExplorer.topics.healthcare.desc",
    icon: "Heart",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    href: "/healthcare",
    center: [41.4, -73.85],
    zoom: 9,
    markerIds: ["wmchealth", "vassar-brothers"],
  },
  {
    topicId: "education",
    titleKey: "mapExplorer.topics.education.title",
    descKey: "mapExplorer.topics.education.desc",
    icon: "GraduationCap",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    href: "/education",
    center: [41.75, -73.95],
    zoom: 10,
    markerIds: ["suny-new-paltz", "vassar-college", "bard-college"],
  },
  {
    topicId: "revitalization",
    titleKey: "mapExplorer.topics.revitalization.title",
    descKey: "mapExplorer.topics.revitalization.desc",
    icon: "Store",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    href: "/revitalization",
    center: [41.7, -73.93],
    zoom: 11,
    markerIds: ["poughkeepsie-downtown", "beacon-main-street", "kingston-midtown"],
  },
  {
    topicId: "lifestyle",
    titleKey: "mapExplorer.topics.lifestyle.title",
    descKey: "mapExplorer.topics.lifestyle.desc",
    icon: "Coffee",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    href: "/lifestyle",
    center: [41.5, -73.97],
    zoom: 10,
    markerIds: ["dia-beacon", "storm-king", "beacon-main-street"],
  },
  {
    topicId: "transportation",
    titleKey: "mapExplorer.topics.transportation.title",
    descKey: "mapExplorer.topics.transportation.desc",
    icon: "Train",
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    href: "/transportation",
    center: [41.5, -73.95],
    zoom: 9,
    markerIds: [],
  },
  {
    topicId: "technology",
    titleKey: "mapExplorer.topics.technology.title",
    descKey: "mapExplorer.topics.technology.desc",
    icon: "Monitor",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    href: "/case-studies",
    center: [41.6959, -73.9348],
    zoom: 13,
    markerIds: ["ibm-poughkeepsie"],
  },
];

export const allMarkers: MapMarker[] = [
  // Healthcare
  {
    id: "wmchealth",
    position: [41.082, -73.764],
    title: "WMCHealth Network",
    description: "10-hospital healthcare network, region's largest employer",
  },
  {
    id: "vassar-brothers",
    position: [41.7063, -73.9267],
    title: "Vassar Brothers Medical Center",
    description: "365-bed hospital, part of Northwell Health system",
  },
  // Education
  {
    id: "suny-new-paltz",
    position: [41.7484, -74.0858],
    title: "SUNY New Paltz",
    description: "Public liberal arts college, ESD Innovation Hotspot",
  },
  {
    id: "vassar-college",
    position: [41.6898, -73.8978],
    title: "Vassar College",
    description: "Renowned liberal arts college, founded 1861",
  },
  {
    id: "bard-college",
    position: [42.0268, -73.9068],
    title: "Bard College",
    description: "Distinguished liberal arts college with Fisher Center",
  },
  // Cultural
  {
    id: "dia-beacon",
    position: [41.5051, -73.9712],
    title: "Dia:Beacon",
    description: "Contemporary art museum in converted Nabisco factory",
  },
  {
    id: "scenic-hudson",
    position: [41.7078, -73.932],
    title: "Scenic Hudson",
    description: "Environmental nonprofit protecting 53,000+ acres",
  },
  {
    id: "storm-king",
    position: [41.4285, -74.0577],
    title: "Storm King Art Center",
    description: "500-acre outdoor sculpture park",
  },
  // Technology
  {
    id: "ibm-poughkeepsie",
    position: [41.6959, -73.9348],
    title: "IBM Quantum Computation Center",
    description: "World's first Quantum Computation Center",
  },
  // Revitalization markers
  {
    id: "poughkeepsie-downtown",
    position: [41.7, -73.93],
    title: "Poughkeepsie Downtown",
    description: "DRI-funded mixed-use waterfront development",
  },
  {
    id: "beacon-main-street",
    position: [41.5048, -73.9698],
    title: "Beacon Main Street",
    description: "Revitalized arts & restaurant corridor",
  },
  {
    id: "kingston-midtown",
    position: [41.927, -73.997],
    title: "Kingston Midtown",
    description: "Tech & innovation district",
  },
];
