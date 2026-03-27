"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
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

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="We are here for you. Whether you have questions about sizing or feedback on our designs, reach out anytime."
      buttons={[
        {
          text: "Email Support",
          href: "mailto:hello@veloura.com",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      title="Support Help"
      description="Find answers instantly."
      faqs={[
        {
          id: "1",
          title: "Return policy?",
          content: "Returns accepted within 30 days.",
        },
      ]}
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_39wSE8YJoGda03bkKGOyyo2rjk4/a-stunning-elegant-model-wearing-high-en-1774629390894-8ec53ba3.png?_wi=6"
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
