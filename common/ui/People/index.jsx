import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import connect from 'react-redux/lib/components/connect';
import bindActionCreators from 'redux/lib/bindActionCreators';
import actions from './actions';
import * as API from './api';
import styles from './styles.css';

const endpoint = `https://api.github.com/users`;

export class People extends Component {
  static fetchData() {
    return actions.listPeople(API.searchPeople(endpoint));
  }

  componentDidMount() {
    this.props.actions.listPeople(API.searchPeople(endpoint));
  }

  render() {
    return <ul className={styles.people}>
      {this.renderPeopleList(this.props.people)}
    </ul>;
  }

  renderPeopleList(people) {
    return people.map(person => <li key={person.id}>
      <Link to={`/people/${person.id}`}>{person.login}</Link>
    </li>);
  }
}

export default connect(
  state => ({people: state.people}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(People);
