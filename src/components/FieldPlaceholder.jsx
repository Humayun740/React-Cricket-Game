function FieldPlaceholder({ isBowling }) {
  return (
    <div className="border border-slate-400 bg-white p-4">
      <h2 className="mb-3 text-xl font-bold">Field</h2>
      <div className="relative h-80 overflow-hidden border border-slate-400 bg-green-600">
        <div className="absolute inset-x-0 top-0 h-12 bg-green-700" />
        <div className="absolute left-1/2 top-6 h-56 w-12 -translate-x-1/2 border border-amber-800 bg-amber-200" />

        <div className="absolute bottom-8 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-black bg-slate-900" />
        <div className="absolute bottom-22 left-1/2 h-16 w-2 -translate-x-1/2 bg-amber-900" />
        <div className="absolute bottom-24 left-[53%] h-3 w-20 -rotate-12 bg-amber-700" />

        <div className="absolute left-[42%] top-4 h-12 w-12 rounded-full border border-slate-700 bg-slate-300" />
        <div className="absolute left-[44%] top-14 h-20 w-4 bg-blue-800" />

        <div
          className="absolute h-4 w-4 rounded-full bg-red-700 transition-all duration-700 ease-linear"
          style={{
            left: isBowling ? '50%' : '46%',
            top: isBowling ? '72%' : '10%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <p className="absolute left-3 top-3 bg-white px-2 py-1 text-xs">
          {isBowling ? 'Ball is moving' : 'Ready for next ball'}
        </p>
      </div>
    </div>
  )
}

export default FieldPlaceholder
