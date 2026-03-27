"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Sparkles } from "lucide-react";

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

  <div id="about-story" data-section="about-story">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Feeling Beautiful"
      description="Veloura Intimates was founded on the belief that beauty starts from within. We create pieces that celebrate self-love and confidence."
      subdescription="Every thread is woven with empowerment, comfort, and luxury."
      icon={Sparkles}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png?_wi=4"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Heritage"
      description={[
        "Crafted with care since 2020.",
        "Every piece tells a story.",
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Journey"
      tag="History"
      metrics={[
        {
          id: "1",
          value: "5+",
          description: "Years of elegance.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png?_wi=5"
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
