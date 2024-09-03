import React from 'react'
import { IconProps } from './types'

const IconSdkOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-500q0-14 4.5-26.5T138-750l56-68q9-11 20.5-16.5T240-840h480q14 0 25.5 5.5T766-818l56 68q9 11 13.5 23.5T840-700v500q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm-16 520h560v-440H200v440Zm382-78 142-142-142-142-58 58 84 84-84 84 58 58Zm-202 0 58-58-84-84 84-84-58-58-142 142 142 142Zm-180 78v-440 440Z" />
  </svg>
)

export { IconSdkOutlined as default }