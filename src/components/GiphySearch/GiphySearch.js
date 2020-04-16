import React, { Component } from 'react';

class GiphySearch extends Component {
    state = {
        search: '',
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            search: event.target.value

        })
    }


    handleSubmit = (event) => {

        event.preventDefault();
        console.log(this.state.search);

/*         this.props.dispatch({ type: '', payload: this.state.search })
 */    }
    render() {
        return (
            <div>
                <header>Search for a Giphy</header>
                <input value={this.state.search}
                    onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>search</button>

            </div>
        )
    }
}

export default (GiphySearch);