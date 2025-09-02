import React, { useState } from 'react'
import {leaderboardData}   from '../utils/leaderBoardData';


function filterCompetitions(competitions, filter){
    if(filter === "all-time") return competitions;
    return competitions.filter((comp)=> comp.filter === filter );
}

function calculateScore(data, filter){

    return data.map((student)=>{
        const filteredComps = filterCompetitions(student.competitions, filter)
        const totalScore = filteredComps.reduce((acc, comp) => acc + comp.score , 0 )
        return {...student, totalScore };

    })
}

function sortByRank(students){
    return students.sort( (a,b)=> b.totalScore - a.totalScore);
}

function assignRanks(students){
    let rank = 1;
    return students.map((student, index)=>{
        if(index > 0 && student.totalScore < students[index-1].totalScore ){
            rank = index + 1;
        }

        return {...student, rank};
    })
}

function getLeaderboard(data, filter){
    
    {/** here we have three steps -  
        1. calculate score 
            1.1 filter on behalf of filter* and then calcualte
        2. sort those students as per there score
        3. assign them rank
    */}

    const scored = calculateScore(data, filter);
    const sorted = sortByRank(scored);
    return assignRanks(sorted);

}

const LeaderBoard = () => {
    
    const [filter, setFilter] = useState('weekly');

    const leaderboard = getLeaderboard(leaderboardData, filter)
    console.log( " the leaderboard is here guys : " ,leaderboard )

    return (
      <div className=" border-2 w-[400px]">

        <button
          onClick={() => setFilter("weekly")}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition
    ${filter === "weekly" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        >
          Weekly
        </button>
        <button
          onClick={() => setFilter("monthly")}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition
    ${filter === "monthly" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setFilter("all-time")}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition
    ${filter === "all-time" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        >
          All-Time
        </button>

        {/* body: scrollable list */}
        <div className="overflow-auto h-[420px]">
          <ul className="space-y-2">
            {(!leaderboard ||  leaderboard.length === 0) && (
              <li className="text-sm text-slate-500">
                No results for this filter.
              </li>
            )}

            {leaderboard?.map((s) => (
              <li
                key={s.id || s.studentId}
                className="flex items-center justify-between bg-slate-50 rounded-lg p-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-semibold">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-xs text-slate-500">
                      {s.competitions.length} comps
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold">{s.totalScore}</div>
                  <div className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    #{s.rank}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* footer: small legend */}
        <div className="mt-3 text-xs text-slate-500">
          Showing results for:{" "}
          <span className="font-medium text-slate-700">{filter}</span>
        </div>
      </div>
    );
        
    
}

export default LeaderBoard