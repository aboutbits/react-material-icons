import React from 'react'
import { IconProps } from './types'

const IconCurrencyLiraSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-120v-206l-120 75v-95l120-75v-94l-120 75v-94l120-76v-230h80v180l160-100v94L440-565v94l160-100v94L440-376v176q83 0 141.5-58.5T640-400h80q0 117-81.5 198.5T440-120h-80Z" />
  </svg>
)

export { IconCurrencyLiraSharpFilled as default }
