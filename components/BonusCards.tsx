import Card from "./Card";

function BonusCards({ bonuses }: any) {
  return (
    
    <div className="flex flex-col w-full space-y-4 py-12">
      {bonuses.map((bonus: any, index: number) => {
        return (
          <Card
            key={index}
            image={bonus.image}
            title={bonus.title}
            plainUrl={bonus.plainUrl}
            code={bonus.code}
            reward={bonus.reward}
            link={bonus.link}
          />
        );
      })}
    </div>
  );
}

export default BonusCards;
