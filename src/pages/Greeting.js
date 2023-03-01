import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { getGreetings } from '../redux/greetings/Greeting';

function Greeting() {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);
  return (
    <div>
        <h1>{greeting}</h1>
    </div>
  )
}

export default Greeting;