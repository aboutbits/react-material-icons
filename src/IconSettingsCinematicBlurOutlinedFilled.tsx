import React from 'react'
import { IconProps } from './types'

const IconSettingsCinematicBlurOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M580-80q-25 0-42.5-17.5T520-140v-200q0-18 9-32t24-22l27 54h60l-30-60h60l30 60h60l-30-60h60l30 60h60l-30-60h10q25 0 42.5 17.5T920-340v200q0 25-17.5 42.5T860-80H580Zm0-60h280v-140H580v140ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v13.5H623q0-58-41.5-99T482-620q-59 0-99.5 40.5T342-480q0 48 27.5 84t70.5 50v266h-70Z" />
  </svg>
)

export { IconSettingsCinematicBlurOutlinedFilled as default }
