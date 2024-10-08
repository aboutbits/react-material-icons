import React from 'react'
import { IconProps } from './types'

const IconStepOutRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-647-76 75q-11 11-27.5 11.5T308-652q-11-11-11-28t11-28l144-144q12-12 28-12t28 12l144 144q12 12 11.5 28T651-652q-12 11-28 11.5T595-652l-75-75v287q0 17-11.5 28.5T480-400q-17 0-28.5-11.5T440-440v-287Z" />
  </svg>
)

export { IconStepOutRounded as default }
