import React from 'react'
import { IconProps } from './types.js'

export const IconVoiceOverOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M514-556 320-752q9-3 19-5.5t21-2.5q66 0 113 47t47 113q0 11-1.5 22t-4.5 22ZM40-200v-32q0-33 17-62t47-44q51-26 115-44t141-18q26 0 49.5 2.5T456-392l-56-54q-9 3-19 4.5t-21 1.5q-66 0-113-47t-47-113q0-11 1.5-21t4.5-19L84-764q-11-11-11-28t11-28q12-12 28.5-12t27.5 12l675 685q11 11 11.5 27.5T816-80q-11 13-28 12.5T759-80L641-200h39q0 33-23.5 56.5T600-120H120q-33 0-56.5-23.5T40-200Zm880-400q0 69-24.5 131.5T829-355q-12 14-30 15t-32-13q-13-13-12-31t12-33q30-38 46.5-85t16.5-98q0-51-16.5-97T767-781q-12-15-12.5-33t12.5-32q13-14 31.5-13.5T829-845q42 51 66.5 113.5T920-600Zm-182 0q0 32-10 61.5T700-484q-11 15-29.5 15.5T638-482q-13-13-13.5-31.5T633-549q6-11 9.5-24t3.5-27q0-14-3.5-27t-9.5-25q-9-17-8.5-35t13.5-31q14-14 32.5-13.5T700-716q18 25 28 54.5t10 61.5Z" />
  </svg>
)