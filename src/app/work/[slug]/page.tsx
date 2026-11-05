import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, PROJECTS_LIST } from "@/data/projectsData";
import CaseStudyLayout from "@/components/work/CaseStudyLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_LIST.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    return {
      title: "Case Study Not Found | BOLXOLVE LTD",
    };
  }

  return {
    title: `${project.title} — ${project.category}`,
    description: project.overview,
    openGraph: {
      title: `${project.title} | BOLXOLVE Case Study`,
      description: project.overview,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}

