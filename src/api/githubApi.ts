import axios from "axios";
import variables from "../config/variables";

const token = variables.github_token;

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: `Bearer ${ token }`
    }
});