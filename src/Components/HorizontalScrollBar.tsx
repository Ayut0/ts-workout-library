import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react';
import { BodyPartCard } from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/left-arrow.png'
import RightArrowIcon from '../assets/right-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


type PropsFromSearch = {
  data: string[]
  eachBodyPart: string
  setEachBodyPart: Function
}

//Need to fix about scroll
export const HorizontalScrollBar: React.FC<PropsFromSearch> = ({data, eachBodyPart, setEachBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((bodyPart:any) => (
            <Box
                key={bodyPart.id || bodyPart}
                title={bodyPart.id || bodyPart}
                m='0, 40px'
            >
              <BodyPartCard bodyPart={bodyPart} eachBodyPart={eachBodyPart} setEachBodyPart={setEachBodyPart}/>
            </Box>
        ))}
    </ScrollMenu>
  )
}