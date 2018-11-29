import React, { Component } from 'react';
import NextButton from '../../components/NextButton';

const baseImgPath = 'src/assets/icones-hobbies';

const Persons = [
  {
    img: `${baseImgPath}/apple.svg`,
    text: 'voyager'
  },
  {
    img: `${baseImgPath}/carrot.svg`,
    text: 'lecture'
  },
  {
    img: `${baseImgPath}/strawberry.svg`,
    text: 'cuisine'
  },
  {
    img: `${baseImgPath}/pineapple.svg`,
    text: 'cinéma'
  },
  {
    img: `${baseImgPath}/meat.svg`,
    text: 'bricolage'
  },
  {
    img: `${baseImgPath}/fish.svg`,
    text: 'sport'
  }
];

class SelectPerson extends Component {
  state = {
    selectedPersons: []
  };

  handleSelectPerson = async hobbie => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedPersons.length === 0) {
        newState.selectedPersons.push(hobbie.text);
      } else {
        const itemIndex = newState.selectedPersons.findIndex(x => x === hobbie.text);

        if (itemIndex === -1) {
          newState.selectedPersons = [...newState.selectedPersons, hobbie.text];
        } else {
          newState.selectedPersons.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  render() {
    const { selectedPersons } = this.state;
    const { handleNext } = this.props;
    return (
      <div className='SelectPerson__container'>
        <h1 className='SelectPerson__title'>Centre d'interêts</h1>
        <div className='Person__container'>
          {Persons.map((hobbie, index) => {
            const { img, text } = hobbie;
            const isSelected = selectedPersons.includes(text);
            return (
              <div className='Person__card__container' key={index} onClick={() => this.handleSelectPerson(Person)}>
                <div className={`Person__card__box 
                  ${isSelected ? 'Person__card__box__active' : ''}`}>
                  <img className='Person__card__image' src={img} />
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className='Hobbies__chevron-right__container'>
          <NextButton onClick={handleNext} />
        </div>
      </div>
    );
  }
}

export default SelectPerson;
