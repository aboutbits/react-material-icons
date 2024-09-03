import React from 'react'
import { IconProps } from './types'

const IconResetShadowRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80Zm0-80q-20-26-30.5-56T639-280q0-34 11-64t30-56q-50 0-85 35t-35 85q0 50 35 85t85 35ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q113 0 203.5 63T814-615q6 16 0 31t-22 21q-16 6-31.5 0T739-585q-31-78-100.5-126.5T480-760Z" />
  </svg>
)

export { IconResetShadowRounded as default }