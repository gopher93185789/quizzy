
interface PlayerScoreProps {
  PlayerName: string,
  PlayerScore: string
}

const PlayerScore = ({PlayerName, PlayerScore}:PlayerScoreProps) => {
  return <>
    <div className="w-full flex flex-row gap-30">
      <p className="text-white w-full text-5xl font-jersey text-center">{PlayerName}</p>
      <p className="text-white w-full text-5xl font-jersey text-center">{PlayerScore}</p>
    </div>
  </>
}

export default function Leaderboard() {
  return (
    <>
      <div className="w-full h-[calc(100vh-3rem)] bg-primary flex flex-col items-center justify-center">
        <div className="bw-1/2  h-fit">
          <p className="text-white text-6xl font-jersey text-center">Top scores</p>
          <div className="w-full mt-10 h-fit flex flex-col gap-10">
              <PlayerScore PlayerName="scott" PlayerScore="1372" />
              <PlayerScore PlayerName="wills" PlayerScore="1002" />
              <PlayerScore PlayerName="jack" PlayerScore="962" />
              <PlayerScore PlayerName="jayac" PlayerScore="843" />
              <PlayerScore PlayerName="457f" PlayerScore="657" />
          </div>
        </div>
      </div>
    </>
  );
}
