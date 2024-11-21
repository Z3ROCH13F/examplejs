module.exports = function (select) {
  const list = {
    bold: "st",
    b: "st",
    italic: "st",
    i: "st",
    underline: "st",
    ul: "st",
    blink: "st",
    color: "color",
    background: "bg",
    bg: "bg",
    dim: "st",
    dimb: "st",
    inverse: "st",
    hide: "st",
    strike: "st",
    styleText: "st",
    st: "st",
  };
  return list[typeof select === "string" ? select?.toLowerCase() : undefined];
};