import React from 'react'
import { IconProps } from './types.js'

export const Icon6FtApartOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M300-80q-8 0-14-6t-6-14v-120q0-8 6-14t14-6h100v40h-80v20h60q8 0 14 6t6 14v60q0 8-6 14t-14 6h-80Zm160 0v-160h100v40h-60v20h40v40h-40v60h-40Zm160 0v-120h-40v-40h120v40h-40v120h-40Zm-300-40h40v-20h-40v20ZM200-280 80-400l120-120 42 42-38 38h551l-37-38 42-42 120 120-120 120-42-42 38-38H205l37 38-42 42ZM80-560v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H80Zm480 0v-23q0-24 13-44t36-30q26-11 53.5-17t57.5-6q30 0 57.5 6t53.5 17q23 10 36 30t13 44v23H560ZM240-720q-33 0-56.5-23.5T160-800q0-33 23.5-56.5T240-880q33 0 56.5 23.5T320-800q0 33-23.5 56.5T240-720Zm480 0q-33 0-56.5-23.5T640-800q0-33 23.5-56.5T720-880q33 0 56.5 23.5T800-800q0 33-23.5 56.5T720-720Z" />
  </svg>
)
