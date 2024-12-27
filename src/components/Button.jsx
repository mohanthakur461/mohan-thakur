function Button({ color, hover, children }) {
    return (
      <button className={`bg-${color} hover:bg-${hover}`}>
        {children}
      </button>
    )
  }