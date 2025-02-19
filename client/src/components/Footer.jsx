import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container  className='border border-t-8 border-teal-500'>
        <div className="w-full max-w7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1" >
                <div className='mt-5'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-lg font-semibold text-black dark:text-black'>

          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white hover:text-black transition-all duration-500'>Coders</span>
         Library
        </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">

          <div>
               <Footer.Title title='About'/>

               <Footer.LinkGroup col>
                <Footer.Link href='http://www'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                   project 100
                </Footer.Link>
                <Footer.Link href='/about'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                    blog
                </Footer.Link>
               </Footer.LinkGroup>
         </div>
         <div>
               <Footer.Title title='Follow'/>

               <Footer.LinkGroup col>
                <Footer.Link href='http://www'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                   Github
                </Footer.Link>
                <Footer.Link href='/github.com'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                  Instagram
                </Footer.Link>
               </Footer.LinkGroup>
         </div>
         <div>
               <Footer.Title title='Legal'/>

               <Footer.LinkGroup col>
                <Footer.Link href='#'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                 privacy
                </Footer.Link>
                <Footer.Link href='/about'
                target='_blank'  //  helps to go to particular page
                rel='noopener norefferer'>
                   Term &amp; conditions
                </Footer.Link>
               </Footer.LinkGroup>
         </div>
        </div>
        </div>  
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by="Coders's Library" year={new Date().getFullYear()}></Footer.Copyright>

            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='https://github.com' icon={BsGithub}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
            </div>
        </div>
        </div>
   </Footer>
      
   
  )
}

export default FooterCom
