function ProbabilityTable({ probabilityTable }) {
  return (
    <div className="border border-slate-400 bg-white p-4">
      <h2 className="mb-3 text-xl font-bold">Probabilities</h2>
      <div className="space-y-2 text-sm">
        {probabilityTable.map((item) => (
          <div key={item.outcome} className="flex justify-between border-b border-slate-200 pb-1">
            <span>{item.label}</span>
            <span>{(item.probability * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProbabilityTable
