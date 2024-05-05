import Banner from '../components/banner'
import Banner_A_Propos from '../../public/assets/banner_a_propos.svg'
import CollapseSection from '../components/collapse'
import Arrow_Collapse from '../../public/assets/collapse_arrow.svg'
import '../style/logement_infos.scss'

export default function A_Propos() {
  return (
    <div>
      <Banner photo={Banner_A_Propos} />
      <div className="Toggle_Collapse">
        <CollapseSection
          title="Fiablité"
          initialCollapsed={true}
          icon={Arrow_Collapse}
          proposPage={true}
        >
          <div className="Collapse_Content">{}</div>
        </CollapseSection>
      </div>
    </div>
  )
}
