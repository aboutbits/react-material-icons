import React from 'react'
import { IconProps } from './types.js'

export const IconLocalDrinkRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M279-80q-31 0-53.5-20.5T200-151l-69-630q-5-40 22-69.5t67-29.5h520q40 0 67 29.5t22 69.5l-69 630q-3 30-25.5 50.5T681-80H279Zm-53-560h508l16-160H210l16 160Zm254 440q48 0 81-33t33-81q0-47-27.5-91T511-483q-6-8-14.5-11.5T480-498q-8 0-16.5 3.5T449-483q-28 34-55.5 78T366-314q0 48 33 81t81 33Z" />
  </svg>
)