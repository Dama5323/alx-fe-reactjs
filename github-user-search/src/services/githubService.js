import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  }
});

/**
 * Fetches GitHub user data by username
 * @param {string} username - GitHub username to search for
 * @returns {Promise} Promise with user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
};

/**
 * Fetches GitHub users with advanced search
 * @param {Object} params - Search parameters
 * @param {string} params.query - Search query
 * @param {string} params.location - Location filter
 * @param {number} params.repos - Minimum repositories
 * @param {number} params.page - Page number
 * @returns {Promise} Promise with search results
 */
export const searchUsers = async ({ query, location, repos, page = 1 }) => {
  try {
    let searchQuery = query || '';
    
    if (location) {
      searchQuery += ` location:${location}`;
    }
    
    if (repos) {
      searchQuery += ` repos:>=${repos}`;
    }
    
    const params = {
      q: searchQuery.trim(),
      page,
      per_page: 10
    };
    
    const response = await githubAPI.get('/search/users', { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to search users');
  }
};