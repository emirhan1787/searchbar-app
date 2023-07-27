import './App.css';
import { useState } from 'react';
import './Mobile.css';

const windBnb = [
  {
    img: "images/hotel.jpeg",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.40,
    name: "Stylist apartment in center of the city"
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Private room",
    rating: 4.25,
    name: "Cozy, peaceful and private room with..."
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Entire house",
    rating: 4.96,
    name: "Mordern House in a remote area"
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.85,
    name: "Stylist room in design district "
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Private room",
    rating: 4.54,
    name: "Modern apartment close to nature"
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Entire house",
    rating: 4.64,
    name: "House in a remote area"
  },
]

const locations = [
"Helsinki"||'helsinki',"Fİnland"||"finland","Turku"||"turku","Oulu"||"oulu","Vaasan"||"vaasa"
]


function App() {
  const [barAcik, setBarAcik] = useState(false)
  const [child, setChild] = useState(0)
  const [adult, setAdult] = useState(0)

  const handleBar = () => {
    setBarAcik(!barAcik)
  }

  const removeChild = () => {
    if (child === 0) {
      return
    }
    setChild(child - 1)
  }

  const addChild = () => {
    if (child === 5) {
      return
    }
    setChild(child + 1)
  }

  const removeAdult = () => {
    if (adult === 0) {
      return
    }
    setAdult(adult - 1)
  }

  const addAdult = () => {
    if (adult === 5) {
      return
    }
    setAdult(adult + 1)
  }

  return (
    <div className="App">

      {barAcik ? (
        <div className='AppBar'>
          <div className='acikBar'>
            <input className='acikLocationSearch' type="text" placeholder="Add location" />
            <input className='acikGuestSearch' type="text" placeholder='Add guests' />
            <div className='acikSearchBtn' onClick={() => handleBar()} ><img className='acikSearchİcon' src='images/searchicon.png' alt='icon' /> <text>Search</text></div>
          </div>
          <div className='chooser'>
            <div className='locationChooser'>
              <div className='locationText'>
                <img className='locationİmg' src='images/location.png'></img>
                <text className='locationText'>Helsinki, Finland</text>
              </div>
              <div className='locationText'>
              <img className='locationİmg' src='images/location.png'></img>
                <text className='locationText'>Turku, Finland</text>
              </div>
              <div className='locationText'>
              <img className='locationİmg' src='images/location.png'></img>
                <text className='locationText'>Oulu, Finland</text>
              </div>
              <div className='locationText'>
              <img className='locationİmg' src='images/location.png'></img>
                <text className='locationText'>Vaasa, Finland</text>
              </div>
            </div>
              <div className='guestTotal'>
                <text className='adultText'>Adult (Ages 13 or above)</text>
                <div className='guestChooser'>
                  
                  <button className='numberButton' onClick={() =>addAdult()}>+</button> {adult}
                  <button className='numberButton' onClick={()=> removeAdult()}>-</button>
                </div>
                <text className='adultText'>Child (Ages 2-12)</text>
                <div className='guestChooser'>
                
                  <button className='numberButton' onClick={() => addChild()}>+</button> {child}
                  <button className='numberButton' onClick={() => removeChild()}>-</button>
               </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="topDiv">
          <div className='bnb'>{/*sol üst yazı*/}
            <img src='images/logo.png' className="wind" alt='windb' />
          </div>
          <div className='searchbar'>
            <input className='locationSearch' type="text" placeholder="Location" />
            <input className='guestSearch' type="text" placeholder='Guests' />
            <img className='searchİcon' src='images/searchicon.png' alt='icon' onClick={() => handleBar()} />
          </div>
        </div>
      )}

      <br />

      <div className='h1div'>
        <h1 className='h1'>Stays in finland</h1>
        <text className='h1text'>12+ stays</text>
      </div>

      <br />

      <div className='maincontainer'>
        {windBnb.map((item) => (
          <div className='mainContainerCard'>
            <img className='hotelİmage' src={item.img} alt='resim' />
            <div>
              {/* ctrl k + c */}
              <div className='mainContainerCardInfo'>
                {item.superHostMu && <text className='superHost'>Super host</text>}
                <text className='descText'>{item.room}</text>
                <div>
                  <img className='' src='images/star.png' alt='start' />
                  <text className=''>{item.rating}</text>
                </div>
              </div>
              <div>
                <h2 className='descH2'>{item.name}</h2>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
export default App;