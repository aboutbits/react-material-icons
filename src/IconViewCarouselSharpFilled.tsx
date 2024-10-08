import React from 'react'
import { IconProps } from './types'

const IconViewCarouselSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-400h160v400H80Zm200 80v-560h400v560H280Zm440-80v-400h160v400H720Z" />
  </svg>
)

export { IconViewCarouselSharpFilled as default }
