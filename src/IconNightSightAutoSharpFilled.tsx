import React from 'react'
import { IconProps } from './types'

export const IconNightSightAutoSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-120q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 73T400-600q0 100 70 170t170 70q31 0 60.5-7.5T756-390q-18 118-108 194t-208 76Zm112-400 128-360h80l128 360h-76l-28-80H656l-28 80h-76Zm122-134h92l-46-146-46 146Z" />
  </svg>
)
