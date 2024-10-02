import React from 'react'
import { IconProps } from './types'

export const IconUnsubscribeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m480-440 320-200v-80L480-520 160-720v80l320 200ZM760-40q-83 0-141.5-58.5T560-240q0-83 58.5-141.5T760-440q83 0 141.5 58.5T960-240q0 83-58.5 141.5T760-40ZM640-220h240v-40H640v40Zm-480 60q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v228q-28-14-58-21t-62-7q-117 0-198.5 81.5T480-240q0 20 3 40t9 40H160Z" />
  </svg>
)
