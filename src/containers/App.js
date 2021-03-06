import React, {Component} from 'react'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>  response.json())
        .then(users => this.setState({robots: users})

        );
        
    }
    onSearchChange = (event) => {
        this.setState({searchField:event.target.value})
    }
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );

    }
    
}
export default App;