import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import CodelitEmptyAvatar from '../../assets/codelit_empty_avatar.svg';

class TeamMember extends React.PureComponent {
  state = {
    isVisible: false,
    firstName: "",
    lastName: "",
    title: "",
    story: "",
    favoriteColor: "",
    photoUrl: ""
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string,
    isNew: PropTypes.bool,
    addNewMember: PropTypes.func
  };

  static defaultProps = {
    photoUrl: CodelitEmptyAvatar,
    story: null,
    favoriteColor: '#3466F2',
    isNew: false,
    addNewMember: () => {}
  };

  updateChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
          {
            this.props.isNew ? (
              <button className="button"  onClick={() => {if(this.props.isNew) {this.setState({isVisible: true})}}}>Join the team!</button>
            ) : (
              <></>
            )
          }
        </header>
        
        {
          this.props.isNew && this.state.isVisible ? (
            <div className="form-container">
              <input type="text" name='firstName' placeholder='Enter First Name(required)' onChange={this.updateChange}/>
              <input type="text" name='lastName' placeholder='Enter Last Name(required)' onChange={this.updateChange}/>
              <input type="text" name='title' placeholder='Enter Title(required)' onChange={this.updateChange}/>
              <textarea name="story" id="" cols="40" rows="5" placeholder='Enter story(required)' onChange={this.updateChange}></textarea>
              <input type="text" name='photoUrl' placeholder='Enter Photo Url' onChange={this.updateChange}/>
              <input type="text" name='favoriteColor' placeholder='Enter Favorite Color' onChange={this.updateChange}/>
              <button onClick={() => {this.props.addNewMember(this.state)}}>Join the team!</button>
            </div>
          ) : (
            <div className="body">{this.props.story}</div>
          )
        }
        

        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TeamMember;
