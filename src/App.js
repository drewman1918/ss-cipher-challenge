import React, { Component, Fragment } from 'react';
import Input from './components/Input'
import { handleInput } from './utils/utils'
import { encrypt, decrypt } from './utils/encryption'
import encryptedTxt from './txtFiles/encrypted'
import Header from './components/Header'
import './App.css';

class App extends Component {
  state = {
    decrypted: '',
    encrypted: encryptedTxt
  }
  
  render() {
    return (
      <Fragment>
        <Header/>

        <div className='main-content'>
          <Input
            header='encrypted'
            value={this.state.encrypted}
            changeFn={(e) => handleInput(e, 'encrypted', this)}
            buttonText='Decrypt'
            buttonFn={() => decrypt(this)}
          ></Input>

          <Input
            header='decrypted'
            value={this.state.decrypted}
            changeFn={(e) => handleInput(e, 'decrypted', this)}
            buttonText='Encrypt'
            buttonFn={() => encrypt(this)}
          ></Input>
        </div>
      </Fragment>

    );
  }
}

export default App;
