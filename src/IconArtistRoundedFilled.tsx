import React from 'react'
import { IconProps } from './types'

const IconArtistRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M700-160q-42 0-71-29t-29-71q0-42 29-71t71-29q8 0 18 1.5t22 6.5v-168q0-17 11.5-28.5T780-560h60q17 0 28.5 11.5T880-520q0 17-11.5 28.5T840-480h-40v220q0 42-29 71t-71 29ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160q-17 0-28.5-11.5T120-200v-72q0-35 17.5-63t46.5-43q62-31 126-46.5T440-440q28 0 55.5 3t55.5 9q17 4 21.5 21t-9.5 31q-21 25-31.5 54.5T521-260q0 13 1.5 25.5T528-209q5 18-4.5 33.5T497-160H160Z" />
  </svg>
)

export { IconArtistRoundedFilled as default }
