import React from 'react'
import { IconProps } from './types'

export const IconMacroAutoRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360q-42 0-71-29t-29-71v-8q-12 9-25.5 13.5T324-450q-42 0-71-29t-29-71q0-30 16-54t42-36q-26-12-42-36t-16-54q0-42 29-71t71-29q17 0 30.5 4.5T380-812v-8q0-42 29-71t71-29q42 0 71 29t29 71v8q9-7 19.5-11t22.5-6l-53 142q-13-24-36.5-38.5T480-740q-42 0-71 29t-29 71q0 42 29 71t71 29q13 0 24-3t22-8q3 21 19.5 36t39.5 15h138q-13 23-35.5 36.5T636-450q-17 0-30.5-4.5T580-468v8q0 42-29 71t-71 29Zm199-292-25 73q-3 8-10.5 13.5T627-560q-15 0-23.5-12.5T600-599l112-301q4-9 11.5-14.5T740-920h23q9 0 16.5 5.5T791-900l115 302q5 14-3 26t-23 12q-9 0-17-5.5T852-580l-25-72H679Zm18-52h110l-53-150h-2l-55 150ZM480-80q-140 0-241.5-92.5T122-400q-2-17 9.5-28.5T160-438q135 15 227.5 116.5T480-80Zm0 0q0-140 92.5-241.5T800-438q17-2 28.5 9.5T838-400q-15 135-116.5 227.5T480-80Z" />
  </svg>
)
