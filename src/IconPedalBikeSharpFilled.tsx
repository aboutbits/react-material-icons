import React from 'react'
import { IconProps } from './types.js'

export const IconPedalBikeSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-85 0-142.5-57.5T0-360q0-85 58.5-142.5T200-560q77 0 129.5 46T396-400h26l-72-200h-70v-80h200v80h-44l14 40h192l-58-160H480v-80h161l87 238h32q83 0 141.5 58.5T960-362q0 84-58 143t-142 59q-72 0-126.5-45T564-320H396q-14 69-68 114.5T200-160Zm0-160h112v-80H200v80Zm308-80h56q5-23 13.5-43t22.5-37H478l30 80Zm212 54 76-28-40-106-74 28 38 106Z" />
  </svg>
)
