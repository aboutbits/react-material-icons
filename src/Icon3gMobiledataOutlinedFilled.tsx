import React from 'react'
import { IconProps } from './types.js'

export const Icon3gMobiledataOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-280v-80h200v-80H120v-80h200v-80H120v-80h200q33 0 56.5 23.5T400-600v60q0 25-17.5 42.5T340-480q25 0 42.5 17.5T400-420v60q0 33-23.5 56.5T320-280H120Zm720-240v160q0 33-23.5 56.5T760-280H560q-33 0-56.5-23.5T480-360v-240q0-33 23.5-56.5T560-680h200q33 0 56.5 23.5T840-600H560v240h200v-80H660v-80h180Z" />
  </svg>
)