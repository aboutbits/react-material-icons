import React from 'react'
import { IconProps } from './types'

const IconSettingsHeartRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm49-257q8 0 15-2.5t13-8.5l112-112q17-17 22-41.5t-5-47.5q-10-23-30-37t-45-14q-25 0-45 15.5T482-552q-18-17-37.5-32.5T400-600q-25 0-45.5 13.5T324-550q-10 23-4.5 47.5T342-460l111 112q6 6 13.5 8.5T482-337Z" />
  </svg>
)

export { IconSettingsHeartRoundedFilled as default }
