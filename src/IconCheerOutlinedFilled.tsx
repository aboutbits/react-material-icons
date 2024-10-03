import React from 'react'
import { IconProps } from './types.js'

export const IconCheerOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m312-751-40-120 56-18 40 119-56 19Zm138-49v-120h60v120h-60Zm198 49-56-19 40-119 56 19-40 119ZM875-40 664-72q-34-5-59.5-27.5T568-154l-34-106q-11-35-1-69.5t36-57.5l55 170 36-11-88-278q-13-41 2.5-80.5T627-647l50-28 177 334q5 10 14.5 15.5T889-320h29L875-40ZM86-40 43-320h29q11 0 20.5-5.5T107-341l177-334 50 28q37 21 52.5 60.5T389-506l-89 278 36 11 55-171q27 23 37 58t-1 70l-34 106q-11 32-36.5 54.5T297-72L86-40Z" />
  </svg>
)
