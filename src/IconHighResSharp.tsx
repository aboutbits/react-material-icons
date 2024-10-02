import React from 'react'
import { IconProps } from './types'

export const IconHighResSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-220h160v-60H460v-30h80v-60h-80v-30h100v-60H400v240Zm200 0h180v-140H660v-40h120v-60H600v140h120v40H600v60ZM300-500h60v-90h60v90h60v-240h-60v90h-60v-90h-60v240Zm280 0h60v-240h-60v240ZM40-120v-720h880v720H40Zm80-80h720v-560H120v560Zm0 0v-560 560Zm60-20h60v-80h24l36 80h60l-36-84q15-9 25.5-23.5T360-360v-40q0-25-17.5-42.5T300-460H180v240Zm60-140v-40h60v40h-60Z" />
  </svg>
)
