/**
 * Semantic design tokens for the mobile app.
 *
 * These tokens mirror the naming conventions used in web artifacts (index.css)
 * so that multi-artifact projects share a cohesive visual identity.
 *
 * Replace the placeholder values below with values that match the project's
 * brand. If a sibling web artifact exists, read its index.css and convert the
 * HSL values to hex so both artifacts use the same palette.
 *
 * To add dark mode, add a `dark` key with the same token names.
 * The useColors() hook will automatically pick it up.
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: '#17352c',
    tint: '#1e6b4f',

    // Core surfaces
    background: '#f8faf7',
    foreground: '#17352c',

    // Cards / elevated surfaces
    card: '#ffffff',
    cardForeground: '#17352c',

    // Primary action color (buttons, links, active states)
    primary: '#1e6b4f',
    primaryForeground: '#ffffff',

    // Secondary / less-emphasis interactive surfaces
    secondary: '#e7f0ea',
    secondaryForeground: '#17352c',

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: '#edf2ee',
    mutedForeground: '#648074',

    // Accent highlights (badges, selected items, focus rings)
    accent: '#d6b56d',
    accentForeground: '#17352c',

    // Destructive actions (delete, error states)
    destructive: '#b93636',
    destructiveForeground: '#ffffff',

    // Borders and input outlines
    border: '#d8e3db',
    input: '#d8e3db',
  },

  // Border radius (in px). Sync from the sibling web artifact's --radius
  // CSS variable. This value applies to cards, buttons, inputs, and modals.
  radius: 8,
};

export default colors;
