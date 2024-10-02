import React from 'react'
import { IconProps } from './types'

export const IconSettingsMotionModeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80v-400q16 0 31 2.5t29 7.5v380q-14 5-29 7.5T680-80Zm-100-28v-344q14-8 28.5-14.5T640-476v392q-17-3-31.5-9.5T580-108Zm200 0v-344q45 26 72.5 71T880-280q0 56-27.5 101T780-108Zm-240-30q-28-27-44-63.5T480-280q0-42 16-79t44-64v285ZM370-80l-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 22.5-15t24.5-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-74 56q-30-15-62-23t-66-8q-20 0-38.5 3.5T604-548q-19-33-51.5-52.5T482-620q-58 0-99 41t-41 99q0 38 18.5 70t50.5 51q-6 20-8.5 41.5T400-275q1 56 22.5 106.5T484-80H370Z" />
  </svg>
)
