import React from 'react'
import { IconProps } from './types'

export const IconUnknownDocumentSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-800v640-640 200-200Zm80 400h147q11-22 25.5-42.5T484-480H280v80Zm0 160h122q-2-20-2-40t2-40H280v80ZM120-80v-800h400l240 240v92q-20-5-40-8.5t-40-3.5v-40H480v-200H200v640h227q11 23 25.5 43T484-80H120Zm560-400q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480Zm0 320q11 0 18.5-7.5T706-186q0-11-7.5-18.5T680-212q-11 0-18.5 7.5T654-186q0 11 7.5 18.5T680-160Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T680-400q-23 0-41.5 13.5T612-350l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T712-336q0 11-6 18.5T692-302q-6 6-12.5 12T668-276q-3 6-4.5 12t-1.5 14v14Z" />
  </svg>
)
