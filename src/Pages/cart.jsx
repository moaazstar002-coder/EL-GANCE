import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import {
  AnimatedButton,
  AnimatedCard,
  SectionHeader,
} from "../components/UI/button";
import { EmptyState } from "../components/UI/advanced";

// ✅ Centralized currency formatter
function formatCurrency(value) {
  // Guard against NaN, null, undefined
  const safeValue = Number(value) || 0
  
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(Math.max(0, safeValue))
}

function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    normalizePrice,
    clearCart,
    subtotal,
    totalItems,
  } = useCart()

  // ✅ Empty state
  if (!cart.length) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-6"
      >
        <Helmet>
          <title>Cart | ELÉGANCE</title>
          <meta
            name="description"
            content="Your curated selection is empty. Continue exploring the private edit."
          />
        </Helmet>
        <EmptyState
          title="Your selection is ready for the next edit."
          description="Add a few pieces from the collection to begin your private styling journey."
          action={
            <div className="flex flex-wrap justify-center gap-3">
              <AnimatedButton to="/shop" variant="primary">
                Browse the edit
              </AnimatedButton>
              <AnimatedButton to="/collection" variant="secondary">
                Explore collection
              </AnimatedButton>
            </div>
          }
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-8"
    >
      <Helmet>
        <title>Cart | ELÉGANCE</title>
        <meta
          name="description"
          content="Review your selected pieces and prepare your private purchase request."
        />
      </Helmet>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* ✅ Cart Items List */}
        <div className="space-y-5">
          <SectionHeader
            eyebrow="Cart"
            title={`Your edit holds ${totalItems} item${totalItems > 1 ? "s" : ""}.`}
            description="Each piece is saved locally for your current session and can be adjusted before you inquire."
          />

          <div className="space-y-4">
            {cart.map((item) => {
              // ✅ Normalize price for each item
              const normalizedPrice = normalizePrice(item.price)
              const itemTotal = normalizedPrice * item.quantity

              return (
                <AnimatedCard
                  key={item.id}
                  className="rounded-[1.6rem] border border-white/50 bg-white/70 p-5 shadow-[0_18px_50px_rgba(27,28,28,0.08)]"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    {/* ✅ Product Image */}
                    <div className="h-24 w-full overflow-hidden rounded-[1.2rem] border border-[#efeae8] bg-[#f8f6f5] md:w-24">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* ✅ Product Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <Link
                            to={`/shop/${item.slug || item.id}`}
                            className="font-display text-xl text-[#000000] transition hover:text-[#735c00]"
                          >
                            {item.title}
                          </Link>
                          <p className="mt-2 text-sm leading-7 text-[#4c4546]">
                            {item.description}
                          </p>
                        </div>
                        {/* ✅ Unit Price */}
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#735c00]">
                          {formatCurrency(normalizedPrice)}
                        </p>
                      </div>

                      {/* ✅ Quantity Controls & Remove Button */}
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        {/* Quantity Adjuster */}
                        <div className="flex items-center gap-2 rounded-full border border-[#e4e2e2] bg-[#f8f6f5] p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="rounded-full p-2 text-[#4c4546] transition hover:bg-white hover:text-[#000000]"
                            aria-label={`Decrease quantity of ${item.title}`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold text-[#1b1c1c]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full p-2 text-[#4c4546] transition hover:bg-white hover:text-[#000000]"
                            aria-label={`Increase quantity of ${item.title}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#735c00] transition hover:text-[#000000]"
                        >
                          <Trash2 size={16} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>

        {/* ✅ Order Summary Card */}
        <AnimatedCard className="rounded-[1.8rem] border border-white/50 bg-black/90 p-7 text-[#ffffff] shadow-[0_20px_70px_rgba(27,28,28,0.08)]">
          <p className="text-sm uppercase tracking-[0.3em] text-[#fed65b]">
            Order summary
          </p>

          {/* Summary Details */}
          <div className="mt-6 space-y-4 text-sm text-[#e2e2e2]">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              {/* ✅ FIXED: subtotal now properly calculated */}
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Private concierge</span>
              <span>Complimentary</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-base font-semibold text-[#ffffff]">
              <span>Estimated total</span>
              {/* ✅ Same as subtotal (no tax/shipping in this version) */}
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>

          {/* Info Text */}
          <p className="mt-6 text-sm leading-7 text-[#d7d1d1]">
            The private edit is prepared for appointment-based purchases. We
            will confirm availability once you submit your request.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButton variant="primary">Request this edit</AnimatedButton>
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffffff] transition duration-300 hover:border-[#fed65b] hover:text-[#fed65b]"
            >
              Clear cart
            </button>
          </div>

          {/* Continue Browsing Link */}
          <Link
            to="/shop"
            className="mt-6 inline-flex text-sm uppercase tracking-[0.2em] text-[#fed65b] transition hover:text-[#ffffff]"
          >
            Continue browsing
          </Link>
        </AnimatedCard>
      </section>
    </motion.div>
  )
}

export default CartPage