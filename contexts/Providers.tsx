import { FC } from 'react'
import { styletron} from './styletron'
import { Provider as StyletronProvider } from 'styletron-react'
import { PersistGate } from 'redux-persist/integration/react'
import { LightTheme, BaseProvider } from 'baseui'
import { EditorProvider } from '@sdk'
import { AppProvider } from './AppContext'
import { store, persistor } from '@store/store'
import { Provider } from 'react-redux'

const engine = styletron

const Providers: FC = ({ children }) => {
  return (
    <Provider store={store}>
      {/*@ts-ignore */}
      <PersistGate loading={null} persistor={persistor}>
        <StyletronProvider value={engine}>
          <EditorProvider>
            <BaseProvider theme={LightTheme}>
              <AppProvider>{children}</AppProvider>
            </BaseProvider>
          </EditorProvider>
        </StyletronProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
