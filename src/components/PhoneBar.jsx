const phones = [
  '0968.433.499', '0938.855.352', '0938.855.452', '0985.346.633',
  '0938.550.052', '0938.550.020', '0899.467.466', '0899.468.466',
  '0899.469.466', '0899.477.466', '0938.550.575', '0931.899.575',
  '0931.888.575', '0899.450.455', '0899.451.455', '0899.452.455',
  '0378.907.295', '0388.867.740', '0932.625.525', '0968.433.499',
]

export default function PhoneBar() {
  return (
    <div className="bg-white border-t border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-teal-700 font-bold text-xs mb-1">TƯ VẤN HỖ TRỢ (24/7)</p>
        <p className="text-gray-700 text-xs leading-relaxed">
          {phones.map((p, i) => (
            <span key={i}>
              <a href={`tel:${p.replace(/\./g, '')}`} className="hover:text-red-600 transition-colors">{p}</a>
              {i < phones.length - 1 && <span className="text-gray-400"> | </span>}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
