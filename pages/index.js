import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>Olá Semana FullStack Master !</h1>
            <div>
                    <Link href='/about'>
                        <a>About !</a>
                    </Link>
                <div>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </div>
                <div>
                    <Link href='/search'>
                        <a>Search</a>
                    </Link>
                </div>     
            </div>
        </div>
    )
}

export default Index