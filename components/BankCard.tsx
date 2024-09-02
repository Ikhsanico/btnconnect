import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({account, userName}:CreditCardProps) => {
  return (
    <div className='flex flex-col '>
        <Link href='/'>
            <Image 
                src="icons/Credit_card_mockup.svg"
                width={316}
                height={190}
                alt='debitcard' />

            <div>
                <Image 
                    src="icons/Paypass.svg"
                    width={20}
                    height={20} 
                    alt='pay'/>
            </div>
        </Link>
    </div>
  )
}

export default BankCard