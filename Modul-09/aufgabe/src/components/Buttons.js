function Button({ text, aUser }) {
  return <button onClick={() => aUser(text)}>{text}</button>;
}

export default Button;
