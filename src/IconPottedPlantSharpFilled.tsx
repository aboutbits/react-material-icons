import React from 'react'
import { IconProps } from './types'

export const IconPottedPlantSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m280-80-60-240h520L680-80H280Zm200-560q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v200H120v-200h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z" />
  </svg>
)
