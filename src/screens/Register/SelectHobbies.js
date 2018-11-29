import React, { Component } from 'react';
import NextButton from '../../components/NextButton';

const baseImgPath = 'src/assets/icones-hobbies';

const Hobbies = [
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

class SelectHobbies extends Component {
  state = {
    selectedHobbies: []
  };

  handleSelectHobbie = async hobbie => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedHobbies.length === 0) {
        newState.selectedHobbies.push(hobbie.text);
      } else {
        const itemIndex = newState.selectedHobbies.findIndex(x => x === hobbie.text);

        if (itemIndex === -1) {
          newState.selectedHobbies = [...newState.selectedHobbies, hobbie.text];
        } else {
          newState.selectedHobbies.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  render() {
    const { selectedHobbies } = this.state;
    const { handleNext } = this.props;
    return (
      <div className='SelectHobbies__container'>
        <h1 className='SelectHobbies__title'>Centre d'interêts</h1>
        <div className='Hobbies__container'>
          {Hobbies.map((hobbie, index) => {
            const { img, text } = hobbie;
            const isHobbieActive = selectedHobbies.includes(text);
            return (
              <div className='Hobbie__card__container' key={index} onClick={() => this.handleSelectHobbie(hobbie)}>
                <div className={`Hobbie__card__box ${isHobbieActive ? 'Hobbie__card__box__active' : ''}`}>
                  <img className='Hobbie__card__image' src={img} />
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

export default SelectHobbies;
