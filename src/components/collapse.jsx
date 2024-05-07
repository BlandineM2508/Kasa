import { useState } from 'react'
import PropTypes from 'prop-types'

const CollapseSection = ({
  title,
  initialCollapsed,
  icon,
  children,
  classNames,
}) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed)

  const toggleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <div className={classNames.Collapse_Title}>
        <span>{title}</span>
        <img
          className={classNames.Collapse_Arrow}
          onClick={toggleCollapse}
          src={icon}
          alt="flèche cliquable de la section"
          style={{
            transform: collapsed ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </div>
      {!collapsed && (
        <div className={classNames.Collapse_Content}>{children}</div>
      )}
    </div>
  )
}

CollapseSection.propTypes = {
  title: PropTypes.string,
  initialCollapsed: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node,
  classNames: PropTypes.shape({
    Collapse_Title: PropTypes.string,
    Collapse_Arrow: PropTypes.string,
    Collapse_Content: PropTypes.string,
  }), // Utilisez shape pour spécifier un objet avec des propriétés spécifiques
}

export default CollapseSection
