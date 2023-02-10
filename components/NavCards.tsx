import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Bonuses",
    route: "/bonuses",
  },
  {
    title: "Casino Reviews",
    route: "/casinoreviews",
  },
  {
    title: "Slot Reviews",
    route: "/",
  },
  {
    title: "Giveaways",
    route: "/giveaways",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard",
  },
  {
    title: "Stake Rewards",
    route: "/stake",
  },
];

function NavCard(props: any) {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-24 px-4 xl:px-0 hover:cursor-pointer">
      {cards.map((card) => (
        <Link href={card.route} key={card.title}>
          <div
            className="bg-set py-32 flex justify-center items-center rounded-md"
            style={{
              boxShadow: "inset 0px 1px 0px rgba(72, 72, 179, 0.44)",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <div className="font-specify font-bold  xl:text-3xl  lg:text-2xl  md:text-xl sm:text-2xl">
              {card.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavCard;
