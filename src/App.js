import logo from './logo.svg';
import './App.css';


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

function App() {
  return (
    <div className="App">
      <div className="topDiv">
        <div className='bnb'>{/*sol üst yazı*/}
          <img src='images/logo.png' className="wind" alt='windb' />
        </div>
        <div className='searchbar'>
          <form action='/action_page.html'>
            <label for='gsearch' className='searchLabel'>search on site</label>
            <input type='search' id='gsearch' name='gsearch' className='searchBar'></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>

      <br />

      <div className='h1div'>
        <h1 className='h1'>Stays in finland</h1>
        <text className='h1text'>12+ stays</text>
      </div>

      <br />

      <div className='maincontainer'>
        {windBnb.map((item) => (
          <div className='mainContainerCard'>
            <img style={{
              width: "100%",
              height: "100%"
            }} src={item.img} alt='resim' />
            <div>
              {/* ctrl k + c */}
              <div className='mainContainerCardInfo'>
                {item.superHostMu && <text className='superHost'>Super host</text>}
                <text className=''>{item.room}</text>
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