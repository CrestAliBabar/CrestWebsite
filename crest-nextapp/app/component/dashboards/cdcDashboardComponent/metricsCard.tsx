import { Tooltip, TooltipContent, TooltipTrigger }  from "./tooltip";
import { ArrowUpIcon, ArrowDownIcon, InfoIcon } from "lucide-react"

interface MetricsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    timeframe: string
  }
  trend?: {
    data: number[]
    color: string
  }
  info?: string
}

export function MetricsCard({ title, value, change, trend, info }: MetricsCardProps) {
  const isPositive = change?.value && change.value > 0

  return (
    <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          {info && (
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="w-4 h-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>{info}</TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-[#2b424e]">{value}</div>
        {change && (
          <div className={`flex items-center text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
            {Math.abs(change.value)}%<span className="text-gray-400 ml-1">{change.timeframe}</span>
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-4 flex items-end gap-1 h-8">
          {trend.data.map((item, index) => (
            <div
              key={index}
              className="w-1 rounded-full transition-all hover:opacity-80"
              style={{
                height: `${item}%`,
                backgroundColor: trend.color,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

