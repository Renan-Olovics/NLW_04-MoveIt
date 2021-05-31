import axios from 'axios'

export const LeaderboardApi = axios.create({
  baseURL: 'http://localhost:3030/',
})
