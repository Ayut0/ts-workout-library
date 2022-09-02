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
    <div
      onClick={onClick}
      className='arrow'
    >
      {children}
    </div>
  );
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div className='left-arrow'>
      <Arrow onClick={() => scrollPrev()}>
        <img src={LeftArrowIcon} alt="right-arrow" style={{width: '100%'}}/>
      </Arrow>
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)
  return (
    <div className='right-arrow'>
      <Arrow onClick={() => scrollNext()}>
        <img src={RightArrowIcon} alt="right-arrow" style={{width: '100%'}}/>
      </Arrow>
    </div>
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
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} transitionBehavior={'smooth'}>
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