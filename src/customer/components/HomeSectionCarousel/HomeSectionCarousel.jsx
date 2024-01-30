import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from 'react-bootstrap';
import { mens_kurta } from '../Data/mens_kurta';

const HomeSectionCarousel = ({data, sectionName}) => {

    const [activeIndex,setActiveIndex]=useState(0)
    const responsive = {
        0: { items: 1 },
    720: { items: 3 },
        1024: { items: 5.5},
    };

    const  slidePrev=()=>setActiveIndex(activeIndex-1);
    const slideNext=()=>setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item);

    const items=data.slice(0,10).map((item)=><HomeSectionCard product={item}/>)
  return (
    <div className="relative px-4 lg:px-8 ">
        <h2 className="text-2xl font-extrabold text-gray-900">{sectionName}</h2>
            <div className="relative p-5 ">
            <AliceCarousel
        items={items}
        disableButtonsControls
        responsive={responsive}
        disableDotsControls
        onSlideChanged={syncActiveIndex}
        
        active={activeIndex}
    />
    <Button onClick={slideNext}
    variant="contained" className="z-50 bg-white"  sx={{position:'absolute',top:"8rem",
    right:"0rem", transform:""}} aria-label="next" bgcolor="white" >
        <KeyboardArrowLeftIcon  />
    </Button>
    <Button  onClick={slidePrev} variant="contained" className="z-50 bg-white" sx={{position:'absolute',top:"8rem",
    left:"0rem", transform:"translateX(50%) rotate(90deg)"}} aria-label="next" bgcolor="white" >
        <KeyboardArrowLeftIcon  />
    </Button>

        </div>
    </div>
   
)
  
}

export default HomeSectionCarousel