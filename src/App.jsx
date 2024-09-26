import './App.css';





function App() {

  return (
    <div className='Main'>


      <div className="Header1" >
        <h1> Welcome to the MAST Coding Club.</h1>
        </div>
          <div className='P1'>
            <p> A community built around the idea of working and learning together.</p>
          </div>
          <div className="IntrestButton">

              <a href="https://forms.office.com/r/mMFD5aub0n"> 
                <button className='Button' >Join Now</button>
              </a>

          </div>
      
      <div className="Body">
      <div className='Information'>
        <div className='Mission_Statment'>
        <h2>Mission Statment:</h2>
        <p> Our Mission statement is to provide a safe space in order to
          nurture the passion of coding. While teaching to work in groups and in enviorments 
          like the current job market.</p>
        </div>
        <div className='Goals'>
          <h2> Goals</h2>
          <ul>
            <li>To teach the thought process of a programmer</li>
            <li>For students to develope a passion and habit for programing</li>
            <li>To allow more advance students to compete</li>
          </ul>
        </div>
        <div className='Activities'>
          <h2>Activities:</h2>
          <p>Activities to reach the goals set</p>
          <ul>
            <li>Meetings every week on thursday</li>
            <li>Allowing students to compete</li>
            <li>Pushing student to work on a protfolio</li>
            <li>increase chances of a future hire in this work space.</li>
          </ul>

        </div>
        <div className='Constitution'>
          <h2>Constitution:</h2>
          <div>
          <a href="/Constitution.pdf" target='_blank'> <button className='ConsButton'>This is the Constitution.</button></a>
        </div>
        <div className='Footer'>
          <footer>
            <p>Social Media soon to come!!</p>
          </footer>
        </div>
        </div>
      </div>
      </div>


    
    </div>
  );
}

export default App;
