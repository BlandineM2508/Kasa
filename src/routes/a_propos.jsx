import Banner from '../components/banner'
import Banner_A_Propos from '../../public/assets/banner_a_propos.png'
import CollapseSection from '../components/collapse'
import Arrow_Collapse from '../../public/assets/collapse_arrow.svg'
import '../style/logement_infos.scss'
import aboutList from '../../public/aboutList.json'

export default function A_Propos() {
  return (
    <div className="content">
      <Banner
        photo={Banner_A_Propos}
        className="Photo_BannerAPropos"
        alt="Photo de la bannière de la page A propos"
      />
      <div className="Container_APropos">
        {aboutList.map((item, index) => (
          <CollapseSection
            key={index}
            title={item.title}
            initialCollapsed={true}
            icon={Arrow_Collapse}
            classNames={{
              Collapse_Title: 'Collapse_Title_APropos',
              Collapse_Arrow: 'Collapse_Arrow_APropos',
              Collapse_Content: 'Collapse_Content_APropos',
              collapsed: 'open',
            }}
          >
            {item.content}
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}
