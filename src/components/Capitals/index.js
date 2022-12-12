import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  onCapitalChange = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state
    const countryNaam = countryAndCapitalsList.filter(
      each => each.id === capitalId,
    )
    const countryName = countryNaam[0].country

    return (
      <div className="main-container">
        <div className="card">
          <h1 className="main-heading">Countries And Capitals</h1>
          <form action="#">
            <select
              className="select-element"
              name="capitals"
              id="capitals"
              onChange={this.onCapitalChange}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option value={eachCapital.id} key={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="label" for="capitals">
              is capital of which country?
            </label>
          </form>
          <h1 className="country-name">{countryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
