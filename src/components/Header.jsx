import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="chef claude logo" />
      <p className="site-title">Chef AI</p>
    </header>
  );
}
