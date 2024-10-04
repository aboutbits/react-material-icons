import React from 'react'
import { IconProps } from './types'

const IconGlyphsRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M140-518q-19 0-29.5-15t-3.5-32l108-289q4-11 13.5-17.5T249-878h28q11 0 20.5 6.5T311-854l109 289q6 17-4.5 32T387-518q-11 0-20-6.5T354-542l-22-62H194l-22 63q-4 11-12.5 17t-19.5 6Zm58 441q-42 0-70-29.5T100-178q0-20 8-38.5t22-32.5l42-42-14-14q-14-14-22-32t-8-38q0-42 29.5-71.5T229-476q42 0 71 29t29 71q0 20-7.5 38.5T300-305l-15 14 28 28 29-28q12-11 28.5-11.5T399-291q12 12 12 28.5T399-234l-28 28 28 29q11 12 11 28t-12 28q-12 11-28 11.5T342-121l-28-28-42 42q-15 15-34 22.5T198-77Zm31-157-43 42q-3 3-4 6.5t-1 7.5q0 8 5.5 14t13.5 6q4 0 7.5-1.5t6.5-4.5l43-42-28-28Zm-1-162q-8 0-13.5 6t-5.5 14q0 4 1 7.5t4 6.5l15 14 13-13q3-3 4.5-6.5t1.5-7.5q0-8-6-14.5t-14-6.5Zm33-404-46 134h96l-46-134h-4Zm296 271q-16 5-29.5-3.5T510-557q-4-16 4.5-30t24.5-19q20-7 39-15t38-19q-23-25-40.5-54.5T548-757h-28q-17 0-28.5-11.5T480-797q0-17 11.5-28.5T520-837h320q17 0 28.5 11.5T880-797q0 17-11.5 28.5T840-757h-27q-11 33-28.5 62.5T744-640q19 11 38.5 19t39.5 15q16 5 24 19t4 30q-4 16-17.5 24.5T803-529q-32-10-63-23.5T680-586q-29 19-60 32.5T557-529Zm-36 407q-12-12-12-28.5t12-28.5l254-254q11-11 27.5-11t28.5 11q12 12 12 28.5T831-376L577-122q-11 11-27.5 11T521-122Zm59-196q-25 0-42.5-17.5T520-378q0-25 17.5-42.5T580-438q25 0 42.5 17.5T640-378q0 25-17.5 42.5T580-318Zm53-439q8 19 20 36t27 32q15-15 27-32t21-36h-95Zm147 639q-25 0-42.5-17.5T720-178q0-25 17.5-42.5T780-238q25 0 42.5 17.5T840-178q0 25-17.5 42.5T780-118ZM658-831q-12 5-22.5-.5T620-849q-5-12 .5-22.5T638-887l61-18q11-5 22.5 0t16.5 16q5 11 0 22.5T722-850l-64 19Z" />
  </svg>
)

export { IconGlyphsRounded as default }
