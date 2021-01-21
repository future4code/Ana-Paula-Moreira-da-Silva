import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import FotoPerfil from './img/ana.jpg';
import FotoLabenu from './img/Labenu.jpg';
import FotoWeb from './img/cachorro.jpg';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Ana Moreira'}
          fotoUsuario= {FotoPerfil}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />
        <Post
          nomeUsuario={'Labenu'}
          fotoUsuario={FotoLabenu}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
        <Post
          nomeUsuario={'Web'}
          fotoUsuario={FotoWeb}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        />
      </div>
    );
  }
}

export default App;
