/* @ds-bundle: {"format":4,"namespace":"BHBPDesignSystem_d81dd5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"c295ce2eb9e0","components/actions/IconButton.jsx":"bb07132c76a9","components/brand/Icon.jsx":"c0ade0953ae7","components/brand/Logo.jsx":"e19f847cbee2","components/display/Badge.jsx":"7e1386dc935b","components/display/Card.jsx":"d6b2c6121613","components/display/Tag.jsx":"3cc04887e6e8","components/feedback/Dialog.jsx":"b063f015b299","components/feedback/Toast.jsx":"96d99c3b5ce8","components/feedback/Tooltip.jsx":"1fe69294a8e5","components/forms/Checkbox.jsx":"90bcb146c17a","components/forms/Input.jsx":"a5a70165b2c9","components/forms/Radio.jsx":"bce13cfd6a5d","components/forms/Select.jsx":"ba036c925f3c","components/forms/Switch.jsx":"5d77650423cd","components/navigation/Tabs.jsx":"d88f60d32289","site/build/image-slot.js":"fff26d081c8d","ui_kits/portfolio/About.jsx":"84dd259dc40c","ui_kits/portfolio/CaseStudy.jsx":"26f5df1416e2","ui_kits/portfolio/Chrome.jsx":"50fb6da1887c","ui_kits/portfolio/Contact.jsx":"34a24ca0e7c7","ui_kits/portfolio/Home.jsx":"e3a1fbb225e4","ui_kits/portfolio/Shared.jsx":"c50debb17585","ui_kits/portfolio/Work.jsx":"c08857fae77c","ui_kits/portfolio/data.js":"36a2815d48b7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BHBPDesignSystem_d81dd5 = window.BHBPDesignSystem_d81dd5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
const BASE = "https://unpkg.com/lucide-static@0.460.0/icons/";
function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
  label
}) {
  const url = "url(" + BASE + name + ".svg)";
  return /*#__PURE__*/React.createElement("span", {
    role: label ? "img" : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : "true",
    style: {
      display: "inline-block",
      flex: "none",
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 14,
    ic: 16
  },
  md: {
    h: 44,
    px: 22,
    fs: 15,
    ic: 18
  },
  lg: {
    h: 56,
    px: 28,
    fs: 17,
    ic: 20
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  href,
  onClick,
  type = "button",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      background: press ? "var(--action-primary-bg-press)" : hover ? "var(--action-primary-bg-hover)" : "var(--action-primary-bg)",
      color: "var(--text-on-brand)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    accent: {
      background: "var(--gradient-flow)",
      backgroundSize: "160% 160%",
      backgroundPosition: hover ? "100% 50%" : "0% 50%",
      color: "#fff",
      boxShadow: hover ? "var(--shadow-glow)" : "var(--shadow-sm)"
    },
    secondary: {
      background: hover ? "var(--action-secondary-bg-hover)" : "var(--surface-card)",
      color: "var(--ocean-700)",
      boxShadow: "inset 0 0 0 1.5px " + (hover ? "var(--lagoon-500)" : "var(--border-strong)")
    },
    ghost: {
      background: press ? "var(--action-ghost-bg-press)" : hover ? "var(--action-ghost-bg-hover)" : "transparent",
      color: "var(--ocean-700)"
    },
    inverse: {
      background: hover ? "#fff" : "rgba(255,255,255,.92)",
      color: "var(--ocean-900)",
      boxShadow: hover ? "var(--shadow-glow)" : "none"
    }
  }[variant];
  const dis = disabled ? {
    background: "var(--action-disabled-bg)",
    color: "var(--action-disabled-fg)",
    boxShadow: "none",
    cursor: "not-allowed"
  } : {};
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.h,
      padding: "0 " + s.px + "px",
      border: 0,
      borderRadius: "var(--radius-button)",
      fontFamily: "var(--font-ui)",
      fontWeight: 700,
      fontSize: s.fs,
      letterSpacing: "-0.005em",
      textDecoration: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
      transform: press && !disabled ? "scale(.97)" : "none",
      transition: "background var(--duration-base) var(--ease-standard), background-position var(--duration-flow) var(--ease-flow), box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
      ...V,
      ...dis,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: hover && !disabled ? "translateX(2px)" : "none",
      transition: "transform var(--duration-base) var(--ease-flow)"
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const SZ = {
  sm: [32, 16],
  md: [44, 20],
  lg: [56, 24]
};
function IconButton({
  icon,
  label,
  variant = "soft",
  size = "md",
  disabled = false,
  onClick,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [d, ic] = SZ[size] || SZ.md;
  const V = {
    solid: {
      background: hover ? "var(--action-primary-bg-hover)" : "var(--action-primary-bg)",
      color: "#fff"
    },
    soft: {
      background: hover ? "var(--lagoon-100)" : "var(--lagoon-50)",
      color: "var(--ocean-700)"
    },
    outline: {
      background: hover ? "var(--action-secondary-bg-hover)" : "var(--surface-card)",
      color: "var(--ocean-700)",
      boxShadow: "inset 0 0 0 1.5px " + (hover ? "var(--lagoon-500)" : "var(--border-strong)")
    },
    ghost: {
      background: hover ? "var(--action-ghost-bg-hover)" : "transparent",
      color: "var(--text-body)"
    },
    inverse: {
      background: hover ? "rgba(255,255,255,.18)" : "rgba(255,255,255,.08)",
      color: "#fff",
      boxShadow: "inset 0 0 0 1px var(--border-inverse)"
    }
  }[variant];
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    "aria-label": label,
    title: label,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: 0,
      borderRadius: "var(--radius-button)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press ? "scale(.92)" : "none",
      transition: "all var(--duration-base) var(--ease-standard)",
      ...V,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const MARKS = {
  "color": "<defs><linearGradient id=\"bhbpFlow\" x1=\"12\" y1=\"10\" x2=\"110\" y2=\"112\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#003E7D\"></stop><stop offset=\".55\" stop-color=\"#2A98B4\"></stop><stop offset=\"1\" stop-color=\"#2FC68C\"></stop></linearGradient><radialGradient id=\"bhbpSheen\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(34 22) rotate(50) scale(70)\"><stop stop-color=\"#fff\" stop-opacity=\".28\"></stop><stop offset=\"1\" stop-color=\"#fff\" stop-opacity=\"0\"></stop></radialGradient></defs><circle cx=\"60\" cy=\"60\" r=\"60\" fill=\"url(#bhbpFlow)\"></circle><circle cx=\"60\" cy=\"60\" r=\"60\" fill=\"url(#bhbpSheen)\"></circle><circle cx=\"60\" cy=\"60\" r=\"59.25\" stroke=\"#fff\" stroke-opacity=\".18\" stroke-width=\"1.5\"></circle><g stroke=\"#fff\" stroke-opacity=\"0.45\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M60 13V51\"></path><path d=\"M60 69V107\"></path><path d=\"M13 60H51\"></path><path d=\"M69 60H107\"></path></g><circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"#EE8EA9\"></circle><g fill=\"#fff\" stroke=\"#fff\" stroke-width=\"1.1\" stroke-linejoin=\"round\"><path d=\"M75.3274 100.001V70.9096H85.157C87.4392 70.9096 89.3047 71.3215 90.7536 72.1454C92.2119 72.9598 93.2914 74.063 93.9922 75.4551C94.6929 76.8471 95.0433 78.4001 95.0433 80.1142C95.0433 81.8282 94.6929 83.3859 93.9922 84.7875C93.3009 86.189 92.2308 87.3064 90.782 88.1397C89.3331 88.9636 87.477 89.3755 85.2138 89.3755H78.1683V86.2505H85.1001C86.6626 86.2505 87.9174 85.9806 88.8643 85.4409C89.8113 84.9011 90.4979 84.1719 90.924 83.2534C91.3596 82.3253 91.5774 81.2789 91.5774 80.1142C91.5774 78.9494 91.3596 77.9077 90.924 76.9892C90.4979 76.0706 89.8066 75.3509 88.8501 74.8301C87.8937 74.2998 86.6248 74.0346 85.0433 74.0346H78.8501V100.001H75.3274Z\"></path><path d=\"M27.0149 100.001V70.9096H37.1854C39.2119 70.9096 40.8833 71.26 42.1996 71.9607C43.5159 72.652 44.496 73.5848 45.1399 74.759C45.7839 75.9238 46.1058 77.2164 46.1058 78.6369C46.1058 79.8869 45.8833 80.9191 45.4382 81.7335C45.0026 82.5479 44.425 83.1918 43.7053 83.6653C42.995 84.1388 42.2232 84.4892 41.3899 84.7164V85.0005C42.2801 85.0573 43.175 85.3698 44.0746 85.938C44.9742 86.5062 45.727 87.3206 46.3331 88.3812C46.9392 89.4418 47.2422 90.7392 47.2422 92.2732C47.2422 93.7316 46.9107 95.0431 46.2479 96.2079C45.585 97.3727 44.5386 98.296 43.1087 98.9778C41.6787 99.6596 39.8179 100.001 37.5263 100.001H27.0149ZM30.5376 96.8755H37.5263C39.8274 96.8755 41.4609 96.4304 42.4268 95.5403C43.4022 94.6407 43.8899 93.5517 43.8899 92.2732C43.8899 91.2884 43.639 90.3793 43.1371 89.546C42.6352 88.7032 41.9202 88.0308 40.9922 87.5289C40.0642 87.0176 38.9657 86.7619 37.6967 86.7619H30.5376V96.8755ZM30.5376 83.6937H37.0717C38.1323 83.6937 39.0888 83.4854 39.9411 83.0687C40.8028 82.652 41.4846 82.0649 41.9865 81.3073C42.4979 80.5498 42.7536 79.6596 42.7536 78.6369C42.7536 77.3585 42.3085 76.2742 41.4183 75.384C40.5282 74.4844 39.1172 74.0346 37.1854 74.0346H30.5376V83.6937Z\"></path><path d=\"M28.0149 49.0005V19.9096H38.1854C40.2119 19.9096 41.8833 20.26 43.1996 20.9607C44.5159 21.652 45.496 22.5848 46.1399 23.759C46.7839 24.9238 47.1058 26.2164 47.1058 27.6369C47.1058 28.8869 46.8833 29.9191 46.4382 30.7335C46.0026 31.5479 45.425 32.1918 44.7053 32.6653C43.995 33.1388 43.2232 33.4892 42.3899 33.7164V34.0005C43.2801 34.0573 44.175 34.3698 45.0746 34.938C45.9742 35.5062 46.727 36.3206 47.3331 37.3812C47.9392 38.4418 48.2422 39.7392 48.2422 41.2732C48.2422 42.7316 47.9107 44.0431 47.2479 45.2079C46.585 46.3727 45.5386 47.296 44.1087 47.9778C42.6787 48.6596 40.8179 49.0005 38.5263 49.0005H28.0149ZM31.5376 45.8755H38.5263C40.8274 45.8755 42.4609 45.4304 43.4268 44.5403C44.4022 43.6407 44.8899 42.5517 44.8899 41.2732C44.8899 40.2884 44.639 39.3793 44.1371 38.546C43.6352 37.7032 42.9202 37.0308 41.9922 36.5289C41.0642 36.0176 39.9657 35.7619 38.6967 35.7619H31.5376V45.8755ZM31.5376 32.6937H38.0717C39.1323 32.6937 40.0888 32.4854 40.9411 32.0687C41.8028 31.652 42.4846 31.0649 42.9865 30.3073C43.4979 29.5498 43.7536 28.6596 43.7536 27.6369C43.7536 26.3585 43.3085 25.2742 42.4183 24.384C41.5282 23.4844 40.1172 23.0346 38.1854 23.0346H31.5376V32.6937Z\"></path><path d=\"M73.218 49.0005V19.9096H76.7408V32.8642H92.2521V19.9096H95.7749V49.0005H92.2521V35.9892H76.7408V49.0005H73.218Z\"></path></g>",
  "navy": "<circle cx=\"60\" cy=\"60\" r=\"60\" fill=\"#00142B\"></circle><circle cx=\"60\" cy=\"60\" r=\"59.25\" stroke=\"#2A98B4\" stroke-opacity=\".5\" stroke-width=\"1.5\"></circle><g stroke=\"#2FC68C\" stroke-opacity=\"0.7\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M60 13V51\"></path><path d=\"M60 69V107\"></path><path d=\"M13 60H51\"></path><path d=\"M69 60H107\"></path></g><circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"#EE8EA9\"></circle><g fill=\"#fff\" stroke=\"#fff\" stroke-width=\"1.1\" stroke-linejoin=\"round\"><path d=\"M75.3274 100.001V70.9096H85.157C87.4392 70.9096 89.3047 71.3215 90.7536 72.1454C92.2119 72.9598 93.2914 74.063 93.9922 75.4551C94.6929 76.8471 95.0433 78.4001 95.0433 80.1142C95.0433 81.8282 94.6929 83.3859 93.9922 84.7875C93.3009 86.189 92.2308 87.3064 90.782 88.1397C89.3331 88.9636 87.477 89.3755 85.2138 89.3755H78.1683V86.2505H85.1001C86.6626 86.2505 87.9174 85.9806 88.8643 85.4409C89.8113 84.9011 90.4979 84.1719 90.924 83.2534C91.3596 82.3253 91.5774 81.2789 91.5774 80.1142C91.5774 78.9494 91.3596 77.9077 90.924 76.9892C90.4979 76.0706 89.8066 75.3509 88.8501 74.8301C87.8937 74.2998 86.6248 74.0346 85.0433 74.0346H78.8501V100.001H75.3274Z\"></path><path d=\"M27.0149 100.001V70.9096H37.1854C39.2119 70.9096 40.8833 71.26 42.1996 71.9607C43.5159 72.652 44.496 73.5848 45.1399 74.759C45.7839 75.9238 46.1058 77.2164 46.1058 78.6369C46.1058 79.8869 45.8833 80.9191 45.4382 81.7335C45.0026 82.5479 44.425 83.1918 43.7053 83.6653C42.995 84.1388 42.2232 84.4892 41.3899 84.7164V85.0005C42.2801 85.0573 43.175 85.3698 44.0746 85.938C44.9742 86.5062 45.727 87.3206 46.3331 88.3812C46.9392 89.4418 47.2422 90.7392 47.2422 92.2732C47.2422 93.7316 46.9107 95.0431 46.2479 96.2079C45.585 97.3727 44.5386 98.296 43.1087 98.9778C41.6787 99.6596 39.8179 100.001 37.5263 100.001H27.0149ZM30.5376 96.8755H37.5263C39.8274 96.8755 41.4609 96.4304 42.4268 95.5403C43.4022 94.6407 43.8899 93.5517 43.8899 92.2732C43.8899 91.2884 43.639 90.3793 43.1371 89.546C42.6352 88.7032 41.9202 88.0308 40.9922 87.5289C40.0642 87.0176 38.9657 86.7619 37.6967 86.7619H30.5376V96.8755ZM30.5376 83.6937H37.0717C38.1323 83.6937 39.0888 83.4854 39.9411 83.0687C40.8028 82.652 41.4846 82.0649 41.9865 81.3073C42.4979 80.5498 42.7536 79.6596 42.7536 78.6369C42.7536 77.3585 42.3085 76.2742 41.4183 75.384C40.5282 74.4844 39.1172 74.0346 37.1854 74.0346H30.5376V83.6937Z\"></path><path d=\"M28.0149 49.0005V19.9096H38.1854C40.2119 19.9096 41.8833 20.26 43.1996 20.9607C44.5159 21.652 45.496 22.5848 46.1399 23.759C46.7839 24.9238 47.1058 26.2164 47.1058 27.6369C47.1058 28.8869 46.8833 29.9191 46.4382 30.7335C46.0026 31.5479 45.425 32.1918 44.7053 32.6653C43.995 33.1388 43.2232 33.4892 42.3899 33.7164V34.0005C43.2801 34.0573 44.175 34.3698 45.0746 34.938C45.9742 35.5062 46.727 36.3206 47.3331 37.3812C47.9392 38.4418 48.2422 39.7392 48.2422 41.2732C48.2422 42.7316 47.9107 44.0431 47.2479 45.2079C46.585 46.3727 45.5386 47.296 44.1087 47.9778C42.6787 48.6596 40.8179 49.0005 38.5263 49.0005H28.0149ZM31.5376 45.8755H38.5263C40.8274 45.8755 42.4609 45.4304 43.4268 44.5403C44.4022 43.6407 44.8899 42.5517 44.8899 41.2732C44.8899 40.2884 44.639 39.3793 44.1371 38.546C43.6352 37.7032 42.9202 37.0308 41.9922 36.5289C41.0642 36.0176 39.9657 35.7619 38.6967 35.7619H31.5376V45.8755ZM31.5376 32.6937H38.0717C39.1323 32.6937 40.0888 32.4854 40.9411 32.0687C41.8028 31.652 42.4846 31.0649 42.9865 30.3073C43.4979 29.5498 43.7536 28.6596 43.7536 27.6369C43.7536 26.3585 43.3085 25.2742 42.4183 24.384C41.5282 23.4844 40.1172 23.0346 38.1854 23.0346H31.5376V32.6937Z\"></path><path d=\"M73.218 49.0005V19.9096H76.7408V32.8642H92.2521V19.9096H95.7749V49.0005H92.2521V35.9892H76.7408V49.0005H73.218Z\"></path></g>",
  "outline": "<circle cx=\"60\" cy=\"60\" r=\"58.5\" stroke=\"#003E7D\" stroke-width=\"3\"></circle><g stroke=\"#2A98B4\" stroke-opacity=\"0.8\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M60 13V51\"></path><path d=\"M60 69V107\"></path><path d=\"M13 60H51\"></path><path d=\"M69 60H107\"></path></g><circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"#EE8EA9\"></circle><g fill=\"#003E7D\" stroke=\"#003E7D\" stroke-width=\"1.1\" stroke-linejoin=\"round\"><path d=\"M75.3274 100.001V70.9096H85.157C87.4392 70.9096 89.3047 71.3215 90.7536 72.1454C92.2119 72.9598 93.2914 74.063 93.9922 75.4551C94.6929 76.8471 95.0433 78.4001 95.0433 80.1142C95.0433 81.8282 94.6929 83.3859 93.9922 84.7875C93.3009 86.189 92.2308 87.3064 90.782 88.1397C89.3331 88.9636 87.477 89.3755 85.2138 89.3755H78.1683V86.2505H85.1001C86.6626 86.2505 87.9174 85.9806 88.8643 85.4409C89.8113 84.9011 90.4979 84.1719 90.924 83.2534C91.3596 82.3253 91.5774 81.2789 91.5774 80.1142C91.5774 78.9494 91.3596 77.9077 90.924 76.9892C90.4979 76.0706 89.8066 75.3509 88.8501 74.8301C87.8937 74.2998 86.6248 74.0346 85.0433 74.0346H78.8501V100.001H75.3274Z\"></path><path d=\"M27.0149 100.001V70.9096H37.1854C39.2119 70.9096 40.8833 71.26 42.1996 71.9607C43.5159 72.652 44.496 73.5848 45.1399 74.759C45.7839 75.9238 46.1058 77.2164 46.1058 78.6369C46.1058 79.8869 45.8833 80.9191 45.4382 81.7335C45.0026 82.5479 44.425 83.1918 43.7053 83.6653C42.995 84.1388 42.2232 84.4892 41.3899 84.7164V85.0005C42.2801 85.0573 43.175 85.3698 44.0746 85.938C44.9742 86.5062 45.727 87.3206 46.3331 88.3812C46.9392 89.4418 47.2422 90.7392 47.2422 92.2732C47.2422 93.7316 46.9107 95.0431 46.2479 96.2079C45.585 97.3727 44.5386 98.296 43.1087 98.9778C41.6787 99.6596 39.8179 100.001 37.5263 100.001H27.0149ZM30.5376 96.8755H37.5263C39.8274 96.8755 41.4609 96.4304 42.4268 95.5403C43.4022 94.6407 43.8899 93.5517 43.8899 92.2732C43.8899 91.2884 43.639 90.3793 43.1371 89.546C42.6352 88.7032 41.9202 88.0308 40.9922 87.5289C40.0642 87.0176 38.9657 86.7619 37.6967 86.7619H30.5376V96.8755ZM30.5376 83.6937H37.0717C38.1323 83.6937 39.0888 83.4854 39.9411 83.0687C40.8028 82.652 41.4846 82.0649 41.9865 81.3073C42.4979 80.5498 42.7536 79.6596 42.7536 78.6369C42.7536 77.3585 42.3085 76.2742 41.4183 75.384C40.5282 74.4844 39.1172 74.0346 37.1854 74.0346H30.5376V83.6937Z\"></path><path d=\"M28.0149 49.0005V19.9096H38.1854C40.2119 19.9096 41.8833 20.26 43.1996 20.9607C44.5159 21.652 45.496 22.5848 46.1399 23.759C46.7839 24.9238 47.1058 26.2164 47.1058 27.6369C47.1058 28.8869 46.8833 29.9191 46.4382 30.7335C46.0026 31.5479 45.425 32.1918 44.7053 32.6653C43.995 33.1388 43.2232 33.4892 42.3899 33.7164V34.0005C43.2801 34.0573 44.175 34.3698 45.0746 34.938C45.9742 35.5062 46.727 36.3206 47.3331 37.3812C47.9392 38.4418 48.2422 39.7392 48.2422 41.2732C48.2422 42.7316 47.9107 44.0431 47.2479 45.2079C46.585 46.3727 45.5386 47.296 44.1087 47.9778C42.6787 48.6596 40.8179 49.0005 38.5263 49.0005H28.0149ZM31.5376 45.8755H38.5263C40.8274 45.8755 42.4609 45.4304 43.4268 44.5403C44.4022 43.6407 44.8899 42.5517 44.8899 41.2732C44.8899 40.2884 44.639 39.3793 44.1371 38.546C43.6352 37.7032 42.9202 37.0308 41.9922 36.5289C41.0642 36.0176 39.9657 35.7619 38.6967 35.7619H31.5376V45.8755ZM31.5376 32.6937H38.0717C39.1323 32.6937 40.0888 32.4854 40.9411 32.0687C41.8028 31.652 42.4846 31.0649 42.9865 30.3073C43.4979 29.5498 43.7536 28.6596 43.7536 27.6369C43.7536 26.3585 43.3085 25.2742 42.4183 24.384C41.5282 23.4844 40.1172 23.0346 38.1854 23.0346H31.5376V32.6937Z\"></path><path d=\"M73.218 49.0005V19.9096H76.7408V32.8642H92.2521V19.9096H95.7749V49.0005H92.2521V35.9892H76.7408V49.0005H73.218Z\"></path></g>",
  "white": "<circle cx=\"60\" cy=\"60\" r=\"58.5\" stroke=\"#fff\" stroke-width=\"3\"></circle><g stroke=\"#fff\" stroke-opacity=\"0.6\" stroke-width=\"1.5\" stroke-linecap=\"round\"><path d=\"M60 13V51\"></path><path d=\"M60 69V107\"></path><path d=\"M13 60H51\"></path><path d=\"M69 60H107\"></path></g><circle cx=\"60\" cy=\"60\" r=\"3\" fill=\"#EE8EA9\"></circle><g fill=\"#fff\" stroke=\"#fff\" stroke-width=\"1.1\" stroke-linejoin=\"round\"><path d=\"M75.3274 100.001V70.9096H85.157C87.4392 70.9096 89.3047 71.3215 90.7536 72.1454C92.2119 72.9598 93.2914 74.063 93.9922 75.4551C94.6929 76.8471 95.0433 78.4001 95.0433 80.1142C95.0433 81.8282 94.6929 83.3859 93.9922 84.7875C93.3009 86.189 92.2308 87.3064 90.782 88.1397C89.3331 88.9636 87.477 89.3755 85.2138 89.3755H78.1683V86.2505H85.1001C86.6626 86.2505 87.9174 85.9806 88.8643 85.4409C89.8113 84.9011 90.4979 84.1719 90.924 83.2534C91.3596 82.3253 91.5774 81.2789 91.5774 80.1142C91.5774 78.9494 91.3596 77.9077 90.924 76.9892C90.4979 76.0706 89.8066 75.3509 88.8501 74.8301C87.8937 74.2998 86.6248 74.0346 85.0433 74.0346H78.8501V100.001H75.3274Z\"></path><path d=\"M27.0149 100.001V70.9096H37.1854C39.2119 70.9096 40.8833 71.26 42.1996 71.9607C43.5159 72.652 44.496 73.5848 45.1399 74.759C45.7839 75.9238 46.1058 77.2164 46.1058 78.6369C46.1058 79.8869 45.8833 80.9191 45.4382 81.7335C45.0026 82.5479 44.425 83.1918 43.7053 83.6653C42.995 84.1388 42.2232 84.4892 41.3899 84.7164V85.0005C42.2801 85.0573 43.175 85.3698 44.0746 85.938C44.9742 86.5062 45.727 87.3206 46.3331 88.3812C46.9392 89.4418 47.2422 90.7392 47.2422 92.2732C47.2422 93.7316 46.9107 95.0431 46.2479 96.2079C45.585 97.3727 44.5386 98.296 43.1087 98.9778C41.6787 99.6596 39.8179 100.001 37.5263 100.001H27.0149ZM30.5376 96.8755H37.5263C39.8274 96.8755 41.4609 96.4304 42.4268 95.5403C43.4022 94.6407 43.8899 93.5517 43.8899 92.2732C43.8899 91.2884 43.639 90.3793 43.1371 89.546C42.6352 88.7032 41.9202 88.0308 40.9922 87.5289C40.0642 87.0176 38.9657 86.7619 37.6967 86.7619H30.5376V96.8755ZM30.5376 83.6937H37.0717C38.1323 83.6937 39.0888 83.4854 39.9411 83.0687C40.8028 82.652 41.4846 82.0649 41.9865 81.3073C42.4979 80.5498 42.7536 79.6596 42.7536 78.6369C42.7536 77.3585 42.3085 76.2742 41.4183 75.384C40.5282 74.4844 39.1172 74.0346 37.1854 74.0346H30.5376V83.6937Z\"></path><path d=\"M28.0149 49.0005V19.9096H38.1854C40.2119 19.9096 41.8833 20.26 43.1996 20.9607C44.5159 21.652 45.496 22.5848 46.1399 23.759C46.7839 24.9238 47.1058 26.2164 47.1058 27.6369C47.1058 28.8869 46.8833 29.9191 46.4382 30.7335C46.0026 31.5479 45.425 32.1918 44.7053 32.6653C43.995 33.1388 43.2232 33.4892 42.3899 33.7164V34.0005C43.2801 34.0573 44.175 34.3698 45.0746 34.938C45.9742 35.5062 46.727 36.3206 47.3331 37.3812C47.9392 38.4418 48.2422 39.7392 48.2422 41.2732C48.2422 42.7316 47.9107 44.0431 47.2479 45.2079C46.585 46.3727 45.5386 47.296 44.1087 47.9778C42.6787 48.6596 40.8179 49.0005 38.5263 49.0005H28.0149ZM31.5376 45.8755H38.5263C40.8274 45.8755 42.4609 45.4304 43.4268 44.5403C44.4022 43.6407 44.8899 42.5517 44.8899 41.2732C44.8899 40.2884 44.639 39.3793 44.1371 38.546C43.6352 37.7032 42.9202 37.0308 41.9922 36.5289C41.0642 36.0176 39.9657 35.7619 38.6967 35.7619H31.5376V45.8755ZM31.5376 32.6937H38.0717C39.1323 32.6937 40.0888 32.4854 40.9411 32.0687C41.8028 31.652 42.4846 31.0649 42.9865 30.3073C43.4979 29.5498 43.7536 28.6596 43.7536 27.6369C43.7536 26.3585 43.3085 25.2742 42.4183 24.384C41.5282 23.4844 40.1172 23.0346 38.1854 23.0346H31.5376V32.6937Z\"></path><path d=\"M73.218 49.0005V19.9096H76.7408V32.8642H92.2521V19.9096H95.7749V49.0005H92.2521V35.9892H76.7408V49.0005H73.218Z\"></path></g>"
};
function Logo({
  variant = "lockup",
  tone = "color",
  theme = "light",
  size = 44,
  style
}) {
  const uid = (React.useId ? React.useId() : "x").replace(/:/g, "");
  const svg = MARKS[tone].replace(/bhbpFlow/g, "bhbpFlow" + uid).replace(/bhbpSheen/g, "bhbpSheen" + uid);
  const markEl = /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      display: "inline-block",
      flex: "none"
    },
    dangerouslySetInnerHTML: {
      __html: '<svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">' + svg + "</svg>"
    }
  });
  if (variant === "mark") return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Bill Hayes Build Products",
    style: {
      display: "inline-flex",
      ...style
    }
  }, markEl);
  const dark = theme === "dark";
  const nameColor = dark ? "var(--text-inverse)" : "var(--text-strong)";
  const subColor = dark ? "var(--lagoon-300)" : "var(--text-accent)";
  if (variant === "stacked") return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Bill Hayes Build Products",
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: size * 0.28,
      ...style
    }
  }, markEl, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.36,
      letterSpacing: "-0.02em",
      color: nameColor,
      lineHeight: 1.1
    }
  }, "Bill Hayes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: Math.max(10, size * 0.18),
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: subColor
    }
  }, "Build Products")));
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Bill Hayes Build Products",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.28,
      ...style
    }
  }, markEl, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.4,
      letterSpacing: "-0.02em",
      color: nameColor,
      lineHeight: 1.05
    }
  }, "Bill Hayes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: Math.max(9, size * 0.22),
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: subColor,
      lineHeight: 1.3
    }
  }, "Build Products")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: ["var(--ink-100)", "var(--ink-700)", "var(--ink-400)"],
  brand: ["var(--ocean-50)", "var(--ocean-700)", "var(--ocean-500)"],
  info: ["var(--status-info-bg)", "var(--lagoon-700)", "var(--lagoon-500)"],
  success: ["var(--status-success-bg)", "var(--fern-700)", "var(--fern-500)"],
  warning: ["var(--status-warning-bg)", "var(--status-warning)", "var(--amber-500)"],
  danger: ["var(--status-danger-bg)", "var(--coral-700)", "var(--coral-500)"],
  blush: ["var(--blush-100)", "var(--blush-700)", "var(--blush-500)"],
  flow: ["var(--gradient-flow)", "#fff", "#fff"]
};
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style
}) {
  const [bg, fg, d] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-pill)",
      background: bg,
      color: fg,
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: d,
      boxShadow: "0 0 0 3px color-mix(in srgb, " + d + " 22%, transparent)"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  variant = "elevated",
  padding = "md",
  interactive = false,
  onClick,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const pad = {
    none: 0,
    sm: 16,
    md: 24,
    lg: 36
  }[padding] ?? 24;
  const lift = interactive && hover;
  const V = {
    elevated: {
      background: "var(--surface-card)",
      boxShadow: lift ? "var(--shadow-lg)" : "var(--shadow-md)"
    },
    outline: {
      background: "var(--surface-card)",
      boxShadow: "inset 0 0 0 1px " + (lift ? "var(--lagoon-300)" : "var(--border-subtle)")
    },
    tint: {
      background: "var(--surface-tint)",
      boxShadow: lift ? "var(--shadow-md)" : "none"
    },
    inverse: {
      background: "var(--surface-inverse-raised)",
      color: "var(--text-inverse)",
      boxShadow: "inset 0 0 0 1px var(--border-inverse)" + (lift ? ", var(--shadow-glow)" : "")
    },
    glass: {
      background: "var(--glass-bg)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,.6), var(--shadow-md)"
    },
    blush: {
      background: "var(--gradient-dawn)",
      boxShadow: lift ? "var(--shadow-md)" : "none"
    },
    flow: {
      background: "var(--gradient-flow)",
      color: "#fff",
      boxShadow: lift ? "var(--shadow-glow)" : "var(--shadow-md)"
    }
  }[variant];
  const Tag = href ? "a" : "div";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      position: "relative",
      overflow: "hidden",
      borderRadius: "var(--radius-xl)",
      padding: pad,
      color: "inherit",
      textDecoration: "none",
      cursor: interactive ? "pointer" : undefined,
      transform: lift ? "translateY(-4px)" : "none",
      transition: "transform var(--duration-slow) var(--ease-flow), box-shadow var(--duration-slow) var(--ease-flow)",
      ...V,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  icon,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    role: clickable ? "button" : undefined,
    "aria-pressed": clickable ? selected : undefined,
    tabIndex: clickable ? 0 : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 34,
      padding: onRemove ? "0 8px 0 14px" : "0 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-ui)",
      fontSize: 13.5,
      fontWeight: 600,
      cursor: clickable ? "pointer" : "default",
      whiteSpace: "nowrap",
      userSelect: "none",
      background: selected ? "var(--ocean-700)" : hover && clickable ? "var(--lagoon-50)" : "var(--surface-card)",
      color: selected ? "#fff" : "var(--text-body)",
      boxShadow: selected ? "var(--shadow-sm)" : "inset 0 0 0 1px " + (hover && clickable ? "var(--lagoon-300)" : "var(--border-subtle)"),
      transition: "all var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15
  }), children, onRemove && /*#__PURE__*/React.createElement("span", {
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      width: 20,
      height: 20,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: selected ? "rgba(255,255,255,.16)" : "var(--ink-100)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  width = 520
}) {
  const [show, setShow] = React.useState(open);
  React.useEffect(() => {
    if (open) {
      setShow(true);
    } else {
      const t = setTimeout(() => setShow(false), 260);
      return () => clearTimeout(t);
    }
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!show) return null;
  const [vis, setVis] = [open, null];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      opacity: vis ? 1 : 0,
      transition: "opacity var(--duration-slow) var(--ease-flow)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-lg)",
      padding: 32,
      transform: vis ? "none" : "translateY(16px) scale(.98)",
      transition: "transform var(--duration-slow) var(--ease-flow)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 20,
      right: 20
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: "-0.02em",
      color: "var(--text-strong)",
      margin: "0 40px 8px 0"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-muted)",
      fontSize: 15,
      lineHeight: 1.55
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 28
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  success: ["circle-check", "var(--fern-400)"],
  info: ["info", "var(--lagoon-400)"],
  warning: ["triangle-alert", "var(--amber-500)"],
  danger: ["circle-x", "var(--coral-500)"]
};
function Toast({
  tone = "success",
  title,
  message,
  onClose,
  action,
  style
}) {
  const [icon, c] = T[tone] || T.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      fontFamily: "var(--font-ui)",
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      width: 380,
      maxWidth: "100%",
      padding: "14px 14px 14px 16px",
      borderRadius: "var(--radius-lg)",
      background: "var(--surface-inverse-raised)",
      color: "var(--text-inverse)",
      boxShadow: "var(--shadow-lg), inset 0 0 0 1px var(--border-inverse)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      flex: "none",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "color-mix(in srgb, " + c + " 18%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: c
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      paddingTop: 5
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      lineHeight: 1.3
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--text-inverse-muted)",
      lineHeight: 1.45,
      marginTop: 3
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    variant: "inverse",
    size: "sm",
    onClick: onClose,
    style: {
      boxShadow: "none",
      background: "transparent"
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  placement = "top",
  style
}) {
  const [on, setOn] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 10px)",
      left: "50%",
      tx: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 10px)",
      left: "50%",
      tx: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 10px)",
      top: "50%",
      tx: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 10px)",
      top: "50%",
      tx: "translateY(-50%)"
    }
  }[placement];
  const {
    tx,
    ...p
  } = pos;
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...p,
      transform: tx + (on ? "" : placement === "top" ? " translateY(4px)" : placement === "bottom" ? " translateY(-4px)" : ""),
      opacity: on ? 1 : 0,
      pointerEvents: "none",
      zIndex: 50,
      whiteSpace: "nowrap",
      fontFamily: "var(--font-ui)",
      padding: "7px 12px",
      borderRadius: "var(--radius-sm)",
      background: "var(--ocean-950)",
      color: "#fff",
      fontSize: 12.5,
      fontWeight: 600,
      boxShadow: "var(--shadow-md)",
      transition: "opacity var(--duration-base) var(--ease-flow), transform var(--duration-base) var(--ease-flow)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const [hover, setHover] = React.useState(false);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-ui)",
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: name,
    value: value,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      marginTop: description ? 1 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 7,
      background: on ? "var(--ocean-700)" : "var(--surface-card)",
      boxShadow: on ? "none" : "inset 0 0 0 1.5px " + (hover ? "var(--lagoon-500)" : "var(--border-strong)"),
      transition: "all var(--duration-base) var(--ease-flow)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "#fff",
    style: {
      transform: on ? "scale(1)" : "scale(0)",
      transition: "transform var(--duration-base) var(--ease-spring)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)",
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const labelStyle = {
  fontFamily: "var(--font-ui)",
  fontWeight: 700,
  fontSize: 13,
  color: "var(--text-strong)"
};
const hintStyle = err => ({
  fontSize: 12.5,
  color: err ? "var(--status-danger)" : "var(--text-muted)",
  lineHeight: 1.4
});
function Input({
  label,
  hint,
  error,
  iconLeft,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = "text",
  multiline = false,
  rows = 4,
  disabled = false,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "in-" + label.replace(/\W+/g, "-").toLowerCase() : undefined);
  const ring = error ? "0 0 0 3px rgba(229,72,77,.22)" : "var(--focus-ring)";
  const border = error ? "var(--status-danger)" : focus ? "var(--border-focus)" : "var(--border-subtle)";
  const El = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: multiline ? "flex-start" : "center"
    }
  }, iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: 18,
    color: focus ? "var(--lagoon-600)" : "var(--text-subtle)",
    style: {
      position: "absolute",
      left: 16,
      top: multiline ? 15 : undefined,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement(El, {
    id: fid,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      minHeight: multiline ? undefined : 48,
      padding: multiline ? "13px 16px" : "0 16px",
      paddingLeft: iconLeft ? 44 : 16,
      border: "1.5px solid " + border,
      borderRadius: multiline ? "var(--radius-md)" : "var(--radius-md)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      color: "var(--text-strong)",
      outline: "none",
      resize: multiline ? "vertical" : undefined,
      boxShadow: focus ? ring : "var(--shadow-xs)",
      transition: "border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)",
      lineHeight: 1.5
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const [hover, setHover] = React.useState(false);
  const on = checked !== undefined ? checked : inner;
  const toggle = e => {
    if (disabled) return;
    if (checked === undefined) setInner(true);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-ui)",
      display: "inline-flex",
      alignItems: description ? "flex-start" : "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      marginTop: description ? 1 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      background: on ? "var(--ocean-700)" : "var(--surface-card)",
      boxShadow: on ? "none" : "inset 0 0 0 1.5px " + (hover ? "var(--lagoon-500)" : "var(--border-strong)"),
      transition: "all var(--duration-base) var(--ease-flow)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: on ? 8 : 0,
      height: on ? 8 : 0,
      borderRadius: "50%",
      background: "#fff",
      transition: "all var(--duration-base) var(--ease-spring)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)",
      lineHeight: 1.4
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      color: "var(--text-muted)",
      lineHeight: 1.45
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const labelStyle = {
  fontFamily: "var(--font-ui)",
  fontWeight: 700,
  fontSize: 13,
  color: "var(--text-strong)"
};
const hintStyle = err => ({
  fontSize: 12.5,
  color: err ? "var(--status-danger)" : "var(--text-muted)",
  lineHeight: 1.4
});
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const fid = id || (label ? "sel-" + label.replace(/\W+/g, "-").toLowerCase() : undefined);
  const border = error ? "var(--status-danger)" : focus ? "var(--border-focus)" : "var(--border-subtle)";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: fid,
    value: value,
    defaultValue: value === undefined ? defaultValue ?? (placeholder ? "" : undefined) : undefined,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: 48,
      padding: "0 44px 0 16px",
      border: "1.5px solid " + border,
      borderRadius: "var(--radius-md)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      fontFamily: "var(--font-ui)",
      fontSize: 15,
      color: "var(--text-strong)",
      outline: "none",
      cursor: "pointer",
      boxShadow: focus ? "var(--focus-ring)" : "var(--shadow-xs)",
      transition: "all var(--duration-base) var(--ease-standard)"
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--text-muted)",
    style: {
      position: "absolute",
      right: 16,
      pointerEvents: "none",
      transform: focus ? "rotate(180deg)" : "none",
      transition: "transform var(--duration-base) var(--ease-flow)"
    }
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: hintStyle(!!error)
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = "md",
  style
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [w, h] = size === "sm" ? [36, 20] : [48, 28];
  const k = h - 6;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-ui)",
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: "relative",
      width: w,
      height: h,
      flex: "none",
      border: 0,
      padding: 0,
      borderRadius: 999,
      cursor: "inherit",
      background: on ? "var(--fern-500)" : "var(--ink-200)",
      boxShadow: on ? "none" : "var(--shadow-inset)",
      transition: "background var(--duration-slow) var(--ease-flow), box-shadow var(--duration-slow) var(--ease-flow)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? w - k - 3 : 3,
      width: k,
      height: k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 2px 6px rgba(0,31,64,.25)",
      transition: "left var(--duration-slow) var(--ease-spring)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "pill",
  theme = "light",
  style
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const cur = value !== undefined ? value : inner;
  const refs = React.useRef({});
  const [ind, setInd] = React.useState({
    left: 0,
    width: 0
  });
  React.useLayoutEffect(() => {
    const el = refs.current[cur];
    if (el) setInd({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [cur, items.length]);
  const pick = id => {
    if (value === undefined) setInner(id);
    onChange && onChange(id);
  };
  const dark = theme === "dark";
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      position: "relative",
      display: "inline-flex",
      gap: pill ? 4 : 28,
      padding: pill ? 5 : 0,
      borderRadius: "var(--radius-pill)",
      background: pill ? dark ? "rgba(255,255,255,.08)" : "var(--ink-100)" : "transparent",
      boxShadow: pill ? "none" : "inset 0 -1.5px 0 " + (dark ? "var(--border-inverse)" : "var(--border-subtle)"),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: ind.left,
      width: ind.width,
      top: pill ? 5 : undefined,
      bottom: pill ? 5 : 0,
      height: pill ? undefined : 3,
      borderRadius: 999,
      background: pill ? dark ? "rgba(255,255,255,.95)" : "var(--surface-card)" : "var(--lagoon-500)",
      boxShadow: pill ? "var(--shadow-sm)" : "none",
      transition: "left var(--duration-slow) var(--ease-flow), width var(--duration-slow) var(--ease-flow)"
    }
  }), items.map(it => {
    const on = it.id === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      ref: el => refs.current[it.id] = el,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(it.id),
      style: {
        position: "relative",
        zIndex: 1,
        border: 0,
        background: "transparent",
        cursor: "pointer",
        height: pill ? 36 : 44,
        padding: pill ? "0 18px" : 0,
        fontFamily: "var(--font-ui)",
        fontSize: 14.5,
        fontWeight: 700,
        color: on ? dark && !pill ? "#fff" : dark ? "var(--ocean-900)" : "var(--text-strong)" : dark ? "var(--text-inverse-muted)" : "var(--text-muted)",
        transition: "color var(--duration-base) var(--ease-standard)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        whiteSpace: "nowrap"
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        fontWeight: 600,
        opacity: 0.6
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// site/build/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/build/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
function About({
  go
}) {
  const {
    Tag,
    Card,
    Button,
    Tabs
  } = DS;
  const D = window.BHBP_DATA;
  const [t, setT] = React.useState("exp");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 48px"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) 380px",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement(Display, {
    size: 56,
    style: {
      marginTop: 16
    }
  }, "A project manager's rigor. A builder's bias to ship."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      margin: "22px 0 0",
      maxWidth: 600
    }
  }, "Placeholder bio \u2014 two or three sentences on where you started, what you build now, and what kind of problems you want next. Written in first person, plain and specific.")), /*#__PURE__*/React.createElement(ImageSlot, {
    h: 420,
    radius: 40,
    dark: true,
    label: "Portrait"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "24px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Tabs, {
    variant: "underline",
    items: [{
      id: "exp",
      label: "Experience"
    }, {
      id: "skills",
      label: "Skills"
    }],
    value: t,
    onChange: setT
  }), t === "exp" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      marginTop: 28
    }
  }, D.timeline.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.years,
    variant: "outline",
    style: {
      display: "grid",
      gridTemplateColumns: "180px 1fr",
      gap: 24,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      color: "var(--text-accent)"
    }
  }, r.years), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22
    }
  }, r.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 500,
      fontSize: 14.5,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, r.org), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 15
    }
  }, r.note))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 28
    }
  }, D.skills.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s))))), /*#__PURE__*/React.createElement(CTABand, {
    go: go
  }));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
function CaseStudy({
  id,
  go,
  openCase
}) {
  const {
    Button,
    Badge,
    Tag,
    Card,
    Icon,
    Dialog,
    Input
  } = DS;
  const D = window.BHBP_DATA;
  const w = D.work.find(x => x.id === id) || D.work[0];
  const next = D.work[(D.work.indexOf(w) + 1) % D.work.length];
  const [open, setOpen] = React.useState(false);
  const facts = [["Role", "Lead PM"], ["Team", "6 eng · 1 design · 1 data"], ["Timeline", "2 quarters"], ["Year", w.year]];
  const sections = [["The problem", "What was broken, for whom, and how we knew. Replace with the real story — keep it to three or four sentences."], ["What I did", "The decisions that mattered: what we cut, what we tested, how the team aligned. Name trade-offs plainly."], ["What changed", "The measurable result and what it unlocked next. Lead with the number, then the human impact."]];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "48px 0 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("work"),
    style: {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      margin: "28px 0 16px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, w.kicker), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, w.status)), /*#__PURE__*/React.createElement(Display, {
    size: 52
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      margin: "18px 0 0"
    }
  }, w.summary))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ImageSlot, {
    h: 440,
    radius: 40,
    label: "Hero product image"
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Container, {
    narrow: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 1,
      background: "var(--border-subtle)",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "inset 0 0 0 1px var(--border-subtle)"
    }
  }, facts.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      background: "var(--surface-card)",
      padding: "18px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      color: "var(--text-strong)",
      marginTop: 4,
      fontSize: 14.5
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    padding: "lg",
    style: {
      margin: "40px 0",
      background: "var(--gradient-aurora)",
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 72,
      letterSpacing: "-0.04em",
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement(FlowText, null, w.metric)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      fontSize: 18
    }
  }, w.metricLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-inverse-muted)",
      fontSize: 14.5,
      marginTop: 4
    }
  }, "Sample metric \u2014 replace with the verified result."))), sections.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: 24,
      padding: "28px 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-accent)",
      letterSpacing: ".14em",
      paddingTop: 6
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: 17
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      padding: "8px 0 32px"
    }
  }, w.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconLeft: "file-text",
    onClick: () => setOpen(true)
  }, "Request full write-up"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: "arrow-right",
    onClick: () => openCase(next.id)
  }, "Next: ", next.title)))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Request the full write-up",
    description: "I share detailed case studies one-on-one. Leave an email and I'll send it over.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false)
    }, "Send it"))
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    iconLeft: "mail",
    placeholder: "you@company.com"
  })));
}
window.CaseStudy = CaseStudy;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
function Nav({
  page,
  go,
  dark
}) {
  const {
    Logo,
    Button
  } = DS;
  const [sc, setSc] = React.useState(false);
  React.useEffect(() => {
    const f = () => setSc(window.scrollY > 24);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const solid = sc || !dark;
  const links = [["home", "Home"], ["work", "Work"], ["about", "About"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      background: sc ? dark ? "var(--glass-bg-dark)" : "var(--glass-bg)" : "transparent",
      backdropFilter: sc ? "var(--glass-blur)" : "none",
      WebkitBackdropFilter: sc ? "var(--glass-blur)" : "none",
      transition: "background var(--duration-slow) var(--ease-flow)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go("home"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 40,
    theme: dark ? "dark" : "light"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      padding: 5,
      borderRadius: 999,
      background: dark ? "rgba(255,255,255,.07)" : "rgba(0,62,125,.05)",
      boxShadow: "inset 0 0 0 1px " + (dark ? "var(--border-inverse)" : "var(--border-subtle)")
    }
  }, links.map(([k, l]) => {
    const on = page === k || k === "work" && page === "case";
    return /*#__PURE__*/React.createElement("a", {
      key: k,
      onClick: () => go(k),
      style: {
        cursor: "pointer",
        padding: "8px 18px",
        borderRadius: 999,
        fontFamily: "var(--font-ui)",
        fontWeight: 600,
        fontSize: 14.5,
        color: on ? dark ? "var(--ocean-900)" : "#fff" : dark ? "var(--text-inverse-muted)" : "var(--text-body)",
        background: on ? dark ? "#fff" : "var(--ocean-700)" : "transparent",
        transition: "all var(--duration-base) var(--ease-flow)"
      }
    }, l);
  })), /*#__PURE__*/React.createElement(Button, {
    variant: dark ? "inverse" : "primary",
    size: "sm",
    iconRight: "arrow-right",
    onClick: () => go("contact")
  }, "Let's talk")));
}
function Footer({
  go
}) {
  const {
    Logo,
    IconButton
  } = DS;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse-muted)",
      padding: "56px 0 40px"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    theme: "dark",
    tone: "navy",
    size: 44
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5
    }
  }, "Product management for teams that would rather ship the right thing than the next thing.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--lagoon-300)"
    }
  }, "Site"), [["work", "Work"], ["about", "About"], ["contact", "Contact"]].map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    onClick: () => go(k),
    style: {
      color: "#fff",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontSize: 14
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--lagoon-300)"
    }
  }, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    label: "LinkedIn",
    variant: "inverse",
    size: "sm",
    href: "https://www.linkedin.com/in/william-hayes-pmp/"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Email",
    variant: "inverse",
    size: "sm",
    onClick: () => go("contact")
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "R\xE9sum\xE9",
    variant: "inverse",
    size: "sm"
  }))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Bill Hayes Build Products"), /*#__PURE__*/React.createElement("span", null, "BHBP")));
}
function CTABand({
  go
}) {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      background: "var(--gradient-aurora)",
      padding: "56px 56px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32,
      flexWrap: "wrap",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: 40,
      letterSpacing: "-0.03em"
    }
  }, "Have a product that needs building?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-inverse-muted)",
      margin: "10px 0 0",
      fontSize: 18
    }
  }, "Roles, advisory, or a 30-minute problem-solving call.")), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go("contact")
  }, "Start a conversation"))));
}
Object.assign(window, {
  Nav,
  Footer,
  CTABand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
function Contact() {
  const {
    Input,
    Select,
    Checkbox,
    Button,
    Toast,
    Card,
    IconButton
  } = DS;
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [err, setErr] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (!/.+@.+\..+/.test(email)) {
      setErr("That doesn't look like an email yet.");
      return;
    }
    setErr("");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-mist)",
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement(Display, {
    size: 56,
    style: {
      marginTop: 16
    }
  }, "Let's build something worth using."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      margin: "20px 0 28px"
    }
  }, "Open to product leadership roles, advisory work, and good problems. I reply within two business days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "linkedin",
    label: "LinkedIn",
    variant: "outline",
    href: "https://www.linkedin.com/in/william-hayes-pmp/"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "download",
    label: "R\xE9sum\xE9",
    variant: "outline"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    iconLeft: "mail",
    placeholder: "you@company.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    error: err
  })), /*#__PURE__*/React.createElement(Select, {
    label: "What's this about?",
    placeholder: "Choose one",
    options: ["Product leadership role", "Advisory / consulting", "Speaking", "Just saying hi"]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 5,
    placeholder: "A few lines is plenty."
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the case study pack",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "accent",
    size: "lg",
    iconRight: "send",
    fullWidth: true
  }, "Send message"))), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    title: "Message sent",
    message: "Thanks \u2014 I'll reply within two business days.",
    onClose: () => setSent(false)
  }))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function Home({
  go,
  openCase
}) {
  const {
    Button,
    Card,
    Icon
  } = DS;
  const D = window.BHBP_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-aurora)",
      marginTop: -72,
      paddingTop: 72 + 72,
      paddingBottom: 96,
      color: "#fff",
      borderRadius: "0 0 48px 48px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "Product Manager \xB7 PMP"), /*#__PURE__*/React.createElement(Display, {
    dark: true,
    size: 72,
    style: {
      marginTop: 22
    }
  }, "Products, ", /*#__PURE__*/React.createElement(FlowText, null, "built"), " with intent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--text-inverse-muted)",
      margin: "22px 0 34px",
      maxWidth: 520
    }
  }, "I'm Bill Hayes. I turn fuzzy problems into shipped products \u2014 aligning teams around outcomes, not output."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: "arrow-right",
    onClick: () => go("work")
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    iconLeft: "download",
    style: {
      background: "transparent",
      color: "#fff",
      boxShadow: "inset 0 0 0 1.5px rgba(255,255,255,.3)"
    }
  }, "R\xE9sum\xE9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, D.principles.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      borderRadius: 28,
      padding: 22,
      background: "rgba(255,255,255,.07)",
      boxShadow: "inset 0 0 0 1px var(--border-inverse)",
      backdropFilter: "blur(12px)",
      minHeight: 160,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 22,
    color: "var(--fern-300)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-inverse-muted)"
    }
  }, p.n)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 20
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-inverse-muted)",
      marginTop: 4,
      lineHeight: 1.45
    }
  }, p.d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      width: 12,
      height: 12,
      margin: -6,
      borderRadius: "50%",
      background: "var(--fern-300)",
      boxShadow: "0 0 0 8px rgba(47,198,140,.2), 0 0 30px rgba(47,198,140,.8)"
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0 72px"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 24,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      letterSpacing: "-0.03em",
      marginTop: 14
    }
  }, "Outcomes, not output.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => go("work")
  }, "All case studies")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: 24
    }
  }, D.work.slice(0, 3).map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    w: w,
    onOpen: openCase
  }))))), /*#__PURE__*/React.createElement(CTABand, {
    go: go
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Shared.jsx
try { (() => {
const DS = window.BHBPDesignSystem_d81dd5;
function Eyebrow({
  children,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: dark ? "var(--lagoon-300)" : "var(--text-accent)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: dark ? "var(--blush-300)" : "var(--blush-400)",
      boxShadow: "0 0 0 4px rgba(245,176,195,.25)"
    }
  }), children);
}
function Container({
  children,
  narrow,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      ...style
    }
  }, children);
}
function ImageSlot({
  label = "Product screenshot",
  h = 260,
  radius = 24,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: radius,
      background: dark ? "var(--gradient-deep)" : "var(--gradient-flow)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 16,
      bottom: 16,
      width: 1,
      background: "rgba(255,255,255,.18)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: 16,
      right: 16,
      height: 1,
      background: "rgba(255,255,255,.18)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.85)",
      background: "rgba(0,20,43,.35)",
      padding: "6px 12px",
      borderRadius: 999,
      backdropFilter: "blur(8px)"
    }
  }, label));
}
function Display({
  children,
  size = 64,
  dark,
  style
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "var(--tracking-display)",
      lineHeight: "var(--leading-tight)",
      color: dark ? "#fff" : "var(--text-strong)",
      margin: 0,
      ...style
    }
  }, children);
}
function FlowText({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: "linear-gradient(90deg,#9EDCEA,#F5B0C3)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, children);
}
function WorkCard({
  w,
  onOpen
}) {
  const {
    Card,
    Badge,
    Icon
  } = DS;
  return /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "none",
    onClick: () => onOpen(w.id)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10
    }
  }, /*#__PURE__*/React.createElement(ImageSlot, {
    h: 200,
    radius: 20,
    label: w.kicker
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, w.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, w.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      margin: "14px 0 8px"
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, w.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: "-0.03em",
      color: "var(--ocean-700)",
      lineHeight: 1
    }
  }, w.metric), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, w.metricLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "var(--lagoon-50)",
      color: "var(--ocean-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 18
  })))));
}
Object.assign(window, {
  DS,
  Eyebrow,
  Container,
  ImageSlot,
  Display,
  FlowText,
  WorkCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
function Work({
  openCase
}) {
  const {
    Tabs
  } = DS;
  const D = window.BHBP_DATA;
  const [f, setF] = React.useState("all");
  const cats = [["all", "All work"], ["ai", "AI"], ["plat", "Platforms"], ["grow", "Growth"]].map(([id, label]) => ({
    id,
    label,
    count: id === "all" ? D.work.length : D.work.filter(w => w.cat === id).length
  }));
  const list = D.work.filter(w => f === "all" || w.cat === f);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-mist)",
      padding: "72px 0 96px",
      minHeight: 800
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Case studies"), /*#__PURE__*/React.createElement(Display, {
    size: 56,
    style: {
      marginTop: 16,
      maxWidth: 720
    }
  }, "Problems I've been trusted with."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "32px 0 36px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: cats,
    value: f,
    onChange: setF
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,minmax(0,1fr))",
      gap: 24
    }
  }, list.map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    w: w,
    onOpen: openCase
  })))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// SAMPLE CONTENT — replace with real case studies, metrics and history.
window.BHBP_DATA = {
  work: [{
    id: "dispatch",
    cat: "plat",
    title: "Rebuilding field-service dispatch",
    kicker: "Platform · B2B SaaS",
    year: "2025",
    summary: "Replaced a spreadsheet-driven scheduling process with a rules-based dispatch engine used by 400+ technicians.",
    metric: "−31%",
    metricLabel: "time-to-assign",
    status: "Shipped",
    tags: ["Discovery", "Platform", "Ops"]
  }, {
    id: "assist",
    cat: "ai",
    title: "An AI co-pilot for support agents",
    kicker: "AI product · 0→1",
    year: "2024",
    summary: "Took an LLM drafting assistant from prototype to GA, with guardrails agents actually trusted.",
    metric: "+22%",
    metricLabel: "tickets per agent-hour",
    status: "Shipped",
    tags: ["AI", "0→1", "Experimentation"]
  }, {
    id: "onboard",
    cat: "grow",
    title: "Self-serve onboarding, rethought",
    kicker: "Growth · PLG",
    year: "2023",
    summary: "Cut a 9-step setup to 3 by questioning which steps mattered to activation.",
    metric: "+38%",
    metricLabel: "week-1 activation",
    status: "Shipped",
    tags: ["Growth", "Research", "UX"]
  }, {
    id: "billing",
    cat: "plat",
    title: "Usage-based billing migration",
    kicker: "Platform · Monetization",
    year: "2023",
    summary: "Moved 2,000 accounts from seats to usage pricing without a revenue dip.",
    metric: "0",
    metricLabel: "escalations at cutover",
    status: "Shipped",
    tags: ["Pricing", "Migration"]
  }],
  principles: [{
    n: "01",
    t: "Discover",
    d: "Talk to users before the roadmap does.",
    icon: "compass"
  }, {
    n: "02",
    t: "Define",
    d: "One clear problem, one measurable outcome.",
    icon: "target"
  }, {
    n: "03",
    t: "Build",
    d: "Small bets, shipped often, with the team.",
    icon: "layers"
  }, {
    n: "04",
    t: "Prove",
    d: "If we can't measure it, we didn't finish.",
    icon: "chart-line"
  }],
  timeline: [{
    years: "2022 — Now",
    role: "Senior Product Manager",
    org: "Company name",
    note: "Platform + AI products. Replace with real role."
  }, {
    years: "2019 — 2022",
    role: "Product Manager",
    org: "Company name",
    note: "Growth and onboarding. Replace with real role."
  }, {
    years: "2015 — 2019",
    role: "Project Manager, PMP",
    org: "Company name",
    note: "Delivery and program management. Replace with real role."
  }],
  skills: ["Product strategy", "Discovery", "Roadmapping", "AI/LLM products", "Experimentation", "Pricing", "Agile delivery", "Stakeholder alignment", "PMP"]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
