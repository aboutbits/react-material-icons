import React from 'react'
import { IconProps } from './types.js'

export const IconElectricBikeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280q-85 0-142.5-57.5T0-480q0-85 58.5-142.5T200-680q77 0 129.5 46T396-520h26l-72-200h-70v-80h200v80h-44l14 40h192l-58-160H480v-80h161l87 238h32q83 0 141.5 58.5T960-482q0 84-58 143t-142 59q-72 0-126.5-45T564-440H396q-14 69-68 114.5T200-280Zm0-80q41 0 70.5-22.5T312-440H200v-80h112q-12-36-41.5-58T200-600q-51 0-85.5 34.5T80-480q0 50 34.5 85t85.5 35Zm308-160h56q5-23 13.5-43t22.5-37H478l30 80Zm252 160q51 0 85.5-35t34.5-85q0-51-34.5-85.5T760-600h-4l40 106-76 28-38-106q-20 17-31 40t-11 52q0 50 34.5 85t85.5 35ZM520-40 280-160h160v-80l240 120H520v80ZM196-480Zm564 0Z" />
  </svg>
)
