import axios from "axios";

export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
});