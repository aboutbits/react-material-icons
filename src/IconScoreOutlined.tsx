import React from 'react'
import { IconProps } from './types'

const IconScoreOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm160-340 160 160 240-240v-220H200v460l160-160Zm120-20v-240h60v240h-60Zm140 0-80-120 80-120h68l-80 120 80 120h-68Zm-340 0v-150h100v-30H280v-60h160v150H340v30h100v60H280Zm80 120L200-200h560v-240L520-200 360-360ZM200-200v-560 560Z" />
  </svg>
)

export { IconScoreOutlined as default }
