import { useStyletron } from 'baseui'
import Icons from '@component/editor/icons-editor'
import useAppContext from '@hooks/useAppContext'
import { useEditor } from '@sdk'

function PanelListItem({ label, icon, activePanel }: any) {
  const { setActivePanel, setActiveSubMenu } = useAppContext()
  const editor = useEditor()
  const [css, theme] = useStyletron()
  const Icon = Icons[icon]
  return (
    <div
      onClick={() => {
        editor.deselect()
        setActiveSubMenu(null)
        setActivePanel(label)
      }}
      className={css({
        width: '84px',
        height: '80px',
        backgroundColor: label === activePanel ? theme.colors.background : theme.colors.primary100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: 500,
        fontSize: '0.8rem',
        userSelect: 'none',
        transition: 'all 0.5s',
        gap: '0.1rem',
        ':hover': {
          cursor: 'pointer',
          backgroundColor: theme.colors.background,
          transition: 'all 1s',
        },
      })}
    >
      <Icon size={24} />
      <div>{label}</div>
    </div>
  )
}

export default PanelListItem
