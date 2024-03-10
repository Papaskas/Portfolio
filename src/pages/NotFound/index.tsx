import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '@src/components/Container'
import Button from '@src/components/Button'

function Index() {
  const navigate = useNavigate()

  return (
    <Container>
      <section>
        <div>Page not found</div>
        <h1>Ah, the dreaded 404. Let's get you back on track</h1>
        <Button onClick={() => navigate('/')}>return</Button>
      </section>
    </Container>
  )
}

export default Index
