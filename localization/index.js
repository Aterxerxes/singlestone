const translations = {
  hero: {
    title: `Monthly Packages.
Excitement Delivered daily.`,
    subtitle: 'New Games & Accessories',
    description: 'What\'s the best way to shop for the latest video games and peripherals? How about never shopping at all? You\'ll get new stuff on your doorstep -- every month.',
    callToActionText: 'Get Started'
  },
  footer: {
    title: 'How It Works',
  }
}

export const getTranslation = (resourcePath) => {
  // This logic would probably be more complex than I'm making it.
  if (resourcePath === 'hero') {
    return (translations.hero)
  } else if (resourcePath === 'footer') {
    return (translations.footer)
  }
  return null
}