import './App.css';
import Navbar from './Navbar';
import Banner from './Banner'
import Middle from './Middle';
import Last from './Last';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <div class="sticky-social-media-box">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="socialMediaDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Social Media
          </button>
          <div class="dropdown-menu" aria-labelledby="socialMediaDropdown">
           <a class="dropdown-item" href="https://www.google.com">
           <img src="google.png" alt="Google Logo" class="logo" />
             Google
            </a>
         <a class="dropdown-item" href="https://www.twitter.com">
         <img src="twitter.png" alt="Twitter Logo" class="logo" />
          Twitter
         </a>
         <a class="dropdown-item" href="https://www.facebook.com">
         <img src="facebook.png" alt="Facebook Logo" class="logo" />
          Facebook
        </a>
  </div>
</div>
     <Banner/>
     <Middle/>
     <Last/>
    </div>
  );
}

export default App;
