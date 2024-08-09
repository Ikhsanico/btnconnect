import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName : 'Mas Nic'};
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    type="greeting"
                    title="welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"/>
            </header>
        </div>
    </section>
  )
}

export default Home