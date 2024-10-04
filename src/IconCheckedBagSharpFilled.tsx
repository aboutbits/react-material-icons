import React from 'react'
import { IconProps } from './types'

const IconCheckedBagSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M340-280v-440h20q0-50 35-85t85-35q50 0 85 35t35 85h20v440H340Zm80-440h120q0-26-17-43t-43-17q-26 0-43 17t-17 43Zm260 440v-440h120v440H680Zm-520 0v-440h120v440H160ZM80-120v-80h800v80H80Z" />
  </svg>
)

export { IconCheckedBagSharpFilled as default }
