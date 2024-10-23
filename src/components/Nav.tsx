function Nav(propsObj: {counterNum: number}) {
  return (
    <nav>
      <a href="#">Home {propsObj.counterNum}</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  )
}

export default Nav;