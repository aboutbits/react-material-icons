import React from 'react'
import { IconProps } from './types.js'

export const IconSensorsKrxOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M148-257q-32-48-50-104.5T80-480q0-63 18-119t50-104l67 44q-26 38-40.5 83.5T160-480q0 50 14.5 95t40.5 83l-67 45Zm332 17q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm331-17-66-45q27-38 41-83t14-95q0-50-14-95.5T745-659l66-44q32 48 50.5 104T880-480q0 62-18.5 118.5T811-257Z" />
  </svg>
)
