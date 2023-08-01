import './App.css';
import { useEffect, useState } from 'react';
import './Mobile.css';

const windBnb = [
  {
    img: "images/hotel.jpeg",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.40,
    name: "Stylist apartment in center of the city",
    location: "Helsinki, Finland",
    child: 3,
    adult: 3
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Private room",
    rating: 4.25,
    name: "Cozy, peaceful and private room with...",
    location: "Helsinki, Finland",
    child: 1,
    adult: 2
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Entire house",
    rating: 4.96,
    name: "Mordern House in a remote area",
    location: "Helsinki, Finland",
    child: 2,
    adult: 1
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.85,
    name: "Stylist room in design district ",
    location: "Vaasa, Finland",
    child: 2,
    adult: 2
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Private room",
    rating: 4.54,
    name: "Modern apartment close to nature",
    location: "Oulu, Finland",
    child: 2,
    adult: 2
  },
  {
    img: "images/hotel.jpeg",
    superHostMu: false,
    room: "Entire house",
    rating: 4.64,
    name: "House in a remote area",
    location: "Turku, Finland",
    child: 1,
    adult: 3
  },
]

const locations = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland"
]


function App() {
  const [barAcik, setBarAcik] = useState(false)
  const [child, setChild] = useState(0)
  const [adult, setAdult] = useState(0)
  const [location, setLocation] = useState("")
  const [filteredLocation, setFilteredLocation] = useState([])
  const [filteredCardValue, setFilteredCardValue] = useState([])

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

  useEffect(() => {
    const newLocation = locations?.filter((l) => l?.toLowerCase()?.includes(location?.toLowerCase()))
    setFilteredLocation(newLocation)
    const newFilteredCardValue = windBnb?.filter((item) => item?.location?.toLowerCase()?.includes(location?.toLowerCase()))
    setFilteredCardValue(newFilteredCardValue)
  }, [location])

  useEffect(() => {
    const newFilteredCardValue = windBnb?.filter((item) => item.adult >= adult || item.child <= child)
    setFilteredCardValue(newFilteredCardValue)
  }, [adult, child])


  return (
    <div className="App">

      {barAcik ? (
        <div className='AppBar'>
          <div className='acikBar'>
            <input className='acikLocationSearch' type="text" placeholder="Add location" onChange={(e) => setLocation(e.target.value)} />
            <input className='acikGuestSearch' type="text" placeholder='Add guests' />
            <div className='acikSearchBtn' onClick={() => handleBar()} ><img className='acikSearchİcon' src='images/searchicon.png' alt='icon' /> <span>Search</span></div>
          </div>
          <div className='chooser'>
            <div className='locationChooser'>
              {/* <div className='locationText'>
                <img className='locationİmg' src='images/location.png' alt='a'></img>
                <text className='locationText'>Helsinki, Finland</text>
              </div>
              <div className='locationText'>
                <img className='locationİmg' src='images/location.png' alt='a'></img>
                <text className='locationText'>Turku, Finland</text>
              </div>
              <div className='locationText'>
                <img className='locationİmg' src='images/location.png' alt='a'></img>
                <text className='locationText'>Oulu, Finland</text>
              </div> */}
              {filteredLocation?.map((item, i) => (
                <div className='locationText' key={i}>
                  <img className='locationİmg' src='images/location.png' alt='a'></img>
                  <span className='locationText'>{item}</span>
                </div>
              ))}

            </div>
            <div className='guestTotal'>
              <span className='adultText'>Adult (Ages 13 or above)</span>
              <div className='guestChooser'>

                <button className='numberButton' onClick={() => addAdult()}>+</button> {adult}
                <button className='numberButton' onClick={() => removeAdult()}>-</button>
              </div>
              <span className='adultText'>Child (Ages 2-12)</span>
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
        <span className='h1text'>12+ stays</span>
      </div>

      <br />

      <div className='maincontainer'>
        {filteredCardValue?.map((item, key) => (
          <HotelCard key={key} item={item} />
        ))}
      </div>
    </div>
  );
}
export default App;