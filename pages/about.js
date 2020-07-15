import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const About = () => {
    return (
        <div>
            <PageTitle title='Sobre'/>
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