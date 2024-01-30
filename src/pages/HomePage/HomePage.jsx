import React from 'react'
import MainCarousel from '../../customer/components/HomeCarousel/MainCarousal'
import HomeSectionCarousel from '../../customer/components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../customer/components/Data/mens_kurta'

function HomePage() {
  return (
    <div>
    <MainCarousel/>

    <div className="space-y-10 py-20 flex-col justify-center">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel  data={mens_kurta} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel  data={mens_kurta}sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel  data={mens_kurta}sectionName={"Women's Saree"}/>
        <HomeSectionCarousel  data={mens_kurta}sectionName={"Women's Dress"}/>
    </div>
</div>
  )
}

export default HomePage