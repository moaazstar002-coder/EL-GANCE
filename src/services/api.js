const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(data?.message || 'API request failed')
  }

  return data
}

export const api = {
  getProducts: (params = {}) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, value]) => value !== undefined && value !== ''),
    ).toString()

    return request(`/products${query ? `?${query}` : ''}`)
  },
  getFeaturedProducts: () => request('/products/featured'),
  getProductById: (id) => request(`/products/${id}`),
  getCategories: () => request('/categories'),
  register: (payload) => request('/users/register', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) => request('/users/login', { method: 'POST', body: JSON.stringify(payload) }),
  createOrder: (payload, token) =>
    request('/orders', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    }),
  getUserOrders: (token) => request('/orders/my-orders', { headers: { Authorization: `Bearer ${token}` } }),
}
