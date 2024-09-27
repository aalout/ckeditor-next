import dynamic from 'next/dynamic';

const AdvancedExample = dynamic( () => import( '../../components/AdvancedEditor/AdvancedEditor' ), { ssr: false } );

export default function Advanced() {
  return (
    <div>
     <AdvancedExample/>
    </div>
  );
}
