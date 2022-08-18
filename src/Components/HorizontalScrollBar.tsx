import { Box } from '@mui/system'
import React from 'react'
import { BodyPartCard } from './BodyPartCard'

type PropsFromSearch = {
  data: string[]
  eachBodyPart: string
  setEachBodyPart: Function
}

//When I put : React.FC, it generates error
export const HorizontalScrollBar: React.FC<PropsFromSearch> = ({data, eachBodyPart, setEachBodyPart}) => {
  return (
    <div>
        {data.map((bodyPart:any) => (
            <Box
                key={bodyPart.id || bodyPart}
                title={bodyPart.id || bodyPart}
                m='0, 40px'
            >
              <BodyPartCard bodyPart={bodyPart} eachBodyPart={eachBodyPart} setEachBodyPart={setEachBodyPart}/>
            </Box>
        ))}
    </div>
  )
}