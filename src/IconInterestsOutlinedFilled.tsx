import React from 'react'
import { IconProps } from './types.js'

export const IconInterestsOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 0v-320h320v320H520Zm160-400q-57-48-95.5-81T523-659q-23-25-33-47t-10-47q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 25-10 47t-33 47q-23 25-61.5 58T680-520Z" />
  </svg>
)
