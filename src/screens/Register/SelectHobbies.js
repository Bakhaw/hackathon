import React, { Component } from 'react';
import Button from '../../components/Button';

const baseImgPath = 'src/assets/icones-hobbies';

const Hobbies = [
  {
    img: `${baseImgPath}/apple.svg`,
    text: 'Apple'
  },
  {
    img: `${baseImgPath}/carrot.svg`,
    text: 'Carrot'
  },
  {
    img: `${baseImgPath}/strawberry.svg`,
    text: 'Strawberry'
  },
  {
    img: `${baseImgPath}/pineapple.svg`,
    text: 'Pineapple'
  },
  {
    img: `${baseImgPath}/meat.svg`,
    text: 'Meat'
  },
  {
    img: `${baseImgPath}/fish.svg`,
    text: 'Fish'
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
        const itemIndex = newState.selectedHobbies.findIndex(
          x => x === hobbie.text
        );

        if (itemIndex === -1) {
          newState.selectedHobbies = [...newState.selectedHobbies, hobbie.text];
        } else {
          newState.selectedHobbies.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  checkItemActive = hobbie => {
    const { selectedHobbies } = this.state;

    this.state.selectedHobbies.map(item => {
      if (item.text === hobbie.text) {
        console.log('true');
        return true;
      } else {
        console.log('false');
        return false;
      }
    });
  };

  render() {
    const { selectedHobbies } = this.state;
    const { handleNext } = this.props;
    return (
      <div className='SelectHobbies__container'>
        <h3>Centre d'interêts</h3>
        <div className='Hobbies__container'>
          {Hobbies.map((hobbie, index) => {
            const { img, text } = hobbie;
            const isHobbieActive = selectedHobbies.includes(text);
            return (
              <div
                className={`Hobbie__card__container`}
                key={index}
                onClick={() => this.handleSelectHobbie(hobbie)}
              >
                <div
                  className={`Hobbie__card__box ${
                    isHobbieActive ? 'Hobbie__card__box__active' : ''
                  }`}
                >
                  <img className='Hobbie__card__image' src={img} />
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          className='SelectHobbies__submit__button'
          onClick={handleNext}
          text='Suivant'
        />
      </div>
    );
  }
}

export default SelectHobbies;
