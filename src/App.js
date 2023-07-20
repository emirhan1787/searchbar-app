import logo from './logo.svg';
import './App.css';


const windBnb = [
  {
    img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.40,
    name: "Stylist apartment in center of the city"
  },
  {
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    superHostMu: false,
    room: "Private room",
    rating: 4.25,
    name: "Cozy, peaceful and private room with..."
  },
  {
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    superHostMu: false,
    room: "Entire house",
    rating: 4.96,
    name: "Mordern House in a remote area"
  },
  {
    img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    superHostMu: true,
    room: "Entire apartment . 2 beds",
    rating: 4.85,
    name: "Stylist room in design district "
  },
  {
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80",
    superHostMu: false,
    room: "Private room",
    rating: 4.54,
    name: "Modern apartment close to nature"
  },
  {
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
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
          <image src='public/images/triangleLogo.png' className="wind"></image>
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
          <div><img src={item.img} alt='resim' />
            <div>
              {/* ctrl k + c */}
              {item.superHostMu && <text className='superHost'>Super host</text>}
              {/* <text className='superHost'>Super host</text> */}
              <text className='descText'>{item.room}</text>
              <img className='star' src='star.png' alt='start' />
              <text className='rating'>{item.rating}</text>
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