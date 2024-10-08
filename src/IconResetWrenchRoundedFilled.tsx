import React from 'react'
import { IconProps } from './types'

const IconResetWrenchRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m653-208-46 46q-17 17-42 17.5T522-162q-17-17-17-42.5t17-42.5l46-46q-4-11-6-23t-2-24q0-58 41-99t99-41q9 0 18 .5t17 3.5q11 4 13.5 16.5T743-439l-43 43q-11 11-11 28t11 28q11 11 28 11t28-11l43-43q8-8 20.5-5.5T836-375q3 8 3.5 17t.5 18q0 58-41 99t-99 41q-13 0-24.5-2t-22.5-6ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z" />
  </svg>
)

export { IconResetWrenchRoundedFilled as default }
