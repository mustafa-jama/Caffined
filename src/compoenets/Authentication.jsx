import { use } from 'react';
import { useState } from 'react';
export default function Authentication() {
  const [isRegistration, setIsRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function handelAuthencation() {}

  return (
    <>
      <h2 className='sign-up-text'>{isRegistration ? 'Sign Up' : 'Login'}</h2>
      <p>
        {isRegistration ? 'Create an account! ' : 'Login in to your account'}
      </p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder='Email'
      />
      <input
        valur={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder='*********'
        type='password'
      />
      <button onClick={handelAuthencation}>
        <p>Submit</p>
      </button>

      <hr />
      <div className='register-content'>
        <p>
          {isRegistration
            ? 'Already have an account'
            : "Don't have an account?"}
        </p>
        <button
          onClick={() => {
            setIsRegistration(!isRegistration);
          }}
        >
          <p>{isRegistration ? 'Login' : 'SignUp'}</p>
        </button>
      </div>
    </>
  );
}
