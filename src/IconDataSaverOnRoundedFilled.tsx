import React from 'react'
import { IconProps } from './types'

const IconDataSaverOnRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-130 75-234t199-145q29-10 53.5 7t24.5 46q0 20-11.5 36.5T391-747q-86 27-138.5 100.5T200-480q0 117 81.5 198.5T480-200q52 0 100.5-18t86.5-52q15-14 36.5-14t36.5 14q23 21 24 47.5T742-176q-54 47-120.5 71.5T480-80Zm280-400q0-92-53-165.5T568-747q-18-6-29.5-22.5T527-806q0-29 24.5-46t53.5-7q125 42 200 146t75 233q0 18-1.5 36.5T873-403q-5 29-29.5 41.5T790-360q-19-7-29.5-25.5T754-424q3-17 4.5-30t1.5-26Zm-320 40h-80q-17 0-28.5-11.5T320-480q0-17 11.5-28.5T360-520h80v-80q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v80h80q17 0 28.5 11.5T640-480q0 17-11.5 28.5T600-440h-80v80q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-80Z" />
  </svg>
)

export { IconDataSaverOnRoundedFilled as default }
