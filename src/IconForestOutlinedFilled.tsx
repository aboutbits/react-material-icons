import React from 'react'
import { IconProps } from './types'

export const IconForestOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-80v-120h160v120H520Zm-240 0v-160H0l154-240H80l280-400 280 400h-74l155 240H440v160H280Zm490-160L640-440h77L505-743l95-137 280 400h-74l154 240H770Z" />
  </svg>
)
