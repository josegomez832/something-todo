import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'
import Activity from './Activity'
import Todo from './Todo'
import ReactPlayer from 'react-player'
import NavBar from './Navbar'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    data:[]
  });
  const [video, setVideo] = useState({
    items:[]
  });
  const [todos, setTodo] = useState([]);
  
  const [error, setError] = useState('');

  useEffect(() =>{
    axios.get('http://www.boredapi.com/api/activity/')
      .then(response =>{
        setData(response.data);
        return axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=4&q=${response.data.activity}`)
      })
     .then(res =>{
        setVideo(res.data);
        //console.log(video);
     })
      .catch(err =>{
       setError(err.message);
      })
  },[count])
  const addTodo = (event) => {
    setTodo([...todos, data.activity])
  }
  //console.log(todos);
  //useEffect will re-run with count changes :)
  //to run once only, leave an emtpy []
  //test
  if(count === 0){
    return(
      <div className="wrapper">        
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1>Hi there, welcome to Find Something ToDo. Click the button below to generate an activity for you to start doing!</h1>
          <p><a className="btn btn-lg btn-success" href="#" role="button" onClick={() => setCount(count + 1)}>Find Something To Do</a></p>
        </div>
      </div>
    </div>
    )
  }else{
    
    return (
      <div className="wrapper">
        <NavBar />
        <div className="container">
          <div className="jumbotron">
           
              <Activity activity={data.activity} type={data.type} />
              
            
            <p>
              <a className="btn btn-lg btn-success mb-2" href="#" role="button" onClick={() => setCount(count + 1)}>Generate Something New</a>
              <a className="btn btn-lg btn-primary mb-2" href="#" role="button" onClick={addTodo}>Add as To Do</a>
            </p>
          </div>

          
            {todos.length > 0 && 
              <div className="row marketing">
                <div className="col-md-12">
                  <h3>Your Todo's</h3>
                </div>
                  {todos.map(todo => 
                    <Todo list={todo} />                       
                  )}              
              </div>
            }
            
              
          <div className="row marketing">
            <div className="col-md-12">
              <h3>YouTube Videos for Reference</h3>
            </div>

            {video.items.map(yt=>
                  <div class="col-md-6 col-sm-12 mt-5" key={yt.etag}>
                    <div className='player-wrapper'>
                        <ReactPlayer
                        url={'https://www.youtube.com/watch?v='+yt.id.videoId}
                        light={true}
                        playing={false}
                        className='react-player'
                          width='100%'
                          height='100%'
                        />
                        </div>
                    </div>
              )}

            
              
        </div>       
      </div>
    </div>
      );
  }  
}

export default App;