import React from 'react'
import { IconProps } from './types.js'

export const IconResetIsoRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360v-60q0-25 17.5-42.5T540-480h60L480-360Zm0 161v-85l196-196h85L480-199Zm2 75 353-354q16 4 27.5 15.5T878-435L524-82q-16-5-26.5-15.5T482-124Zm117 44 281-281v85L684-80h-85Zm161 0 120-120v60q0 25-17.5 42.5T820-80h-60ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z" />
  </svg>
)