import React from 'react'
import { IconProps } from './types'

export const IconArticleShortcutRounded: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-480Zm280 360H440q-17 0-28.5-11.5T400-160q0-17 11.5-28.5T440-200h320v-560H200v120q0 17-11.5 28.5T160-600q-17 0-28.5-11.5T120-640v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120ZM265-80q-79 0-134.5-55.5T75-270q0-57 29.5-102t77.5-68h-62q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h160q17 0 28.5 11.5T320-480v160q0 17-11.5 28.5T280-280q-17 0-28.5-11.5T240-320v-57q-37 8-61 38t-24 69q0 46 32.5 78t77.5 32q17 0 28.5 11.5T305-120q0 17-11.5 28.5T265-80Zm175-200h80q17 0 28.5-11.5T560-320q0-17-11.5-28.5T520-360h-80q-17 0-28.5 11.5T400-320q0 17 11.5 28.5T440-280Zm0-160h200q17 0 28.5-11.5T680-480q0-17-11.5-28.5T640-520H440q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM320-600h320q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680H320q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Z" />
  </svg>
)
