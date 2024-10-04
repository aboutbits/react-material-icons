import React from 'react'
import { IconProps } from './types.js'

export const IconResetIsoOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360v-60q0-25 17.5-42.5T540-480h60L480-360Zm0 161v-85l196-196h85L480-199Zm2 75 353-354q16 4 27.5 15.5T878-435L524-82q-16-5-26.5-15.5T482-124Zm117 44 281-281v85L684-80h-85Zm161 0 120-120v60q0 25-17.5 42.5T820-80h-60Zm71-480h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z" />
  </svg>
)
