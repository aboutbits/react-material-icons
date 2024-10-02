import React from 'react'
import { IconProps } from './types'

export const IconLaptopCarSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280v-440 440ZM400-80v-249l66-191h348l66 191v249h-80v-60H480v60h-80Zm74-280h332l-35-100H509l-35 100Zm66 150q17 0 28.5-11.5T580-250q0-17-11.5-28.5T540-290q-17 0-28.5 11.5T500-250q0 17 11.5 28.5T540-210Zm200 0q17 0 28.5-11.5T780-250q0-17-11.5-28.5T740-290q-17 0-28.5 11.5T700-250q0 17 11.5 28.5T740-210Zm-280 10h360v-100H460v100ZM40-160v-120h80v-520h680v200h-80v-120H200v440h120v120H40Zm420-40v-100 100Z" />
  </svg>
)
