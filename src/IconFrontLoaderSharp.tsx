import React from 'react'
import { IconProps } from './types'

export const IconFrontLoaderSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M159-169q-50 0-84.5-35T40-289v-320h280v-200h200l120 120v160h39v-80l101-100 179 340H679v-80h-39v70q20 17 30 40.5t10 49.5q0 50-35 85t-85 35q-38 0-69-22t-45-58H273q-14 36-45 58t-69 22Zm0-80q17 0 29-11.5t12-28.5q0-17-11.5-28.5T160-329q-17 0-28.5 11.5T120-289q0 17 11 28.5t28 11.5Zm401 0q17 0 28.5-11.5T600-289q0-17-11.5-28.5T560-329q-17 0-28.5 11.5T520-289q0 17 11.5 28.5T560-249Zm-240-80v-200H120v127q10-4 19.5-5.5T160-409q38 0 69 22t44 58h47Zm80 0h46q13-36 44.5-58t69.5-22v-40H400v120Zm427-120-67-127v127h67Zm-427-80h160v-127l-74-73h-86v200Zm-80 200v-80 7-127 200Zm80 0v-120 120Z" />
  </svg>
)
