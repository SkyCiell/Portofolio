import React, { useMemo } from 'react';
import { Calendar } from 'lucide-react';

export default function ActivityGraph() {
  // Generate neutral 52-week contribution matrix pattern
  const weeks = useMemo(() => {
    const totalWeeks = 52;
    const daysPerWeek = 7;
    const result = [];

    // Realistic developer activity pattern (higher density on weekdays)
    for (let w = 0; w < totalWeeks; w++) {
      const weekDays = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // Generate activity level: 0 (none), 1 (low), 2 (mid), 3 (high), 4 (apex)
        const isWeekend = d === 0 || d === 6;
        let level = 0;

        const rand = (w * 7 + d * 13) % 100;
        if (rand > 85) level = 4;
        else if (rand > 60) level = d % 2 === 0 ? 3 : 2;
        else if (rand > 35) level = isWeekend ? 0 : 1;
        else if (rand > 15) level = isWeekend ? 1 : 2;

        weekDays.push(level);
      }
      result.push(weekDays);
    }
    return result;
  }, []);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429]';
      case 2:
        return 'bg-[#006d32]';
      case 3:
        return 'bg-[#26a641]';
      case 4:
        return 'bg-[#39d353]';
      default:
        return 'bg-[#161b22] border border-[#30363d]/40';
    }
  };

  return (
    <div className="gh-card p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#8b949e] border-b border-[#30363d] pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#58a6ff]" />
          <span className="font-semibold text-[#f0f6fc]">Developer Activity Visualization</span>
        </div>
        <span className="text-[11px] text-[#8b949e]">Past 12 months</span>
      </div>

      {/* Grid Container */}
      <div className="overflow-x-auto pb-2 scrollbar-none">
        <div className="min-w-[650px] space-y-2">
          {/* Months Header */}
          <div className="grid grid-cols-12 text-[10px] font-mono text-[#8b949e] pl-6">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Matrix Squares */}
          <div className="flex gap-1">
            <div className="flex flex-col justify-between text-[9px] font-mono text-[#8b949e] pr-2">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className="flex gap-1 flex-1">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(level)} transition-transform hover:scale-125`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend Footer */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8b949e] pt-1">
        <span>Development activity distribution</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-[#30363d]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
