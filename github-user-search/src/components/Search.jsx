import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';
import UserCard from './UserCard';

const Search = () => {
  const [searchType, setSearchType] = useState('basic');
  const [username, setUsername] = useState('');
  const [searchParams, setSearchParams] = useState({
    query: '',
    location: '',
    repos: '',
  });
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError('');
    setUser(null);
    setUsers([]);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch user');
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    if (!searchParams.query.trim()) {
      setError('Please enter a search query');
      return;
    }

    setLoading(true);
    setError('');
    setUser(null);
    setPage(1);

    try {
      const data = await searchUsers({ ...searchParams, page: 1 });
      setUsers(data.items || []);
      setHasMore(data.total_count > (data.items?.length || 0));
    } catch (err) {
      setError(err.message || 'Failed to search users');
    } finally {
      setLoading(false);
    }
  };

  const loadMoreUsers = async () => {
    const nextPage = page + 1;
    setLoading(true);
    
    try {
      const data = await searchUsers({ ...searchParams, page: nextPage });
      setUsers(prev => [...prev, ...(data.items || [])]);
      setPage(nextPage);
      setHasMore(data.total_count > nextPage * 10);
    } catch (err) {
      setError('Failed to load more users');
    } finally {
      setLoading(false);
    }
  };

  const handleParamChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">GitHub User Search</h1>
        <p className="text-gray-600">Search for GitHub users by username or use advanced filters</p>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setSearchType('basic')}
            className={`px-4 py-2 rounded-md font-medium ${
              searchType === 'basic'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Basic Search
          </button>
          <button
            onClick={() => setSearchType('advanced')}
            className={`px-4 py-2 rounded-md font-medium ${
              searchType === 'advanced'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Advanced Search
          </button>
        </div>

        {searchType === 'basic' ? (
          <form onSubmit={handleBasicSearch} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter GitHub username"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleAdvancedSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search Query
                </label>
                <input
                  type="text"
                  name="query"
                  value={searchParams.query}
                  onChange={handleParamChange}
                  placeholder="e.g., john language:javascript"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={searchParams.location}
                  onChange={handleParamChange}
                  placeholder="e.g., San Francisco"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min Repositories
                </label>
                <input
                  type="number"
                  name="repos"
                  value={searchParams.repos}
                  onChange={handleParamChange}
                  placeholder="e.g., 10"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {loading ? 'Searching...' : 'Advanced Search'}
              </button>
              <a
                href="https://docs.github.com/en/search-github/searching-on-github/searching-users"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Learn about search syntax →
              </a>
            </div>
          </form>
        )}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {loading && !users.length && !user && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      )}

      <div className="space-y-6">
        {user && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
            <UserCard user={user} />
          </div>
        )}

        {users.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Search Results ({users.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMoreUsers}
                  disabled={loading}
                  className="px-6 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </div>
        )}

        {!loading && !error && !user && users.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-600">Enter a username or use advanced search to find GitHub users</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;