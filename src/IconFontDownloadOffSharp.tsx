import React from 'react'
import { IconProps } from './types'

const IconFontDownloadOffSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m819-28-52-52H80v-687l-53-53 57-57L876-85l-57 57ZM160-160h527L160-687v527Zm720-35-80-80v-525H275l-80-80h685v685ZM624-451 502-573l-20-57h-4l-9 24-54-54 23-60h84l102 269Zm-200 27Zm114-114Zm82 298-57-158 131 131 10 27h-84Zm-364 0 128-337 56 56-32 89h121l70 70H384l-44 122h-84Z" />
  </svg>
)

export { IconFontDownloadOffSharp as default }
