import React from 'react'
import { IconProps } from './types'

const IconVolcanoSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 160-360h120l80-200h280L880-80H80Zm440-680v-160h80v160h-80Zm181 75-56-56 113-113 57 56-114 113Zm-282 0L306-798l56-57 113 114-56 56Z" />
  </svg>
)

export { IconVolcanoSharpFilled as default }
