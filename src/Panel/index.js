import React from 'react';
import './panel.css'

const Panel = props => {
  const gifArr = [
    'https://media3.giphy.com/media/8VrtCswiLDNnO/giphy.gif?cid=790b761124d2c816f9a3d05e91ed95be839909f3d9323076&rid=giphy.gif',
    'https://media1.giphy.com/media/3oEduKVQdG4c0JVPSo/giphy.gif?cid=790b761124d2c816f9a3d05e91ed95be839909f3d9323076&rid=giphy.gif',
    'https://media1.giphy.com/media/ue2MqCL9NeMRG/200.webp?cid=790b7611d0d2ba5f27571868e61ce2786ce81ed2677a2cde&rid=200.webp',
    'https://media3.giphy.com/media/3ohA2L3jm5zHuSBft6/200.webp?cid=790b76113eca5876bcccb8979b285f268bcb53ce0168dea9&rid=200.webp',
    'https://media1.giphy.com/media/7T2JzxmKjq6SUWTdOJ/giphy.gif?cid=790b7611c62d4ef9fb3dc533fa56962f59a2d5a947056809&rid=giphy.gif',
    'https://media3.giphy.com/media/1fkd6ZTBsxSosV4UTS/giphy.webp?cid=790b76112c39f573c6242d113e3b5367bd9e5139eb2775a3&rid=giphy.webp',
    'https://media3.giphy.com/media/wXozF0PUtuFQA/200.webp?cid=790b7611d33b687795278ea4ac71a057ef3320a108339a82&rid=200.webp',
    'https://media1.giphy.com/media/VvXg0yjJQgfEQ/200.webp?cid=790b7611828c0dfb5be70f9369639134c76a0a053cb33302&rid=200.webp',
    'https://media1.giphy.com/media/PoZhaUYaPZR8Q/200w.webp?cid=790b76116dc648808c91f8f15353c0d2c7d1bc4f2b3e291d&rid=200w.webp',
    'https://media0.giphy.com/media/P1KUwCOzLbHUc/giphy.webp?cid=790b7611000f26a042eefc4d4b4458d49af27a1e1ffc4231&rid=giphy.webp',
    'https://media2.giphy.com/media/vIgrQiEKBbK4o/giphy.gif?cid=790b761125cf5fe2158b8b541f9a8de05d1c593bd1fd0296&rid=giphy.gif'
  ];

  const randNum1 = Math.floor(Math.random() * gifArr.length);
  const randNum2 = Math.floor(Math.random() * gifArr.length);

  return (
  <div className='panel'>
    {props.displayForm ? null : <img src={gifArr[randNum1]} alt='victory gif' /> }
    {props.displayForm ? null : <img src={gifArr[randNum2]} alt='victory gif' /> }
    
  </div>
  )
};

export default Panel;
