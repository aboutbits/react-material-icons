import React from 'react'
import { IconProps } from './types.js'

export const IconResetWrenchOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m653-208-88 88-85-85 88-88q-4-11-6-23t-2-24q0-58 41-99t99-41q18 0 35 4.5t32 12.5l-95 95 56 56 95-94q8 15 12.5 31.5T840-340q0 58-41 99t-99 41q-13 0-24.5-2t-22.5-6Zm178-352h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z" />
  </svg>
)