import { Box } from '@mui/material'
import React, {useContext} from 'react';
import { BodyPartCard } from './BodyPartCard'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/left-arrow.png'
import RightArrowIcon from '../assets/right-arrow.png'
import { Workout } from '../UI/Home'
import { WorkoutCard } from './WorkoutCard';

function Arrow({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: VoidFunction
}){
  return (
    <button
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        right: '1%',
        width: '3%',
        height: 'auto',
        userSelect: "none"
      }}
    >
      {children}
    </button>
  );
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Arrow onClick={() => scrollPrev()}>
      <img src={LeftArrowIcon} alt="right-arrow" style={{width: '100%'}}/>
    </Arrow>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)
  return (
    <Arrow onClick={() => scrollNext()}>
      <img src={RightArrowIcon} alt="right-arrow" style={{width: '100%'}}/>
    </Arrow>
  );
};


type PropsFromSearch = {
  data: string[] | Workout []
  eachBodyPart?: string
  setEachBodyPart?: Function
  isBodyPart?: boolean
}

//Need to fix about scroll
export const HorizontalScrollBar: React.FC<PropsFromSearch> = ({data, eachBodyPart, setEachBodyPart, isBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {/* change the name of parameter. It could be either body part or workout */}
        {data.map((bodyPart:any) => (
            <Box
                key={bodyPart.id || bodyPart}
                title={bodyPart.id || bodyPart}
                m='0, 40px'
                sx={{ml: {lg: '40px', xs: '12px'}}}
            >
              { isBodyPart ?
                <BodyPartCard bodyPart={bodyPart} eachBodyPart={eachBodyPart} setEachBodyPart={setEachBodyPart}/> :
                <WorkoutCard workout={bodyPart}/>}
            </Box>
        ))}
    </ScrollMenu>
  )
}