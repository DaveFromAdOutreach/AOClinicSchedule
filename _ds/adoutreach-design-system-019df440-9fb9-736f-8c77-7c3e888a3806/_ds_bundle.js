/* @ds-bundle: {"format":4,"namespace":"AdOutreachDesignSystem_019df4","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"ProgramCard","sourcePath":"components/marketing/ProgramCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"11b408ec9b96","components/display/Card.jsx":"96e7624b1444","components/display/Tag.jsx":"d0efc833b28e","components/feedback/Dialog.jsx":"b401176f4f1b","components/feedback/Toast.jsx":"5f2864626e2e","components/feedback/Tooltip.jsx":"c2b650f5f095","components/forms/Button.jsx":"e76b1c74d544","components/forms/Checkbox.jsx":"58826b8961cd","components/forms/IconButton.jsx":"f6ea903e00ef","components/forms/Input.jsx":"f2252657f116","components/forms/Radio.jsx":"634072275188","components/forms/Select.jsx":"c51c1eab3ab0","components/forms/Switch.jsx":"59874469836d","components/marketing/LogoStrip.jsx":"1713bb6d3b49","components/marketing/ProgramCard.jsx":"71ec7129941b","components/marketing/SectionHeading.jsx":"5be9ded7a161","components/marketing/TestimonialCard.jsx":"6e1746e2851d","components/navigation/Tabs.jsx":"32e92d4544ad","ui_kits/website/AboutPage.jsx":"65ae250b3fe0","ui_kits/website/ApplyPage.jsx":"db3bcaf2420d","ui_kits/website/Footer.jsx":"eda8f31cb129","ui_kits/website/Header.jsx":"4b6596f8c9b2","ui_kits/website/Hero.jsx":"cb03fc50a115","ui_kits/website/HomeSections.jsx":"705f6672e821","ui_kits/website/HomeSections2.jsx":"6d0f364ba10e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AdOutreachDesignSystem_019df4 = window.AdOutreachDesignSystem_019df4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function Badge({
  variant = "navy",
  size = "md",
  children,
  style
}) {
  const sizes = {
    sm: {
      padding: "3px 10px",
      fontSize: 11
    },
    md: {
      padding: "5px 14px",
      fontSize: 12
    }
  };
  const variants = {
    navy: {
      background: "var(--color-navy-900)",
      color: "#fff",
      border: "none"
    },
    gradient: {
      background: "var(--gradient-brand)",
      color: "#fff",
      border: "none"
    },
    teal: {
      background: "var(--color-teal-100)",
      color: "var(--color-teal-700)",
      border: "none"
    },
    lime: {
      background: "var(--color-lime-100)",
      color: "#2E7005",
      border: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1.5px solid var(--border-strong)"
    },
    success: {
      background: "rgba(46, 205, 104, 0.14)",
      color: "#1B8A44",
      border: "none"
    },
    warning: {
      background: "rgba(255, 178, 36, 0.16)",
      color: "#9A6706",
      border: "none"
    },
    danger: {
      background: "rgba(229, 72, 77, 0.12)",
      color: "var(--color-danger)",
      border: "none"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...(sizes[size] || sizes.md),
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = "light",
  interactive = false,
  padding = 28,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = interactive && hover;
  const variants = {
    light: {
      background: "var(--surface-card)",
      boxShadow: lifted ? "var(--shadow-lg)" : "var(--shadow-card)",
      border: "none",
      color: "var(--text-body)"
    },
    subtle: {
      background: "var(--surface-subtle)",
      boxShadow: "none",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-body)"
    },
    dark: {
      background: "var(--surface-dark-raised)",
      boxShadow: lifted ? "var(--shadow-lg)" : "none",
      border: "1px solid var(--border-on-dark)",
      color: "var(--text-inverse-muted)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      boxSizing: "border-box",
      cursor: interactive ? "pointer" : undefined,
      transform: lifted ? "translateY(-4px)" : "none",
      transition: "transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
      ...variants[variant],
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
  onRemove,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "6px 14px",
      borderRadius: "var(--radius-pill)",
      background: "var(--color-slate-50)",
      border: "1px solid var(--border-subtle)",
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      fontWeight: "var(--font-weight-medium)",
      color: "var(--text-body)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 17,
      height: 17,
      padding: 0,
      border: "none",
      borderRadius: "50%",
      background: hover ? "var(--color-slate-200)" : "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      transition: "background var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = false,
  onClose,
  title,
  children,
  footer,
  width = 520
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => e.key === "Escape" && onClose && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onClose && onClose(),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0, 22, 34, 0.62)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      zIndex: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-lg)",
      width: "100%",
      maxWidth: width,
      maxHeight: "85vh",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "24px 28px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: "var(--font-weight-bold)",
      color: "var(--text-heading)",
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement(CloseButton, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 28px 24px",
      overflowY: "auto",
      color: "var(--text-body)",
      fontSize: 15.5,
      lineHeight: 1.65
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 12,
      padding: "0 28px 26px"
    }
  }, footer)));
}
function CloseButton({
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 36,
      height: 36,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      borderRadius: "50%",
      background: hover ? "var(--color-slate-100)" : "var(--color-slate-50)",
      color: "var(--color-navy-900)",
      cursor: "pointer",
      transition: "background var(--duration-fast)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TOAST_ICONS = {
  success: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-lime-500)",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-teal-400)",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9.5",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 7.5v.5"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#FF8A8E",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9.5",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16.5v.5"
  }))
};
function Toast({
  open = true,
  variant = "success",
  message,
  actionLabel,
  onAction,
  onClose,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      background: "var(--color-navy-900)",
      color: "#fff",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      padding: "14px 18px",
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.5,
      maxWidth: 440,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex"
    }
  }, TOAST_ICONS[variant] || TOAST_ICONS.info), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--color-teal-400)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--font-weight-bold)",
      fontSize: 13.5,
      cursor: "pointer",
      padding: 0,
      whiteSpace: "nowrap"
    }
  }, actionLabel), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "rgba(255,255,255,.65)",
      cursor: "pointer",
      padding: 2,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  side = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 9px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 9px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 9px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 9px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos[side],
      background: "var(--color-navy-900)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      fontWeight: "var(--font-weight-medium)",
      lineHeight: 1.45,
      padding: "7px 12px",
      borderRadius: 8,
      whiteSpace: "nowrap",
      boxShadow: "var(--shadow-md)",
      zIndex: 500,
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BTN_SIZES = {
  sm: {
    padding: "9px 22px",
    fontSize: 12
  },
  md: {
    padding: "14px 32px",
    fontSize: 13
  },
  lg: {
    padding: "18px 42px",
    fontSize: 15
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = BTN_SIZES[size] || BTN_SIZES.md;
  const variants = {
    primary: {
      background: "var(--gradient-brand)",
      color: "#fff",
      border: "none",
      boxShadow: hover && !disabled ? "var(--shadow-glow-teal)" : "0 6px 20px rgba(0, 167, 178, 0.22)"
    },
    secondary: {
      background: hover && !disabled ? "var(--color-navy-800)" : "var(--color-navy-900)",
      color: "#fff",
      border: "none",
      boxShadow: hover && !disabled ? "var(--shadow-md)" : "var(--shadow-sm)"
    },
    outline: {
      background: hover && !disabled ? "var(--color-teal-100)" : "transparent",
      color: "var(--color-teal-600)",
      border: "2px solid var(--color-teal-500)"
    },
    ghost: {
      background: hover && !disabled ? "var(--color-slate-50)" : "transparent",
      color: "var(--color-teal-600)",
      border: "none",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
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
      gap: 10,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "var(--letter-spacing-button)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: press ? "scale(0.98)" : hover && !disabled ? "var(--hover-lift)" : "none",
      transition: "all var(--duration-fast) var(--ease-out)",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      ...s,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: 7,
      border: checked ? "none" : `1.5px solid ${hover && !disabled ? "var(--color-teal-500)" : "var(--border-strong)"}`,
      background: checked ? "var(--color-teal-500)" : "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--duration-fast) var(--ease-out)",
      marginTop: 1
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const IB_SIZES = {
  sm: 34,
  md: 44,
  lg: 54
};
function IconButton({
  variant = "subtle",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = IB_SIZES[size] || IB_SIZES.md;
  const variants = {
    solid: {
      background: hover && !disabled ? "var(--color-navy-800)" : "var(--color-navy-900)",
      color: "#fff",
      border: "none"
    },
    gradient: {
      background: "var(--gradient-brand)",
      color: "#fff",
      border: "none",
      boxShadow: hover && !disabled ? "var(--shadow-glow-teal)" : "0 4px 14px rgba(0, 167, 178, 0.22)"
    },
    subtle: {
      background: hover && !disabled ? "var(--color-slate-100)" : "var(--color-slate-50)",
      color: "var(--color-navy-900)",
      border: "1px solid var(--border-subtle)"
    },
    ghost: {
      background: hover && !disabled ? "var(--color-slate-50)" : "transparent",
      color: "var(--color-navy-900)",
      border: "none"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: hover && !disabled ? "var(--hover-lift)" : "none",
      transition: "all var(--duration-fast) var(--ease-out)",
      flex: "none",
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  multiline = false,
  rows = 4,
  hint,
  error,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 400,
    color: "var(--text-heading)",
    background: disabled ? "var(--color-slate-50)" : "#fff",
    border: `1.5px solid ${error ? "var(--color-danger)" : focus ? "var(--color-teal-500)" : "var(--border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: "13px 16px",
    outline: "none",
    boxShadow: focus ? "var(--focus-ring)" : "none",
    transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
    resize: multiline ? "vertical" : undefined,
    cursor: disabled ? "not-allowed" : undefined
  };
  const shared = {
    id,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)"
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, shared)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, shared)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  name,
  disabled = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: 11,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "50%",
      border: checked ? "6.5px solid var(--color-teal-500)" : `1.5px solid ${hover && !disabled ? "var(--color-teal-500)" : "var(--border-strong)"}`,
      background: "#fff",
      boxSizing: "border-box",
      transition: "all var(--duration-fast) var(--ease-out)",
      marginTop: 1
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)",
      lineHeight: 1.55
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  hint,
  error,
  required = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 14,
      fontWeight: "var(--font-weight-semibold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)"
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value === undefined && placeholder ? "" : value,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: value ? "var(--text-heading)" : "var(--text-muted)",
      background: disabled ? "var(--color-slate-50)" : "#fff",
      border: `1.5px solid ${error ? "var(--color-danger)" : focus ? "var(--color-teal-500)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      padding: "13px 44px 13px 16px",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--duration-fast), box-shadow var(--duration-fast)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(opt => {
    const o = typeof opt === "string" ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: o.value,
      value: o.value
    }, o.label);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-slate-500)",
    strokeWidth: "2.25",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 46,
      height: 26,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      background: checked ? "var(--gradient-brand)" : "var(--color-slate-200)",
      position: "relative",
      transition: "background var(--duration-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 4px rgba(0, 36, 53, 0.25)",
      transition: "left var(--duration-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
function LogoStrip({
  label,
  items = [],
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      alignItems: "center",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "var(--letter-spacing-overline)",
      textTransform: "uppercase",
      color: onDark ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "18px 44px",
      alignItems: "center",
      justifyContent: "center"
    }
  }, items.map((item, i) => {
    const it = typeof item === "string" ? {
      name: item
    } : item;
    return it.src ? /*#__PURE__*/React.createElement("img", {
      key: i,
      src: it.src,
      alt: it.name,
      style: {
        height: 30,
        opacity: 0.75,
        filter: onDark ? "brightness(0) invert(1)" : "grayscale(1)"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      key: i,
      title: "Placeholder \u2014 replace with the real logo asset",
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 19,
        fontWeight: "var(--font-weight-bold)",
        letterSpacing: "-0.01em",
        color: onDark ? "rgba(255,255,255,0.55)" : "var(--color-slate-300)",
        whiteSpace: "nowrap"
      }
    }, it.name);
  })));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProgramCard.jsx
try { (() => {
function ProgramCard({
  title,
  description,
  ctaLabel = "Learn More",
  onCta,
  media,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    onClick: onCta,
    padding: 0,
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: media ? "var(--color-slate-100)" : "var(--gradient-brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      flex: "none"
    }
  }, media || /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 40,
      color: "rgba(255,255,255,0.9)",
      letterSpacing: "-0.02em",
      textShadow: "0 4px 18px rgba(0,36,53,.25)"
    }
  }, (title || "A").trim().charAt(0).toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 26px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 21,
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "-0.01em",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.65,
      color: "var(--text-body)"
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontSize: 12.5,
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "var(--letter-spacing-button)",
      textTransform: "uppercase",
      color: hover ? "var(--color-teal-500)" : "var(--color-teal-600)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, ctaLabel, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--duration-fast) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))))));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = "center",
  onDark = false,
  style
}) {
  // Renders `accent` (a phrase inside title) with the brand gradient.
  // If `accent` is given and found in title, split around it; else title renders plain.
  let parts = null;
  if (accent && typeof title === "string" && title.includes(accent)) {
    const i = title.indexOf(accent);
    parts = [title.slice(0, i), accent, title.slice(i + accent.length)];
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: 760,
      margin: align === "center" ? "0 auto" : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: "var(--font-weight-bold)",
      letterSpacing: "var(--letter-spacing-overline)",
      textTransform: "uppercase",
      color: onDark ? "var(--color-lime-500)" : "var(--color-teal-600)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--font-size-h2)",
      fontWeight: "var(--font-weight-extrabold)",
      lineHeight: "var(--line-height-display)",
      letterSpacing: "var(--letter-spacing-display)",
      color: onDark ? "var(--text-inverse)" : "var(--text-heading)"
    }
  }, parts ? /*#__PURE__*/React.createElement(React.Fragment, null, parts[0], /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--gradient-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, parts[1]), parts[2]) : title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--font-size-body-lg)",
      lineHeight: "var(--line-height-body)",
      color: onDark ? "var(--text-inverse-muted)" : "var(--text-body)",
      maxWidth: 640
    }
  }, sub));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  headline,
  quote,
  name,
  role,
  avatarSrc,
  variant = "light",
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: variant,
    padding: 30,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, headline && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: "var(--font-weight-bold)",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: variant === "dark" ? "var(--text-inverse)" : "var(--text-heading)"
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.65,
      color: variant === "dark" ? "var(--text-inverse-muted)" : "var(--text-body)"
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 4
    }
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: name,
    style: {
      width: 46,
      height: 46,
      borderRadius: "50%",
      objectFit: "cover",
      border: "2.5px solid #fff",
      boxShadow: "var(--shadow-sm)",
      flex: "none"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 46,
      height: 46,
      borderRadius: "50%",
      flex: "none",
      background: "var(--gradient-brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 17
    }
  }, (name || "?").trim().charAt(0).toUpperCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      fontWeight: "var(--font-weight-bold)",
      color: variant === "dark" ? "var(--text-inverse)" : "var(--text-heading)"
    }
  }, name), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: variant === "dark" ? "var(--text-inverse-muted)" : "var(--text-muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  variant = "pill",
  style
}) {
  const activeKey = active !== undefined ? active : tabs[0] && (typeof tabs[0] === "string" ? tabs[0] : tabs[0].key);
  const isPill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: isPill ? 4 : 26,
      background: isPill ? "var(--color-slate-100)" : "transparent",
      borderRadius: isPill ? "var(--radius-pill)" : 0,
      padding: isPill ? 5 : 0,
      borderBottom: isPill ? "none" : "1.5px solid var(--border-subtle)",
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === "string" ? {
      key: t,
      label: t
    } : t;
    const on = tab.key === activeKey;
    return /*#__PURE__*/React.createElement(TabItem, {
      key: tab.key,
      tab: tab,
      on: on,
      isPill: isPill,
      onChange: onChange
    });
  }));
}
function TabItem({
  tab,
  on,
  isPill,
  onChange
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": on,
    onClick: () => onChange && onChange(tab.key),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: on ? "var(--font-weight-bold)" : "var(--font-weight-medium)",
      color: on ? "var(--color-navy-900)" : hover ? "var(--color-navy-700)" : "var(--text-muted)",
      background: isPill ? on ? "#fff" : "transparent" : "transparent",
      border: "none",
      borderRadius: isPill ? "var(--radius-pill)" : 0,
      padding: isPill ? "9px 20px" : "0 0 12px",
      boxShadow: isPill && on ? "var(--shadow-sm)" : "none",
      borderBottom: !isPill ? `2.5px solid ${on ? "var(--color-teal-500)" : "transparent"}` : "none",
      marginBottom: !isPill ? -1.5 : 0,
      cursor: "pointer",
      transition: "all var(--duration-fast) var(--ease-out)",
      whiteSpace: "nowrap"
    }
  }, tab.label);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
window.AOAboutPageInit = DS => {
  const {
    SectionHeading,
    Card,
    Badge,
    Button
  } = DS;
  function AboutPage({
    onApply
  }) {
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "About Us"
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--gradient-navy)",
        padding: "80px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "gradient"
    }, "About Us"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 50,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1.12,
        color: "#fff"
      }
    }, "Empowering Entrepreneurs Through", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Value-Driven Video")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-inverse-muted)"
      }
    }, "\"I wake up every day excited to make AdOutreach have a ripple effect large enough to make a dent in the Universe.\" \u2014 Aleric Heck"))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        padding: "88px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: 60,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/aleric-heck.jpg",
      alt: "Aleric Heck",
      style: {
        width: "100%",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)",
        position: "sticky",
        top: 110
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "left",
      title: "The Story Behind AdOutreach",
      accent: "AdOutreach"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.75
      }
    }, "I knew YouTube ads were the BIG THING I'd been hoping for. So I created AdOutreach and quickly drove millions of downloads for my clients. In 2016 at HubSpot Inbound, I discovered the world of online marketing. I knew an even better thing when I saw it, and AdOutreach started driving traffic to funnels with YouTube ads."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.75
      }
    }, "I vaulted from serving only mobile app developers to working with companies offering all kinds of products and services. I scaled up a small team. Suddenly, we're doing $50,000 to $70,000 a month\u2026"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.75
      }
    }, "But after a year, in 2018, it hit me \u2014 the traditional agency model was fundamentally flawed. Too often, you're left in the dark, clueless about who's steering your ad campaigns. So we began teaching our secret sauce. Our clients loved it because now they could ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)"
      }
    }, "take back control over their marketing"), ", the lifeblood of their business \u2013 but with our help and expertise guiding the way."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 14,
        marginTop: 10
      }
    }, [["585k+", "AppFind subscribers"], ["8-Figure", "company built"], ["3× INC 5000", "fastest-growing"]].map(([k, t]) => /*#__PURE__*/React.createElement(Card, {
      key: k,
      variant: "subtle",
      padding: 18,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 21,
        color: "var(--color-navy-900)"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        marginTop: 3
      }
    }, t)))), /*#__PURE__*/React.createElement(Button, {
      onClick: onApply,
      style: {
        alignSelf: "flex-start",
        marginTop: 10
      }
    }, "Work With Us")))));
  }
  return AboutPage;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ApplyPage.jsx
try { (() => {
window.AOApplyPageInit = DS => {
  const {
    SectionHeading,
    Card,
    Input,
    Select,
    Radio,
    Checkbox,
    Button
  } = DS;
  function ApplyPage({
    onSubmitted
  }) {
    const [form, setForm] = React.useState({
      name: "",
      email: "",
      phone: "",
      industry: "",
      stage: "",
      consent: true
    });
    const [errors, setErrors] = React.useState({});
    const set = k => v => setForm(f => ({
      ...f,
      [k]: v
    }));
    const submit = () => {
      const e = {};
      if (!form.name.trim()) e.name = "Please enter your name";
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email";
      if (!form.phone.trim()) e.phone = "Please enter your phone number";
      setErrors(e);
      if (Object.keys(e).length === 0) onSubmitted();
    };
    return /*#__PURE__*/React.createElement("main", {
      "data-screen-label": "Apply / Book a Call",
      style: {
        background: "var(--surface-subtle)",
        minHeight: "60vh"
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--gradient-navy)",
        padding: "72px 0 150px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 44,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        color: "#fff"
      }
    }, "Book Your Free", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Video Discovery Call")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--text-inverse-muted)",
        maxWidth: 560
      }
    }, "Map out your custom YouTube Ads and Client Acquisition Roadmap with one of our specialists."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "0 0 96px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        margin: "-96px auto 0",
        padding: "0 var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 36,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      required: true,
      placeholder: "Your full name",
      value: form.name,
      onChange: set("name"),
      error: errors.name
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@company.com",
      value: form.email,
      onChange: set("email"),
      error: errors.email
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      type: "tel",
      required: true,
      placeholder: "+1 (555) 000-0000",
      value: form.phone,
      onChange: set("phone"),
      error: errors.phone
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Industry",
      placeholder: "Choose one\u2026",
      options: ["Coaching", "Consulting", "Agency", "E-commerce", "SaaS", "Other"],
      value: form.industry,
      onChange: set("industry")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-heading)"
      }
    }, "Where is your business today?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "stage",
      label: "Already running paid ads \u2014 ready to scale",
      checked: form.stage === "scale",
      onChange: () => set("stage")("scale")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "stage",
      label: "Consistent revenue, new to YouTube Ads",
      checked: form.stage === "new",
      onChange: () => set("stage")("new")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "stage",
      label: "Building my offer & foundations",
      checked: form.stage === "found",
      onChange: () => set("stage")("found")
    }))), /*#__PURE__*/React.createElement(Checkbox, {
      label: "Send me the free YouTube Ads workshop before my call",
      checked: form.consent,
      onChange: set("consent")
    }), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      fullWidth: true,
      onClick: submit
    }, "Schedule Your Call Now"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)",
        textAlign: "center"
      }
    }, "Free 30-minute session \xB7 no obligation")))));
  }
  return ApplyPage;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ApplyPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
window.AOFooterInit = DS => {
  const {
    IconButton
  } = DS;
  const SOCIAL = [{
    label: "YouTube",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m10 15 5-3-5-3z"
    }))
  }, {
    label: "Facebook",
    icon: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })
  }, {
    label: "LinkedIn",
    icon: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      width: "4",
      height: "12",
      x: "2",
      y: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    }))
  }];
  const FOOTER_LINKS = ["Home", "Media & Press", "Terms & Conditions", "Privacy Policy", "Disclaimer", "Contact Us"];
  function Footer({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      "data-screen-label": "Footer",
      style: {
        background: "var(--surface-darker)",
        padding: "72px 0 40px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        color: "#fff",
        fontSize: 25,
        fontWeight: 700,
        letterSpacing: "-0.01em"
      }
    }, "Want Access to Our Free,", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Value-Packed Content?")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: "var(--text-inverse-muted)"
      }
    }, "Follow Us on Social Media:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14
      }
    }, SOCIAL.map(s => /*#__PURE__*/React.createElement(IconButton, {
      key: s.label,
      variant: "gradient",
      size: "lg",
      "aria-label": s.label
    }, /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, s.icon)))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "rgba(255,255,255,0.4)"
      }
    }, "Social icons are Lucide substitutes \u2014 original site uses custom bold SVG buttons (incl. Pinterest)")), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-on-dark)",
        paddingTop: 36,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/adoutreach-logo-white.png",
      alt: "AdOutreach",
      style: {
        height: 34
      }
    }), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 26px",
        justifyContent: "center"
      }
    }, FOOTER_LINKS.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav("home");
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        color: "var(--text-inverse-muted)",
        textDecoration: "none"
      }
    }, l))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        color: "rgba(255,255,255,0.38)"
      }
    }, "\xA9 2026 AdOutreach \xB7 hello@adoutreach.com"))));
  }
  return Footer;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
window.AOHeaderInit = DS => {
  const {
    Button
  } = DS;
  const NAV_ITEMS = [{
    key: "about",
    label: "About Us"
  }, {
    key: "stories",
    label: "Success Stories"
  }, {
    key: "programs",
    label: "Programs"
  }, {
    key: "products",
    label: "Products"
  }, {
    key: "press",
    label: "Media & Press"
  }, {
    key: "careers",
    label: "Careers"
  }, {
    key: "podcast",
    label: "Podcast"
  }];
  function NavLink({
    item,
    active,
    onClick,
    style
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onClick(item.key);
      },
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: active ? 700 : 500,
        color: active || hover ? "var(--color-teal-600)" : "var(--color-navy-900)",
        textDecoration: "none",
        transition: "color var(--duration-fast)",
        whiteSpace: "nowrap",
        ...style
      }
    }, item.label);
  }

  // Collapses low-priority items under "More ▾" when the row can't fit (viewport < 1160px)
  function MoreMenu({
    items,
    onClick
  }) {
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        display: "inline-flex"
      },
      onMouseEnter: () => {
        setHover(true);
        setOpen(true);
      },
      onMouseLeave: () => {
        setHover(false);
        setOpen(false);
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        setOpen(o => !o);
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        fontWeight: 500,
        color: hover ? "var(--color-teal-600)" : "var(--color-navy-900)",
        textDecoration: "none",
        whiteSpace: "nowrap",
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, "More", /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        paddingTop: 12,
        zIndex: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--border-subtle)",
        padding: "10px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, items.map(item => /*#__PURE__*/React.createElement(NavLink, {
      key: item.key,
      item: item,
      onClick: k => {
        setOpen(false);
        onClick(k);
      }
    })))));
  }
  function Header({
    page,
    onNav
  }) {
    const [w, setW] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1440);
    React.useEffect(() => {
      const onResize = () => setW(window.innerWidth);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
    const compact = w < 1160;
    const primary = compact ? NAV_ITEMS.slice(0, 3) : NAV_ITEMS;
    const overflow = compact ? NAV_ITEMS.slice(3) : [];
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        height: 78,
        display: "flex",
        alignItems: "center",
        gap: compact ? 22 : 36
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav("home");
      },
      style: {
        display: "flex",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/adoutreach-logo.png",
      alt: "AdOutreach",
      style: {
        height: compact ? 34 : 38
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: compact ? 20 : 26,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minWidth: 0
      }
    }, primary.map(item => /*#__PURE__*/React.createElement(NavLink, {
      key: item.key,
      item: item,
      active: page === item.key,
      onClick: onNav
    })), overflow.length > 0 && /*#__PURE__*/React.createElement(MoreMenu, {
      items: overflow,
      onClick: onNav
    })), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onNav("apply"),
      style: {
        flex: "none"
      }
    }, "Apply Now")));
  }
  return Header;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
window.AOHeroInit = DS => {
  const {
    Button,
    IconButton
  } = DS;
  const ROTATING = ["Converts", "Captivates", "Connects"];
  function Hero({
    onWatch,
    onApply
  }) {
    const [idx, setIdx] = React.useState(0);
    const [visible, setVisible] = React.useState(true);
    React.useEffect(() => {
      const t = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIdx(i => (i + 1) % ROTATING.length);
          setVisible(true);
        }, 260);
      }, 2600);
      return () => clearInterval(t);
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Hero",
      style: {
        background: "var(--gradient-navy)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "88px var(--container-pad) 96px",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 26,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 56,
        fontWeight: "var(--font-weight-extrabold)",
        lineHeight: 1.12,
        letterSpacing: "var(--letter-spacing-display)",
        color: "#fff"
      }
    }, "Create Value-Driven Video Marketing That", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(10px)",
        transition: "opacity 260ms var(--ease-out), transform 260ms var(--ease-out)",
        minWidth: 320
      }
    }, ROTATING[idx])), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-body)",
        fontSize: 20,
        lineHeight: 1.55,
        color: "var(--text-inverse-muted)",
        maxWidth: 560
      }
    }, "AdOutreach: The #1 Authority For Attracting Clients Through YouTube Ads & Video Marketing"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 22,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onApply
    }, "Apply Now"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "gradient",
      size: "md",
      "aria-label": "Watch video",
      onClick: onWatch
    }, /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M8 5.14v14l11-7-11-7Z"
    }))), /*#__PURE__*/React.createElement("span", {
      onClick: onWatch,
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "var(--letter-spacing-button)",
        textTransform: "uppercase",
        color: "#fff",
        cursor: "pointer"
      }
    }, "Watch Video")))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        justifySelf: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: "-22px -22px auto auto",
        width: 190,
        height: 190,
        background: "var(--gradient-brand)",
        opacity: 0.35,
        filter: "blur(70px)",
        borderRadius: "50%"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/aleric-heck.jpg",
      alt: "Aleric Heck, Founder & CEO of AdOutreach",
      style: {
        width: 380,
        height: 440,
        objectFit: "cover",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)",
        position: "relative",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: -26,
        bottom: 28,
        background: "rgba(255,255,255,0.97)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        padding: "14px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 17,
        color: "var(--color-navy-900)"
      }
    }, "Aleric Heck"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, "Founder & CEO \xB7 585k+ YouTube subscribers")))));
  }
  return Hero;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
window.AOHomeSectionsInit = DS => {
  const {
    SectionHeading,
    LogoStrip,
    Button,
    Card
  } = DS;
  const PRESS = ["ClickFunnels", "Inc.", "Venture", "Yahoo!", "SmallBiz", "Tech Times", "Under 30", "Social Media Today", "MarTech", "Forbes"];
  const CLIENTS = ["WarriorBabe", "ClickFunnels", "Closers.io", "Closing Babes", "Conway", "Attract", "Proctor Gallagher", "Tuft & Needle"];
  function FeaturedIn() {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Featured In",
      style: {
        background: "var(--surface-page)",
        padding: "56px 0 48px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement(LogoStrip, {
      label: "We've Been Featured In",
      items: PRESS
    })));
  }
  function MasterSection() {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Master Your Video Marketing",
      style: {
        background: "var(--surface-subtle)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 64,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-label": "Video placeholder",
      style: {
        aspectRatio: "16 / 10",
        borderRadius: "var(--radius-xl)",
        background: "var(--gradient-navy)",
        boxShadow: "var(--shadow-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/adoutreach-mark.png",
      alt: "",
      style: {
        height: 92,
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 16,
        right: 20,
        fontFamily: "var(--font-body)",
        fontSize: 12,
        color: "rgba(255,255,255,0.55)"
      }
    }, "Placeholder \u2014 site shows a laptop mockup with YouTube Ads dashboard")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      align: "left",
      title: "Master Your Video Marketing",
      accent: "Video Marketing"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16.5,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "Acquiring high-quality leads and converting them into clients is becoming more and more challenging by the day. Rising ad costs, ever increasing competition, and constantly changing platform algorithms are holding you back from consistently and reliably growing your business."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16.5,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "As the undisputed industry leaders for YouTube Ads and Video Marketing, we've cracked the code on leveraging the power of video to ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)"
      }
    }, "connect"), " deeply with your audience, ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)"
      }
    }, "captivate"), " them with valuable content, and ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)"
      }
    }, "convert"), " them into buyers."))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "80px auto 0",
        padding: "0 var(--container-pad)"
      }
    }, /*#__PURE__*/React.createElement(LogoStrip, {
      label: "Companies We Worked With",
      items: CLIENTS
    })));
  }
  function TrackRecord({
    onApply
  }) {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Track Record + CTA",
      style: {
        background: "var(--surface-page)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 44,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      title: "A Proven Track Record of Client Success",
      accent: "Client Success",
      sub: "After working with thousands of entrepreneurs & business owners \u2014 whether you want to reduce your ad costs, 10x your return on ad spend, or exponentially grow your revenue\u2026 our innovative strategies and unmatched support will empower you to reach your goals."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        width: "100%"
      }
    }, [["8-Figures", "generated from YouTube Ads for our clients"], ["Multiple 9-Figures", "collective client revenue worldwide"], ["60th", "fastest growing company in America — INC 5000"]].map(([k, t]) => /*#__PURE__*/React.createElement(Card, {
      key: k,
      padding: 26,
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 30,
        letterSpacing: "-0.02em",
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)",
        marginTop: 6,
        lineHeight: 1.55
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        borderRadius: "var(--radius-xl)",
        padding: "52px 56px",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: 40,
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        color: "#fff",
        fontSize: 27,
        fontWeight: 700,
        lineHeight: 1.35,
        letterSpacing: "-0.01em",
        maxWidth: 640
      }
    }, "Ready to take your video marketing to the next level? Book a ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Video Discovery Call"), " with one of our Specialists today!"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onApply,
      style: {
        flex: "none"
      }
    }, "Schedule Your Call Now"))));
  }
  function BioSection({
    onAbout
  }) {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Aleric Bio",
      style: {
        background: "var(--surface-subtle)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: 64,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/photos/aleric-heck.jpg",
      alt: "Aleric Heck",
      style: {
        width: "100%",
        aspectRatio: "4 / 4.6",
        objectFit: "cover",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-lg)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 40,
        letterSpacing: "-0.02em",
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Meet Aleric Heck"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.7
      }
    }, "Over 15 years ago Aleric got his start on YouTube by building AppFind which became the largest app review channel on the platform with over 585k+ subscribers. Through building his channel he discovered the power of YouTube Ads and began running highly profitable campaigns for a variety of big-name companies honing his craft."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: 1.7
      }
    }, "AdOutreach has already helped thousands of companies around the world collectively generate ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-heading)"
      }
    }, "multiple 9 figures in revenue"), " and in doing so Aleric has built his own 8-figure company, earned the coveted ClickFunnels 2CommaClub-X award, and led AdOutreach to become the 60th fastest growing company in America featured in the INC 5000."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onAbout,
      style: {
        marginTop: 8
      }
    }, "Read My Story"))));
  }
  return {
    FeaturedIn,
    MasterSection,
    TrackRecord,
    BioSection
  };
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections2.jsx
try { (() => {
window.AOHomeSections2Init = DS => {
  const {
    SectionHeading,
    TestimonialCard,
    ProgramCard,
    Badge,
    Button,
    Card
  } = DS;
  const TESTIMONIALS = [{
    headline: "Maxed Out Seats in Coaching Program",
    quote: "I've been really impressed with the integrity and heart of your whole team. I feel more confident that we can fill up any open seats in our 1:1 coaching program because of YouTube ads",
    name: "Leslie"
  }, {
    headline: "“My First $100k Month!”",
    quote: "I finally hit that $100k month that I couldn't get with Facebook ads. Finally got there on the back of YouTube ads and with Aleric & his team's help.",
    name: "Ahmad Munawar"
  }, {
    headline: "“I've made $115,000 in just two months!”",
    quote: "I recorded a 2-minute video & sent it to my own list with the high-ticket offer that the AdOutreach team helped me create. I've made $115,000 in just two months!",
    name: "Donna Partow"
  }, {
    headline: "“My Calendar Is Maxed Out!”",
    quote: "My calendar is maxed out from the amount of leads! Spent $3,000 in ads and on-boarded about $30,000 worth of clients in just one month.",
    name: "Lee Blue"
  }, {
    headline: "On track for $100,000 this month",
    quote: "Within a month of the program, we hit $10,000. Within 90 days, we hit $30-40,000/month. We're not even 6 months into the Inner Circle and we're at pace for a $100,000 month.",
    name: "Jonathan Kirchner"
  }, {
    headline: "Expert easy to follow guidance.",
    quote: "This is absolutely the most effective done-with-you marketing training program I've ever seen. Hundreds of clicks on my YouTube ads within the first few weeks!",
    name: "Seth William Nowak"
  }];
  const BLOG = [{
    title: "How To Turn Instagram Into A Client Machine",
    teaser: "You know I love talking about YouTube Ads… but today I want to take you onto a different platform that's quietly become one of the…"
  }, {
    title: "One Link. A Thumbnail and Viral Clips.",
    teaser: "What's the #1 thing that determines whether your YouTube video actually gets watched? Most people say \u201cthe content.\u201d But after 16+ years…"
  }, {
    title: "ChatGPT Ads are Here – And I Just Got Early Access!",
    teaser: "I'll be honest with you – I haven't been this excited about an ad platform in years. ChatGPT Ads are officially here. I just got…"
  }];
  const PROGRAMS = [{
    title: "Foundations",
    description: "A Comprehensive Program That Builds Rock-Solid Foundations for Coaches and Consultants. Follow a Proven 5-Step System to Craft An Irresistible Offer, Establish Your Authority, and Grow Your Online Business."
  }, {
    title: "Video Ads Launchpad",
    description: "The YouTube Ads Program That Will Help You Master Client Acquisition At Scale. A Unique Hybrid Model Of Done With You & Done For You Support To Launching & Scaling Highly Profitable YouTube Ads and Funnels."
  }, {
    title: "Ad Astra Mastermind",
    description: "Where Industry Leaders Meet To Scale Their Companies Past 7-8 Figures. Install Our Scaling, Operations, Hiring, & Marketing SOPs That Landed Us As The 60th Fastest Growing Company In America."
  }];
  function Testimonials() {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Success Stories",
      style: {
        background: "var(--surface-page)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 44,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Here Are Just a Few",
      title: "Thousands of Client Success Stories\u2026",
      accent: "Client Success"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        width: "100%"
      }
    }, TESTIMONIALS.map(t => /*#__PURE__*/React.createElement(TestimonialCard, {
      key: t.name,
      headline: t.headline,
      quote: t.quote,
      name: t.name
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "More Success Stories For People Like You")));
  }
  function BlogSection() {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Blog",
      style: {
        background: "var(--surface-subtle)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 44,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      title: "Value-Packed Blog Posts",
      accent: "Value-Packed",
      sub: "from Aleric & the AdOutreach Team"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        width: "100%"
      }
    }, BLOG.map((b, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      interactive: true,
      padding: 0,
      style: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "16 / 9",
        background: "var(--gradient-navy)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/adoutreach-mark.png",
      alt: "",
      style: {
        height: 52,
        opacity: 0.85
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 14,
        left: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "gradient",
      size: "sm"
    }, "Featured"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontSize: 17.5,
        fontWeight: 700,
        lineHeight: 1.35,
        color: "var(--text-heading)"
      }
    }, b.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        flex: 1
      }
    }, b.teaser), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--color-teal-600)"
      }
    }, "Read Post \u2192"))))), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Read More Top Content")));
  }
  function PodcastSection() {
    const platforms = ["Spotify", "Apple Podcasts", "Amazon Music", "Castbox", "YouTube Music", "iHeartRadio"];
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Podcast",
      style: {
        background: "var(--surface-dark)",
        padding: "88px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: "var(--letter-spacing-overline)",
        textTransform: "uppercase",
        color: "var(--color-lime-500)"
      }
    }, "The Podcast"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 44,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        color: "#fff"
      }
    }, "Marketing", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Minds")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17,
        lineHeight: 1.6,
        color: "var(--text-inverse-muted)"
      }
    }, "Top Marketing & Business Strategies from Today's Leading Experts. Listen on your favorite platform:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10
      }
    }, platforms.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        padding: "9px 18px",
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--border-on-dark)",
        background: "var(--surface-dark-raised)",
        color: "#fff",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: 600
      }
    }, p)))), /*#__PURE__*/React.createElement("div", {
      style: {
        justifySelf: "center",
        width: 320,
        aspectRatio: "1",
        borderRadius: "var(--radius-xl)",
        background: "var(--gradient-brand)",
        boxShadow: "var(--shadow-glow-teal)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "64",
      height: "64",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 10v2a7 7 0 0 1-14 0v-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      x2: "12",
      y1: "19",
      y2: "22"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 21,
        color: "#fff"
      }
    }, "with Aleric Heck"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        color: "rgba(255,255,255,0.8)"
      }
    }, "Podcast cover placeholder"))));
  }
  function ProgramsSection({
    onApply
  }) {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Programs",
      style: {
        background: "var(--surface-page)",
        padding: "96px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 44,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Leverage the",
      title: "Power of Video Marketing to Scale Your Business",
      accent: "Scale Your Business"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 20,
        width: "100%"
      }
    }, PROGRAMS.map(p => /*#__PURE__*/React.createElement(ProgramCard, {
      key: p.title,
      title: p.title,
      description: p.description,
      ctaLabel: "Learn More",
      onCta: onApply
    }))), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: onApply
    }, "Explore Ways We Can Work Together")));
  }
  function FinalCTA({
    onApply
  }) {
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Home / Final CTA",
      style: {
        background: "var(--gradient-navy)",
        padding: "104px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 820,
        margin: "0 auto",
        padding: "0 var(--container-pad)",
        display: "flex",
        flexDirection: "column",
        gap: 26,
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/adoutreach-mark.png",
      alt: "",
      style: {
        height: 64
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 44,
        fontWeight: 800,
        letterSpacing: "-0.02em",
        lineHeight: 1.15,
        color: "#fff"
      }
    }, "Ready to Scale Your Business with", " ", /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--gradient-brand)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
      }
    }, "Video Marketing?")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 17.5,
        lineHeight: 1.6,
        color: "var(--text-inverse-muted)",
        maxWidth: 620
      }
    }, "Book your free Video Discovery Call with one of our specialists to map out your custom YouTube Ads and Client Acquisition Roadmap"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onApply
    }, "Book Your Call Now")));
  }
  return {
    Testimonials,
    BlogSection,
    PodcastSection,
    ProgramsSection,
    FinalCTA
  };
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections2.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
