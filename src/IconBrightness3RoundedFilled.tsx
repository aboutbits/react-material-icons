import React from 'react'
import { IconProps } from './types'

const IconBrightness3RoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M630-777q61 57 95.5 138T760-477q0 85-34.5 160T630-185q-52 48-117 76T377-81q-12 0-25-1t-25-4q-10-2-16-9t-6-17q0-8 4-13.5t11-9.5q93-53 146.5-144T520-477q0-104-53.5-200.5T320-827q-7-4-11-9.5t-4-13.5q0-10 6-16.5t16-8.5q12-3 25-4t25-1q71 0 136 27.5T630-777Z" />
  </svg>
)

export { IconBrightness3RoundedFilled as default }
