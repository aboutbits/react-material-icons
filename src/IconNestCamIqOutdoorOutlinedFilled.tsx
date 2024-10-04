import React from 'react'
import { IconProps } from './types'

const IconNestCamIqOutdoorOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M563-150q-11 13-27.5 14.5T506-145L353-273q-50-42-72-102t-11-123l-56-47q-12-11-13.5-26.5T209-600h-49v80q0 33-23.5 56.5T80-440v-400q33 0 56.5 23.5T160-760v80h115l62-75q11-13 27.5-14.5T394-760l55 46q61-23 124-12t113 53l153 128q13 11 14.5 27.5T844-489L563-150Z" />
  </svg>
)

export { IconNestCamIqOutdoorOutlinedFilled as default }
