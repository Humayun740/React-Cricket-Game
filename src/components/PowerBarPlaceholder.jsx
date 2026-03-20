import { getPowerBarColorClass } from '../utils/gameUtils'

function PowerBarPlaceholder({ probabilityTable, sliderPosition }) {
  return (
    <div className="border border-slate-400 bg-white p-4">
      <h2 className="mb-3 text-xl font-bold">Power Bar</h2>
      <div className="relative overflow-hidden border border-slate-400">
        <div
          className="pointer-events-none absolute top-0 z-10 h-full w-1 bg-black"
          style={{ left: `calc(${sliderPosition * 100}% - 2px)` }}
        />
        <div className="flex h-10 w-full text-xs font-bold">
          {probabilityTable.map((item) => (
            <div
              key={item.outcome}
              style={{ width: `${item.probability * 100}%` }}
              className={`flex items-center justify-center border-r border-slate-500 ${getPowerBarColorClass(item.outcome)}`}
            >
              {item.outcome}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-700">
        Slider position: {(sliderPosition * 100).toFixed(1)}%
      </p>
    </div>
  )
}

export default PowerBarPlaceholder
