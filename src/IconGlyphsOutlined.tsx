import React from 'react'
import { IconProps } from './types.js'

export const IconGlyphsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M224-878h78l135 360h-75l-30-86H194l-30 86H89l135-360Zm5 402q42 0 71 29t29 71q0 20-7.5 38.5T300-305l-15 14 28 28 57-56 57 57-56 56 56 57-57 56-56-56-42 42q-15 15-34 22.5T198-77q-42 0-70-29.5T100-178q0-20 8-38.5t22-32.5l42-42-14-14q-14-14-22-32t-8-38q0-42 29.5-71.5T229-476Zm0 242-43 42q-3 3-4 6.5t-1 7.5q0 8 5.5 14t13.5 6q4 0 7.5-1.5t6.5-4.5l43-42-28-28Zm-1-162q-8 0-13.5 6t-5.5 14q0 4 1 7.5t4 6.5l15 14 13-13q3-3 4.5-6.5t1.5-7.5q0-8-6-14.5t-14-6.5Zm33-404-46 134h96l-46-134h-4Zm438-105q8 13 13.5 27t9.5 28l-43 13h201v80h-67q-11 33-28.5 62.5T744-640q27 16 56 26.5t60 18.5l-19 77q-43-11-83.5-27T680-586q-37 24-77.5 40.5T519-518l-18-77q30-8 59-18.5t56-26.5q-23-25-40.5-54.5T548-757h-68v-80h176q-3-13-8-25.5T638-887l61-18Zm104 444 57 56L549-94l-57-56 311-311Zm-223 23q25 0 42.5 17.5T640-378q0 25-17.5 42.5T580-318q-25 0-42.5-17.5T520-378q0-25 17.5-42.5T580-438Zm53-319q8 19 20 36t27 32q15-15 27-32t21-36h-95Zm147 519q25 0 42.5 17.5T840-178q0 25-17.5 42.5T780-118q-25 0-42.5-17.5T720-178q0-25 17.5-42.5T780-238Z" />
  </svg>
)
