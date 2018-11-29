import React, { Component } from 'react';
import Container from '../../components/Container';
import Footer from '../../components/Footer';


const baseImgPath = 'src/assets/icones-activities';

const Activities = [
  {
    img: `${baseImgPath}/cafe.png`,
    text: 'Prendre un café'
  },
  {
    img: `${baseImgPath}/air.png`,
    text: 'Prendre l\'air'
  },
  {
    img: `${baseImgPath}/dej.png`,
    text: 'Pause déjeuner'
  },
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
    const { handleNext, handlePrev } = this.props;
    return (
      <div className='SelectActivities__container'>
        <Container title='Tu veux faire quoi?'>
          <div className='Activities__container'>
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
                    <p className='Activity__card__text'>{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
        <Footer chevronLeft chevronRight handleNext={handleNext} handlePrev={handlePrev} />
      </div>
    );
  }
}

export default SelectActivity;
