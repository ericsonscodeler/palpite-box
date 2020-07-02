import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <div>
            <hi>
                About !
            </hi>
            <div>
                <Link href='/'>
                    <a>Index !</a>
                </Link>             
            </div>
        </div>
    )
}


export default About