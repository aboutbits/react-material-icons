import React from 'react'
import { IconProps } from './types.js'

export const IconMedicationLiquidSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-760v-80h480v80H120Zm180 500h120v-100h100v-120H420v-100H300v100H200v120h100v100ZM80-120v-600h560v600H80Zm680-290q-35-17-57.5-56.5T680-560q0-68 34.5-114t85.5-46q51 0 85.5 46T920-560q0 54-22.5 93.5T840-410v290h-80v-290Z" />
  </svg>
)
