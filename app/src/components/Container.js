
import React, { Component } from 'react';
import axios from 'axios';

// Components
import Flowers from './Flowers';
import FavFlowers from './Fav';


class Container extends Component {
  constructor() {
    super()
    this.state = {
      flowers: [],
      favFlowers: [],
      flower: '',
      text: '',
      id: ''
    }
    this.addToFavFlowers = this.addToFavFlowers.bind(this)
    this.updateText = this.updateText.bind(this)
  }
  componentDidMount() {
    axios.get('/api/flowers').then(res => {
      // console.log("get res--->", res.data)
      this.setState({
        flowers: res.data
      })
    });
    axios.get('/api/favFlowers').then(res => {
      // console.log("get favFlowers res--->", res.data)
      this.setState({
        favFlowers: res.data
      })
    });
  }
  addToFavFlowers(id) {
    axios.post('/api/favFlowers', { id: id }).then(res => {
      this.setState({
        favFlowers: res.data
      })
      // console.log("favFlowers res--->", favFlowers)
    })
  }

  updateText(text, id) {
    axios.put(`/api/favFlowers/${id}`, { text: text }).then(res => {
      // console.log("put res--->", res.data)
      this.setState({
        favFlowers: res.data
      })
      // console.log(text, 'text setState')
    })
  }

  removeFromFavFlower = () => {
    axios.delete('/api/favFlowers/:id').then(res => {
      this.setState({
        favFlowers: res.data
      })
    })
  }

  handleChange = (e) => {
    const { value } = e.target
    console.log(value, 'eeeee')

    this.setState({
      text: value
    })
    // console.log('text in handleChange *****', this.state.text)
  }

  render() {
    let newFlower = this.state.flowers.map((flower, i) => {
      const { title, text, img, id } = flower;
      return (
        // in Component imports
        <Flowers title={title} text={text} img={img} id={id} addToFavFlowers={this.addToFavFlowers} /> // Refactored the code below to Flowers

      )
    });

    let newFavflower = this.state.favFlowers.map((flower, i) => {
      const { title, img, id, text } = flower;
      const statetext = this.state.text;
      return (
        <FavFlowers statetext={statetext} title={title} text={text} img={img} id={id} updateText={this.updateText} removeFromFavFlower={this.removeFromFavFlower} handleChange={this.handleChange} />

      )
    });

    return (
      <div className="all" >
        <div className="left">
          {newFlower}
        </div>

        <div className="right">
          {newFavflower}
        </div>
      </div>
    )
  }
};

export default Container;