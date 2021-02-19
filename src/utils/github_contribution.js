import axios from "axios"

// Feature courtesy of sallar/github-contributions-chart API

export async function getContributionsMonthly(){
    const data = await axios.get("https://github-contributions.now.sh/api/v1/andantillon")
    return data
}