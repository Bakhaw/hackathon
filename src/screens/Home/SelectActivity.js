import React, { Component } from 'react';
import Button from '../../components/Button';

const baseImgPath = 'src/assets/icones-hobbies';

const Activities = [
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
  }
];

class SelectActivity extends Component {
  state = {
    selectedActivity: null
  };

  handleSelectActivity = activity => {
    this.setState({ selectedActivity: activity.text });
  };

  render() {
    const { selectedActivity } = this.state;
    const { handleNext } = this.props;
    return (
      <div className='SelectActivity__container'>
        <div className='Activity__container'>
          {Activities.map((activity, index) => {
            const { img, text } = activity;
            const isSelected = selectedActivity === activity.text;
            return (
              <div
                className={`Activity__card__container`}
                key={index}
                onClick={() => this.handleSelectActivity(activity)}
              >
                <div
                  className={`Activity__card__box ${
                    isSelected ? 'Activity__card__box__active' : ''
                  }`}
                >
                  <img className='Activity__card__image' src={img} />
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          className='SelectActivity__submit__button'
          onClick={handleNext}
          text='Suivant'
        />
      </div>
    );
  }
}

export default SelectActivity;
