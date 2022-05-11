//import Link from 'next/link';
//import Header from 'component/Header'
import withSession, { ServerSideProps } from '../lib/withSession';
import Editor, { useEditor } from '@sdk'
import { useEffect } from 'react';
import useAppContext from '@hooks/useAppContext';
import { getElements } from '@store/slices/elements/actions'
import { getFonts } from '@store/slices/fonts/actions'
import { useAppDispatch } from '@store/store'
//import Navbar from '@component/editor/Navbar'
import Panels from '@component/editor/Panels'
import Toolbox from '@component/editor/Toolbox'
import Footer from '@component/editor/Footer'
import api from '@services/api'
import { useRouter } from 'next/router'

type Props = {
  user?: {
    user_id: string;
  };
};

const App = ({ location }: any, props: { user: any; }) => {
  const { user } = props;
  const { setCurrentTemplate } = useAppContext()
  const editor = useEditor()
  const router = useRouter()
  const {id} = router.query;
  const dispath = useAppDispatch()

  useEffect(() => {
    dispath(getElements())
    dispath(getFonts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const editorConfig = {
    clipToFrame: true,
    scrollLimit: 0,
  }

  useEffect(() => {
    if (id && editor && location) {
      const locationTemplate = location?.state?.template
      if (locationTemplate) {
        setCurrentTemplate(locationTemplate)
        editor.importFromJSON(locationTemplate)
      } else {
        api.getCreationById(id).then(data => {
          if (data && data.object !== 'error') {
            setCurrentTemplate(data)
            editor.importFromJSON(data)
          }
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, editor, location])
  return (
    <>
    { !user ?
      ( <div /> ):
        <div className='height-100 mt-5 pt-5 mr-5 ml-5'>
          {/* <Header/> */}
        <br/>
        <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#F9F9F9',
        fontFamily: 'Plus Jakarta Sans',
      }}
    >
      {/* <Navbar /> */}
      <div style={{ display: 'flex', flex: 1 }}>
        <Panels />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
          <Toolbox />
          <div style={{ flex: 1, display: 'flex', padding: '1px' }}>
            <Editor config={editorConfig} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
        </div>
    }
    </>
  );
};

const getServerSidePropsHandler: ServerSideProps = async ({ req }) => {
  // Get the user's session based on the request
  const user = req.session.get('user') ?? null;
  const props: Props = { user };
  return { props };
};

export const getServerSideProps = withSession(getServerSidePropsHandler);

export default App;
