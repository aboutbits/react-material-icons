import React from 'react'
import { IconProps } from './types'

const IconPersonalInjuryOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-560q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm-90 400q-13 0-21.5-8.5T360-190q0-13 8.5-21.5T390-220h76l-28 60h-48ZM160-80v-271q0-34 17-62.5t47-44.5q60-30 124.5-46T480-520q30 0 60.5 3t59.5 10l-97 207H390q-46 0-78 32t-32 78q0 46 32 78t78 32H160Zm518 0v-403q15 5 29.5 11.5T736-458q30 16 47 44.5t17 62.5v191q0 33-23.5 56.5T720-80h-42Z" />
  </svg>
)

export { IconPersonalInjuryOutlinedFilled as default }
