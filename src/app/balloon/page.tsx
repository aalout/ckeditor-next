import dynamic from 'next/dynamic';

const BalloonEditorExample = dynamic( () => import( '../../components/BalloonEditor/BalloonEditor' ), { ssr: false } );

export default function Balloon() {
  return (
    <div>
     <BalloonEditorExample/>
    </div>
  );
}
