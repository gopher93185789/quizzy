
interface PlayerScoreProps {
  PlayerName: string,
  PlayerScore: string
}

const PlayerScore = ({PlayerName, PlayerScore}:PlayerScoreProps) => {
  return <>
    <div className="w-full flex flex-row gap-20">
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
          <p className="text-white text-6xl text-center">Top scores</p>
          <div className="w-full mt-10 h-fit flex flex-col gap-10">
              <PlayerScore PlayerName="SCOTT" PlayerScore="1372" />
              <PlayerScore PlayerName="SCOTT" PlayerScore="1372" />
              <PlayerScore PlayerName="SCOTT" PlayerScore="1372" />
              <PlayerScore PlayerName="SCOTT" PlayerScore="1372" />
              <PlayerScore PlayerName="SCOTT" PlayerScore="1372" />

          </div>
        </div>
      </div>
    </>
  );
}
