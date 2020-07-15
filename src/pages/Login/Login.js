import React, { useState, useContext } from "react";
import { WebSocketContext } from "../../websocket/WebSocket.context";
import * as userEvents from "../../constants/userEvents";
import Center from "../../components/Center/Center";

const Login = () => {
  const { dispatch } = useContext(WebSocketContext);

  const [formStep, setFormStep] = useState(1);

  const [form, setForm] = useState({ nickName: "", room_id: "" });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConnect = () => {
    setFormStep(2);
    dispatch({
      type: userEvents.CONNECT,
      payload: { name: form.nickName }
    });
  };

  return (
    <Center>
      <form onSubmit={e => handleSubmit(e)}>
        {formStep === 1 ? (
          <>
            <input
              type="text"
              name="nickName"
              placeholder="Choose your nickname"
              value={form.nickName}
              onChange={handleChange}
            />
            <button onClick={handleConnect}>Connect</button>
          </>
        ) : (
          <>
            <h1>Hello {form.nickName}</h1>
            <input
              type="text"
              name="room_id"
              placeholder="Enter room id"
              value={form.room_id}
              onChange={handleChange}
            />
            <button type="submit">Join room</button>
          </>
        )}
      </form>
    </Center>
  );
};

export default Login;
