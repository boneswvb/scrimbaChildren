import React from "react";
import CallOut from './CallOut';
import './App.css'

const App = () => {
  return (
    <main className="tc">
      <h1>Welcome!</h1>
      <CallOut>
        <h2>Don't miss out!</h2>
        <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
      </CallOut>
      
      <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
      
      <CallOut>
        <img src="https://picsum.photos/id/102/4320/3240" width="100%" alt="me" />
        <figcaption>Just look at those sparkling raspberries!</figcaption>
      </CallOut>
 
      <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>

      <CallOut>
        <h2>Give us your email. We definitely won't sell it to anyone.</h2>
        <input type="email" placeholder="Enter Email"/><br /><br />
        <button>Sign me up!</button>
      </CallOut>
    </main>
  )
}

export default App