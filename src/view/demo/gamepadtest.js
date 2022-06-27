import React from 'react';
import Layout from '../../components/layout';

import useGamepads from 'awesome-react-gamepads';

// interface IGamepads {
//   [key: number]: Gamepad;
// }

// const Controller = () => {
//   const [gamepad, setGamepad] = useState<Gamepad>({});
//   const [gamepads, setGamepads] = useState<IGamepads>(null);
//
//   useGamepads({
//     // onConnect: (gamepad) => console.log('Gamepad Connected: ', gamepad),
//     onUpdate: (gamepad) => setGamepads(gamepad),
//     onGamepadButtonUp: (button) => onGamepadButtonUp(button),
//     onKonamiSuccess: () => onKonamiSuccess(),
//   });
//
//   return (
//     <Layout>
//       <div>GamePadTest</div>
//     </Layout>
//   );
// };
//
// export default Controller

const TopPicks = () => {
  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Top picks</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut deserunt expedita, hic id, ipsum itaque iusto laborum maxime nam neque praesentium, quaerat quia repudiandae sint tempora tenetur totam!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam aut deserunt expedita, hic id, ipsum itaque iusto laborum maxime nam neque praesentium, quaerat quia repudiandae sint tempora tenetur totam!</p>
    </Layout>
  )
}

export default TopPicks
