const API_URL = "http://127.0.0.1:3000/api/llm_api";

const apiLlm = () => {
  axios({
    method: "get",
    url: API_URL,
  });
};
