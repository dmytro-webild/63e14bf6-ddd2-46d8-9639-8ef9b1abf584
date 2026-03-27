"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="large"
        background="aurora"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Shop",
          id: "/shop",
        },
        {
          name: "About",
          id: "/about",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Veloura Intimates"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Unleash Your Confidence"
      description="Luxury lingerie designed to make you feel irresistible."
      kpis={[
        {
          value: "100+",
          label: "Styles",
        },
        {
          value: "10k+",
          label: "Happy Women",
        },
        {
          value: "24/7",
          label: "Support",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Shop Now",
          href: "/shop",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png?_wi=1"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Why Choose Veloura"
      description="Experience unparalleled quality and comfort."
      features={[
        {
          id: "1",
          label: "Luxury",
          title: "Premium Materials",
          items: [
            "French Lace",
            "Silk Lining",
          ],
        },
        {
          id: "2",
          label: "Fit",
          title: "Perfect Comfort",
          items: [
            "Adaptive Straps",
            "Seamless Fit",
          ],
        },
        {
          id: "3",
          label: "Style",
          title: "Elegant Design",
          items: [
            "Timeless Cut",
            "Sophisticated Palette",
          ],
        },
      ]}
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="The Art of Elegance"
      description="Discover insights into luxury living and self-care."
      blogs={[
        {
          id: "1",
          category: "Style",
          title: "How to Care for Lace",
          excerpt: "Keep your pieces looking new forever.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-detailed-close-up-of-a-premium-black-l-1774629382194-aaa1ecc5.png?_wi=1",
          authorName: "Veloura Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-chic-portrait-of-a-woman-smiling-warm--1774629380485-859ffa37.png",
          date: "Jan 12, 2025",
        },
        {
          id: "2",
          category: "Lifestyle",
          title: "Confidence Starts Within",
          excerpt: "Finding your inner spark every day.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-pair-of-delicate-nude-lace-panties-pro-1774629379394-88f79e16.png?_wi=1",
          authorName: "Veloura Team",
          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-chic-portrait-of-a-woman-smiling-warm--1774629380485-859ffa37.png",
          date: "Jan 15, 2025",
        },
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Milestones"
      metrics={[
        {
          id: "1",
          value: "50k",
          description: "Lingerie sets sold globally.",
        },
        {
          id: "2",
          value: "98%",
          description: "Customer satisfaction rate.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="Frequently Asked"
      description="Questions about sizing, shipping, or care."
      faqs={[
        {
          id: "1",
          title: "How do I find my fit?",
          content: "Check our detailed guide on the shop page.",
        },
        {
          id: "2",
          title: "Is shipping discreet?",
          content: "Yes, we ship in plain, secure packaging.",
        },
      ]}
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png?_wi=2"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Sets",
              href: "/shop",
            },
            {
              label: "Shapewear",
              href: "/shop",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "/faq",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
      ]}
      logoText="Veloura Intimates"
      copyrightText="© 2025 Veloura Intimates"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
