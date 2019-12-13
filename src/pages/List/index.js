import React, { Component } from 'react';
import { ProgressBar} from 'react-native-paper'
import { ScrollContainer, PaddedContainer } from '../../shared/theme/containers';
import ListFilters from './filters';
import { fetchFilters } from './listActions';
import { connect } from 'react-redux';
import { theme } from '../../shared/theme';

// import { Container } from './styles';

class ListPage extends Component {

  constructor(props) {
    super(props);
    props.fetchFilters(props.navigation.state.params.type);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(query) {
    console.log(query);
  }

  render() {

    const {
      loading,
      categories,
      ingredients,
      glass,
      navigation: {
        state: { params: { type }
        }
      }
    } = this.props;

    return (
      <ScrollContainer>
        {
          loading && <ProgressBar indeterminate color={theme.colors.primary} />
        }

        <PaddedContainer>

          <ListFilters
            type={type}
            categories={categories}
            ingredients={ingredients}
            glass={glass}
            onSubmit={this.handleSubmit}
          />

        </PaddedContainer>
      </ScrollContainer>
    );
  }
}

const mapStateToProps = state => {
  const { mainReducer, listReducer } = state;
  return {
    ...mainReducer,
    ...listReducer
  };
}

const mapDispatchToProps = {
  fetchFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
