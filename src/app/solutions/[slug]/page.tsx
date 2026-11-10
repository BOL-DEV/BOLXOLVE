import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES, PROJECTS_LIST } from "@/data/projectsData";
import CaseStudyLayout from "@/components/work/CaseStudyLayout";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo";

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
      title: "Solution Not Found",
      robots: { index: false, follow: false },
    };
  }

  const pageUrl = `${SITE_URL}/solutions/${project.slug}`;
  const ogTitle = `${project.title} | BOLXOLVE Solutions`;
  const description = project.introText[0];

  return {
    title: `${project.title} — ${project.eyebrow}`,
    description,
    alternates: {
      canonical: `/solutions/${project.slug}`,
    },
    openGraph: {
      title: ogTitle,
      description,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: project.screenshot.src,
          alt: project.screenshot.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [project.screenshot.src],
    },
  };
}

export default async function SolutionCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = CASE_STUDIES[slug];

  if (!project) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/solutions/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.introText[0],
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: project.liveUrl || pageUrl,
        image: `${SITE_URL}${project.screenshot.src}`,
        creator: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${SITE_URL}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout project={project} />
    </>
  );
}
