import dynamic from 'next/dynamic';

const CustomEditor = dynamic( () => import( '../../components/DefaultEditor/TextEditor' ), { ssr: false } );

export default function Text() {
  return (
    <div>
     <CustomEditor/>
    </div>
  );
}
