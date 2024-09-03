import React from 'react'
import { IconProps } from './types'

const IconGardenCartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M489-342 341-120H200v-464l-73-176H40v-80h141l66 160h657L760-399q51 8 85.5 47t34.5 92q0 58-40.5 99T741-120q-59 0-99.5-41T601-260q0-20 5-37t14-33l-131-12ZM280-201h19l100-149-106-10-13-31v190Zm460 1q26 0 43-17.5t17-42.5q0-26-17-43t-43-17q-25 0-42.5 17T680-260q0 25 17.5 42.5T740-200Z" />
  </svg>
)

export { IconGardenCartSharpFilled as default }
