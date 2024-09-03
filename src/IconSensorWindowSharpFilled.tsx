import React from 'react'
import { IconProps } from './types'

const IconSensorWindowSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-800h640v800H160Zm120-440h120v-40h160v40h120v-240H280v240Zm0 80v240h400v-240H280Zm-40-360v640h480v-640H240Z" />
  </svg>
)

export { IconSensorWindowSharpFilled as default }
