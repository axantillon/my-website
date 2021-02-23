import axios from "axios"

export default {
    get() {
        return axios.get("https://github-contributions.now.sh/api/v1/andantillon")
    }
}