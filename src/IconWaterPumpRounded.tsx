import React from 'react'
import { IconProps } from './types'

const IconWaterPumpRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-360q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l17-25q6-9 17-9t17 9l17 25q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Zm-360 80h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM120-200q0 17-11.5 28.5T80-160q-17 0-28.5-11.5T40-200v-240q0-17 11.5-28.5T80-480q17 0 28.5 11.5T120-440h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360q0-17 11.5-28.5T880-800q17 0 28.5 11.5T920-760v240q0 17-11.5 28.5T880-480q-17 0-28.5-11.5T840-520h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120Zm0-80v-80 80Zm720-320v-80 80ZM480-480Z" />
  </svg>
)

export { IconWaterPumpRounded as default }