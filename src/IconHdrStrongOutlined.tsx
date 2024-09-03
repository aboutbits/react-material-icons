import React from 'react'
import { IconProps } from './types'

const IconHdrStrongOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-320q-66 0-113-47T40-480q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T280-480q0-33-23.5-56.5T200-560q-33 0-56.5 23.5T120-480q0 33 23.5 56.5T200-400Zm480 160q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Z" />
  </svg>
)

export { IconHdrStrongOutlined as default }
