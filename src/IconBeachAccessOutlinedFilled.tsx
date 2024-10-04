import React from 'react'
import { IconProps } from './types'

const IconBeachAccessOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M786-120 532-374l56-56 254 254-56 56Zm-546-28q-100-98-117.5-230T168-625q3 34 17 76.5t38.5 89.5q24.5 47 58.5 96.5t75 97.5L240-148Zm172-172q-48-48-84-104.5T271.5-534q-20.5-53-23-96.5T267-695q21-22 64.5-20t97 22.5q53.5 20.5 110 57T643-551L412-320Zm286-286q-47-41-96.5-74t-96-58q-46.5-25-89-39.5T340-795q115-60 246.5-41.5T814-722L698-606Z" />
  </svg>
)

export { IconBeachAccessOutlinedFilled as default }
