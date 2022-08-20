import { Box, Typography } from '@mui/material'
import { useContext } from 'react';
import React from 'react';
import { BodyPartCard } from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/left-arrow.png'
import RightArrowIcon from '../assets/right-arrow.png'


// type scrollEventType = {
//   onClick:(event: React.MouseEvent<HTMLInputElement>) =>void
// }

function Arrow({
  children,
  onClick
}: {
  children: React.ReactNode;
  onClick: VoidFunction;
}){
  return (
    <button
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
      }}
    >
      {children}
    </button>
  );
}

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext)
  
  return (
    <Arrow onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Arrow>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext)
  return (
    <Arrow onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Arrow>
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