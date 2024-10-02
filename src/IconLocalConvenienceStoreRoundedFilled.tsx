import React from 'react'
import { IconProps } from './types'

export const IconLocalConvenienceStoreRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M841-518v318q0 33-23.5 56.5T761-120H201q-33 0-56.5-23.5T121-200v-318q-23-21-35.5-54t-.5-72l42-136q8-26 28.5-43t47.5-17h556q27 0 47 16.5t29 43.5l42 136q12 39-.5 71T841-518Zm-272-42q27 0 41-18.5t11-41.5l-22-140h-78v148q0 21 14 36.5t34 15.5Zm-180 0q23 0 37.5-15.5T441-612v-148h-78l-22 140q-4 24 10.5 42t37.5 18Zm-178 0q18 0 31.5-13t16.5-33l22-154h-78l-40 134q-6 20 6.5 43t41.5 23Zm540 0q29 0 42-23t6-43l-42-134h-76l22 154q3 20 16.5 33t31.5 13ZM341-240h80q8 0 14-6t6-14q0-8-6-14t-14-6h-60v-40h60q8 0 14-6t6-14v-80q0-8-6-14t-14-6h-80q-8 0-14 6t-6 14q0 8 6 14t14 6h60v40h-60q-8 0-14 6t-6 14v80q0 8 6 14t14 6Zm260-80v60q0 8 6 14t14 6q8 0 14-6t6-14v-160q0-8-6-14t-14-6q-8 0-14 6t-6 14v60h-40v-60q0-8-6-14t-14-6q-8 0-14 6t-6 14v80q0 8 6 14t14 6h60Z" />
  </svg>
)
