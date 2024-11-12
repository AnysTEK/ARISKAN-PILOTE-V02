"use client"

import React from "react"

export function RiskMatrix() {
  const impactLevels = ["Critique", "Élevé", "Moyen", "Faible", "Négligeable"]
  const probabilityLevels = ["Très probable", "Probable", "Possible", "Peu probable", "Rare"]

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        <div className="grid grid-cols-6 gap-1">
          <div className="col-span-1" key="empty-cell"></div>
          {probabilityLevels.map((level, index) => (
            <div key={`prob-header-${index}`} className="text-center text-sm font-medium p-2">
              {level}
            </div>
          ))}
          
          {impactLevels.map((impact, impactIndex) => (
            <React.Fragment key={`impact-row-${impactIndex}`}>
              <div className="text-right text-sm font-medium p-2">
                {impact}
              </div>
              {probabilityLevels.map((_, probIndex) => (
                <div
                  key={`cell-${impactIndex}-${probIndex}`}
                  className={`
                    aspect-square rounded-md border
                    ${impact === "Critique" && probIndex > 2 ? "bg-red-100 dark:bg-red-900" : ""}
                    ${impact === "Élevé" && probIndex > 1 ? "bg-orange-100 dark:bg-orange-900" : ""}
                    ${impact === "Moyen" && probIndex > 0 ? "bg-yellow-100 dark:bg-yellow-900" : ""}
                    ${impact === "Faible" ? "bg-green-100 dark:bg-green-900" : ""}
                    ${impact === "Négligeable" ? "bg-blue-100 dark:bg-blue-900" : ""}
                  `}
                ></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}