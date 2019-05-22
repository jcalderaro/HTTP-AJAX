import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Route , Link} from 'react-router-dom';
import Friend from './Components/Friend';
import AddFriend from './Components/AddFriend';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends : [],
      avatars : [ 
                  {ben: 'https://dl.airtable.com/70zwa8ESkWwVpGH3zcS7_ben.jpg'},
                  {austen: 'https://dl.airtable.com/S1InFmIhQBypHBL0BICi_austen.jpg'},
                  {ryan: 'https://dl.airtable.com/SAWlsIdwSXiadMO15B5E_ryan.hamblin.jpg'},
                  {sean: 'https://media.licdn.com/dms/image/C4E03AQHRE37r5NHxQQ/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=ShcISrAVc6zYMDlzgEpO_MOqlzuEpzXVv2cQGbiSuuk'},
                  {michelle: 'https://media.licdn.com/dms/image/C5603AQFsSKGzn7EllA/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=HLdY6Js3bXCT7XNeFGC8WzM_xMUZK7MAahq6uLGg-60'},
                  {luis: 'https://dl.airtable.com/NNQSNgNDTfeeGuMGk9v4_luis.jpg'}
                ],
      name: null,
      age: null,
      email: null
    }
  }

  addFriend = (e) => {
    e.preventDefault();
      console.log('friend was added');
      
      axios
      .post('http://localhost:5000/friends',{
        name: e.target.friend.value,
        age: e.target.age.value,
        email: e.target.email.value
      })

      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data
        });

        this.props.history.push('/friend');
      })

      .catch( (err) => {
        console.log(err);
      })
  }

  deleteFriend = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      console.log(res);
      this.setState({
        friends : res.data
      })
    })

    .catch( err => {
      console.log(err);
    })

    this.props.history.push('/friend');
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/friends')
    
      .then( response => {
        this.setState({
          friends : response.data
        })
      })

  }

  render() {

    const path = this.props.history.location.pathname;
    return (
      <div className="App">

        <header className="App-header">Lambda Friends</header>

        { path === '/' ? <div></div> : <Link to='/'><button>Add Friend</button></Link> }

        <Route path='/' exact render={ props => <AddFriend {...props} addFriend={this.addFriend}/>} />

        {this.state.friends.map( friend => {

          return <Route path='/friend' 
            render={ props => <Friend {...props} 
              friends={this.state.friends}
              friend={friend} 
                id={friend.id}
                  avatars={this.state.avatars}
                    deleteFriend={this.deleteFriend}
          
            />} 
          />;
        } )}
      </div>
    );
  }
}

export default App;

/* Clear */