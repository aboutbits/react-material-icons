import React from 'react'
import { IconProps } from './types'

const IconCompassCalibrationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-141.5-58.5T280-280q0-83 58.5-141.5T480-480q83 0 141.5 58.5T680-280q0 83-58.5 141.5T480-80ZM280-474 80-674q80-80 183.5-123T480-840q113 0 216.5 43T880-674L680-474q-41-41-92-63.5T480-560q-57 0-108 22.5T280-474Z" />
  </svg>
)

export { IconCompassCalibrationSharpFilled as default }
