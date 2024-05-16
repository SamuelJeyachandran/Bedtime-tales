import ConfettiExplosion from 'react-confetti-explosion';

export default function Exploding({isExploding}) {
  
  return <>{isExploding && <ConfettiExplosion />}</>;
}