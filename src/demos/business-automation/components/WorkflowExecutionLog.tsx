"use client";

import React from "react";
import { Terminal, CheckCircle2, Clock } from "lucide-react";
import { useAutomationDemo } from "../AutomationContext";

export const WorkflowExecutionLog: React.FC = () => {
  const { state } = useAutomationDemo();

  return (
    <div className="bg-slate-900 text-white rounded-xl shadow-sm p-5 space-y-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#BAF247]" />
          <h3 className="font-bold text-white text-sm">Automated Event Audit Log</h3>
        </div>
        <span className="text-[10px] text-slate-400">
          {state.auditLogs.length} events logged
        </span>
      </div>

      <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
        {state.auditLogs.map((log) => (
          <div
            key={log.id}
            className="p-2.5 bg-slate-800/70 border border-slate-700/80 rounded-lg space-y-1 text-[11px]"
          >
            <div className="flex items-center justify-between text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="text-[#BAF247] font-bold">[{log.orderId}]</span>
                <span className="text-white font-medium">STEP 0{log.stepNumber}: {log.stepTitle}</span>
              </div>
              <span className="text-[10px] text-slate-500">{log.timestamp}</span>
            </div>
            <p className="text-slate-300 font-sans leading-relaxed">{log.details}</p>
            <div className="flex justify-end text-[10px] text-slate-500">
              <span>Latency: {log.latencyMs}ms</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowExecutionLog;

