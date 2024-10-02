import React from 'react'
import { IconProps } from './types'

export const IconPrintSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-680v-160h480v160H240Zm480 220q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460ZM320-200h320v-160H320v160Zm-80 80v-160H80v-360h800v360H720v160H240Z" />
  </svg>
)
