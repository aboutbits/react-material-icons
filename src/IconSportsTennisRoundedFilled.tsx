import React from 'react'
import { IconProps } from './types'

const IconSportsTennisRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-378q-97 0-142 11t-77 43L165-188q-11 11-27.5 11T109-188q-12-12-12-28.5t12-28.5l135-135q31-31 42.5-77.5T298-600q0-58 26-114t74-104q91-91 201-103t181 61q72 72 60 182T738-478q-48 48-104 74t-114 26ZM412-494q47 46 127 34t143-75q64-64 76.5-143.5T724-803q-48-48-125.5-36T456-763q-63 63-76.5 142.5T412-494ZM720-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113T720-40Z" />
  </svg>
)

export { IconSportsTennisRoundedFilled as default }
