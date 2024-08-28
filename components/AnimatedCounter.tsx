'use client';
import React from 'react'
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
           duration={4}
           decimals={2}
           decimal=','
           prefix="IDR"
           end={amount} />
    </div>
  )
}

export default AnimatedCounter