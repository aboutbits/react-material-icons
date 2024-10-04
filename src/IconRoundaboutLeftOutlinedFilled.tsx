import React from 'react'
import { IconProps } from './types.js'

export const IconRoundaboutLeftOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M600-120v-244q0-29 19-51t48-27q58-10 95.5-54.5T800-600q0-66-47-113t-113-47q-59 0-103.5 37.5T482-627q-5 29-27 48t-51 19H233l64 64-57 56L80-600l160-160 56 56-63 64h170q14-88 81.5-144T640-840q100 0 170 70t70 170q0 88-56 155.5T680-363v243h-80Z" />
  </svg>
)