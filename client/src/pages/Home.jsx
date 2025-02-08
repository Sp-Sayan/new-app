import React from 'react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/Navbar'

const Home = () => {
    return (
        <div className='home-container flex-col items-center h-full w-full'>
            <Navbar/>
            <Button>Lets Get Started</Button>
        </div>

    )
}

export default Home
