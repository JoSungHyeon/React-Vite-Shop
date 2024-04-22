import Header from "../components/Header";

const SignUp = () => {
    return (
        <>
            <Header />
            <h1>회원가입</h1>
            <h3>아이디</h3>
            <input type="text" />
            <h3>이메일 주소</h3>
            <input type="text" />
            <h3>비밀번호</h3>
            <input type="text" />
            <h3>비밀번호 재입력</h3>
            <input type="text" />
        </>
    )
};

export default SignUp;