import React from 'react'
import { IconProps } from './types.js'

export const IconShutterSpeedRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-840q-17 0-28.5-11.5T360-880q0-17 11.5-28.5T400-920h160q17 0 28.5 11.5T600-880q0 17-11.5 28.5T560-840H400Zm80 760q-75 0-140.5-28.5T225-186q-49-49-77-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q63 0 120 21t104 59l30-30q11-11 27.5-11.5T790-750q11 11 11.5 27.5T791-694l-29 30q36 47 57 104t21 120q0 74-28 139.5T735-186q-49 49-114.5 77.5T480-80Zm0-360Zm35-80h204q11 0 17-8.5t2-18.5q-17-46-55-85.5T601-692q-7-3-14.5-1t-11.5 9l-78 134q-6 10 .5 20t17.5 10Zm-88 10 103-178q5-9 1-18t-15-11q-51-6-102 5.5T321-671q-6 5-8 12.5t2 14.5l78 134q6 10 17 10t17-10Zm-52 110q11 0 17.5-10t.5-20L291-607q-5-9-15.5-9.5T258-609q-29 41-45 90.5T202-418q1 8 6.5 13t13.5 5h153Zm88 70q6-10-.5-20T445-360H241q-11 0-17 8.5t-2 18.5q17 46 55 85.5t82 59.5q7 3 14.5 1t11.5-9l78-134Zm104-40q-6-10-17-10t-17 10L430-193q-5 9-1 18.5t15 11.5q49 9 102-4t93-42q6-5 8-12.5t-2-14.5l-78-134Zm0-80 102 177q5 9 15.5 9.5T702-271q31-38 46.5-90t9.5-101q-1-8-6.5-13t-13.5-5H585q-11 0-17.5 10t-.5 20Z" />
  </svg>
)
