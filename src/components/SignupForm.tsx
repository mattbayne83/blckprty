import { useState, type CSSProperties } from "react";

type Props = {
  inputStyle?: CSSProperties;
  buttonStyle?: CSSProperties;
  stampStyle?: CSSProperties;
  stampSubStyle?: CSSProperties;
};

export function SignupForm({ inputStyle, buttonStyle, stampStyle, stampSubStyle }: Props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="stamp-confirm" style={stampStyle}>
        You're on the list.
        <span className="stamp-confirm__sub" style={stampSubStyle}>see you fri · check your inbox</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email.includes("@")) return;
        setSubmitted(true);
      }}
    >
      <div className="signup">
        <input
          className="signup__input"
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <button className="signup__btn" type="submit" style={buttonStyle}>Drop me in</button>
      </div>
    </form>
  );
}
