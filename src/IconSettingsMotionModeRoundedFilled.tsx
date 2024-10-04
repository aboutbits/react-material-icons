import React from 'react'
import { IconProps } from './types'

const IconSettingsMotionModeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M423-80q-24 0-40-18.5T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 22.5-15t24.5-12l9-66q4-26 24-44t46-18h94q26 0 46 18t24 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-8 6q-8 6-17 6.5t-18-3.5q-21-9-42.5-14.5T702-559q-25-2-49.5 2t-49.5 7q-19-32-51-51t-70-19q-58 0-99 41t-41 99q0 38 19 70.5t52 51.5q-7 20-10 41t-3 42q0 42 13.5 81.5T451-119q8 12-1 25.5T423-80Zm257 0v-400q16 0 31 2.5t29 7.5v380q-14 5-29 7.5T680-80Zm-100-28v-344q14-8 28.5-14.5T640-476v392q-17-3-31.5-9.5T580-108Zm200 0v-344q45 26 72.5 71T880-280q0 56-27.5 101T780-108Zm-240-30q-28-27-44-63.5T480-280q0-42 16-79t44-64v285Z" />
  </svg>
)

export { IconSettingsMotionModeRoundedFilled as default }
