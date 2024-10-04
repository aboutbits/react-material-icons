import React from 'react'
import { IconProps } from './types'

const IconRMobiledataOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-560v-320h200q33 0 56.5 23.5T360-800v54q0 24-14 43.5T312-672l48 112h-80l-46-106h-74v106H80Zm80-186h120v-54H160v54Z" />
  </svg>
)

export { IconRMobiledataOutlined as default }
