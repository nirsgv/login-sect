import React, { Component } from 'react';
import './App.css';
import saga_logo from './assets/svg/sagaLogo.svg'
import exclamation from './assets/svg/exclamation-solid.svg'
import check from './assets/svg/check-solid.svg'
import arrow_solid from './assets/svg/angle-right-light.svg'
import wave_bkg from './assets/png/wave_bkg.png'
import Logo from './components/logo'
import SvgArrow from './components/svgArrow';
import AsidePop from './components/asidePop';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            display_message_presented: false,
            pop_up_txt_content: '',
            pop_up_icon_content: '',
            init_login_focused: false,
            login_focused: false,
            login_field: '',
            userId: 'Kat101',
            login_success: false,
            messages: {
                error_user_id: 'Please try again.',
                success_user_id: 'Successfully logged in.'
            }
        }
    };
    componentDidMount(){
       // this.loginInput.focus();
    }
    setPassInputField(val){
        console.log(val);
        this.setState({login_field: val});
    }
    validateInput(){
        console.log('validation');
        return this.state.userId === this.state.login_field ? this.login_success() : this.login_failure();
    }
    submitbyEnterKey(key){
        key === 'Enter' && this.validateInput();
    }
    login_success(){
        this.setState({login_success: true});
        this.setState({
            pop_up_txt_content: this.state.messages.success_user_id,
            pop_up_icon_content: check
        });
        this.displayMessage(this.state.messages.success_user_id);
    }
    login_failure(){
        this.setState({login_success: false});
        this.setState({
            pop_up_txt_content: this.state.messages.error_user_id,
            pop_up_icon_content: exclamation
        });
        this.displayMessage(this.state.messages.error_user_id);
    }
    displayMessage(string){
        //alert(string);
        this.displayPopup(true);
        setTimeout(() => {
            this.displayPopup(false);
        }, 4000);
    }
    displayPopup(bool){
        !this.display_message_presented && this.setState({ display_message_presented: bool });
    }
    setFocus(bool){
        console.log('focused');
        this.setState({login_focused: bool});
        this.state.init_login_focused===false && this.setState({init_login_focused: true});
    }

    render() {
        console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
            <Logo src={saga_logo} />



        </header>

          <section className="login_screen">
              <div className="login_input_wrp"
                   className={`login_input_wrp ${this.state.login_focused ? 'focused' : 'blurred'} ${this.state.init_login_focused && 'init_focused'}`}>
              <div className="bkg_only" style={{backgroundImage: `url(${wave_bkg})`}}></div>
                <div className="login_input">
                    <label htmlFor="user_id_input">Insert login</label>
                    <input ref={(input) => { this.loginInput = input; }}
                           onFocus={()=>this.setFocus(true)}
                           onBlur={()=>this.setFocus(false)}
                           type="text"
                           onChange={(e)=>this.setPassInputField( e.target.value)}
                           value={this.state.login_field}
                           className="user_id_input"
                           id="user_id_input"
                           onKeyPress={(event) => this.submitbyEnterKey(event.key)}
                    />
                    <button onClick={()=>this.validateInput()}
                            className="user_id_submit"
                    >

{/*
                        <img src={arrow_solid} alt="arrow_solid"/>
*/}
                        <div className="arrow_solid-svg-wrp">
                            <SvgArrow color={this.state.login_focused ? '#777' : '#aaa'}/>
                        </div>
                    </button>
                    <div className="input-border-bottom"></div>
                </div>
            </div>
              <AsidePop className={this.state.display_message_presented ? 'presented' : 'not-presented'}>
                  <section className="icon">
                      <img src={this.state.pop_up_icon_content} alt=""/>
                  </section>
                  <section className="txt">
                      <span className={this.state.display_message_presented ? 'animate-entrance' : 'not-presented'}>
                          {this.state.pop_up_txt_content}
                      </span>
                  </section>
              </AsidePop>
      </section>
      </div>
    );
  }
}

export default App;
