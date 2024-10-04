import React from 'react'
import { IconProps } from './types'

const IconSubdirectoryArrowRightOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m560-120-57-57 144-143H200v-480h80v400h367L503-544l56-57 241 241-240 240Z" />
  </svg>
)

export { IconSubdirectoryArrowRightOutlinedFilled as default }
