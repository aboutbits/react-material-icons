import React from 'react'
import { IconProps } from './types.js'

export const IconBookRibbonRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q74 0 126 17t112 52q11 6 16.5 14t5.5 21v418q44-21 88.5-31.5T700-320q36 0 70.5 6t69.5 18v-441q0-17 11.5-28.5T880-777q17 0 28.5 11.5T920-737v503q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-49 0-95.5 14.5T516-185q-8 5-17.5 7.5T480-175q-9 0-18.5-2.5T444-185q-42-26-88.5-40.5T260-240q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234Zm580-208v-369q0-13 7.5-23.5T647-849l54-18q14-5 26.5 4.5T740-838v369q0 13-7.5 23.5T713-431l-54 18q-14 5-26.5-4.5T620-442Z" />
  </svg>
)
