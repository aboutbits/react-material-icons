import React from 'react'
import { IconProps } from './types'

const IconCarryOnBagSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-100q-25 0-42.5-17.5T580-160q0-25 17.5-42.5T640-220q25 0 42.5 17.5T700-160q0 25-17.5 42.5T640-100Zm-400-20v-560h120v560H240Zm180 0v-560h140v-120h-80v-80h160v600q-50 0-85 35t-35 85q0 11 1.5 20.5T527-120H420Z" />
  </svg>
)

export { IconCarryOnBagSharpFilled as default }
