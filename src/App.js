import _ from 'lodash';
import React, { Component } from 'react';
import Structure_View from './components/Structure_View';

import { Search, Grid, Header } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {

      isLoading: false,
      value: '',
      g: '',
      results: [],
      options: [
        {

          "grammar_item": "Past Continous / Czas przeszły niedokonany"


        },
        {

          "grammar_item": "Past Simple / Czas przeszły dokonany"


        },
        {

          "grammar_item": "Present Perfect / Czas Perfekt"


        },

      ]
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.resultRenderer = this.resultRenderer.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      const re = new RegExp(this.state.value, 'i');
      const isMatch = result => re.test(result.grammar_item);



      this.setState({
        isLoading: false,
        results: _.filter(this.state.options, isMatch),
      });
    }, 500)
  }

  resultRenderer({ grammar_item }) {
    return <div >{grammar_item}</div>
  }

  handleSelect(e, results) {

    this.setState({


      g: results.result.grammar_item

    });

    //alert(JSON.stringify(results));

  }

  render() {
    const { isLoading, value, results, g } = this.state;

    return (
      <div>

        <p>
          Wyszukiwanie konstrukcji gramatycznych
        </p>

        <br />

        <Grid>
          <Grid.Column width={4}>
            <Search
              loading={isLoading}
              resultRenderer={this.resultRenderer}
              onSearchChange={this.handleSearchChange}
              onResultSelect={this.handleSelect}
              results={results}
              value={value}
            />
          </Grid.Column>

          <Grid.Column width={8} textAlign='center'>

            <div>
              <Structure_View Welcome name={g} />

            </div>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
