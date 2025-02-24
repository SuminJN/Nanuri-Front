import axios from "axios";

export const getToken = async (hisnetToken) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_RESTAPI_HOST}/api/nanuri/auth/login`,
            { hisnetToken: hisnetToken } // 토큰을 요청의 본문에 담아 보냅니다.
        );
        const token = response.data.token;

        console.log("Hisnet Token : ", hisnetToken);
        console.log("토큰 받아오기 성공");

        return token; // 생성한 jwt 전달
    } catch (error) {
        console.log("토큰 받아오기 실패");
        throw error;
    }
};
