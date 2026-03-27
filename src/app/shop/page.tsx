"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';

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

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Veloura",
          name: "Noir Lace Bralette",
          price: "$45",
          rating: 5,
          reviewCount: "120",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-detailed-close-up-of-a-premium-black-l-1774629382194-aaa1ecc5.png",
        },
        {
          id: "2",
          brand: "Veloura",
          name: "Blush Silk Panty",
          price: "$25",
          rating: 5,
          reviewCount: "89",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-pair-of-delicate-nude-lace-panties-pro-1774629379394-88f79e16.png",
        },
      ]}
      title="Collections"
      description="Explore our curated range of delicate lace and everyday essentials."
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Shop Categories"
      description="Refine your selection by style."
      features={[
        {
          id: "1",
          label: "Sets",
          title: "Lingerie Sets",
          items: [
            "Matching Bralettes",
            "Matching Panties",
          ],
        },
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Shop Stats"
      tag="Quick Look"
      metrics={[
        {
          id: "1",
          value: "150+",
          description: "Items in stock.",
        },
      ]}
      metricsAnimation="opacity"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png"
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
