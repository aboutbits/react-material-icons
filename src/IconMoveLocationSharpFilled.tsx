import React from 'react'
import { IconProps } from './types.js'

export const IconMoveLocationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80Q239-217 159.5-334.5T80-552q0-150 96.5-239T400-880q127 0 223.5 89T720-552v17q0 9-2 18-54 11-94.5 41.5T558-402q-25 43-31.5 93t9.5 101q-29 31-63 63t-73 65Zm0-280q56 0 101-27.5t71-72.5q-35-29-79-44.5T400-520q-49 0-93 15.5T228-460q26 45 71 72.5T400-360Zm0-200q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm370 440-56-56 63-64H610v-80h167l-63-64 56-56 160 160-160 160Z" />
  </svg>
)
