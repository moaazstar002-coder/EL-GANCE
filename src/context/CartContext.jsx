import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()
const STORAGE_KEY = 'elegance_cart'

function normalizeCartItems(items) {
  if (!Array.isArray(items)) return []

  return items
    .filter(Boolean)
    .map((item) => ({
      ...item,
      quantity: Math.max(1, Number(item.quantity) || 1),
    }))
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window === 'undefined') return []

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved ? normalizeCartItems(JSON.parse(saved)) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (product, quantity = 1) => {
    const normalizedQuantity = Math.max(1, Number(quantity) || 1)

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + normalizedQuantity } : item
        )
      }

      return [...prev, { ...product, quantity: normalizedQuantity }]
    })
  }

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, amount) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const nextQuantity = Math.max(1, item.quantity + amount)
          return { ...item, quantity: nextQuantity }
        }
        return item
      })
    )
  }

  const clearCart = () => setCart([])

  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart])

  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => {
      const priceStr = String(item.price || '0').replace(/[^0-9.]/g, '')
      const priceNum = parseFloat(priceStr) || 0
      return acc + priceNum * item.quantity
    }, 0)
  }, [cart])

  const isInCart = (productId) => cart.some((item) => item.id === productId)
  const getItemQuantity = (productId) => cart.find((item) => item.id === productId)?.quantity ?? 0

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
