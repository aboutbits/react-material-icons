import React from 'react'
import { IconProps } from './types'

export const IconPhotoSizeSelectLargeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-560h560v560H120Zm80-120h400L464-420 360-280l-64-86-96 126Zm560-40v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80ZM280-760v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Zm-480 0v-80h80v80h-80Zm720 0h-80v-80h80v80Zm-80 640v-80h80v80h-80Z" />
  </svg>
)
