import Banner from '../components/banner'
import Banner_A_Propos from '../../public/assets/banner_a_propos.svg'
import CollapseSection from '../components/collapse'
import Arrow_Collapse from '../../public/assets/collapse_arrow.svg'
import '../style/logement_infos.scss'
import aboutList from '../../public/aboutList.json'

export default function A_Propos() {
  return (
    <div>
      <Banner photo={Banner_A_Propos} />
      <div className="Toggle_Collapse_APropos">
        {aboutList.map((item, index) => (
          <CollapseSection
            key={index}
            title={item.title}
            initialCollapsed={true}
            icon={Arrow_Collapse}
            proposPage={true}
          >
            <div className="Collapse_Content_APropos">{item.content}</div>
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}
