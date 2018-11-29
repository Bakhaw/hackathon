import React, { Component } from 'react';

import DoubleChevronRight from '../../assets/pictos-layout/double_fleche.png';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import NextButton from '../../components/NextButton';

const baseImgPath = 'src/assets/pictos-layout';

const Persons = [
  {
    img: `${baseImgPath}/homme.png`,
    text: 'John'
  },
  {
    img: `${baseImgPath}/femme.png`,
    text: 'Jane'
  },
  {
    img: `${baseImgPath}/femme.png`,
    text: 'Mary'
  },
  {
    img: `${baseImgPath}/homme.png`,
    text: 'Bob'
  },
  {
    img: `${baseImgPath}/femme.png`,
    text: 'Ruby'
  },
  {
    img: `${baseImgPath}/homme.png`,
    text: 'Franz'
  }
];

class SelectPerson extends Component {
  state = {
    selectedPersons: []
  };

  handleSelectPerson = async person => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedPersons.length === 0) {
        newState.selectedPersons.push(person.text);
      } else {
        const itemIndex = newState.selectedPersons.findIndex(x => x === person.text);

        if (itemIndex === -1) {
          newState.selectedPersons = [...newState.selectedPersons, person.text];
        } else {
          newState.selectedPersons.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  render() {
    const { selectedPersons } = this.state;
    const { handleNext, handlePrev } = this.props;
    {
      /* <h1 className='SelectHobbies__title'>Avec qui ?</h1> */
    }
    return (
      <Container title='Avec qui ?'>
        <div className='SelectHobbies__container'>
          <div className='SelectPersons__type'>
            <img className='Button__double-chevron' src={DoubleChevronRight} />
            <p className='SelectPersons__type__title'>JE CHOISIS</p>
          </div>
          <div className='Hobbies__container'>
            {Persons.map((person, index) => {
              const { img, text } = person;
              const isSelected = selectedPersons.includes(text);
              return (
                <div className='Hobbie__card__container' key={index} onClick={() => this.handleSelectPerson(person)}>
                  <div className='Hobbie__card__box'>
                    <img className={`Hobbie__card__image ${isSelected ? 'Hobbie__card__image__active' : ''}`} src={img} />
                    <p>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Footer chevronLeft chevronRight handleNext={handleNext} handlePrev={handlePrev} />
          {/* <div className='Hobbies__chevron-right__container'>
            <NextButton onClick={handleNext} />
          </div> */}
        </div>
      </Container>
    );
  }
}

export default SelectPerson;
