import './App.css';
import React, { useState ,useEffect} from 'react';
import avatar from "./images/avatar.png"
import meme from './images/meme.png';
function App() {
var[showText,setShowText]=useState(false)
var[moreinfo,setMoreInfo]=useState(false)
useEffect(() => {
  setTimeout(()=>{
    if (showText===false) {
      setShowText(true)
      document.getElementById('name1').classList.remove('class2');
      document.getElementById('name1').classList.add('class1');

    } else{
      setShowText(false) 
      document.getElementById('name1').classList.remove('class1');
      document.getElementById('name1').classList.add('class2')
    }
  },3500)

},[showText]);

  return (
    <div className="App">
      <div id='pic' ></div>
      <header className="App-header">
      <div  className='headposi'>
        <h1>Hey ,I'm Amrit;)</h1>
    {showText===true?<h3 id='name1'>Front-End Developer</h3>:<h3 id='name1'>React Developer</h3>}
    <h5>Dedicated technology enthusiast with an insatiable curiosity <br />
Web Designer and devloper based in Chennai, India</h5>
  </div>
  


       
      </header>
      <div id='dummy'></div>
      <section>
        <h2 id='foohead'>About me</h2>
        <p>Innovative web developer in designing and
building responsive web applications and sites. Committed
in delivering high-quality, user-friendly websites while
staying up-to-date with the latest web development trends
and  technologies.  Proficiency  as  well  as  ability  to
communicate effectively in a team setting, and possessing a
strong willingness to learn.</p>
<a href="https://drive.google.com/uc?export=download&id=1hJ41Stkn_OuvfqMUs6NYvLVhjEsTX5x5"class="btn btn-primary" >Download resume</a>


 </section>
     <section >  
  <h1 id='foohead'> MY Projects:</h1>
  <div className='row'>
  <div className="card p-2" data-bs-theme="dark" style={{width: "28rem"}}>
  <img src={avatar} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Random Avatar Generator</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://random-avatar-maker.netlify.app/" className="btn btn-primary" target='blank'>Go To Project</a>
  </div>
</div>
  <div class="card p-2 "data-bs-theme="dark" style={{width: "28rem"}}>
  <img src={meme} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Meme App</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://randomemegenerators.netlify.app/" className="btn btn-primary" target='blank'>Go To Project</a>
  </div>
</div>
</div>
     </section>
     <div id='dummy'></div>
     <footer>
      <h2 id='foohead'>Contact Details!</h2>
    
      <div><svg xmlns="http://www.w3.org/2000/svg" className='svgcol' width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> <a href="mailto:">amrit97pal@gmail.com</a><br />
<svg xmlns="http://www.w3.org/2000/svg" className='svgcol' width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg> <a href="https://github.com/amritpsingh123" target="_blank" rel="noopener noreferrer"> GIT Profile</a><br />
<svg xmlns="http://www.w3.org/2000/svg" className='svgcol' width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg><a href="tel:+">+91-967 714 3021</a></div>
     </footer>
    </div>
  );
}

export default App;
