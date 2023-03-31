import Card from '../card/card';
import { Monster } from '../../App';
import './card-list.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList: React.FC<CardListProps> = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
