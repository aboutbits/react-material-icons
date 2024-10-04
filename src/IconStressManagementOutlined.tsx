import React from 'react'
import { IconProps } from './types.js'

export const IconStressManagementOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-320q59 0 127.5-20.5T797-414q2-11 2.5-21.5t.5-21.5q0-11-8.5-18t-19.5-4q-14 5-31 10.5T698-452q-69 29-118 40.5T480-400q-52 0-102-12t-122-41q-26-11-40-16l-28-10q-11-4-19.5 3.5T160-457q0 11 .5 21.5T163-414q101 48 179.5 71T480-320Zm0 160q94 0 167-41t114-110q-88 37-155 54t-126 17q-58 0-129-17.5T198-310q40 69 113.5 109.5T480-160Zm0-400q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640Zm0 560q-177 0-288.5-105T80-457q0-52 41.5-83t90.5-15q16 5 33.5 11.5T287-527q64 26 106 36.5t87 10.5q43 0 85-10t103-36q29-11 46.5-18t34.5-12q49-14 90 17t41 82q0 79-31 147.5T764-190q-54 51-127 80.5T480-80Z" />
  </svg>
)
