import React from 'react'
import { IconProps } from './types'

export const IconElectricBikeOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280q-85 0-142.5-57.5T0-480q0-85 58.5-142.5T200-680q77 0 129.5 46T396-520h26l-72-200h-70v-80h200v80h-44l14 40h192l-58-160H480v-80h104q26 0 46.5 14t29.5 38l68 186h32q83 0 141.5 58.5T960-482q0 84-58 143t-142 59q-72 0-126.5-45T564-440H396q-14 69-68 114.5T200-280Zm0-160h112v-80H200v80ZM520-40 280-160h160v-80l240 120H520v80Zm-12-480h56q5-23 13.5-43t22.5-37H478l30 80Zm212 54 76-28-40-106-74 28 38 106Z" />
  </svg>
)
