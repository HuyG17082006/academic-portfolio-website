import React from 'react'

import Hero from '../components/HomePage/Hero/Hero.jsx'
import OverviewSection from '../components/HomePage/OverviewSections/OverviewSection.jsx'
import FeaturedSection from '../components/HomePage/FeaturedSection/FeaturedSection.jsx'
import ResearchGuide from '../components/HomePage/ResearchGuide/ResearchGuide.jsx'
import ResearchFieldSection from '../components/HomePage/ResearchFieldSection/ResearchFieldSection.jsx'

export default function HomePage() {
    return (
        <>
            <Hero />
            <OverviewSection />
            <FeaturedSection />
            <ResearchGuide/>
            <ResearchFieldSection/>
        </>
    )
}
