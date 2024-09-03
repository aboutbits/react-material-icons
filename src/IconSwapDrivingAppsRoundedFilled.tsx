import React from 'react'
import { IconProps } from './types'

const IconSwapDrivingAppsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M606-760H358q-17 0-28.5-11.5T318-800q0-17 11.5-28.5T358-840h248l-16-16q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T647-913l85 85q12 12 12 28t-12 28l-84 84q-12 12-28 11.5T592-688q-12-12-12.5-28.5T591-745l15-15ZM300-240q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm360 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM274-600l16 16q12 12 11.5 28T290-528q-12 12-28.5 12.5T233-527l-85-85q-12-12-12-28t12-28l85-85q12-12 28.5-11.5T290-752q11 12 11.5 28T290-696l-16 16h411q26 0 47 15t29 39l75 213q2 6 3 13t1 14v286q0 25-17.5 42.5T780-40q-25 0-42.5-17.5T720-100v-20H240v20q0 25-17.5 42.5T180-40q-25 0-42.5-17.5T120-100v-300q0-33 23.5-56.5T200-480h528l-42-120H274Z" />
  </svg>
)

export { IconSwapDrivingAppsRoundedFilled as default }
