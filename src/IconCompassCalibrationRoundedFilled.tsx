import React from 'react'
import { IconProps } from './types'

const IconCompassCalibrationRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-141.5-58.5T280-280q0-83 58.5-141.5T480-480q83 0 141.5 58.5T680-280q0 83-58.5 141.5T480-80Zm0-480q-48 0-92.5 15.5T308-498q-12 11-27.5 10T254-500L111-643q-12-12-12-30t14-29q78-66 171.5-102T480-840q102 0 195.5 36T847-702q14 11 14 29t-12 30L706-500q-11 11-26.5 12T652-498q-35-31-79.5-46.5T480-560Z" />
  </svg>
)

export { IconCompassCalibrationRoundedFilled as default }
