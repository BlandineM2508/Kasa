import { useState } from 'react'
import PropTypes from 'prop-types'

const CollapseSection = ({
  title,
  initialCollapsed,
  icon,
  children,
  proposPage,
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <div className={`Toggle_Title${proposPage ? 'APropos' : ''}`}>
        <span>{title}</span>
        <img
          className="Arrow_Collapse"
          onClick={toggleCollapse}
          src={icon}
          alt="flèche cliquable de la section"
          style={{
            transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>
      {!collapsed && <div className="Collapse_Content">{children}</div>}
    </div>
  )
}

CollapseSection.propTypes = {
  title: PropTypes.string,
  initialCollapsed: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node,
  proposPage: PropTypes.bool,
}

export default CollapseSection
