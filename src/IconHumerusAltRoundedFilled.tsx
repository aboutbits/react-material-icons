import React from 'react'
import { IconProps } from './types.js'

export const IconHumerusAltRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M494-120q-30 0-58-11.5T385-164L104-426q-11-10-12.5-24.5T98-477l175-280q11-18 32-23.5t39 5.5q62 39 113 95t78 116q36-38 79.5-61T736-668q27-8 49.5-14.5T828-697q19-8 35.5 3t16.5 31v285q0 20-10 38.5T843-310L580-145q-19 12-40.5 18.5T494-120Zm-94-200q17 0 28.5-11.5T440-360v-4q0-2-1-4 17 0 29-11.5t12-28.5q0-17-11.5-28.5T440-448q-8 0-15.5 3.5T412-436L309-552q5-5 8-12.5t3-15.5q0-17-11.5-28.5T280-620q-17 0-28.5 11.5T240-580v4q0 2 1 4-17 0-29 11.5T200-532q0 17 11.5 28.5T240-492q9 0 16.5-3.5T269-505l103 116q-6 5-9 13t-3 16q0 17 11.5 28.5T400-320Z" />
  </svg>
)
