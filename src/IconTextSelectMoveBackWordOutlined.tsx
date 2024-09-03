import React from 'react'
import { IconProps } from './types'

const IconTextSelectMoveBackWordOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-320 120-480l160-160 56 56-63 64h247v80H273l63 64-56 56Zm400 120h80v-560h-80v560Zm-80 80v-720h240v720H600ZM440-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM280-760v-80h80v80h-80Zm0 640v-80h80v80h-80ZM120-760v-80h80v80h-80Zm0 640v-80h80v80h-80Zm560-80h80-80Z" />
  </svg>
)

export { IconTextSelectMoveBackWordOutlined as default }