import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';


class ChacarterList extends Component {
    render() {
        console.log('this.props',this.props);

        return (
            <div>
                <h4>Chacarters</h4>
                <ul className="list-group">
                    { 
                        this.props.characters.map(character => {
                            return (
                                <li key={character.id} className="list-group-item">
                                <div className="list-item">{character.name}</div>
                                <div className="list-item right-button"
                                onClick={() => this.props.addCharacterById(character.id)}
                                >
                                    +
                                </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCharacterById }, dispatch)
}

function mapStateToProps(state) {
    console.log('state inside mapStateToProps => ',state);
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChacarterList);