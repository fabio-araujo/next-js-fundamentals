import Link from 'next/link';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexWrap: 'wrap'
    }}>
        <Nav link='/stylish' text='Stylish'></Nav>
        <Nav link='/example'  text='Example' color='crimson'></Nav>
        <Nav link='/jsx'  text='JSX' color='#9400d3'></Nav>      
    </div>
  );
}
