import React from 'react'
import { IconProps } from './types'

export const IconHomeSpeakerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M383-120q-73 0-121-54.5T224-301l55-412q2-11 8.5-19.5T304-745l316-126q18-8 35 2.5t19 30.5l64 539q8 72-39 125.5T580-120H383Zm0-80h197q36 0 60-27t19-63l-13-110H319l-15 109q-5 36 19 63.5t60 27.5Zm-27-479-27 199h307l-35-298-245 99Zm126 279Zm1-80Zm-1 80v-80 80Z" />
  </svg>
)
