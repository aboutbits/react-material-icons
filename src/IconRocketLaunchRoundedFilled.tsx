import React from 'react'
import { IconProps } from './types'

const IconRocketLaunchRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M245-474q26-66 62.5-127T390-716l-52-11q-20-4-39 2t-33 20L140-579q-15 15-11.5 36t23.5 29l93 40Zm588-390q-106-5-201.5 41T461-702q-48 48-84.5 104T313-480q-5 13-5 26.5t10 23.5l125 125q10 10 23.5 10t26.5-5q62-27 118-63.5T715-448q75-75 121-170.5T877-820q0-8-4-16t-10-14q-6-6-14-10t-16-4ZM579-566q-23-23-23-56.5t23-56.5q23-23 56.5-23t56.5 23q23 23 23 56.5T692-566q-23 23-56.5 23T579-566Zm-92 334 40 93q8 20 29 24t36-11l126-126q14-14 20-33.5t2-39.5l-10-52q-55 46-115.5 82.5T487-232Zm-325-86q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-48 48-113.5 57T87-74q9-66 18.5-131.5T162-318Z" />
  </svg>
)

export { IconRocketLaunchRoundedFilled as default }
