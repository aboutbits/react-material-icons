import React from 'react'
import { IconProps } from './types'

const IconPositionBottomRightRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Zm220 480h240q25 0 42.5-17.5T720-340q0-25-17.5-42.5T660-400H420q-25 0-42.5 17.5T360-340q0 25 17.5 42.5T420-280Z" />
  </svg>
)

export { IconPositionBottomRightRounded as default }
