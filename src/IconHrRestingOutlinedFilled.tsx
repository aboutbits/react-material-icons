import React from 'react'
import { IconProps } from './types.js'

export const IconHrRestingOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h720v80H120Zm97-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L535-302q-11 11-25 16.5t-30 5.5q-16 0-30-5.5T425-302L217-504Z" />
  </svg>
)