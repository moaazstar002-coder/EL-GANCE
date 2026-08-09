import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Toast } from '../components/ui/feedback'

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
  const [toast, setToast] = useState({ open: false, message: '' })

  const [cart, setCart] = useState(() => {
    if (typeof window === 'undefined') return []

    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      return saved ? normalizeCartItems(JSON.parse(saved)) : []
    } catch {
      return []
    }
  })

  // ✅ Persist cart to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    }
  }, [cart])

  const showToast = (message) => {
    setToast({ open: true, message })

    if (typeof window !== 'undefined') {
      window.clearTimeout(showToast.hideTimer)
      showToast.hideTimer = window.setTimeout(() => {
        setToast({ open: false, message: '' })
      }, 2600)
    }
  }

  // ✅ Add product to cart (merge if exists)
  const addToCart = (product, quantity = 1, selected = {}) => {
    const normalizedQuantity = Math.max(1, Number(quantity) || 1)

    setCart((prev) => {
      const matchingSelection = {
        size: selected.size || product.selectedSize || product.size || '',
        color: selected.color || product.selectedColor || product.color || '',
      }

      const selectionKey = `${matchingSelection.size || 'default'}::${matchingSelection.color || 'default'}`

      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          `${item.selectedSize || ''}::${item.selectedColor || ''}` === selectionKey,
      )

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && `${item.selectedSize || ''}::${item.selectedColor || ''}` === selectionKey
            ? { ...item, quantity: item.quantity + normalizedQuantity }
            : item,
        )
      }

      return [
        ...prev,
        {
          ...product,
          quantity: normalizedQuantity,
          selectedSize: matchingSelection.size,
          selectedColor: matchingSelection.color,
          cartSelection: selectionKey,
        },
      ]
    })

    const label = selected.size || product.selectedSize || selected.color || product.selectedColor
    showToast(`${product.title || product.name} added to bag${label ? ` — ${label}` : ''}`)
  }

  // ✅ Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  // ✅ Update quantity by amount (increment/decrement)
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

  // ✅ Clear entire cart
  const clearCart = () => setCart([])

  // ✅ Price normalization: Handle string, null, undefined, invalid inputs
  const normalizePrice = (price) => {
    if (price === null || price === undefined || price === '') return 0
    if (typeof price === 'number') return Math.max(0, price)
    
    const cleanPrice = String(price).replace(/[^\d.]/g, '')
    const numPrice = parseFloat(cleanPrice)
    
    return isNaN(numPrice) ? 0 : Math.max(0, numPrice)
  }

  // ✅ Total quantity of all items
  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart])

  // ✅ FIXED: Calculate subtotal from cart items
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => {
      const normalizedPrice = normalizePrice(item.price)
      const itemTotal = normalizedPrice * (item.quantity || 1)
      return sum + itemTotal
    }, 0)
  }, [cart])

  // ✅ Check if product is in cart
  const isInCart = (productId) => cart.some((item) => item.id === productId)

  // ✅ Get quantity of specific product
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
        normalizePrice,
        subtotal, // ✅ NOW EXPORTED
        isInCart,
        getItemQuantity,
        showToast,
      }}
    >
      {children}
      <Toast open={toast.open} message={toast.message} />
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