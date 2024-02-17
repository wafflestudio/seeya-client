import { useState } from "react";
import { useUserQuery } from "../../services/repositories/user";
import styled from "@emotion/styled";
import { Page } from "../../components/common/Page";
import { FullButton } from "../../components/button/FullButton";
import FullInput from "../../components/input/FullInput";
import { Link } from "react-router-dom";

export default function Login() {
  const { me, login } = useUserQuery();
  const [input, setInput] = useState({ email: "", password: "" });

  return (
    <Main>
      <Title>로그인</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.email || !input.password) return;
          login.mutate(input);
        }}
      >
        <Inputs>
          <FullInput
            type="text"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            placeholder="이메일"
            icon="user"
          />
          <FullInput
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            placeholder="비밀번호"
            icon="key"
          />
        </Inputs>
        <ErrorMessage>{me.status}</ErrorMessage>
        <Buttons>
          <FullButton theme="black" type="submit">
            로그인
          </FullButton>
          <RegisterButton to="/register">회원가입</RegisterButton>
        </Buttons>
      </Form>
    </Main>
  );
}

const Main = styled(Page)`
  padding: 0 16px;
  padding-top: 20vh;
`;

const Title = styled.h1`
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-bottom: 47px;
`;
const Form = styled.form``;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
`;
const ErrorMessage = styled.div`
  width: 100%;
  height: 16px;
  font-size: 13px;
  font-weight: 300;
  text-align: right;
  color: #ff6262;
  font-size: 14px;
  margin-bottom: 12px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
const RegisterButton = styled(Link)`
  color: #969696;
  text-align: center;
  font-family: "Spoqa Han Sans Neo";
  font-size: 13px;
  font-weight: 400;
  text-decoration-line: underline;
`;
