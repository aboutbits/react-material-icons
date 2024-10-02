import React from 'react'
import { IconProps } from './types'

export const IconRotate90DegreesCwOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-440q0-150 105-255t255-105h6l-62-62 56-58 160 160-160 160-56-58 62-62h-6q-117 0-198.5 81.5T160-440q0 117 81.5 198.5T440-160q35 0 69-8.5t65-25.5l58 58q-43 28-92 42T440-80Zm240-120L440-440l240-240 240 240-240 240Zm0-114 126-126-126-126-126 126 126 126Zm0-126Z" />
  </svg>
)
