'use client'

import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import MarkunreadIcon from '@mui/icons-material/Markunread'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Fira_Sans } from 'next/font/google'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

const firaSans = Fira_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const footerOption = [
  { content: 'Privacy Policy' },
  { content: 'Terms of Use' },
  { content: 'Sales and Refunds' },
  { content: 'Legal' },
  { content: 'Site Map' },
]

const Footer: React.FC = () => {
  return (
    <div>
      <div className='w-full h-[20px] bg-[#FBD029]'></div>
      <footer className='w-full px-2 py-6 bg-[#1F1D14] text-white sm:px-5 lg:px-24 xl:px-30'>
        <div className='flex flex-wrap flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start'>
          <div className='flex flex-col items-center lg:items-start hidden lg:flex-row gap-2 lg:flex'>
            <Image src={Logo} alt='Logo' />
            <div className='max-w-[90px] text-center lg:text-left'>
              <h1 className={`text-lg font-semibold leading-tight ${firaSans.className} lg:text-xl xl:text-2xl`}>
                Sport Market
              </h1>
            </div>
          </div>
          <div className='flex flex-col items-center gap-5 lg:items-start'>
            <p className='text-lg font-bold lg:text-xl'>Контакты</p>
            <div className={`flex items-center gap-2 text-base font-normal ${firaSans.className} lg:text-lg`}>
              <LocalPhoneIcon aria-label="Phone" />
              <p>+998 (90) 565-85-85</p>
            </div>
            <div className={`flex items-center gap-2 text-base font-normal ${firaSans.className} lg:text-lg`}>
              <MarkunreadIcon aria-label="Email" />
              <p>support@figma.com</p>
            </div>
          </div>
          <div className='flex flex-col items-center lg:items-start my-auto lg:my-0'>
            <div className={`text-base max-w-[235px] text-center lg:text-left flex items-center gap-2 font-normal ${firaSans.className} lg:text-lg`}>
              <LocationOnIcon aria-label="Location" />
              <p>Tashkent Sh. Chilonzor 9 kvartal 12 uy</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-5 lg:items-start'>
            <p className='text-lg font-bold lg:text-xl'>Подписаться</p>
            <div className='flex flex-col items-center lg:items-start gap-3 mb-4'>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                sx={{
                  width: '235px',
                  '& .MuiInputBase-root': {
                    color: '#9A9EA5',
                    backgroundColor: 'white',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#9A9EA5',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: '#9A9EA5',
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#FFEA00',
                  color: 'black',
                  '&:hover': {
                    backgroundColor: '#FFD700',
                  },
                }}
              >
                Отправить
              </Button>
            </div>
            <div className='flex gap-4'>
              <InstagramIcon />
              <FacebookOutlinedIcon />
              <SendOutlinedIcon />
            </div>
          </div>
        </div>
      </footer>
      <div className='w-full border-t-[1px] border-t-[#999] bg-[#1F1D14] py-[15px] flex flex-wrap justify-center md:justify-between px-2 sm:px-5 lg:px-24 xl:px-30'>
        <p className='text-white opacity-80'>© 2022 All Rights Reserved</p>
        <div className='flex flex-wrap justify-center gap-4'>
          {footerOption.map((item, index) => (
            <p key={index} className='text-white opacity-80'>
              {item.content}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
