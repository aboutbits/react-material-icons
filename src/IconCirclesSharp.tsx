import React from 'react'
import { IconProps } from './types'

const IconCirclesSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M666-360q33 2 65.5-3.5T794-382q-21 131-121 216.5T440-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T80-440q0-133 85.5-233T382-794q-13 30-18.5 62.5T360-666q-72 25-116 87t-44 139q0 100 70 170t170 70q77 0 139-44t87-116Zm14-560q100 0 170 70t70 170q0 100-70 170t-170 70q-100 0-170-70t-70-170q0-100 70-170t170-70Zm0 360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-120ZM433-433Z" />
  </svg>
)

export { IconCirclesSharp as default }
