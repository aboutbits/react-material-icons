import React from 'react'
import { IconProps } from './types'

const IconPartlyCloudyDaySharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-160q-66 0-113-47T80-320q0-66 47-113t113-47q48 0 88.5 26t58.5 71l10 23h24q42 0 70.5 29t28.5 71q0 42-29 71t-71 29H240Zm359-112q-4-63-45.5-109T449-438q-31-54-83.5-85.5T250-560q26-73 89-116.5T480-720q100 0 170 70t70 170q0 65-32 120.5T599-272ZM440-760v-160h80v160h-80Zm266 110-56-56 112-114 57 57-113 113Zm54 210v-80h160v80H760Zm2 300L650-254l56-56 114 112-58 58ZM254-650 141-763l57-57 112 114-56 56Z" />
  </svg>
)

export { IconPartlyCloudyDaySharpFilled as default }
