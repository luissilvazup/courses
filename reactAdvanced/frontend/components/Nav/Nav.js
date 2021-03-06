import Link from 'next/link';
import NavStyles from './NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>

  </NavStyles>
)

export default Nav;