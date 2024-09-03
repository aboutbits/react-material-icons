import React from 'react'
import { IconProps } from './types'

const IconAlarmOnRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m438-412-57-57q-12-12-28-12t-28 12q-12 12-12 28.5t12 28.5l85 86q12 12 28 12t28-12l170-170q12-12 12-28.5T636-553q-12-12-28.5-12T579-553L438-412Zm42 332q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM82-668q-11-11-11-28t11-28l114-114q11-11 28-11t28 11q11 11 11 28t-11 28L138-668q-11 11-28 11t-28-11Zm796 0q-11 11-28 11t-28-11L708-782q-11-11-11-28t11-28q11-11 28-11t28 11l114 114q11 11 11 28t-11 28Z" />
  </svg>
)

export { IconAlarmOnRoundedFilled as default }
