import React from 'react'
import { IconProps } from './types'

const IconMovedLocationRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M750-582q-43-8-137.5 9T400-441q32-117 129-188t219-71l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l144 144q12 12 12 28t-12 28L748-468q-11 11-28 11t-28-11q-11-11-11-28t11-28l58-58Zm-590 30q0-136 93-232t227-96q26 0 51 4t49 12q16 5 23.5 20t2.5 31q-5 16-20 23t-31 2q-18-6-37-9t-38-3q-101 0-170.5 72.5T240-552q0 71 59 162t181 203q56-51 99-97.5t72-90.5q9-14 25-17t30 6q14 9 17 25.5t-6 30.5q-32 48-77.5 97.5T536-130q-12 11-26.5 16.5T480-108q-15 0-30-5.5T423-130Q290-251 225-356t-65-196Z" />
  </svg>
)

export { IconMovedLocationRounded as default }
