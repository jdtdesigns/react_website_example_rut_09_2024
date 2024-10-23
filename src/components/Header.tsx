import Nav from './Nav';

function Header(propsObj: { color: string; userName: string; count: number}) {
  console.log(propsObj);

  return (
    <header>
      <h3 style={{backgroundColor: propsObj.color}}>{propsObj.userName}</h3>

      <p>Header Count: {propsObj.count}</p>

      <Nav counterNum={propsObj.count} />
    </header>
  )
}

export default Header;