'use client'

import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import InputAdornment from '@mui/material/InputAdornment';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Fira_Sans } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Basket from "@/public/basket.svg";
import Logo from '@/public/logo.svg';
import SpringModal from '@/components/modals/auth-modal';

const firaSans = Fira_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

interface Route {
  path: string;
  content: string;
}

const routes: Route[] = [
  { path: '/products', content: 'Продукты' },
  { path: '/', content: 'Контакты' },
  { path: '/payment-and-delivery', content: 'Оплата и Доставка' },
  { path: '/news', content: 'Новости' },
  { path: '/about', content: 'О нас' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const moveFavourite = () => {
    router.push('/wishlist')
  }

  return (
    <>
      <SpringModal open={open} handleClose={() => setOpen(false)} />
      <header className="fixed top-0 left-0 w-full z-50 px-2 py-3 bg-[#1F1D14] flex items-center justify-between sm:px-5 lg:px-24 xl:px-30">
        <div className="flex items-center">
          <Link href='/'>
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="Logo" />
              <div className="max-w-[80px]">
                <h1 className={`text-lg font-semibold leading-tight ${firaSans.className} lg:text-xl xl:text-2xl`}>
                  Sport Market
                </h1>
              </div>
            </div>
          </Link>
          <nav className="hidden xl:flex xl:gap-4 ml-6">
            {routes.map((item, index) => (
              <Link key={index} href={item.path}>
                <p className={`text-base font-normal opacity-80 hover:text-[#ffdb49] ${firaSans.className}`}>
                  {item.content}
                </p>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2 xl:gap-4">
          <div className={`hidden xl:flex items-center gap-1 text-sm font-normal ${firaSans.className} lg:text-base xl:text-md`}>
            <LocalPhoneIcon aria-label="Phone" />
            <p>+998 (90) 565-85-85</p>
          </div>
          <div className={`hidden xl:flex items-center gap-1 text-sm font-normal opacity-80 ${firaSans.className} lg:text-base xl:text-md`}>
            <MarkunreadIcon aria-label="Email" />
            <p>info@gmail.com</p>
          </div>
          <button className="xl:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            <MenuIcon />
          </button>
        </div>
        {menuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 lg:hidden">
            <button className="absolute top-4 right-4 text-white" onClick={toggleMenu} aria-label="Close menu">
              <CloseIcon />
            </button>
            <nav className="flex flex-col gap-4">
              {routes.map((item, index) => (
                <Link key={index} href={item.path}>
                  <p onClick={toggleMenu} className={`text-lg font-normal text-white hover:text-red-500 ${firaSans.className}`}>
                    {item.content}
                  </p>
                </Link>
              ))}
              <div className={`flex items-center gap-2 text-lg font-normal text-white ${firaSans.className}`}>
                <LocalPhoneIcon aria-label="Phone" />
                <p>+998 (90) 565-85-85</p>
              </div>
              <div className={`flex items-center gap-2 text-lg font-normal text-white opacity-80 ${firaSans.className}`}>
                <MarkunreadIcon aria-label="Email" />
                <p>info@gmail.com</p>
              </div>
            </nav>
          </div>
        )}
      </header>
      <div className="mt-[80px] w-full flex justify-between px-2 py-[20px] bg-[#fff] sm:px-5 lg:px-24 xl:px-30">
        <div className='w-full flex items-center space-x-2'>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1F1D14',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1F1D14',
              },
              height: '40px',
              borderRadius: '5px',
              minWidth: 'max-content',
              fontSize: '0.875rem',
            }}
          >
            <CategoryIcon fontSize="small" />
            <p className='hidden lg:flex'>Каталог</p>
          </Button>
          <TextField
            variant="outlined"
            placeholder="Поиск"
            className='w-[120px] sm:w-[300px] md:w-[350px] lg:w-[450px]'
            sx={{
              backgroundColor: '#F2F2F2',
              borderRadius: '5px',
              '& .MuiOutlinedInput-root': {
                height: '40px',
                borderRadius: '5px',
                '& fieldset': {
                  borderColor: '#F2F2F2',
                },
                '&:hover fieldset': {
                  borderColor: '#F2F2F2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F2F2F2',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#9A9EA5',
                top: '-8px',
                left: '14px',
                fontSize: '0.75rem',
                backgroundColor: '#F2F2F2',
                padding: '0 4px',
                transform: 'translateY(-50%)',
              },
              '& .MuiOutlinedInput-input': {
                color: '#000',
                padding: '10px 14px',
                fontSize: '0.875rem',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: '#9A9EA5' }} className='hidden md:flex' fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: '#F2F2F2',
              color: '#1F1D14',
              '&:hover': {
                backgroundColor: '#FBD029',
              },
              height: '40px',
              borderRadius: '5px',
              minWidth: '40px',
              fontSize: '0.875rem',
            }}
          >
            <PersonOutlinedIcon fontSize="small" />
          </Button>
          <Button
            variant="contained"
            onClick={moveFavourite}
            sx={{
              backgroundColor: '#F2F2F2',
              color: '#1F1D14',
              '&:hover': {
                backgroundColor: '#FBD029',
              },
              height: '40px',
              borderRadius: '5px',
              minWidth: '40px',
              fontSize: '0.875rem',
            }}
          >
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </Button>
          <Link href={'/basket'}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F2F2F2',
                color: '#1F1D14',
                '&:hover': {
                  backgroundColor: '#FBD029',
                },
                height: '40px',
                borderRadius: '5px',
                minWidth: '40px',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src={Basket} alt='basket' className='object-contain w-6 h-6' />
              <p className='hidden md:flex text-[14px]'>Корзина</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
