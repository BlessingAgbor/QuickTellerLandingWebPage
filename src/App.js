// import React, { useState } from 'react'
// import './App.css'  

// const App= () =>{
// const [textVal, setTextVal] = useState ("");
// const [counter, setCounter] = useState(0);
// const [user, setUser] = useState("");
// const [newName, setNewName] = useState([
//   {Quote: "When you aim for perfection, you discover it's a moving target ",
//   Name: "George Fisher"},
//   {Quote:"Character, not brain will count at the crucial moment ",
//   Name: "Rabindramath Tagore"},
//   {Quote: "Generally the theories we believe, we call them facts, and the facts we disbelieve we call them theories",
//   Name: "Felix Cohen"},
//   {Quote: "A man may die, nations may rise and fall, but an idea lives on. Ideas have endurance without death",
//   Name: "John Kennedy"},
//   {Quote: "At times its better to keep your mouth shut and let people wonder if you are a fool than to open it and remove all their doubts",
//   Name: "James Sinclair"},
//   {Quote: "Temper is a funny thing, you can't get rid of it by losing it",
//   Name: "Somerest Maugham"},
//   {Quote: "Trying is the touching stone of accomplishment",
//   Name: "Paul von Ringelheim"},
//   {Quote: "Always forgive your enemies, nothing annoys them so much",
//   Name: "Oscar Wilde"},
// ]);

// const AddCounter = () =>{
//   setCounter(counter +1)
//   console.log(counter);
// };
// const PrevCounter = ()=> {
// if (counter === 0) {
//   setCounter(counter);
// }else{
//   setCounter(counter -1);
// }
// };

// const AddQuote = () =>{
//   setNewName([...newName, textVal]);
// }
// const addName = () => {
//   setUser([...newName.Name, setUser]);
//   console.log(user)
// }



//   return(
//     <div className="container">
//       <span>

//       <input onChange={(e) =>{
//             setTextVal(e.target.value);
//           }} placeholder= "Enter your Quote"
//           className= "inputText" ></input><br></br>
//           <input onChange= {(e) =>{
//               setUser(e.target.value);
//           }} placeholder= "Who said this?" className = "inputName"></input>
//           <button onClick={addName}>Click me</button>
//           <button onClick={AddQuote}>Add Quote</button>
//           </span>
//       <div className ="holder">
//         <div className="image">
//         {/* <img/> */}
//         <h3>Quotes that will change your life....</h3>
//         </div>
      

//         <div className="quote">       
//             "{newName[counter % newName.length]} "
//             </div>
//         <div className ="name" style= {{padding:"30px"}}>
//           Quote by "{user[counter%user.length]}"
//           </div>
//       </div>
//       <div className = "btnHolder">
//           <button onClick= {PrevCounter}>Previous Quote</button>
//           <button onClick ={AddCounter}>Next Quote</button>
//         </div>
//     </div>

    
//   )
// }

// export default App





import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Logo from './components/Logo'
import Payment from './components/Payments'
import Payment2 from './components/Payment2'
import Collections from './components/Collections'
import Sections from './components/Section'
import Pointofsale from './components/Point of sale'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = ()=>{

  return(
    <div>
      <Container>
      <Header />
      <Hero />
      <Br></Br>
      <Br></Br>

      <Logo />

      <Br></Br>
      <PaymentHold>
      <Payment />
     
      </PaymentHold>

<Br></Br>
<Br></Br>
      <PaymentHold2>
      <Payment2 />
     

      </PaymentHold2>
      </Container>
<Br></Br>

<PaymentHold>
      <Holder>
      <Collections />

      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Br></Br>
      <Sections />
      </Holder>
      </PaymentHold>

      <PaymentHold2>
      <Holder>
      <Pointofsale />
      </Holder>
      </PaymentHold2>    

<PaymentHold>
<Contact />
    
</PaymentHold>
<PaymentHold2>
<Footer />

</PaymentHold2>    

    </div>
  )
}

export default App

const Container= styled.div`
/*  */
`
const Holder = styled.div`

`
const Br = styled.br``

const PaymentHold = styled.div`
width: 100%;
display: flex;
background-color:#EEF4F8;
flex-direction: column;
`
const PaymentHold2 = styled.div`
width: 100%;
display: flex;
background-color:white;
`
