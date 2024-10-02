import React from 'react'
import { IconProps } from './types'

export const IconPowerSettingsNewRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-73 24.5-138.5T172-736q11-14 26.5-13t26.5 11q11 10 14.5 26T229-679q-32 41-50.5 91.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-57-18.5-107.5T731-679q-14-17-10.5-33t14.5-26q11-10 26.5-11t26.5 13q43 52 67.5 117.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-360q-17 0-28.5-11.5T440-480v-360q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v360q0 17-11.5 28.5T480-440Z" />
  </svg>
)
