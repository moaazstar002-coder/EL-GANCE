export function InputField({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  helperText,
  textarea = false,
  className = '',
}) {
  const inputClassName =
    `mt-2 w-full rounded-[1rem] border border-[#e4e2e2] bg-[#f8f6f5] px-4 py-3 text-sm text-[#1b1c1c] outline-none transition focus:border-[#5c4a00] ${className}`.trim()

  return (
    <label className="block text-sm text-[#4c4546]">
      <span className="font-medium uppercase tracking-[0.2em] text-[#5c4a00]">{label}</span>
      {textarea ? (
        <textarea placeholder={placeholder} value={value} onChange={onChange} rows={4} className={inputClassName} />
      ) : (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={inputClassName} />
      )}
      {helperText ? <span className="mt-2 block text-xs leading-6 text-[#4c4546]">{helperText}</span> : null}
    </label>
  )
}
