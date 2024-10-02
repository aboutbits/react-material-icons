import React from 'react'
import { IconProps } from './types'

export const IconBoxAddRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v147q0 18-14.5 29t-32.5 7q-26-5-53.5-3T687-509q-17 5-32-4.5T640-540v-100H320v255q0 23 19 34.5t39 1.5l102-51 31 15q12 6 16.5 18t.5 25q-5 14-6.5 29.5T520-281q0 29 7 58t21 55q9 17 1 32.5T524-120H200Zm520-120h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-80ZM216-720h528l-34-40H250l-34 40Z" />
  </svg>
)
