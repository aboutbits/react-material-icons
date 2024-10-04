import React from 'react'
import { IconProps } from './types.js'

export const IconLineEndDiamondOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m600-313 167-167-167-167-167 167 167 167Zm0 113L360-440H80v-80h280l240-240 280 280-280 280Zm0-280Z" />
  </svg>
)
