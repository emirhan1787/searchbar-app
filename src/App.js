import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="topDiv">
          <div className='bnb'>{/*sol üst yazı*/}
            <text className="wind">windbnb</text>
          </div>   
          <div className='searchbar'>
            <form action='/action_page.html'>
            <label for='gsearch' className='searchLabel'>search on site</label>
            <input type='search' id='gsearch' name='gsearch' className='searchBar'></input>
            <input type="submit" value="Submit"></input>
            </form>
         </div>
    </div>

    <br/>

    <div className='h1div'>
      <h1 className='h1'>Stays in finland</h1>
      <text className='h1text'>12+ stays</text>
    </div>

    <br/>

    <div className='maincontainer'>
      <div><img src='ev1.png' alt='resim'/>
        <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>Stylist apartment in center of the city</h2>
        </div>
      </div>
      
      <div><img src='ev2.png' alt='resim'/>
      <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>Cozy, peaceful and private room with...</h2>
        </div>
        </div>
      
      <div><img src='ev3.png' alt='resim'/>
      <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>Mordern House in a remote area</h2>
        </div>
        </div>
      
      <div><img src='ev4.png' alt='resim'/>
      <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>Stylist room in design district </h2>
        </div>
        </div>
      
      <div><img src='ev5.png' alt='resim'/>
      <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>Modern apartment close to nature</h2>
        </div>
        </div>
      
      <div><img src='ev6.png' alt='resim'/>
      <div>
          <text className='superHost'>Super host</text>
          <text className='descText'>Entire apartment . 2 beds</text>
          <img className='star' src='star.png'/>
          <text className='rating'>4,40</text>
        </div>
        <div>
          <h2>House in a remote area</h2>
        </div>
        </div>
      
    </div>


    </div>
  );
}

export default App;