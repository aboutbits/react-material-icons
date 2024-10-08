import React from 'react'
import { IconProps } from './types'

const IconLineStartArrowRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M459-239 133-446q-19-12-19-34t19-34l326-207q20-13 40.5-1.5T520-687v167h320q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H520v167q0 24-20.5 35.5T459-239Zm-19-107v-268L229-480l211 134Zm0-134Z" />
  </svg>
)

export { IconLineStartArrowRounded as default }
