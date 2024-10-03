import React from 'react'
import { IconProps } from './types.js'

export const IconHrRestingSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-80h720v80H120Zm97-384q-29-27-42.5-64T161-644q0-81 55.5-138.5T352-840q36 0 69 13t59 38q26-25 59-38t69-13q81 0 136.5 58T800-643q0 39-14.5 74.5T744-505L480-249 217-504Zm56-56 207 200 208-201q17-16 25-37.5t8-44.5q0-48-32.5-82T609-759q-22 0-42.5 8.5T531-726l-51 52-50-52q-16-16-35.5-25t-42.5-9q-47 0-79.5 34T240-644q0 23 8 45t25 39Zm207 0Z" />
  </svg>
)
