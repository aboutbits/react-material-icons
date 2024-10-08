import React from 'react'
import { IconProps } from './types'

const IconBrightness3SharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-80q-32 0-61.5-4.5T240-98q126-41 203-146t77-236q0-131-77-236T240-862q29-9 58.5-13.5T360-880q83 0 156 31.5T643-763q54 54 85.5 127T760-480q0 83-31.5 156T643-197q-54 54-127 85.5T360-80Z" />
  </svg>
)

export { IconBrightness3SharpFilled as default }
