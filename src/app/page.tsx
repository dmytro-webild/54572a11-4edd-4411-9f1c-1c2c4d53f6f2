"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Features",          id: "features"},
        {
          name: "Services",          id: "services"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="EstimatePro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars"}}
      title="Precision Estimating for Elite Builders"
      description="Unlock accurate project costs and maximize your margins with our industry-leading construction estimating services."
      buttons={[
        {
          text: "Get Your Estimate",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/builder-man-taking-notes-mini-notebook-white-t-shirt-helmet-looking-busy-front-view_176474-9981.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      title="Types of Contractors We Serve"
      description="From general contractors to specialized trades, we provide precise estimates for every sector of the construction industry."
      accordionItems={[
        { id: "c1", title: "General Contractors", content: "Residential and commercial primary contractors." },
        { id: "c2", title: "Electrical Contractors", content: "Full electrical systems and low voltage wiring." },
        { id: "c3", title: "Plumbing Contractors", content: "Residential and industrial pipe systems." },
        { id: "c4", title: "HVAC Contractors", content: "Climate control and ventilation specialists." },
        { id: "c5", title: "Concrete Contractors", content: "Foundation and structural concrete work." },
        { id: "c6", title: "Masonry Contractors", content: "Brick, stone, and block masonry." },
        { id: "c7", title: "Carpentry Contractors", content: "Framing, finish carpentry, and millwork." },
        { id: "c8", title: "Painting Contractors", content: "Interior and exterior coating systems." },
        { id: "c9", title: "Roofing Contractors", content: "Commercial and residential roofing." },
        { id: "c10", title: "Drywall Contractors", content: "Wall assembly and finishing." },
        { id: "c11", title: "Flooring Contractors", content: "Tile, carpet, hardwood, and epoxy." },
        { id: "c12", title: "Landscaping Contractors", content: "Hardscaping and irrigation planning." },
        { id: "c13", title: "Glass & Glazing Contractors", content: "Window and curtain wall systems." },
        { id: "c14", title: "Steel Fabricators", content: "Structural and ornamental steelwork." },
        { id: "c15", title: "Excavation Contractors", content: "Site prep and earthmoving." },
        { id: "c16", title: "Insulation Contractors", content: "Thermal and acoustic insulation." },
        { id: "c17", title: "Demolition Contractors", content: "Structure removal and site clearing." },
        { id: "c18", title: "Waterproofing Contractors", content: "Foundation and envelope protection." },
        { id: "c19", title: "Fire Protection Contractors", content: "Sprinkler and safety systems." },
        { id: "c20", title: "Tile & Stone Contractors", content: "Interior and exterior stone installation." },
        { id: "c21", title: "Cabinetry Contractors", content: "Custom kitchen and casework." },
        { id: "c22", title: "Siding Contractors", content: "Exterior wall facade installation." },
        { id: "c23", title: "Asphalt Paving Contractors", content: "Pavement and roadway systems." },
        { id: "c24", title: "Elevator Contractors", content: "Lift and vertical transport systems." },
        { id: "c25", title: "Solar Contractors", content: "Photovoltaic and renewable systems." },
        { id: "c26", title: "Security Contractors", content: "Access control and surveillance." },
        { id: "c27", title: "Acoustic Ceiling Contractors", content: "Drop ceiling and sound masking." },
        { id: "c28", title: "Environmental Remediation", content: "Hazardous material abatement." },
        { id: "c29", title: "Curtain Wall Contractors", content: "High-rise exterior glass systems." },
        { id: "c30", title: "Utility Contractors", content: "Public and site utility services." },
        { id: "c31", title: "Fencing Contractors", content: "Perimeter and decorative fencing." },
        { id: "c32", title: "Cleanroom Contractors", content: "Controlled environment installation." },
        { id: "c33", title: "Medical Gas Contractors", content: "Specialized gas distribution." },
        { id: "c34", title: "Pool & Spa Contractors", content: "Aquatic and recreational construction." },
        { id: "c35", title: "Cold Storage Contractors", content: "Refrigeration and insulated enclosures." }
      ]}
      mediaAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/group-construction-workers-wearing-safety-vests-hard-hats-standing-construction-site_1150-18451.jpg"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "BuildPro",          name: "Residential Renovation",          price: "Custom Quote",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/construction-plans-architectural-project_1232-2918.jpg"},
        {
          id: "p2",          brand: "BuildPro",          name: "Commercial Buildout",          price: "Custom Quote",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/hands-engineer-working-blueprint-construction-concept-engineering-tools-vintage-tone-retro-filter-effect-soft-focus-selective-focus_1418-481.jpg"},
        {
          id: "p3",          brand: "BuildPro",          name: "Luxury Home Build",          price: "Custom Quote",          rating: 5,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/scenery-designers-work_23-2149741804.jpg"},
        {
          id: "p4",          brand: "BuildPro",          name: "Landscape Estimates",          price: "Custom Quote",          rating: 5,
          reviewCount: "30",          imageSrc: "http://img.b2bpic.net/free-photo/construction-site_53876-16234.jpg"},
        {
          id: "p5",          brand: "BuildPro",          name: "Industrial Projects",          price: "Custom Quote",          rating: 5,
          reviewCount: "60",          imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-425.jpg"},
        {
          id: "p6",          brand: "BuildPro",          name: "Sustainable Development",          price: "Custom Quote",          rating: 5,
          reviewCount: "25",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-teamwork-project_23-2148894074.jpg"},
      ]}
      title="Our Specialized Estimating Services"
      description="From residential luxury homes to massive industrial developments."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Proven Results That Build Success"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",          value: "$500M+",          description: "Worth of Projects Estimated"},
        {
          id: "m2",          value: "1,200+",          description: "Happy Contractors"},
        {
          id: "m3",          value: "99.8%",          description: "Estimate Accuracy"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "How fast do you return estimates?",          content: "Most residential projects are returned within 48-72 hours."},
        {
          id: "q2",          title: "Can you handle large projects?",          content: "Yes, we specialize in large industrial and commercial scale builds."},
        {
          id: "q3",          title: "Is your data secure?",          content: "We maintain strict data privacy standards for all your project blueprints."},
      ]}
      mediaAnimation="blur-reveal"
      title="Common Questions About Estimating"
      description="Get clear answers to your questions about project costs."
      faqsAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/architect-working-house-project-light-table_23-2147953426.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="EstimatePro changed how I bid for projects. Their accuracy is unmatched, and I've seen my win rates jump by 20% in just one season."
      rating={5}
      author="Marcus Thorne, Principal Builder"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-builder-orange-work-clothes-yellow-hardhat-with-pencil-ear-dreamily-looking-camera-with-scaffolding-background_574295-1578.jpg",          alt: "Marcus Thorne"},
        {
          src: "http://img.b2bpic.net/free-photo/construction-team-work_23-2151962521.jpg",          alt: "Sarah J."},
        {
          src: "http://img.b2bpic.net/free-photo/smiley-architect-holding-his-plans_23-2148242980.jpg",          alt: "David B."},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-helmet_23-2148921381.jpg",          alt: "Elena R."},
        {
          src: "http://img.b2bpic.net/free-photo/proud-male-contractor-enjoying-day-work-checking-blueprints-construction-new-house_662251-497.jpg",          alt: "Jim W."},
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to streamline your construction bidding process? Start your first estimate today."
      buttons={[
        {
          text: "Contact Estimators",          href: "mailto:hello@estimatepro.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="EstimatePro"
      leftLink={{
        text: "Privacy Policy",        href: "#"}}
      rightLink={{
        text: "Terms of Service",        href: "#"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}