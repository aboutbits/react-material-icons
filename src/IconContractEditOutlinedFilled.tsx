import React from 'react'
import { IconProps } from './types'

export const IconContractEditOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM240-80q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80v160H240Z" />
  </svg>
)
