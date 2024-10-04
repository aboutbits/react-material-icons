import React from 'react'
import { IconProps } from './types.js'

export const IconSwordRoseOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M644-484 484-644l236-236h160v160L644-484ZM142-92l-50-50q-12-12-12-28t12-28l116-117-88-88 28-28q23-23 57-23t57 23l4 5 48-48 160 160-48 48 5 4q23 23 23 57t-23 57l-28 28-88-88L198-92q-12 12-28 12t-28-12Zm737-44-56 56-466-464q-49 30-107 23.5T150-569l-25-25 27-28q26-27 63.5-26.5T279-622l78 78q9-5 17-11.5t16-14.5q7-7 13-15t11-16l-78-78q-51-50-121-50T96-678l-27 27-29-29 240-239 110 110q43 43 48.5 101T414-601l289 289q-8-26-10-54t3-56q6-30 20.5-56t34-48.5q19.5-22.5 44.5-41t52-32.5q39 48 60 105t9 117q-11 51-42.5 91T797-218l82 82Z" />
  </svg>
)