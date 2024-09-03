import React from 'react'
import { IconProps } from './types'

const IconKeyVerticalSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm2 520L320-200l80-80-80-80 80-80v-14q-72-25-116-87t-44-139q0-100 70-170t170-70q100 0 170 70t70 170q0 81-46 141.5T560-454v334l-78 80Z" />
  </svg>
)

export { IconKeyVerticalSharpFilled as default }
