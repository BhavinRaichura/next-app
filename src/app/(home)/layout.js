import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/base/Footer'
import Aside from '@/components/base/Aside'
import Highlights from '@/components/base/Highlights'
import Navbar from '@/components/base/Navbar'
import SearchBarTiny from '@/components/ui/SearchBarTiny'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <div className=' overflow-hidden'>
        <Navbar/>
        <span className='  fixed backdrop-blur-3xl rounded-full bg-zinc-900 backdrop-brightness-200 text-gray-200 max-lg:bottom-20 max-lg:right-5 lg:top-36 lg:right-20'><SearchBarTiny /></span>
        <div className=' mt-10 py-10 justify-center w-full flex '>
          <div className='  2xl:w-3/5 max-2xl:w-5/6 max-xl:w-11/12 max-lg:w-full lg:flex'>
            <main className='   lg:sticky -top-2/3  h-fit w-2/3 max-lg:w-full '>
              {children}
            </main>
            <aside className=' w-1/3 max-lg:w-full '>
              <Aside/> 
            </aside>
          </div>
        </div>
        <Highlights/>
        <Footer/>
      </div>
  )
}
