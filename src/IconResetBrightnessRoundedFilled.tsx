import React from 'react'
import { IconProps } from './types.js'

export const IconResetBrightnessRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M620-120h-80q-8 0-14-6t-6-14v-80l-46-46q-6-6-6-14t6-14l46-46v-80q0-8 6-14t14-6h80l46-46q6-6 14-6t14 6l46 46h80q8 0 14 6t6 14v80l46 46q6 6 6 14t-6 14l-46 46v80q0 8-6 14t-14 6h-80l-46 46q-6 6-14 6t-14-6l-46-46Zm60-40q50 0 85-35t35-85q0-50-35-85t-85-35v240ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z" />
  </svg>
)